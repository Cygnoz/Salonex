import axios from "axios";

const BASE_URLS: Record<number, string> = {
  5001: import.meta.env.VITE_REACT_APP_ACCOUNTS,
  5002: import.meta.env.VITE_REACT_APP_CUSTOMERS,
  5004: import.meta.env.VITE_REACT_APP_ORGANIZATION,
  5005: import.meta.env.VITE_REACT_APP_PURCHASE,
  5006: import.meta.env.VITE_REACT_APP_REPORT,
  5008: import.meta.env.VITE_REACT_APP_STAFF,
  5009: import.meta.env.VITE_REACT_APP_SUPPLIER,
};

// Create axios instance based on provided config
const createInstance = (
  port: number,
  contentType: string,
  useAuth: boolean
) => {
  const baseURL = BASE_URLS[port];
  let headers: Record<string, string> = {
    "Content-Type": contentType,
    Accept: "application/json",
  };

  if (useAuth) {
    const authToken: string | null = sessionStorage.getItem("authToken");
    if (authToken) {
      headers = { ...headers, Authorization: `${authToken}` }; // Attach token if available
    }
  }

  return axios.create({
    baseURL,
    headers,
  });
};

// Return the base axios instances
const baseInstance = (port: number) =>
  createInstance(port, "application/json", false);

const authInstance = (port: number) =>
  createInstance(port, "application/json", true);

const MauthInstance = (port: number) =>
  createInstance(port, "multipart/form-data", true);

export default { baseInstance, authInstance, MauthInstance };
