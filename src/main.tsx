import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext.tsx";
import { OrganizationProvider } from "./context/OrgContext.tsx";
import { ResponseProvider } from "./context/ResponseContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <OrganizationProvider>
          <ResponseProvider>
            <App />
          </ResponseProvider>
        </OrganizationProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
