import Table from "../../../../Components/Table/Table";
import Button from "../../../../Components/Button";
import CirclePlus from "../../../../assets/icons/circleplus";
import Modal from "../../../../Components/modal/Modal";
import { useEffect, useState } from "react";
import Input from "../../../../Components/Form/Input";
import ViewTaxDetails from "./ViewTaxDetails";
import taxBgImage from "../../../../assets/images/Frame 629026.png"
import { TaxGst } from "../../../../Interface/TaxGST";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../../../../Hooks/useApi";
import { endpoints } from "../../../../Services/apiEdpoints";
import toast from "react-hot-toast";
import { useRegularApi } from "../../../../context/ApiContext";
type Props = {
  
};



function TaxRate({ }: Props) {
  const {allTaxData,refreshContext}=useRegularApi()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedGst, setSelectedGst] = useState<any>(null);
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
      } = useForm<TaxGst>({
        resolver: yupResolver(validationSchema),
      });

    const handleModalToggle=()=>{
      setModalOpen((prev)=>!prev)
    }

  const dummyColumns = [
    { id: "taxName", label: "Tax Name ", visible: true },
    { id: "taxRate", label: "Rate", visible: true },
    { id: "cgst", label: "CGST", visible: true },
    { id: "sgst", label: "SGST", visible: true },
    { id: "igst", label: "IGST", visible: true },
  ];
   const setFormValues = (data: TaxGst) => {
        Object.keys(data).forEach((key) => {
          setValue(key as keyof TaxGst, data[key as keyof TaxGst]);
        });
      };

  const handleEyeClick = (id: string) => {
    const selectedData = allTaxData?.gstTaxRate?.find((item:any) => item._id === id);
    if (selectedData) {
      setSelectedGst(selectedData);
      setIsViewModalOpen(true);
    }
  };

  const handleEditClick=(id:string)=>{
    const selectedData = allTaxData?.gstTaxRate?.find((item:any) => item._id === id);
    if(selectedData){
      handleModalToggle()
      setFormValues(selectedData)
    }
  }

  // const handleDelete=(id:string)=>{

  // }



  const onSubmit: SubmitHandler<TaxGst> = async (data, event) => {
      event?.preventDefault();
      let body:object={}
      if(data?._id){
        body = {
          taxType: "GST",
          taxRateId: data._id,  // Use `taxGst.id` for the GST rate ID
          updatedRate: {
            taxName: data.taxName,
            taxRate: data.taxRate,
            cgst: data.cgst,
            sgst: data.sgst,
            igst: data.igst,
          },
        };
      }else{
         body = {
          taxType: "GST",
          gstTaxRate: {
            taxName: data?.taxName,
            taxRate: data?.taxRate,
            cgst: data?.cgst,
            sgst: data?.sgst,
            igst:data?.igst,
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
  
  useEffect(()=>{
    const taxRate = parseFloat(watch("taxRate")) || 0;
    const rate = Math.max(0, Math.min(100, taxRate)); 
    setValue("cgst",(rate / 2).toString())
    setValue("sgst",(rate / 2).toString())
    setValue("igst", rate.toString())
  },[watch("taxRate")])

  console.log("all",allTaxData);
  


  useEffect(() => {
    refreshContext({allTaxData:true})
  }, [allTaxData]);

  
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#303F58] font-bold">Tax Rate</p>
        <div className="flex gap-4">
          <Button
            onClick={()=>{
              handleModalToggle()
              reset(); 
            }}
            className="text-sm font-medium"
            size="sm"
          >
            <CirclePlus color="white" /> New Tax
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <Table
          columns={dummyColumns}
          data={allTaxData?.gstTaxRate ||[]}
          searchPlaceholder={"Search Taxes"}
          searchableFields={["taxName"]}
          loading={false}
          onRowClick={handleEyeClick}
          onEditClick={handleEditClick}
          // onDelete={handleDelete}
        />
      </div>

      <Modal
        open={isModalOpen}
        onClose={handleModalToggle}
        className="w-[50%] p-8 bg-[#F8F4F4]"
      >
        <div
          className="  rounded-2xl flex justify-between items-center relative bg-cover bg-no-repeat bg-right"
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

            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
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
              <div className="flex flex-col w-[48%]">
                <Input placeholder="CGST"  label="CGST" readOnly {...register("cgst")} />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <Input  placeholder="IGST" label="IGST" readOnly {...register("igst")} />
              </div>
              <div className="flex flex-col w-[48%]">
                <Input  placeholder="SGST" label="SGST" readOnly {...register("sgst")} />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
          <Button onClick={handleModalToggle} variant="secondary" className="text-sm pl-7 pr-7">
            Cancel
          </Button>
          <Button type="submit" className="pl-7 pr-7">{watch("_id")?'Update':'Save'}</Button>
        </div>
        </form>
        </div>
        
      </Modal>

      <ViewTaxDetails
        gstRate={selectedGst}
        open={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
}

export default TaxRate;