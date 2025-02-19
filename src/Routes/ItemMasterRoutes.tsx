import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ProductsHome from "../Modules/ItemHub/Products/ProductsHome";
import ProductsAdd from "../Modules/ItemHub/Products/ProductsAdd";

const ItemHub = lazy(() => import("../pages/ItemHub")); 
 
const ItemMasterRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ItemHub/>}></Route>
        <Route path="/products-home" element={<ProductsHome/>}></Route>
        <Route path="/products-add" element={<ProductsAdd/>}></Route>
      
      </Routes>
    );
  };
  

export default ItemMasterRoutes;
