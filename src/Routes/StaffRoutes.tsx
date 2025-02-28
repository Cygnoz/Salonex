import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AddStaff from "../Modules/Staff/AddStaff";
import ViewStaff from "../Modules/Staff/View Staff/ViewStaff";
const Staffs = lazy(() => import("../pages/Staffs")); 
const NewStaff = lazy(() => import("../Modules/Staff/AddStaff")); 
const WorkerCommission = lazy(() => import("../Modules/Staff/WorkerCommission/WorkerComHome")); 

const StaffRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Staffs/>}></Route>
        <Route path="/addstaff" element={<NewStaff/>}></Route>
         <Route path="/workercommission" element={<WorkerCommission/>}></Route>
        <Route path="/editstaff/:id" element={<AddStaff/>}></Route>
        <Route path="/viewstaff" element={<ViewStaff/>}></Route> 

      </Routes>
    );
  };
  

export default StaffRoutes;
