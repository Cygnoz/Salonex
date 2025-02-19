import { useEffect, useState } from "react";
import CirclePlus from "../../../../assets/icons/circleplus";
import Button from "../../../../Components/Button";
import Modal from "../../../../Components/modal/Modal";
import Table from "../../../../Components/Table/Table";
import taxBgImage from "../../../../assets/images/Frame 629026.png"
import Input from "../../../../Components/Form/Input";
import ViewTaxDetailsVat from "./ViewTaxDetailsVat";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { endpoints } from "../../../../Services/apiEndpoints";
import useApi from "../../../../Hooks/useApi";
import { useRegularApi } from "../../../../context/ApiContext";
interface vat{
  _id?:string
  taxName: string;
  taxRate: string;
}
type Props = {};

function TaxRateVat({}: Props) {
  const {allTaxData,refreshContext}=useRegularApi()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedVatRate, setSelectedVatRate] = useState<any>(null);
  const { request: createTaxGst } = useApi("post", 5004);
  const { request: updateTaxGst } = useApi("put", 5004);
  const validationSchema = Yup.object().shape({
      taxName: Yup.string().required("Tax name is required"),
      taxRate: Yup.string().required("Tax rate is required"),
    });
    
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
      } = useForm<vat>({
        resolver: yupResolver(validationSchema),
      });

    const handleModalToggle=()=>{
      setModalOpen((prev)=>!prev)
    }

  const dummyColumns = [
    { id: "taxName", label: "Tax Name ", visible: true },
    { id: "taxRate", label: "Rate", visible: true },
  ];
   const setFormValues = (data: vat) => {
        Object.keys(data).forEach((key) => {
          setValue(key as keyof vat, data[key as keyof vat]);
        });
      };

  const handleEyeClick = (id: string) => {
    const selectedData = allTaxData?.vatTaxRate?.find((item:any) => item._id === id);
    if (selectedData) {
      setSelectedVatRate(selectedData);
      setIsViewModalOpen(true);
    }
  };

  const handleEditClick=(id:string)=>{
    const selectedData = allTaxData?.vatTaxRate?.find((item:any) => item._id === id);
    if(selectedData){
      handleModalToggle()
      setFormValues(selectedData)
    }
  }

  // const handleDelete=(id:string)=>{

  // }



  const onSubmit: SubmitHandler<vat> = async (data, event) => {
      event?.preventDefault();
      let body:object={}
      if(data?._id){
        body = {
          taxType: "VAT",
          taxRateId: data._id,  // Use `taxGst.id` for the GST rate ID
          updatedRate: {
            taxName: data.taxName,
            taxRate: data.taxRate,
          },
        };
      }else{
         body = {
          taxType: "VAT",
          vatTaxRate: {
            taxName: data?.taxName,
            taxRate: data?.taxRate,
          },
        };
      }
     
      console.log("bosy",body);
      
      try {
        const api = data._id ? updateTaxGst : createTaxGst;

        
        const url =
        data._id ? `${endpoints.UPDATE_TAX}` : endpoints.ADD_NEW_TAX;
  
        const { response, error } = await api(url, body);
        console.log("err",error);
        
        if (response && !error) {
          toast.success(response.data.message || "Success!");
          refreshContext({allTaxData:true})
          handleModalToggle()
        } else {
          toast.error(error.response?.data?.message || "An error occurred.");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
  }
  

  console.log("all",allTaxData);
  


  useEffect(() => {
    refreshContext({allTaxData:true})
  }, [allTaxData]);

  console.log("allTax",allTaxData);
  

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#303F58] font-bold">Tax Rate</p>
        <div className="flex gap-4">
          <Button onClick={()=>{
              handleModalToggle()
              reset(); 
            }} className="text-sm font-medium" size="sm">
            <CirclePlus color="white" /> New Tax
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <Table
          columns={dummyColumns}
          data={allTaxData?.vatTaxRate||[]}
          searchPlaceholder={"Search Taxes"}
          searchableFields={["taxName"]}
          loading={false}
          onRowClick={handleEyeClick}
          onEditClick={handleEditClick}
        />
      </div>

      {/* "New Tax" Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleModalToggle}
        className="w-[50%] p-8  bg-[#F8F4F4]"
      >
          <div
          className=" rounded-2xl flex justify-between items-center relative bg-cover bg-no-repeat bg-right"
        >
            <div className="relative flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={taxBgImage} className="w-12" alt="" />
              <div>
                <p className="text-[#004D4D] font-bold text-base">{watch("_id")?'Edit':'Create'} New Tax</p>
                <p className="text-[#818894] text-[10px]">
                  Lorem ipsum dolor sit amet cons Lorem ipsum dolor sit amet cons amet cons Lorem ipsu
                </p>
              </div>
            </div>
            <div onClick={handleModalToggle} className="text-4xl text-[#2C3E50]  cursor-pointer">&times;</div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl text-text_tertiary text-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            required
             placeholder="Enter tax name" 
             {...register("taxName")}
             error={errors?.taxName?.message}
              label="Tax Name"
             />
            <div className="mt-4">
            <Input
              type="number"
              max={100}
              min={0}
              required
              label="Tax Rate"
              error={errors?.taxRate?.message}
              placeholder="Enter tax rate"
              {...register("taxRate")}
            />
            </div>
            <div className="flex justify-end gap-2 mt-4">
          <Button onClick={handleModalToggle} variant="secondary" className="text-sm pl-7 pr-7">
            Cancel
          </Button>
          <Button type="submit"  className="pl-7 pr-7">{watch("_id")?'Update':'Save'}</Button>
        </div>
          </form>
        </div>

       
      </Modal>

      {/* "View Details" Modal */}
      <ViewTaxDetailsVat
        vatRate={selectedVatRate}
        open={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
}

export default TaxRateVat;