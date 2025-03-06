import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProductsHome from "../Modules/ItemHub/Products/ProductsHome";
import ProductsAdd from "../Modules/ItemHub/Products/ProductsAdd";
import ServicesHome from "../Modules/ItemHub/Services/ServicesHome";
import ServicesAdd from "../Modules/ItemHub/Services/ServicesAdd";
import PackageHome from "../Modules/ItemHub/Packages/PackageHome";
import PackageAddForm from "../Modules/ItemHub/Packages/PackageAddForm";
import MembershipHome from "../Modules/ItemHub/Membership/MembershipHome";
import AddMembership from "../Modules/ItemHub/Membership/AddMembership";

const ItemHub = lazy(() => import("../pages/ItemHub")); 
 
const ItemMasterRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ItemHub/>}></Route>
        <Route path="/products-home" element={<ProductsHome/>}></Route>
        <Route path="/products-add" element={<ProductsAdd/>}></Route>
        <Route path="/services-home" element={<ServicesHome/>}></Route>
        <Route path="/services-add" element={<ServicesAdd/>}></Route>
        <Route path="/package-home" element={<PackageHome/>}></Route>
        <Route path="/package-add" element={<PackageAddForm/>}></Route>
        <Route path="/membership-home" element={<MembershipHome/>}></Route>
        <Route path="/membership-add" element={<AddMembership/>}></Route>
      </Routes>
    );
  };
  

export default ItemMasterRoutes;
