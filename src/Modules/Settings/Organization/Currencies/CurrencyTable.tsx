import {  useEffect, useState } from "react";
import toast from "react-hot-toast";
import useApi from "../../../../Hooks/useApi";
import Trash from "../../../../assets/icons/Trash";
import CurrencyModal from "./CurrencyModal";
import { Link } from "react-router-dom";
import { useRegularApi } from "../../../../context/ApiContext";
import { endpoints } from "../../../../Services/apiEndpoints";
import ConfirmModal from "../../../../Components/modal/ConfirmModal";
import Modal from "../../../../Components/modal/Modal";

const CurrencyTable = () => {
  const {refreshContext,currencyData}=useRegularApi()
  const { request: deleteCurrencyRequest } = useApi("delete", 5004);
  const [isModal,setIsModal]=useState(false)
  const [id,setId]=useState('')
  const handleModalToggle=(id?:any)=>{
    setIsModal((prev)=>!prev)
    setId(id)
  }

  const tableHeaders = ["Name", "Symbol", "Actions"];

  

  const handleDelete = async () => {
    try {
      const url = `${endpoints.DELETE_CURRENCIES}/${id}`;
      const { response, error } = await deleteCurrencyRequest(url);
      if (!error && response) {
        toast.success(response.data.message);
        refreshContext({currencyData:true})
      } else {
        console.error(`Error deleting currency: ${error.message}`);
      }
    } catch (error) {
      console.error("Error in delete operation", error);
    }
  };

  useEffect(() => {
    refreshContext({currencyData:true})
  }, []);
  console.log(currencyData);
  return (
    <div className="space-y-4 pt-2">
      <table className="min-w-full bg-white mb-5">
        <thead className="text-[12px] w-full text-center text-dropdownText sticky bg-red-500">
          <tr style={{ backgroundColor: "#F9F7F0", height: "44px" }}>
            {tableHeaders.map((heading, index) => (
              <th
                className="py-2 px-4 font-medium border-b border-tableBorder"
                key={index}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-xs">
          {currencyData.map((item: any, index: number) => (
            <tr className="relative" key={index}>
              {/* Currency Name & Code */}
              <td className="py-4 px-4  border-y border-tableBorder">
                <p>
                  {item.currencyCode}-{item.currencyName}{" "}
                  {item.baseCurrency && (
                    <span className="px-2 py-1 bg-[#6FC7A2] text-white">
                      Base Currency
                    </span>
                  )}
                </p>
              </td>

              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.currencySymbol}
              </td>

              <td className=" py-2.5 px-4 pb-5 border-b border-tableBorder flex items-center justify-center w-full ">
                <div className="flex items-center w-full -mb-1 mt-1 gap-2 justify-center">
                  <div className="h-[26px]">
                  <Link to="/settings/organization/currencies/exchange-rate">
                        <div  className="text-text_tertiary text-xs border px-[10px] py-1 rounded-lg">
                          <p>View Exchange Rate</p>
                        </div>
                  </Link>
                  </div>

                  <div >
                    <CurrencyModal editItem={item} />
                  </div>

                  {item.baseCurrency === false ? (
                    <div className="cursor-pointer" onClick={()=>handleModalToggle(item?._id)}>
                      <Trash color={"#EA1E4F"} size={18} />
                    </div>
                  ) : (
                    <>
                      {" "}
                      <Trash color={"transparant"} />
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={isModal} onClose={handleModalToggle}className="w-[30%]" >
        <ConfirmModal prompt="Are you sure want to delete this currency"  action={handleDelete} onClose={handleModalToggle}/>
      </Modal>
    </div>
  );
};

export default CurrencyTable;
