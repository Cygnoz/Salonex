import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CommonPage from "../Modules/Report/CommonPage";
import BalanceSheet from "../Modules/Report/BalanceSheet";
import DayBook from "../Modules/Report/DayBook";
import TrialBalance from "../Modules/Report/TrialBalance";

const Report = lazy(() => import("../pages/Report")); 

const ReportRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Report/>}></Route>
        <Route path="/profitandloss"  element={<CommonPage page="profitandloss"/>}></Route>
        <Route path="/tradingaccount"  element={<CommonPage page="trading"/>}></Route>
        <Route path="/balancesheet"  element={<BalanceSheet/>}></Route>
        <Route path="/daybook"  element={<DayBook/>}></Route>
        <Route path="/trilabalance"  element={<TrialBalance/>}></Route>

      </Routes>
    );
  };
  

export default ReportRoutes;
