import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const Booking = lazy(() => import("../pages/Booking")); 
 
const BookingRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Booking/>}></Route>
      </Routes>
    );
  };
  

export default BookingRoutes;
