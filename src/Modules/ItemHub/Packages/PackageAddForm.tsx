import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import bg from "../../../assets/images/Layer_x0020_1 (1).png"
import BrowseUploads from "../../../assets/icons/BrowseUploads"
import Input from "../../../Components/Form/Input"
import Select from "../../../Components/Form/Select"



import Button from "../../../Components/Button"
import { useState } from "react"
import PackageServiceTable from "./PackageServiceTable"
import CirclePlus from "../../../assets/icons/circleplus"
import Modal from "../../../Components/modal/Modal"
import ProductAddModal from "./ProductAddModal"
import Rupee from "../../../assets/icons/Rupee"


type Props = {
    onClose?: () => void;
}

const PackageAddForm = ({ onClose }: Props) => {

    const [isModalOpen, setIsModalOpen] = useState({
        ProductaddForm: false,
        
    
        
      });
    
      // Function to toggle modal visibility
      const handleModalToggle = (
        ProductaddForm = false,
        
    
        
      ) => {
        setIsModalOpen((prev) => ({
          ...prev,
          ProductaddForm,
        
        }));
      
      };
    
    
  const columns = [
    { id: "invoiceNumber", label: "Payment Id", visible: true },
    { id: "date", label: "Date", visible: true },
    { id: "amount", label: "Amount", visible: true },
    { id: "remark", label: "Remark", visible: true },
  ];

  const data = [
    {
      invoiceNumber: "INV00234",
      date: "28 May 2024",
      amount: 2000.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00134",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00124",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00114",
      date: "28 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
    {
      invoiceNumber: "INV00034",
      date: "27 May 2024",
      amount: 500.0,
      remark: "Balance",
    },
  ];

  const handleDelete = (id: string) => {
    alert(`handleDelete clicked for ID: ${id}`);
  };

    const [selected, setSelected] = useState("active");

    //   };
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
                        <h1 className="text-base font-bold text-deepStateBlue">Add New Package</h1>
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
                    <Input
                            placeholder="Enter Package name"
                            label="Package Name"

                        />

                        <Input
                            placeholder="Enter Description "
                            label="Description"

                        />
                    </div>
               
                    <div className="grid grid-cols-2 gap-2 p-2 my-2">
                       

                    
                           <Input
                            placeholder="Enter SAC"
                            label="SAC"

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

                    <div className="flex items-center space-x-4 text-gray-700 my-4 ms-2">
      <p className="text-sm text-[#495160] font-medium">Whether the package is currently available or not?</p>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="packageStatus"
          value="active"
          checked={selected === "active"}
          onChange={() => setSelected("active")}
          className="hidden"
        />
        <span
          className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
            selected === "active" ? "border-red-500" : "border-gray-400"
          }`}
        >
          {selected === "active" && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
        </span>
        <span>Active</span>
      </label>
      
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="packageStatus"
          value="inactive"
          checked={selected === "inactive"}
          onChange={() => setSelected("inactive")}
          className="hidden"
        />
        <span
          className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
            selected === "inactive" ? "border-gray-500" : "border-gray-400"
          }`}
        >
          {selected === "inactive" && <span className="w-2 h-2 bg-gray-500 rounded-full"></span>}
        </span>
        <span>Inactive</span>
      </label>
    </div>
                  
                   

                    <div className="flex gap-2 ms-2">
                        <h1 className="text-sm font-medium text-[#495160]">Inclusive of all Taxes:</h1>
                        <input
                            type="checkbox"

                            className="w-5 h-5"
                        />
                        <h1 className="text-sm font-medium text-[#495160]">sales </h1>
                      
                    </div>
                  
                    <div className="bg-[#F8F4F4] p-10 my-4">
                    <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold text-[#2C3E50]">Add Services For Package</h1>
          
        </div>
        <Button onClick={()=>handleModalToggle(true,)}><CirclePlus /> Add Service</Button>
      </div>
                    <div className="py-2">
          <PackageServiceTable
            columns={columns}
            data={data}
            onDelete={handleDelete}
          //  onPrintClick={handlePrintClick}
            loading={false}
            searchableFields={["invoiceNumber", "date"]}
          />
        </div>
        </div>

        <div className="bg-[#F8F4F4] p-6 rounded-lg">
          <div className="flex gap-4">
            <div className="bg-[#EED2D5] p-4 w-64 rounded-lg">
            <h1 className="text-[#2C3E50] text-xs font-semibold">Toatl Price</h1>
             <div className="flex my-1">
             <h1><Rupee color="#975359" size="18" /></h1>
             <h1 className="text-[#975359] text-base font-bold">1000</h1>
             </div>
            </div>

            <div className="bg-[#B5636A] p-4 w-64 rounded-lg my-1">
              <h1 className="text-[#F6F6F6] text-xs font-semibold">Special Price</h1>
              <div className="flex border border-white p-2 rounded-lg">
  <h1><Rupee color="#FFFFFF" size="18" /></h1>
  <h1 className="text-[#FFFFFF] text-base font-bold">1000</h1>
</div>

            </div>

            <div className="bg-[#F8F4F4] p-4 w-64 rounded-lg">
              <h1>Package validity</h1>
             <div className="flex">
             <Input
                            placeholder="Enter Package validity"
                       

                        />
             </div>
            </div>
          </div>
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
        <Modal open={isModalOpen.ProductaddForm} onClose={() => handleModalToggle()} className="w-[35%]">
        <ProductAddModal  onClose={() => handleModalToggle()} />
      </Modal>
  </>
    )
}

export default PackageAddForm