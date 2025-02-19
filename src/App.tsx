import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import AccountsRoutes from "./Routes/AccountsRoutes";
import BookingRoutes from "./Routes/BookingRoutes";
import CustomerRoutes from "./Routes/CustomerRoutes";
import ExpenseRoutes from "./Routes/ExpenseRoutes";
import InternalOrderRoutes from "./Routes/InternalOrderRoutes";
import ItemMasterRoutes from "./Routes/ItemMasterRoutes";
import OrderRoutes from "./Routes/OrderRoutes";
import PurchaseRoutes from "./Routes/PurchaseRoutes";
import ReportRoutes from "./Routes/ReportRoutes";
import SaleRoutes from "./Routes/SaleRoutes";
import SettingsRoutes from "./Routes/SettingsRoutes";
import SupplierRoutes from "./Routes/SpplierRoutes";
import StaffRoutes from "./Routes/StaffRoutes";
import NoAccess from "./context/NoAccess";
import Login from "./pages/Login/Login";
import Otp from "./pages/Login/Otp";
import PosReceipt from "./pages/pos/PosReceipt";

const Layout = lazy(() => import("./layout/Layout"));
const Dashboard = lazy(() => import("./pages/DashBoard"));
const Pos = lazy(() => import("./pages/pos/Pos"));
const SettingsLayout = lazy(() => import("./layout/Settings/SettingsLayout"));

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-[9999]">
      <div className="relative w-16 h-16">
        {/* Spinning Loader */}
        <div className="absolute inset-0 border-[7px]  border-[#C96E76] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

// Wrapper component to handle authentication
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  
  const isAuthenticated = sessionStorage.getItem("authToken");

  if (!isAuthenticated) {
    return <NoAccess />;
  }

  return children;
};

const App: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/otp",
      element: <Otp />,
    },
    {
      path: "/pos",
      element: <Pos />,
    },
    {
      path: "/posreceipt",
      element: <PosReceipt />,
    },
    {
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/purchase/*", element: <PurchaseRoutes /> },
        { path: "/customer/*", element: <CustomerRoutes /> },
        { path: "/itemhub/*", element: <ItemMasterRoutes /> },
        { path: "/order/*", element: <OrderRoutes /> },
        { path: "/internalOrder/*", element: <InternalOrderRoutes /> },
        { path: "/sales/*", element: <SaleRoutes /> },
        { path: "/accountant/*", element: <AccountsRoutes /> },
        { path: "/expense/*", element: <ExpenseRoutes /> },
        { path: "/supplier/*", element: <SupplierRoutes /> },
        { path: "/staffs/*", element: <StaffRoutes /> },
        { path: "/report/*", element: <ReportRoutes /> },
        { path: "/booking/*", element: <BookingRoutes /> },
      ],
    },
    {
      element: <ProtectedRoute><SettingsLayout /></ProtectedRoute>,
      children: [
        { path: "/settings/*", element: <SettingsRoutes /> },
      ],
    },
    {
      path: "*",
      element: <NoAccess />,
    },
  ]);

  return (
    <Suspense fallback={<LoadingOverlay/>}>
      {routes}
    </Suspense>
  );
};

export default App;