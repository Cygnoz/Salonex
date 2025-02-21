import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { endpoints } from "../../../../Services/apiEndpoints";
import useApi from "../../../../Hooks/useApi";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRegularApi } from "../../../../context/ApiContext";
import * as Yup from "yup";
import { RackData } from "../../../../Interface/ProductRack";


type Props = {
    onClose: () => void;
    editId?:any;
}
const validationSchema = Yup.object({
  name: Yup.string().required("Rack name is required"),
  
});
const RackAddModal = ({onClose,editId}: Props) => {
  const { request: addBrand} = useApi("post", 5003);
  const { request: updateBrandRequest } = useApi("put", 5003);
  const {refreshContext,bmcrData}=useRegularApi()
 
   const {
     register,
     handleSubmit,
     formState: { errors },
  
     setValue,
 
   } = useForm<RackData>({
     resolver: yupResolver(validationSchema),
     defaultValues:{
       type:'rack'
     }
   });
 
   const setFormValues = (data: RackData) => {
     Object.keys(data).forEach((key) => {
       setValue(key as keyof RackData, data[key as keyof RackData]);
     });
   };
 
   useEffect(() => {
     if (editId) {
       refreshContext({bmcrId:editId})
       if(bmcrData){
         console.log(bmcrData);
         
         const body = {
           ...bmcrData,
        name:bmcrData.rackName
         }
         
         setFormValues(body);
       }
     }
   }, [editId,bmcrData]);
 
 
   //console.log(editId);
   
 
   const onSubmit: SubmitHandler<RackData> = async (data) => {
     try {
       const apiCall = editId ? updateBrandRequest : addBrand;
       const { response, error } = await apiCall(
         editId ? `${endpoints.UPDATE_BRMC}`: endpoints.ADD_BRMC , data);
   
       if (response && !error) {
         toast.success(`Rack ${editId ? "updated" : "added"} successfully!`);
         console.log(response.data);
         onClose();
         const type={ type:"rack" }
         refreshContext({bmcrType:type})
       } else {
         toast.error(error.response.data.message);
       }
     } catch (err) {
       console.error("Error submitting Rack data:", err);
       toast.error("An unexpected error occurred.");
     }
   };
    
   
    
    
  return (
    <div className="p-4 bg-[#F8F4F4] rounded-lg">
           <div className="flex justify-between items-center mb-4 px-3">
       
       <div className='flex'>
     
      
       <h1 className="text-base font-bold text-deepStateBlue">{editId?'Edit':'Add'} Rack</h1>
      
       </div>

        <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
            &times;
        </button>
    </div>
  

<form className="w-full mt-3"onSubmit={handleSubmit(onSubmit)}>
<div className="grid grid-cols-1 gap-2 p-2 ">
          <Input
            placeholder="Enter Rack Name"
            label=" Rack Name"
            required
            {...register("name")}
            error={errors.name?.message}
           
          />
          <Input
            placeholder="Enter Description"
            label="Description"
            {...register("description")}
            error={errors.description?.message}
          
          />
        </div>
        <div className="flex justify-end gap-2 mt-3 pb-2 me-2">
          <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

    </div>
  )
}

export default RackAddModal