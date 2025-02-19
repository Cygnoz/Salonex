import { useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import Button from "../../../../Components/Button";
import { useForm } from "react-hook-form";
import { GstDetails } from "../../../../Interface/GSTDetails";
import { endpoints } from "../../../../Services/apiEdpoints";
import useApi from "../../../../Hooks/useApi";
import toast from "react-hot-toast";
import Checkbox from "../../../../Components/Form/Checkbox";
import { useRegularApi } from "../../../../context/ApiContext";
type Props = {}

function GstSettings({ }: Props) {
  const {allTaxData,refreshContext}=useRegularApi()
  const { request: createGstSettings } = useApi("post", 5004);
  const [isGstRegistered, setIsGstRegistered] = useState(true);
  const handleToggle = () => {
    setIsGstRegistered(!isGstRegistered);
  };
  
    // ✅ Form Hook
    const {
      register,
      handleSubmit,
      setValue,
      watch,
    } = useForm<GstDetails>({
       defaultValues:  {
        taxType: "GST",
      }
    });

    const onSubmit = async (data: GstDetails) => {
      console.log("data",data);
      const body={
        ...data,
        importExport:data?.importExport?'true':'false' ,
        reverseCharge: data?.reverseCharge?"true":'false' ,
        compositionSchema: data?.compositionSchema?"true":'false' ,
        digitalServices: data?.digitalServices?"true":'false' ,
      }
      console.log("body",body);
      
      try {
        
        const { response, error } = await createGstSettings(endpoints.ADD_NEW_TAX,body);
  
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
    const handleRadioChange = (
      checked: boolean,
      varName: any
    ) => {
      setValue(varName, checked);
    };

    const setFormValues = (data: GstDetails) => {
      Object.keys(data).forEach((key) => {
        setValue(key as keyof GstDetails, data[key as keyof GstDetails]);
      });
    };
    
    useEffect(() => {
      refreshContext({ allTaxData: true });
    
      if (allTaxData) {
        const body: GstDetails = {
          compositionSchema: allTaxData?.compositionSchema=="true" ,
          digitalServices: allTaxData?.digitalServices=="true" ,
          gstBusinessLegalName: allTaxData?.gstBusinessLegalName || "",
          gstBusinessTradeName: allTaxData?.gstBusinessTradeName || "",
          gstIn: allTaxData?.gstIn || "",
          gstRegisteredDate: allTaxData?.gstRegisteredDate || "",
          importExport: allTaxData?.importExport=="true" ,
          reverseCharge: allTaxData?.reverseCharge=="true" ,
          taxType: allTaxData?.taxType || "GST",
        };
    
        setFormValues(body);
      }
    }, [allTaxData]);



  return (
    <div>
      <p className="text-[#303F58] font-bold">GST Settings</p>

      <div className="p-6 mt-4 rounded-lg bg-[#F7ECD9]">
        <div className="flex justify-between items-center">
          <p className=" text-[#303F58] text-sm">Is your business registered for GST?</p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={isGstRegistered} onChange={handleToggle} />
              <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${isGstRegistered ? 'bg-[#97998E]' : 'bg-[#DCDEE2]'}`}></div>
              <div className={`dot absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isGstRegistered ? 'transform translate-x-full left-2' : 'left-1'}`}></div>
            </div>
            <div className="ml-3 text-[#495160]  text-sm">{isGstRegistered ? 'No' : 'Yes'}</div>
          </label>
        </div>
      </div>
      <div>
        {isGstRegistered && (
          <div className="p-6 rounded-lg bg-white mt-4">
            <form onSubmit={handleSubmit(onSubmit)}  className="flex justify-between gap-4">
              <div className="text-[#4B5C79] text-sm w-[50%]">
                <div>
                  <label htmlFor="gstIn">GSTIN <span className="text-xs">(Maximum 15 Digits)</span></label>
                  <div className="mt-1.5">
                  <Input
                   {...register("gstIn")}
                   value={watch("gstIn")}
                    type="text"
                    name="gstIn"
                    placeholder="Enter GSTIN"
                    />
                    </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="gstBusinessTradeName">Business Trade Name</label><br />
                  <div className="mt-1.5">
                  <Input
                    {...register("gstBusinessTradeName")}
                    value={watch("gstBusinessTradeName")}
                   type="text"
                   name="gstBusinessTradeName"
                   placeholder="Enter Business Trade Name"
                   />
                   </div>
                </div>
                <div className="mt-5">
                  <label className="block mb-1.5 text-dropdownText font-semibold">
                    Composite Scheme
                  </label>
                  <div className="flex items-center gap-3 mt-2.5">
                    {/* <input
                      type="checkbox"
                      className="accent-[#97998E] bg-white h-5 w-5"
                      id="compositionSchema"
                      name="compositionSchema"
                    />
                    <label htmlFor="compositionSchema" >
                      My business is registered for Composition Scheme.
                    </label> */}
                    <Checkbox
            label="Display QR Code in invoice"
            checked={watch("compositionSchema")??false}
            onChange={(checked) =>
              handleRadioChange(checked, "compositionSchema")
            }
          />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block mb-1.5 text-dropdownText font-semibold">Import / Export</label>
                  <div className="flex items-center gap-3 mt-2.5">
                  <Checkbox
            label=" My business is involved in SEZ / Overseas Trading"
            checked={watch("importExport")??false}
            onChange={(checked) =>
              handleRadioChange(checked, "importExport")
            }
          />
                  </div>
                </div>
              </div>
              <div className="text-[#4B5C79] text-sm w-[50%]">
                <div>
                  <label htmlFor="gstBusinessLegalName">Business Legal Name</label>
                  <div className="mt-1.5">
                  <Input
                  {...register("gstBusinessLegalName")}
                  value={watch("gstBusinessLegalName")}
                  type="text"
                  name="gstBusinessLegalName"
                  placeholder="Enter Business Legal Name"
                  />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="gstRegisteredDate" className="block mb-1.5">
                    GST Registered On Date
                  </label>
                  <div className="relative w-full">
                    <Input
                    {...register("gstRegisteredDate")}
                    value={watch("gstRegisteredDate")}
                    type="date"
                    placeholder="Select Date"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="block mb-1.5 text-dropdownText font-semibold">Reverse Charge</label>
                    <div className="flex items-center gap-3 mt-2.5">
                     
                      <Checkbox
            label="My business is registered for Composition Scheme."
            checked={watch("reverseCharge")??false}
            onChange={(checked) =>
              handleRadioChange(checked,"reverseCharge")
            }
          />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="block mb-1.5 text-dropdownText font-semibold">Digital Services</label>
                    <div className="flex items-center gap-3 mt-2.5">
                    <Checkbox
            label="Track sale of digital services to overseas customers"
            checked={watch("digitalServices")??false}
            onChange={(checked) =>
              handleRadioChange(checked,"digitalServices")
            }
          />
                    </div>
                    <p className="w-[95%] mt-3 text-xs">Enabling this option will let you record and track export of digital services to individuals</p>
                    <div className="flex justify-end mt-6">
                      <Button size="sm" className="text-sm pl-10 pr-10" type="submit">Save</Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default GstSettings