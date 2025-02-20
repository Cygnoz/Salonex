import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/ApiContext.tsx";
import { OrganizationProvider } from "./context/OrgContext.tsx";
import { ResponseProvider } from "./context/ResponseContext.tsx";
import ContextShare from "./context/ContextShare.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ContextShare>
        <OrganizationProvider>
          
          <ApiProvider>
          <ResponseProvider>
            <App />
            </ResponseProvider>
            </ApiProvider>
          
        </OrganizationProvider>
      </ContextShare>
    </BrowserRouter>
  </StrictMode>
);
