import React, { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/apiEndpoints";
import { InputCurrencyData } from "../Interface/InputCurrencyData";

type ApiContextType = {
  settingsAdditionalDatas?: any;
  countryData?: any;
  currencyData?: InputCurrencyData | any;
  settingsData?: any;
  allTaxData?: any;
  loading?:boolean;
  refreshContext: (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean; settingsData?: boolean; allTaxData?: boolean }) => Promise<void>;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  // API hooks
  const { request: getAdditionalData } = useApi("get", 5004);
  const { request: getCountryData } = useApi("get", 5004);
  const { request: getCurrencyData } = useApi("get", 5004);
  const { request: getSettingsData } = useApi("get", 5004);
  const { request: getAllTaxData } = useApi("get", 5004);
  // State variables
  const [settingsAdditionalDatas, setSettingsAdditionalDatas] = useState<any>(null);
  const [countryData, setCountryData] = useState<any>(null);
  const [currencyData, setCurrencyData] = useState<any>(null);
  const [settingsData, setSettingsData] = useState<any>(null);
  const [allTaxData, setAllTaxData] = useState<any>(null);
  const prevDataRef = useRef<any>(null);

  // Fetching Data Function
  const fetchData = useCallback(async (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean; settingsData?: boolean; allTaxData?: boolean }) => {
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
      if (!options || options.settingsData) {
        fetchPromises.push(getSettingsData(endpoints.GET_SETTINGS_DATA).then(response => ({ settingsData: response?.response?.data || null })));
      }
      if (!options || options.allTaxData) {
        fetchPromises.push(getAllTaxData(endpoints.GET_ALL_TAX).then(response => ({ allTaxData: response?.response?.data || null })));
      }
      

      const results = await Promise.all(fetchPromises);
      const newData: any = results.reduce((acc, result) => ({ ...acc, ...result }), {});

      if (JSON.stringify(prevDataRef.current) !== JSON.stringify(newData)) {
        if (newData.settingsAdditionalDatas) setSettingsAdditionalDatas(newData.settingsAdditionalDatas);
        if (newData.countryData) setCountryData(newData.countryData);
        if (newData.currencyData) setCurrencyData(newData.currencyData);
        if (newData.settingsData) setSettingsData(newData.settingsData);
        if (newData.allTaxData) setAllTaxData(newData.allTaxData);
        prevDataRef.current = newData;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [getAdditionalData, getCountryData, getCurrencyData, getSettingsData, getAllTaxData]);

  const refreshContext = useCallback(async (options?: { settingsAdditionalDatas?: boolean; countryData?: boolean; currencyData?: boolean; settingsData?: boolean; allTaxData?: boolean }) => {
    try {
      await fetchData(options);
    } catch (error) {
      console.error("Error refreshing context data:", error);
    }
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  

  const contextValue = useMemo(() => ({
    settingsAdditionalDatas,
    countryData,
    currencyData,
    settingsData,
    allTaxData,
    refreshContext
  }), [settingsAdditionalDatas, settingsData, countryData, currencyData, allTaxData, refreshContext]);

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};



export const useRegularApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
