import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import bg from "../../../assets/images/Layer_x0020_1 (1).png"
import BrowseUploads from "../../../assets/icons/BrowseUploads"
import Input from "../../../Components/Form/Input"
import Select from "../../../Components/Form/Select"

import CirclePlus from "../../../assets/icons/circleplus"


import Button from "../../../Components/Button"
import { useState } from "react"
import Modal from "../../../Components/modal/Modal"
import ServiceAddEditModal from "./Category/ServiceAddEditModal"

type Props = {
    onClose?: () => void;
}

const ServicesAdd = ({ onClose }: Props) => {

    const [isToggled, setIsToggled] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState({
        CategoryaddForm: false,
     
      });
    
      // Function to toggle modal visibility
      const handleModalToggle = (
        CategoryaddForm = false,
  

        
      ) => {
        setIsModalOpen((prev) => ({
          ...prev,
          CategoryaddForm,
        
         
        }));
      
      };
    return (
        <>
        <div>
            <div className="flex">
                <Link to={"/itemhub/services-home"}>
                    <div className="flex justify-center items-center h-11 w-11 bg-[#FFFFFF] rounded-full">
                        <BackIcon />
                    </div>
                </Link>
                <div className='flex ms-1'>
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
                        <img src={bg} className="w-8" alt="Back to Home Icon" />
                    </div>
                    <div className='ms-4'>
                        <h1 className="text-base font-bold text-deepStateBlue">Add Service</h1>
                        <h1 className="text-xs font-medium text-deepStateBlue">organize and update brand information for your products.</h1>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3 my-4">

                <form className="w-full mt-3">
                    <div className="mx-2 border-dashed border-2 border-[#B5636A] p-4 h-24 rounded gap-2 text-center mt-2">
                        <p className="text-[10px] mt-1 text-[#818894]">
                            <div className="flex justify-center">
                                <BrowseUploads />
                            </div>
                            Maximum file size allowed is 5MB
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 p-2">
                        <Select
                            placeholder="Select Category"
                            label="State"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />

                        <Input
                            placeholder="Enter Service name"
                            label="Service Name"

                        />
                    </div>
                    <div onClick={()=>handleModalToggle(true)} className="flex ms-3 gap-2 my-2">
                        <CirclePlus color="#495160" />
                        <h1 className="text-sm font-normal">Add New Category</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2 my-2">
                       

                        <Input
                            placeholder="Enter Price"
                            label="Price"

                        />
                           <Input
                            placeholder="Enter SAC"
                            label="SAC"

                        />
                      
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2 my-2">

                    <Input
                            placeholder="Enter Staff Commission"
                            label="Staff Commission %"

                        />

                        <Select
                            placeholder="Select Tax"
                            label="Tax"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />

                    

                    </div>
                   

                    <div className="flex gap-2 ms-2">
                        <h1 className="text-sm font-medium text-[#495160]">Inclusive of all Taxes:</h1>
                        <input
                            type="checkbox"

                            className="w-5 h-5"
                        />
                        <h1 className="text-sm font-medium text-[#495160]">sales </h1>
                      
                    </div>
                  

                    <div className="bg-[#F9FCFF] p-4 rounded-sm my-4">
                        <div className="flex gap-2">
                           <h1 className="text-base font-semibold text-[#495160]">Mark Product Inventory</h1>
                          <div> <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
        <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative">
          <div
            className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform transform ${isToggled ? "translate-x-5" : ""}`}
          ></div>
        </div>
      </label></div>
      </div>
                            <h1 className="mt-3 text-sm font-normal">track and manage product stock levels for inventory management</h1>
                       
                    </div>
                   

                 
                 

                 

                  

                    <div className="flex justify-end gap-2 mt-6 pb-4 my-3 me-2 ">
                        <Button
                            variant="tertiary"
                            className="h-10 text-sm border rounded-xl"
                            size="lg"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            className="h-10 text-sm border rounded-s-xl"
                            size="lg"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>


                </form>
            </div>

        </div>
  
      <Modal
      open={isModalOpen.CategoryaddForm}
      onClose={() => handleModalToggle()}
      className="w-[35%]"
    >
      <ServiceAddEditModal  onClose={() => handleModalToggle()} />
    </Modal>
  </>
    )
}

export default ServicesAdd