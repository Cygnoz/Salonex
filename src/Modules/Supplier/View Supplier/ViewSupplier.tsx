import { Link, useParams } from "react-router-dom";
import ChevronLeft from "../../../assets/icons/ChevronLeft";
import {    useEffect, useState } from "react";
import History from "../../../assets/icons/History";
import PaymentHistory from "./Payment History/PaymentHistory";
import PurchaseHistory from "./Purchase History/PurchaseHistory";
import supplierImg from "../../../assets/images/Rectangle 5454.png";
import User from "../../../assets/icons/User";
import Phone from "../../../assets/icons/Phone";
import Mail from "../../../assets/icons/Mail";
import Home from "../../../assets/icons/Home";
import Gst from "../../../assets/icons/Gst";
import HandIcon from "../../../assets/icons/HnadIcon";
import BoxIcon from "../../../assets/icons/BoxIcon";
import Button from "../../../Components/Button";
import Pen from "../../../assets/icons/Pen";
import AddPaymentModal from "./AddPaymentModal";
//import { SupplierDetailsContext, SupplierResponseContext } from "../../../context/ContextShare";
import useApi from "../../../Hooks/useApi";
import { SupplierData } from "../../../Interface/Supplier";
import { endpoints } from "../../../Services/apiEndpoints";
//import Supplier from "../../../pages/Supplier";
//import { SupplierDetailsContext, SupplierResponseContext } from "../../../context/ContextShare";
// import { SupplierResponseContext } from "../../../context/ContextShare";

type Props = {};

// interface Status {
//   status: string;
// }

function ViewSupplier({}: Props) {
 // const {setSupplierDetails} = useContext(SupplierDetailsContext)!;
  const { request: getOneSupplier } = useApi("get", 5009);
  const { id } = useParams<{ id: string }>();
  const [supplier, setSupplier] = useState<SupplierData | null>(null);
  //const { supplierResponse } = useContext(SupplierResponseContext)!;
 // const [statusData, setStatusData] = useState<Status>({ status: "" });
  console.log("idd",id);

  const getOneSupplierData = async () => {
    if (!id) return; // Ensure id is present before making the API call
  
    try {
      const url = `${endpoints.GET_ONE_SUPPLIER}/${id}`;
      console.log("Fetching supplier from:", url);
  
      const body = { organizationId: "INDORG0001" };
      const { response, error } = await getOneSupplier(url, body);
  
      if (error) {
        console.error("API error:", error);
        return;
      }
  
      if (response) {
        console.log("Supplier data:", response.data);
        setSupplier(response.data);
      }
    } catch (error) {
      console.error("Error fetching supplier:", error);
    }
  };
  
  useEffect(() => {
    console.log("useEffect id:", id);
    if (id) {
      getOneSupplierData();
    }
  }, [id]);
  

    
    
  const [activeTab, setActiveTab] = useState<string>("paymentHistory");

  const handleTabSwitch = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="flex gap-5 items-center">
        <Link to="/supplier">
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFFFFF]"
          >
            <ChevronLeft color="#0F172A" />
          </div>
        </Link>
        <p className="text-[#2C3E50] text-xl font-bold">Supplier Dashboard</p>
        <div className="flex ml-auto gap-4">
          <Button variant="secondary">
            <Pen color={"#C96E76"} />
            Edit
          </Button>{" "}
          <AddPaymentModal />{" "}
        </div>
      </div>
      <div className="  h-auto rounded-md text-textColor  px-2 mt-3 p-2">
        <div className="h-[135px] rounded-[16px] bg-[#C96E76] p-6 w-full text-sm text-start flex items- justify-center gap-20 text-[#FFFFFF]">
          <img src={supplierImg} alt="" className="w-[120px] h-[90px]" />
          <div className="space-y-2">
            <div className="flex items-center  justify-start gap-1 font-semibold">
              {" "}
              <User size="14" color="#FFFFFF" />
              <p>{supplier?.supplierDisplayName || 'N/A'}</p>
            </div>
            <div className="flex justify-start items-center gap-1 ">
              {" "}
              <Phone size={14} color="#FFFFFF" />
              <span>
                <p>{supplier?.workPhone || 'N/A'}</p>
              </span>
            </div>
            <div className="flex justify-start items-center gap-1">
              {" "}
              <Mail size={14} color="#FFFFFF" />
              <span>
                <p>{supplier?.supplierEmail || 'N/A'}</p>
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-start gap-1 font-semibold">
              {" "}
              <Home /> {supplier?.billingAddressStreet1 || 'N/A'}
            </div>
            <div className=" ">
              {" "}
              <p>{supplier?.billingAddressStreet2 || 'N/A'}</p>
            </div>
            <div className="">
              {" "}
              <p>{supplier?.shippingAddressStreet1 || 'N/A'}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex  items-center justify-start gap-1 font-semibold">
              {" "}
              <Gst /> GST
            </div>
            <div className="flex items-center justify-center gap-1">
              {" "}
              <p>{supplier?.gstinUin  || 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="bg-[#A1585E] w-[256px] h-[71px] rounded-xl flex items-center justify-center gap-2 ">
              <HandIcon />
              <div className="space-y-1">
                <p className="font-bold">Credit Balance</p>
                <p className="text-xs">₹ {supplier?.creditOpeningBalance  || 'N/A'}</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="flex gap-2 px-5 mt-3 items-center bg-white p-2 w-full rounded-xl">
          <div
            onClick={() => handleTabSwitch("paymentHistory")}
            className={`text-[14px] font-semibold px-8 ${
              activeTab === "paymentHistory"
                ? "bg-[#cc6c74] text-white"
                : "text-[#495160]"
            }  py-2 justify-center flex gap-2 items-center rounded-[8px] cursor-pointer`}
          >
            <History
              color={`${activeTab === "paymentHistory" ? "white" : "#495160"}`}
            />{" "}
            Payment History
          </div>
          <div
            onClick={() => handleTabSwitch("purchaseHistory")}
            className={`text-[14px] font-semibold px-8 ${
              activeTab === "purchaseHistory"
                ? "bg-[#cc6c74] text-white"
                : "text-[#495160]"
            }  py-2 justify-center flex gap-2 items-center rounded-[8px] cursor-pointer`}
          >
            <BoxIcon
              color={`${activeTab === "purchaseHistory" ? "white" : "#495160"}`}
            />{" "}
            Purchase History
          </div>
        </div>
        <div className=" py-3">
          {activeTab === "paymentHistory" && <PaymentHistory />}
          {activeTab === "purchaseHistory" && <PurchaseHistory />}
        </div>
      </div>
    </div>
  );
}

export default ViewSupplier;
