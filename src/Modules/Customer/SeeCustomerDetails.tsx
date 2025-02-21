
import Info from "../../assets/icons/Info"
import SquereScissorIcon from "../../assets/icons/SquereScissorIcon"
import History from "../../assets/icons/History"
import LineChart from "../../assets/icons/LineChart"
import NewsPaperIcon from "../../assets/icons/NewsPaperIcon"
import { useEffect, useState } from "react"
import Overview from "./Overview"
import ItemMeasurement from "./Booking"
import { Link, useParams } from "react-router-dom"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import PaymentHistory from "./PaymentHistory"
import WalletTransaction from "./WalletTransaction"
import ReferalBonus from "./ReferalBonus"
import { endpoints } from "../../Services/apiEndpoints"
import toast from "react-hot-toast"
import useApi from "../../Hooks/useApi"
import Button from "../../Components/Button"
import PencilLine from "../../assets/icons/PencilLine"
import NewCustomer from "./NewCustomer"


const SeeCustomerDetails = () => {

  const [selectedTab, setSelectedTab] = useState("Overview");




  const [customerData, setCustomerdata] = useState<any>([]);
  const { request: customer } = useApi("get", 5002);

  const { id } = useParams();

  const getOne = async () => {
    try {
      const url = `${endpoints.GET_ONE_CUSTOMER}/${id}`;
      const { response, error } = await customer(url);
      if (!error && response) {
        console.log(customerData);
        
        setCustomerdata(response.data);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error("Error in fetching one item data.");
      console.error("Error in fetching one item data", error);
    }
  };

  useEffect(() => {
    getOne();
  }, []);








  const sideBarHead = [
    { icon: <Info />, title: "Overview", onclick: () => setSelectedTab("Overview") },
    { icon: <SquereScissorIcon />, title: "Booking", onclick: () => setSelectedTab("Booking") },
    { icon: <LineChart />, title: "Wallet Transaction", onclick: () => setSelectedTab("Wallet Transaction") },
    { icon: <History />, title: "Payment History", onclick: () => setSelectedTab("Payment History") },
    { icon: <NewsPaperIcon />, title: "Referal Bonus History", onclick: () => setSelectedTab("Referal Bonus History") },

  ];

  
  return (
    <div>
      <div className="flex ">
        <div>
        <Link to={"/customer"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] object-cover  flex items-center justify-center bg-backButton"
          >
            <ChevronLeft color="#0F172A"  />
          </div>
        </Link>
       
       </div>
      </div>
      <div className="flex justify-between">
      <div>
      <p className="text-[#0B1320] text-[16px] mx-2 mt-1.5  font-bold">Customer Overview</p>
        </div>

        <div onClick={() => <NewCustomer page="edit"  />}>
  <Button>
    <PencilLine /> Edit
  </Button>
</div>

      </div>


      

      <div className="gap-6 bg-white p-2 my-3 rounded-2xl">
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
          customerData={customerData}
            // statusData={statusData}
            // customerId={customerId}
            // handleStatusSubmit={handleStatusSubmit}
            />
          )}
          {selectedTab === "Booking" && (
            <ItemMeasurement />
          )}
          {selectedTab === "Wallet Transaction" && (
            <WalletTransaction/>
          )}
          {selectedTab === "Payment History" && (
            <PaymentHistory/>
          )}
           {selectedTab === "Referal Bonus History" && (
            <ReferalBonus/>
          )}
        </div>





    </div>
  )
}

export default SeeCustomerDetails