import BrowseUploads from "../../../../assets/icons/BrowseUploads";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";

type Props = {
    onClose: () => void;
}

  

const BrandAddModal = ({onClose}: Props) => {
    
   
    
  return (
    <div className="p-4  bg-[#F8F4F4]">
           <div className="flex justify-between items-center mb-4 px-3">
       
       <div className='flex'>
     
      
       <h1 className="text-base font-bold text-deepStateBlue">Add Brand</h1>
      
       </div>

        <button
            type="button"
            onClick={onClose}
            className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
            &times;
        </button>
    </div>
    <div className="mx-2 border-dashed border-2 border-[#B5636A] p-4 h-24 rounded gap-2 text-center mt-2">
  <p className="text-[10px] mt-1 text-[#818894]">
  <div className="flex justify-center">
                        <BrowseUploads />
                      </div>
    Maximum file size allowed is 5MB
  </p>
</div>

<form className="w-full mt-3">
        <div className="grid grid-cols-1 gap-2 p-2 ">
          <Input
            placeholder="Enter Brand Name"
            label="brand Name"
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

export default BrandAddModal