


// import { data } from "react-router-dom";

import Button from "../../../Components/Button";
import Input from "../../../Components/Form/Input";
import Select from "../../../Components/Form/Select";

type Props = {
    onClose: () => void;
    
}


  

const ProductAddModal = ({onClose}: Props) => {
 

  


  
    
  return (
    <div className="p-4  bg-[#F8F4F4] rounded-lg">
           <div className="flex justify-between items-center mb-4 px-3">
       
       <div className='flex'>
     
      
       <h1 className="text-base font-bold text-deepStateBlue">Add Product</h1>
      
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
 


        <div className="grid grid-cols-1 gap-2 p-2 ">
        <Select
                            placeholder="Select Service"
                            label="Service"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />
          <Input
            placeholder="Enter Quantity "
            label="Quantity"
            required
      
           
          />
          <Input
            placeholder="Enter Rate"
            label="Actual Rate"
         
          
          
          />
           <Input
            placeholder="Enter Rate"
            label="Package Name"
            required
      
           
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
            Done
          </Button>
        </div>
      </form>

    </div>
  )
}

export default ProductAddModal