import { useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import Button from "../../../../Components/Button";
import { VATDetails } from "../../../../Interface/VATDetails";
import { useForm } from "react-hook-form";
import { useRegularApi } from "../../../../context/ApiContext";
import useApi from "../../../../Hooks/useApi";
import { endpoints } from "../../../../Services/apiEndpoints";
import toast from "react-hot-toast";

type Props = {}


function VatSettings({ }: Props) {
  const [isVatRegistered, setIsVatRegistered] = useState(true);
  const { request: createVatSettings } = useApi("post", 5004);
  const {allTaxData,refreshContext}=useRegularApi()
  const handleToggle = () => {
    setIsVatRegistered(!isVatRegistered);
  };

 
   

  const {
        register,
        handleSubmit,
        setValue,
        watch,
      } = useForm<VATDetails>({
         defaultValues:  {
          taxType: "VAT",
        }
      });
       const setFormValues = (data: VATDetails) => {
            Object.keys(data).forEach((key) => {
              setValue(key as keyof VATDetails, data[key as keyof VATDetails]);
            });
          };
          
          useEffect(() => {
            refreshContext({ allTaxData: true });
          
            if (allTaxData) {
              
              const body: VATDetails = {
                taxType:allTaxData?.taxType,
                tinNumber: allTaxData?.tinNumber||"" ,
                vatBusinessLegalName: allTaxData?.vatBusinessLegalName||"" ,
                vatBusinessTradeName: allTaxData?.vatBusinessTradeName|| "",
                vatNumber: allTaxData?.vatNumber|| "",
                vatRegisteredDate: allTaxData?.vatRegisteredDate || "",
              };
          
              setFormValues(body);
            }
          }, [allTaxData]);

          const onSubmit = async (data: VATDetails) => {
            console.log("data",data);
            
            try {
              
              const { response, error } = await createVatSettings(endpoints.ADD_NEW_TAX,data);
        
              if (response && !error) {
                toast.success(response.data.message || "Success!");
                refreshContext({allTaxData:true})
              } else {
                toast.error(error.response?.data?.message || "An error occurred.");
              }
            } catch (err) {
              console.error("Unexpected error:", err);
            }
          };

  return (
    <div>
      <p className="text-[#303F58] font-bold">VAT Settings</p>

      <div className="p-6 mt-4 rounded-lg bg-[#F7ECD9]">
        <div className="flex justify-between items-center">
          <p className=" text-[#303F58] text-sm">Is your business registered for VAT?</p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={isVatRegistered} onChange={handleToggle} />
              <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${isVatRegistered ? 'bg-[#97998E]' : 'bg-[#DCDEE2]'}`}></div>
              <div className={`dot absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isVatRegistered ? 'transform translate-x-full left-2' : 'left-1'}`}></div>
            </div>
            <div className="ml-3 text-[#495160]  text-sm">{isVatRegistered ? 'No' : 'Yes'}</div>
          </label>
        </div>
      </div>

      <div>
        {isVatRegistered && (
          <div className="p-6 rounded-lg bg-white mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div  className="flex justify-between gap-4">
              <div className="text-[#4B5C79] text-sm w-[50%]">
                <div>
                  <label htmlFor="vatNumber">VAT Number</label>
                  <div className="mt-1.5">
                  <Input
            required
             placeholder="Enter tax name" 
             value={watch("vatNumber")}
             {...register("vatNumber")}
             />
                    </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="vatBusinessTradeName">Business Trade Name</label>
                  <div className="mt-1.5">
                  <Input
            required
             placeholder="Enter tax name"
             value={watch("vatBusinessTradeName")} 
             {...register("vatBusinessTradeName")}
             />
                    </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="tinNumber">TIN Number</label>
                  <div className="mt-1.5">
                  <Input
            required
            value={watch("tinNumber")}
             placeholder="Enter tax name" 
             {...register("tinNumber")}
             />
                    </div>
                </div>
              </div>

              <div className="text-[#4B5C79] text-sm w-[50%]">
                <div>
                  <label htmlFor="vatBusinessLegalName">Business Legal Name</label>
                  <div className="mt-1.5">
                  <Input
            required
            value={watch("vatBusinessLegalName")}
             placeholder="Enter tax name" 
             {...register("vatBusinessLegalName")}
             />
                    </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="vatRegisteredDate" className="block mb-1">
                    VAT Registered On
                  </label>
                  <div className="mt-1.5">
                  <Input
                  type="date"
            required
            value={watch("vatRegisteredDate")}
             placeholder="Enter tax name" 
             {...register("vatRegisteredDate")}
             />
                    </div>
                </div>
               
              </div>
              </div>
            
            <div className="flex justify-end mt-6">
                  <Button  size="sm" className="text-sm pl-10 pr-10" type="submit">
                    Save
                  </Button>
                </div>
                </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default VatSettings