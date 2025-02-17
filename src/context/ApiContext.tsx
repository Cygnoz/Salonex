import React, { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/apiEndpoints";

type ApiContextType = {
  settingsAdditionalDatas?: any;
  countryData?: any;
  currencyData?: any;
  refreshContext: (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean }) => Promise<void>;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {

  // API hooks
  const { request: getAdditionalData } = useApi("get", 5004);
  const { request: getCountryData } = useApi("get", 5004);
  const { request: getCurrencyData } = useApi("get", 5004);

  // State variables
  const [settingsAdditionalDatas, setSettingsAdditionalDatas] = useState<any>(null);
  const [countryData, setCountryData] = useState<any>(null);
  const [currencyData, setCurrencyData] = useState<any>(null);

  // Use a ref to store previous fetched data to prevent unnecessary API calls
  const prevDataRef = useRef<any>(null);

  // Fetching Data Function
  const fetchData = useCallback(async (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean; }) => {
    try {
      const fetchPromises = [];

      if (!options || options.settingsAdditionalDatas) {
        fetchPromises.push(getAdditionalData(endpoints.GET_ADDITIONAL_DATA).then(response => ({ settingsAdditionalDatas: response?.response?.data[0] || null })));
      }

      if (!options || options.countryData) {
        fetchPromises.push(getCountryData(endpoints.GET_COUNTRY_DATA).then(response => ({ countryData: response?.response?.data[0]?.countries || null })));
      }

      if (!options || options.currencyData) {
        fetchPromises.push(getCurrencyData(endpoints.GET_CURRENCY_LIST).then(response => ({ currencyData: response?.response?.data || null })));
      }

      const results = await Promise.all(fetchPromises);

      const newData: any = results.reduce((acc, result) => ({ ...acc, ...result }), {});

      // Compare new data with previous data to avoid unnecessary state updates
      if (JSON.stringify(prevDataRef.current) !== JSON.stringify(newData)) {
        if (newData.settingsAdditionalDatas) setSettingsAdditionalDatas(newData.settingsAdditionalDatas);
        if (newData.countryData) setCountryData(newData.countryData);
        if (newData.currencyData) setCurrencyData(newData.currencyData);

        prevDataRef.current = newData;
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [getAdditionalData, getCountryData, getCurrencyData]);

  const refreshContext = useCallback(async (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean; }) => {
    try {
      await fetchData(options);
    } catch (error) {
      console.error("Error refreshing context data:", error);
    }
  }, [fetchData]);

  useEffect(() => {
    fetchData(); // Initial data fetch
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    settingsAdditionalDatas,
    countryData,
    currencyData,
    refreshContext
  }), [settingsAdditionalDatas, countryData, currencyData, refreshContext]);

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
