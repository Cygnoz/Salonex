import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import useApi from "../Hooks/useApi";
import { endpoints} from "../Services/apiEndpoints";



interface OrganizationContextType {
  organizationData:any |null;
  refreshOrg: () => void;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined);

export const OrganizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [organizationData, setOrganizationData] = useState<any | null>(null);
  const { request: getOneOrganization } = useApi('get', 5004);

  // Fetch organization data and store it in sessionStorage
  const fetchOrganization = async () => {
    try {
      const url = `${endpoints.GET_ONE_ORGANIZATION}`;
      const { response, error } = await getOneOrganization(url);

      if (!error && response) {
        setOrganizationData(response.data);
        sessionStorage.setItem('organization', JSON.stringify(response.data));
        console.log(response.data, 'Organization data fetched');
      }
    } catch (error) {
      console.log('Error in fetching Organization', error);
    }
  };

  // Load organization data from sessionStorage on mount
  useEffect(() => {
    const savedOrganization = sessionStorage.getItem('organization');
    if (savedOrganization) {
      setOrganizationData(JSON.parse(savedOrganization));
    } else {
      fetchOrganization();
    }
  }, []);

  // Refresh context function
  const  refreshOrg = () => {
    sessionStorage.removeItem('organization');
    fetchOrganization();
  };

  return (
    <OrganizationContext.Provider value={{ organizationData,  refreshOrg }}>
      {children}
    </OrganizationContext.Provider>
  );
};

// Custom hook to use the OrganizationContext
export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error('useOrganization must be used within an OrganizationProvider');
  }
  return context;
};
