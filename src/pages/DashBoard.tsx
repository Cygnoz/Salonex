import { useEffect, useState } from "react";
import ArrowUpRightIcon from "../assets/icons/ArrowUpRightIcon";
import BookingIcon from "../assets/icons/BookingIcon";
import Calender from "../assets/icons/Calender";
import ChevronRight from "../assets/icons/ChevronRight";
import ClockIcon from "../assets/icons/ClockIcon";
import CustomerIcon from "../assets/icons/CustomerIcon";
import NewCustomerIcon from "../assets/icons/NewCustomerIcon";
import RupeesIcon from "../assets/icons/RupeesIcon";
import faceBgImage from "../assets/images/Rectangle 2.png";
import Button from "../Components/Button";
import DateInput from "../Components/DateInput";
import SearchBarPos from "../Components/SearchBarPos";
import { useRegularApi } from "../context/ApiContext";

const cards = [
  {
    title: "Today’s Income",
    value: "₹1,00,000",
    percentage: "8.2%",
    increase: true,
    icon: <RupeesIcon />,
    textColor: "text-[#3FA55C]",
  },
  {
    title: "Today’s Booking",
    value: "656",
    percentage: null,
    increase: false,
    icon: <BookingIcon />,
    textColor: "text-[#2C3E50]",
  },
  {
    title: "Total Customers",
    value: "889",
    percentage: null,
    increase: false,
    icon: <CustomerIcon />,
    textColor: "text-[#2C3E50]",
  },
  {
    title: "New Customers (Last Month)",
    value: "55",
    percentage: "5.2%",
    increase: true,
    icon: <NewCustomerIcon />,
    textColor: "text-[#3FA55C]",
  },
];
const tabs = ["Upcoming", "Pending", "Past"];

const customers = [
  {
    id: 1,
    name: "Fousiya Hameed",
    date: "10/6/13",
    time: "10:41 pm",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Cody Fisher",
    date: "8/30/14",
    time: "11:23 pm",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Aman Rasheed",
    date: "5/30/14",
    time: "07:38 am",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    name: "Darrell Steward",
    date: "9/18/16",
    time: "08:20 pm",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];


function DashBoard() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState("Upcoming");
  return (
    <div>
      <h1 className="text-lg font-bold text-[#2C3E50]">Dashboard</h1>
      <p className="text-[#495160] mt-2 text-xs">
        Add and manage your services, products & package
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-4 gap-4 mt-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white py-5 px-4 rounded-2xl flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="text-[#2C3E50] font-semibold text-xs">{card.title}</p>
              <p className="flex items-center text-[#2C3E50] font-bold text-lg mt-2">
                {card.value}
                {card.percentage && (
                  <span className={`ms-4 ${card.textColor} font-semibold text-base flex items-center gap-1`}>
                    {card.percentage} {card.increase && <ArrowUpRightIcon />}
                  </span>
                )}
              </p>
            </div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[#2C3E50] font-bold text-base">Recent Booking Status</p>
      <div className="mt-4 flex items-center justify-between gap-4">
        {/* Tabs Section */}
        <div className="flex bg-white py-2 px-3 gap-4 rounded-[46px] w-[33%]">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`rounded-3xl w-full text-center p-2 cursor-pointer ${activeTab === tab
                ? "bg-[#D9E9FF] text-[#2C3E50] font-semibold"
                : "bg-[#F1F7FF] text-[#4C5259]"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              <p className="text-xs">{tab}</p>
            </div>
          ))}
        </div>
        <div className="w-[40%]">
          <SearchBarPos
            onSearchChange={setSearchValue}
            searchValue={searchValue}
            placeholder="Search phone or customers"
          />
        </div>
        <div className="w-[27%]">
          <DateInput className="bg-white border-0 h-[44px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white py-5 px-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={customer.image} alt={customer.name} className="w-10 rounded-full" />
              <div>
                <p className="text-[#495160] text-sm">Customer</p>
                <p className="font-semibold text-[#2C3E50] text-xs mt-1">{customer.name}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm items-center gap-1">
                <div className="flex items-center">
                  <Calender color="#818894" height={14} width={14} />
                  <span className="text-[#495160] ms-1 text-xs">Date</span></div>
                <p className="font-semibold text-[#2C3E50] text-xs mt-2">{customer.date}</p>
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm items-center gap-1">
                <div className="flex items-center">
                  <ClockIcon />
                  <span className="text-[#495160] ms-1 text-xs">Time</span></div>
                <p className="font-semibold text-[#2C3E50] text-xs mt-2">{customer.time}</p>
              </p>
            </div>
            <Button variant="secondary" className="text-xs font-semibold h-1">Details <ArrowUpRightIcon color="#C96E76" /></Button>
          </div>
        ))}
      </div>
      <div className="mt-3 mb-10 flex justify-end">
        <div className="relative h-80 w-[40%] rounded-2xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover"
            style={{ backgroundImage: `url(${faceBgImage})` }}
          />
          <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm bg-[#FFFFFF33] text-[#F7F7F7] flex items-center gap-2 px-3 py-1 rounded-full">
               <div className="bg-[#5FBF7A] h-2 w-2 rounded-full"/>  Live Webinar
              </span>
            </div>
            <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium w-[50%]">Personalized Beauty Treatments</h3>
            <p className="text-xs font-semibold bg-[#FFFFFF33] p-[10px] mt-1 me-5 rounded-full w-fit">
              20 Aug 24, 10 AM - 12 PM
            </p>
            </div>
          </div>
          <div className="absolute top-4 right-4 text-white/70 text-lg">
          <ChevronRight width="20" color="#FFFFFF"/>
          </div>
        </div>



      </div>
    </div>
  );
}

export default DashBoard;
