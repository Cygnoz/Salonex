
import Mail from "../../assets/icons/Mail";


import CustomerProfile from "../../assets/images/CustomerProfile.png"
import CustomerStatusHistory from "./CustomerStatusHistory";




const Overview = () => {
  return (
 
      <div className="p-4 grid grid-cols-12 gap-6 grid-rows-2 h-[90vh] hide-scrollbar overflow-y-scroll">
        <div className="col-span-3">
          <div className=" ">
            {/* First Card */}
            <div className="h-[333px] bg-white rounded-2xl shadow-lg p-6 space-y-4 text-[#303F58]">
              <div className="flex items-start space-x-4">
                <img src={CustomerProfile} className="w-12 h-12" alt="Profile" />
                <div>
                  <h2 className="text-[16px] font-bold text-[#0B1320]">Divya Kumar</h2>
                  <p className="text-[12px] font-semibold text-[#495160] mb-1">rachelg@gmail.com</p>
                  <p className="text-[12px] font-semibold text-[#495160]">+91 85451 25468</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail />
                  <p className="text-[12px] font-semibold text-[#4C5259]">View Consultation</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                  <Mail />
                  <p className="text-[14px] font-semibold text-[#495160]">Birthday</p>
                </div>
                <p className="text-sm font-semibold text-gray-500">11-05-1985</p>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-[14px] font-semibold text-[#495160]">Address</h3>
                <p className="text-[12px] font-semibold text-[#495160]">
                  245/B6, California, Lever Street, America
                  <br />
                  Zip: 65847
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="h-[170px] mt-4 bg-white rounded-xl shadow-lg p-5">
              <div className="space-y-4">
                {["Total Appointments", "Completed Appointments", "Cancelled Appointments"].map(
                  (label, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Mail />
                      <p className="text-sm">{label}</p>
                      <p className="text-sm text-gray-500">07</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
           <div className="space-y-6  ">
        {/* Upcoming Appointment */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-[#303F58] mb-4">Upcoming Appointment</h2>
          <div className="flex items-center justify-between bg-pink-100 rounded-lg p-4">
            {/* Date Section */}
            <div className="flex flex-col items-center text-center w-20">
              <p className="text-xl font-bold text-[#303F58]">25</p>
              <p className="text-sm text-gray-500">April, 2024</p>
              <p className="text-sm text-gray-500">12:21 AM</p>
            </div>

            {/* Divider */}
            <div className="h-full w-[1px] bg-gray-300 mx-4"></div>

            {/* Treatment Section */}
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <h3 className="text-sm font-medium text-[#303F58]">Dandruff Treatment</h3>
            </div>

            {/* Divider */}
            <div className="h-full w-[1px] bg-gray-300 mx-4"></div>

            {/* Staff Section */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <p className="text-sm font-medium text-[#303F58]">Gladis</p>
            </div>
          </div>

          {/* Previous Appointments */}
          <h2 className="text-lg font-bold text-[#303F58] mb-6 mt-6">Previous Appointments</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-pink-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex flex-col items-center text-center w-20">
                  <p className="text-xl font-bold text-[#303F58]">25</p>
                  <p className="text-sm text-gray-500">April, 2024</p>
                  <p className="text-sm text-gray-500">12:21 AM</p>
                </div>

                <div className="h-full w-[1px] bg-gray-300 mx-4"></div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <h3 className="text-sm font-medium text-[#303F58]">Dandruff Treatment</h3>
                </div>

                <div className="h-full w-[1px] bg-gray-300 mx-4"></div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <p className="text-sm font-medium text-[#303F58]">Gladis</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      


        </div>
         <div className="col-span-3">
        {/* Profile Card */}
        <div className="relative z-10 mb-4">
          <div className="h-[170px] bg-gradient-to-b from-[#D86490] to-[#9C5378] rounded-2xl p-4 flex flex-col justify-between shadow-md">
            <div className="flex items-center">
              <img
                src={CustomerProfile}
                alt="Profile"
                className="w-12 h-12 object-cover rounded-full mr-3"
              />
              <div>
                <p className="text-white text-lg font-semibold">Divya Kumar</p>
                <p className="text-gray-200 text-sm">8756347856</p>
              </div>
            </div>

            <div className="text-start">
              <h3 className="text-gray-200 text-sm font-medium">Card Number</h3>
              <h1 className="text-white text-xl font-bold tracking-widest">P M C &nbsp; 2 4 5 8 &nbsp; 1 2 4 6</h1>
            </div>
          </div>
        </div>
        <CustomerStatusHistory />

      </div>
      </div>




     






  );
};

export default Overview;
