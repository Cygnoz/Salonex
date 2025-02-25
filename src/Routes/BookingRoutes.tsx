import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


// const Booking = lazy(() => import("../pages/Booking")); 
const  BookingHome =lazy(()=> import('../Modules/Booking/BookingHome'))
const NewBooking = lazy(()=>import('../Modules/Booking/NewBookingForm'))
 
const BookingRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<BookingHome/>}></Route>
        {/* <Route path="/view-booking" element={<Booking/>}></Route> */}
        <Route path="/add-booking" element={<NewBooking />}></Route>


      </Routes>
    );
  };
  

export default BookingRoutes;
