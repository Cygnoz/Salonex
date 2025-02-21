import CustomerProfile from "../../assets/images/CustomerProfile.png"
import CalendarDays from '../../assets/icons/CalendarDays';
import Trash from '../../assets/icons/Trash';
import PencilLine from '../../assets/icons/PencilLine';
import Eye from '../../assets/icons/Eye';
import ClockIcon from "../../assets/icons/ClockIcon";
import Pipette from "../../assets/icons/Pipette";



const Booking = () => {






  return (

    <div className=" grid grid-cols-12 gap-5 my-5  min-h-screen">
   <div className=" col-span-3 ">
          {/* Upcoming Booking Section */}
          <div className="bg-white w-[320px] h-[350px]  rounded-lg shadow-md p-6">
            {/* Header Section */}
            <h2 className="text-[16px] font-semibold mb-4 text-[#495160]">Upcoming Booking</h2>
 
            {/* Staff Section */}
            <div className="flex items-center mb-4">
              <img src={CustomerProfile} className="w-10 h-10 rounded-full" alt="Staff" />
              <div className="ms-3">
                <p className="font-semibold text-[14px] text-[#000000]">Gladis George</p>
                <p className="text-xs font-medium text-[#818894]">Hair Specialist</p>
              </div>
              <div className="ms-auto">
                {/* Placeholder for Staff Icon */}
                {/* <span className="text-xl text-[#818894]">[Staff Icon]</span> */}
              </div>
            </div>
 
            {/* Treatment Details */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <h4 className="text-[#495160] font-semibold text-[14px]">Dandruff Treatment</h4>
                <div className="ms-auto">
                  {/* Placeholder for Treatment Icon */}
                  <span className="text-xl text-[#818894]"><Pipette color='#65242A'/></span>
                </div>
              </div>
              <p className="text-xs text-[#818894] font-medium">
                The customer's dandruff treatment appointment has been successfully
                scheduled.
              </p>
            </div>
 
            {/* Date and Time */}
            <div className="flex items-center justify-between bg-[#F3F8FF] p-3 rounded-md ">
              <div>
                <p className="text-[14px] font-semibold text-[#495160] flex">Date and Time<span className="text-xl text-[#818894] ms-20 "><CalendarDays/></span>
                </p>
                <p className="text-sm text-gray-700 flex whitespace-nowrap">12, April 2024 <span><p className="text-sm text-gray-700 whitespace-nowrap ms-3">09:00 AM-10:00 AM</p>
                </span></p>
              </div>
             
            </div>
          </div>
 
          <div className='flex items-center justify-center w-[320px]   my-5 rounded-lg text-[#495160] px-12 font-bold   h-[70px] bg-[#EED2D5]'>
            Total Bookings  <span className='ms-10'>07</span>
          </div>
          </div>

      {/* Booking List Section */}
      <div className="col-span-9">
        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search phone or customers"
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg">December 11</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">Week</button>
            <button className="p-2 bg-pink-500 text-white rounded-lg">
              {/* Calendar Icon */}
            </button>
          </div>
        </div>

        {/* Booking Rows */}
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 shadow">
              {/* Date Section */}
              <div className="flex flex-col items-center w-16 bg-gray-100 rounded-lg p-2">
                <p className="text-sm font-semibold text-green-600">Wed</p>
                <p className="text-xl font-bold text-green-600">24</p>
              </div>

              {/* Mechanic Section */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#C7DDFF] rounded-full flex items-center justify-center text-white font-bold">
                 <p className="text-[#000000] text-xs"> AR</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Staff</p>
                  <p className="font-semibold text-xs text-gray-900">Ronald J</p>
                </div>
              </div>

              {/* Service Section */}
              <div className="flex items-center space-x-1 space-y-3">
                {/* <CarIcon color="#6E7072"/> */}
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">Service</p>
                  <p className="font-semibold text-xs text-gray-900">Dandruff Treatement</p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-center space-x-1 space-y-3">
                <CalendarDays  color="#6E7072"/>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-semibold text-xs text-gray-900">5/30/14</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 space-y-3">
                <ClockIcon/>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">Time</p>
                  <p className="font-semibold text-xs text-gray-900">07.35 AM</p>
                </div>
              </div>

             

              {/* Status Badge */}
               {/* Service Section */}
               <div className="flex items-center space-x-1 space-y-3">
                {/* <CarIcon color="#6E7072"/> */}
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-semibold border bg-[#F6C396] rounded-md p-1 text-xs text-gray-900">Pending</p>
                </div>
              </div>

              {/* Actions Section */}
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-200">
                  <Eye color="#6E7072" size={16} />
                </button>
                <button className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-200">
                  <PencilLine color="#6E7072" size={16} />
                </button>
                <button className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-200">
                  <Trash color="#6E7072" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default Booking;