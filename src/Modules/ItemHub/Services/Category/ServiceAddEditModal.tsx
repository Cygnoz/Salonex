
import BrowseUploads from "../../../../assets/icons/BrowseUploads";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";

// import { data } from "react-router-dom";

type Props = {
    onClose: () => void;
    
}


  

const ServiceAddEditModal = ({onClose}: Props) => {
 

  


  
    
  return (
    <div className="p-4  bg-[#F8F4F4] rounded-lg">
           <div className="flex justify-between items-center mb-4 px-3">
       
       <div className='flex'>
     
      
       <h1 className="text-base font-bold text-deepStateBlue">Add Category</h1>
      
       </div>

        <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
            &times;
        </button>
    </div>
    
    <form className="w-full mt-3" >
    <div className={`mx-2 border-dashed border-2 border-[#B5636A] p-4 h-28 rounded gap-2 text-center mt-2`}>
    <div className="col-span-2 flex flex-col items-center">
                  <label
                    className="cursor-pointer text-center"
                    htmlFor="file-upload"
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                     
                      //   onChange={(e) => handleFileUpload(e)}
                    />
                  
                        <div className="flex justify-center items-center w-full h-full">
                          <BrowseUploads/>
                        </div>
                  
                    
                  </label>
                 
                 
                 
                </div>
                </div>


        <div className="grid grid-cols-1 gap-2 p-2 ">
          <Input
            placeholder="Enter Category Name"
            label="Product Category Name"
            required
      
           
          />
          <Input
            placeholder="Enter Description"
            label="Description"
         
          
          
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

export default ServiceAddEditModal