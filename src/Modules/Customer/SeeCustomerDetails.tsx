import CardSkeleton from "../../Components/CardsSKeleton"
import orderDoneImage from "../../assets/images/OrderDoneImage.png"
import TotalSalesImage from "../../assets/images/TotalSalesImage.png"
import TotalRevenueOrderImage from "../../assets/images/TotalRevenueOrderImage.png"
import TotalRevenueSalesImage from "../../assets/images/TotalRevenueSalesImage.png"
import BgCard from "../../assets/images/BgCard.jpg"
import CustomerProfile from "../../assets/images/CustomerProfile.png"
import Info from "../../assets/icons/Info"
import SquereScissorIcon from "../../assets/icons/SquereScissorIcon"
import History from "../../assets/icons/History"
import LineChart from "../../assets/icons/LineChart"
import NewsPaperIcon from "../../assets/icons/NewsPaperIcon"
import { useState } from "react"
import Overview from "./Overview"
import ItemMeasurement from "./Booking"
import OrderHistory from "./OrderHistory"
import ViewPayment from "./ViewPayment"
import { Link } from "react-router-dom"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import SalesHistory from "./SalesHistory"
interface CardData {
  icon: string;
  title: string;
  count: string;
}

const SeeCustomerDetails = () => {

  const [selectedTab, setSelectedTab] = useState("Overview");











  const sideBarHead = [
    { icon: <Info />, title: "Overview", onclick: () => setSelectedTab("Overview") },
    { icon: <SquereScissorIcon />, title: "Booking", onclick: () => setSelectedTab("Booking") },
    { icon: <LineChart />, title: "Wallet Transaction", onclick: () => setSelectedTab("Wallet Transaction") },
    { icon: <History />, title: "Payment History", onclick: () => setSelectedTab("Payment History") },
    { icon: <NewsPaperIcon />, title: "Referal Bonus History", onclick: () => setSelectedTab("Referal Bonus History") },

  ];

  
  return (
    <div>
      <div className="flex">
        <Link to={"/customer"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] object-cover  flex items-center justify-center bg-backButton"
          >
            <ChevronLeft color="#0F172A"  />
          </div>
        </Link>
        <p className="text-[#0B1320] text-[16px] mx-2 mt-1.5  font-bold">Customer Overview</p>

      </div>


      

      <div className="gap-6 bg-white p-2 my-2 rounded-2xl">
        <div className="flex max-w-full">
          {sideBarHead.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg w-full text-center my-2 px-3 text-sm py-1.5 cursor-pointer ${selectedTab === item.title ? "bg-[#F7E7CE]" : "bg-white"
                }`}
              onClick={item.onclick}
            >
              <div className="flex items-center justify-center space-x-2 py-.05"> {/* Flexbox to align horizontally */}
                {/* Render the icon */}
                <span className="text-xl">{item.icon}</span> {/* Adjust icon size if needed */}
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      
      <div className="col-span-9">
          {/* Pass the required props to the Overview component */}
          {selectedTab === "Overview" && (
            <Overview
            // customerData={customerData}
            // statusData={statusData}
            // customerId={customerId}
            // handleStatusSubmit={handleStatusSubmit}
            />
          )}
          {selectedTab === "Booking" && (
            <ItemMeasurement />
          )}
          {selectedTab === "Order History" && (
            <OrderHistory />
          )}
          {selectedTab === "View Payment" && (
            <ViewPayment />
          )}
           {selectedTab === "Sales History" && (
            <SalesHistory/>
          )}
        </div>





    </div>
  )
}

export default SeeCustomerDetails