import CalendarDays from "../../assets/icons/CalendarDays";
import GiftIcon from "../../assets/icons/GiftIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import Mail from "../../assets/icons/Mail";
import NewsPaper from "../../assets/icons/NewsPaper";
import Phone from "../../assets/icons/Phone";
import Pipette from "../../assets/icons/Pipette";
import WalletIcon from "../../assets/icons/WalletIcon";


import CustomerProfile from "../../assets/images/CustomerProfile.png"
import CustomerStatusHistory from "./CustomerStatusHistory";

type Props={customerData?:any}

const Overview = ({customerData}:Props) => {
  return (

    <div className="p-4 grid grid-cols-12 gap-6 grid-rows-2 h-[100vh] hide-scrollbar overflow-y-scroll">
      <div className="col-span-3">
        <div className=" ">
          {/* First Card */}
          <div className="w-[330px] h-[333px]  bg-white rounded-2xl shadow-lg p-6 space-y-4 text-[#303F58]">
            <div className="flex items-start space-x-4">
              <img  src={
                  customerData.customerProfile
                    ? customerData.customerProfile
                    : CustomerProfile
                } className="w-12 h-12" alt="Profile" />
              <div>
                <h2 className="text-[16px] font-bold text-[#0B1320]"> {customerData.customerDisplayName || 'N/A'}</h2>
                <div className="flex items-center space-x-2">
                  <Mail color="#BF8295" />
                  <p className="text-[12px] font-semibold text-[#495160] mb-1">{customerData.email || 'N/A'}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone color="#BF8295" />
                  <p className="text-[12px] font-semibold text-[#495160]">{customerData.mobile || 'N/A'}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 ">
                <p  className=" object-cover bg-[#D9E9FF] rounded-[20px] p-2"><NewsPaper  /></p>
                <p className="text-[12px] font-semibold text-[#4C5259]">View Consultation</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-3">
                <Mail />
                <p className="text-[14px] font-semibold text-[#495160]">Birthday</p>
              </div>
              <p className="text-sm font-semibold text-gray-500">{customerData.dob || 'N/A'}</p>
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-[14px] ms-7 font-semibold text-[#495160]">Address</p>

              <div className="flex  space-x-2">
                <HomeIcon color="#495160" />

                <p className="text-[12px] font-semibold text-[#495160]">
                {customerData.customerAddress || 'N/A'}
                  <br />
                  Zip: 65847
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="h-[170px] w-[330px] mt-4 bg-white rounded-xl shadow-lg p-5">
            <div className="space-y-4 ">
              <div className="flex items-center space-x-3">
                <CalendarDays color="#495160" />
                <p className="text-sm text-[#495160] font-semibold">Total Appointments</p>
                <p className="text-md text-[#495160] font-semibold">07</p>
              </div>
              <div className="flex items-center space-x-3">
                <WalletIcon color="#495160" />
                <p className="text-sm text-[#495160] font-semibold whitespace-nowrap">Wallet Amount</p>
                <p className="text-md text-[#495160] font-semibold">07</p>
              </div>
              <div className="flex items-center space-x-3">
                <GiftIcon color="#495160" size={24} />
                <p className="text-sm text-[#495160] font-semibold">Cancelled Appointments</p>
                <p className="text-md text-[#495160] font-semibold">07</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="space-y-6  ">
          {/* Upcoming Appointment */}
          <div className="bg-white w-[741px]  rounded-xl shadow-lg p-6  hide-scrollbar overflow-y-scroll">
            <h2 className="text-lg font-bold text-[#303F58] mb-4">Upcoming Appointment</h2>
            <div className="flex items-center justify-between  w-[700px] h-[107px]  bg-[#FFEAF2] rounded-lg p-4">
              {/* Date Section */}
              <div className="flex flex-col items-center text-center w-20">
                <p className="text-xl font-bold text-[#303F58]">25</p>
                <p className="text-xs font-medium text-[#495160]">April, 2024</p>
                <p className="text-xs font-medium text-[#495160]">12:21 AM</p>
              </div>

              {/* Divider */}
              <div className="h-full w-[1px] bg-gray-400 mx-4"></div>

              {/* Treatment Section */}
              <div className="flex items-center space-x-2">
                <Pipette color="#495160" />
                <h3 className="text-sm font-medium text-[#303F58]">Dandruff Treatment</h3>
              </div>

              {/* Divider */}
              <div className="h-full w-[1px] bg-gray-400 mx-4"></div>

              {/* Staff Section */}
              <div className="flex items-center space-x-2">
                <img src={CustomerProfile} className="w-8 h-8" alt="Profile" />

                <p className="text-sm font-medium text-[#303F58]">Gladis</p><div>
                  
                </div>

              </div>
            </div>

            {/* Previous Appointments */}
            <h2 className="text-lg font-bold  text-[#303F58] mb-6 mt-6">Previous Appointments</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between  w-[700px] h-[107px]  bg-[#FFEAF2]  rounded-lg p-10 shadow-sm"
                >
                  <div className="flex flex-col items-center text-center w-20">
                    <p className="text-xl font-bold text-[#303F58]">25</p>
                    <p className="text-xs font-medium text-[#495160]">April, 2024</p>
                    <p className="text-xs font-medium text-[#495160]">12:21 AM</p>
                  </div>

                  <div className="h-full w-[1px] bg-gray-400 mx-4"></div>

                  <div className="flex items-center space-x-2">
                    <Pipette color="#495160" />
                    <h3 className="text-sm font-medium text-[#303F58]">Dandruff Treatment</h3>
                  </div>
                  <div className="h-full w-[1px] bg-gray-400 mx-4"></div>

                  <div className="flex items-center space-x-2">
                <img src={CustomerProfile} className="w-8 h-8" alt="Profile" />
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
          <div className="h-[170px] w-[340px] bg-gradient-to-b from-[#955A5F] to-[#DB828A] rounded-2xl p-4 flex flex-col justify-between shadow-md">
            <div className="flex items-center">
              <img
                src={CustomerProfile}
                alt="Profile"
                className="w-12 h-12 object-cover rounded-full mr-3"
              />
              <div>
                <p className="text-white text-lg font-semibold">{customerData.customerDisplayName || 'N/A'}</p>
                <p className="text-gray-200 text-sm">{customerData.mobile || 'N/A'}</p>
              </div>
            </div>

            <div className="text-start">
              <h3 className="text-gray-200 text-sm font-medium">Card Number</h3>
              <h1 className="text-white text-xl font-bold tracking-widest whitespace-nowrap">P M C &nbsp; 2 4 5 8 &nbsp; 1 2 4 6</h1>
            </div>
          </div>
        </div>
        <CustomerStatusHistory />

      </div>
    </div>











  );
};

export default Overview;