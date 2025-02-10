import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NewReceipt from "../Modules/Sales/Receipt/NewReceipt";
import SalesView from "../Modules/Sales/commonComponents/salesView/SalesView";

// const Sale = lazy(() => import("../pages/Sales")); 
const Inovice = lazy(() => import("../Modules/Sales/Invoice/Inovice")); 
const Receipt = lazy(() => import("../Modules/Sales/Receipt/Receipt")); 
const CreditNote = lazy(() => import("../Modules/Sales/CreditNote/CreditNote"));
const SalesReturn = lazy(() => import("../Modules/Sales/SalesReturn/SalesReturn"));
const NewInvoice = lazy(() => import("../Modules/Sales/Invoice/NewInvoice"));
const NewCreditNote = lazy(() => import("../Modules/Sales/CreditNote/NewCreditNote"));


 
const SaleRoutes = () => {
    return (
      <Routes>
        {/* <Route path="/" element={<Sale/>}></Route> */}
        <Route path="/invoice" element={<Inovice/>}></Route>
        <Route path="/receipt" element={<Receipt/>}></Route>
        <Route path="/credit-note" element={<CreditNote/>}></Route>
        <Route path="/salesreturn" element={<SalesReturn/>}></Route>
        <Route path="/invoice/new" element={<NewInvoice/>}></Route>
        <Route path="/Receipt/new" element={<NewReceipt/>}></Route>

        <Route path="/credit-note/new" element={<NewCreditNote/>}></Route>

        <Route path="/invoice/view/id" element={<SalesView page="invoice"/>}></Route>
        <Route path="/credit-note/view/id" element={<SalesView page="creditNote"/>}></Route>
      </Routes>
    );
  };
  

export default SaleRoutes;
