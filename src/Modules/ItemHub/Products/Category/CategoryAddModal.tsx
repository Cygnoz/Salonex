import { yupResolver } from "@hookform/resolvers/yup";
import BrowseUploads from "../../../../assets/icons/BrowseUploads";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";
import { CategoryData } from "../../../../Interface/ProductCategory";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { endpoints } from "../../../../Services/apiEndpoints";
import useApi from "../../../../Hooks/useApi";
import toast from "react-hot-toast";
import Trash from "../../../../assets/icons/Trash";
import { useEffect } from "react";
import { useRegularApi } from "../../../../context/ApiContext";
// import { data } from "react-router-dom";

type Props = {
    onClose: () => void;
    editId?:any;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Category name is required"),
  

});
  

const CategoryAddModal = ({onClose,editId}: Props) => {
  const { request: addCategory } = useApi("post", 5003);
 const { request: updatecategoryRequest } = useApi("put", 5003);
 const {refreshContext,bmcrData}=useRegularApi()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,

  } = useForm<CategoryData>({
    resolver: yupResolver(validationSchema),
    defaultValues:{
      type:'category'
    }
  });

  const setFormValues = (data: CategoryData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof CategoryData, data[key as keyof CategoryData]);
    });
  };
  //console.log(data);
  

  useEffect(() => {
    if (editId) {
      refreshContext({bmcrId:editId})
      if(bmcrData){
        const body = {
          ...bmcrData,
          name:bmcrData.categoriesName
        }
        
        setFormValues(body);
      }
    }
  }, [editId,bmcrData]);

  console.log(editId);
  

  const onSubmit: SubmitHandler<CategoryData> = async (data) => {
    try {
      //const { response, error } = await addCategory(endpoints.ADD_BRMC, data);
      const apiCall = editId ? updatecategoryRequest : addCategory;
      const { response, error } = await apiCall(
        editId ? `${endpoints.UPDATE_BRMC}`: endpoints.ADD_BRMC , data);
  
      if (response && !error) {
        toast.success(`category ${editId ? "updated" : "added"} successfully!`);
        console.log(response.data);
        onClose();
        const type={ type: "category" }
    refreshContext({bmcrType:type})
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error submitting Category data:", err);
      toast.error("An unexpected error occurred.");
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("uploadImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click propagation

    // Clear the leadImage value
    setValue("uploadImage", "");
  };
   
    
  return (
    <div className="p-4  bg-[#F8F4F4]">
           <div className="flex justify-between items-center mb-4 px-3">
       
       <div className='flex'>
     
      
       <h1 className="text-base font-bold text-deepStateBlue">{editId?'Edit':'Add'} Category</h1>
      
       </div>

        <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
            &times;
        </button>
    </div>
    
    <form className="w-full mt-3" onSubmit={handleSubmit(onSubmit)}>
    <div className={`mx-2 border-dashed border-2 border-[#B5636A] p-4 ${watch("uploadImage")?"h-56":'h-24'} rounded gap-2 text-center mt-2`}>
    <div className="col-span-2 flex flex-col items-center">
                  <label
                    className="cursor-pointer text-center"
                    htmlFor="file-upload"
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      //   onChange={(e) => handleFileUpload(e)}
                    />
                    {
                        !watch("uploadImage") &&
                        <div className="flex justify-center items-center w-full h-full">
                          <BrowseUploads/>
                        </div>
                  
                    }
                  </label>
                  {watch("uploadImage") && (
                    <div
                      onClick={handleRemoveImage} // Remove image handler
                      className="flex flex-col items-center"
                    >
                      <img className="h-44 w-full" src={watch("uploadImage")} alt="" />
                      <div className="border-2 cursor-pointer rounded-full h-7 w-7 flex  justify-center items-center -ms-2 ">
                        <Trash color="red" size={16} />
                      </div>
                    </div>
                  )}
                </div>
                </div>


        <div className="grid grid-cols-1 gap-2 p-2 ">
          <Input
            placeholder="Enter Category Name"
            label="Product Category Name"
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

export default CategoryAddModal