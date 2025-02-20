import CalendarDays from '../../assets/icons/CalendarDays';
import Eye from '../../assets/icons/Eye';
import PencilLine from '../../assets/icons/PencilLine';
import Pipette from '../../assets/icons/Pipette';
import Trash from '../../assets/icons/Trash';
import CustomerProfile from "../../assets/images/CustomerProfile.png";



const Booking = () => {






  return (
   
      <div className=" grid grid-cols-12 gap-5 my-5  min-h-screen">
        <div className=" col-span-3 ">
          {/* Upcoming Booking Section */}
          <div className="bg-white w-[283px] h-[350px]  rounded-lg shadow-md p-6">
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

          <div className='flex items-center justify-center w-[283px]   my-5 rounded-lg text-[#495160] px-12 font-bold   h-[70px] bg-[#EED2D5]'>
            Total Bookings  <span className='ms-10'>07</span>
          </div>
          </div>


          {/* Booking List Section */}
          <div className="col-span-9 ">
            <div className="flex items-center  justify-between mb-4">
              <input
                type="text"
                placeholder="Search phone or customers"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-[#FFFFFF] text-white rounded-lg">
                  {/* December 11 <FaCalendarAlt className="ml-2" /> */}
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                  {/* Week <FaCalendarAlt className="ml-2" /> */}
                </button>
                <button className="p-2 bg-pink-500 text-white rounded-lg">
                  {/* <FaCalendarAlt /> */}
                </button>
              </div>
            </div>

            {/* Booking Rows */}
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#FFFFFF] rounded-lg p-4"
                >
                  {/* Date Section */}
                  <div className="flex flex-col items-center w-16 border bg-[#F4F4F4]">
                  <p className="text-[12px] font-semibold text-[#6EA26D]">Wed</p>
                    <p className="text-[24px] font-bold text-[#6EA26D]">24</p>
                  </div>

                  {/* Staff Section */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full text-[#000000] text-[12px] font-bold p-1">SA</div>
                    <div>
                      <p className="text-xs text-[#6E7072]">Staff</p>
                      <p className="font-semibold text-xs text-[#37393A]">Aman Rasheed</p>

                    </div>
                  </div>

                  {/* Service Section */}
                  <div>
                    <p className="text-xs text-[#6E7072]">Service</p>
                    <p className="font-semibold text-xs text-[#37393A]">Dandruff Treatment</p>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold text-xs text-[#37393A]">5/30/14</p>
                  </div>
                   
                  {/* Time Section */}
                  <div>
                    <p className="text-xs text-[#6E7072]">Time</p>
                    <p className="font-semibold text-xs text-[#37393A]">07:38 AM</p>
                  </div>

                  {/* Status Section */}
                  <div>
                    <p
                      className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${index === 0 ? "bg-yellow-500" : "bg-blue-500"
                        }`}
                    >
                      {index === 0 ? "Pending" : "Completed"}
                    </p>
                  </div>

                  {/* Actions Section */}
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                     <Trash/>
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                    <PencilLine color='#6E7072'/>
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                      <Eye color='#6E7072'/>
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
