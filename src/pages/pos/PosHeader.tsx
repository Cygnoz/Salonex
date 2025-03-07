import backHomeIcon from "../../assets/Images/Frame 630214.png.png";
import calenderIcon from "../../assets/Images/Frame 630162 (1).png";
import timeIcon from "../../assets/Images/Frame 630162.png";
import SelectCustomerModal from "./SelectedCustomerModal";
import { useLocation, useNavigate } from "react-router-dom";
import CreateCustomerModal from "./addCustomerPos/CreateCustomerModal";
// import { Toaster } from "react-hot-toast";

type Props = {
  onSelectCustomer: (customer: any) => void; 
};

function PosHeader({onSelectCustomer }: Props) {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(today);
  const formattedTime = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleSelectedCustomer = (customer: any) => {
    onSelectCustomer(customer); 
  };
  const Navigate = useNavigate();
  const location = useLocation();
  
  const handleGoBack = () => {
    if (location.state?.from === "/landing") {
      Navigate("/landing"); 
    } else {
      Navigate("/sales/invoice"); 
    }
  };
  return (
    <div className="px-5 py-3 flex items-center justify-between mt-2">
      <div className="flex items-center">
        <div className="rounded-[22px] px-2 py-1 gap-1 flex justify-center items-center cursor-pointer bg-white w-28" onClick={handleGoBack}>
          <img src={backHomeIcon} className="w-6" alt="Back to Home Icon" />
          <span className="text-[#2C3E50] text-[9px] font-semibold">
            Back to Home
          </span>
        </div>
        <p className="text-[#2C3E50] text-lg font-bold ms-3">POS</p>
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="bg-white rounded px-4 py-2 flex items-center gap-2.5">
          <img src={timeIcon} className="w-6" alt="Time Icon" />
          <span className="text-[#2C3E50] text-[10px] font-bold">{formattedDate}</span>
        </div>
        <div className="bg-white rounded px-4 py-2 flex items-center gap-2.5">
          <img src={calenderIcon} className="w-6" alt="Calendar Icon" />
          <span className="text-[#2C3E50] text-[10px] font-bold">{formattedTime}</span>
        </div>
        <SelectCustomerModal onButtonClick={handleSelectedCustomer} />
        <CreateCustomerModal/>   
      </div>
      {/* <Toaster reverseOrder={false} /> */}
    </div>
  );
}

export default PosHeader;
