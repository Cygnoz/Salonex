import ArrowUpRightIcon from "../../../assets/icons/ArrowUpRightIcon";
import Table from "../../../Components/Table/Table"
import bgimage from "../../../assets/images/black girl with shopping cart.png"
import { useState } from "react";
import Modal from "../../../Components/modal/Modal";
import CategoryModal from "./Category/CategoryModal";
import ManufactureModal from "./Manufacture/ManufactureModal";
import BrandModal from "./Brand/BrandModal";
import RackModal from "./Rack/RackModal";
import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";




type Props = {}

function ProductsHome({ }: Props) {
   
    const Navigate = useNavigate();
    // // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    CategoryaddForm: false,
    ManufacturaddForm:false,
    brandaddForm:false,
    RackaddForm:false,
    productsaddForm:false,
    view:false
    
  });

  // Function to toggle modal visibility
  const handleModalToggle = (
    CategoryaddForm = false,
    ManufacturaddForm=false,
    brandaddForm=false,
    RackaddForm=false,
    productsaddForm=false,
    view=false
    
  ) => {
    setIsModalOpen((prev) => ({
      ...prev,
      CategoryaddForm,
      ManufacturaddForm,
      brandaddForm,
      RackaddForm,
      productsaddForm,
      view
     
    }));
  
  };

    const columns = [
        { id: "category", label: "Category", visible: true },
        { id: "Name", label: "Product Name", visible: true },
        { id: "CompanyName", label: "Price", visible: true },
        { id: "Contact", label: "Current Stock", visible: true },
        { id: "email", label: "UOM", visible: true },
        { id: "Status", label: "Rack", visible: true },
    ];
    const data = [
        { id: "1",category:'10', Name: "John Doe", CompanyName: "123456", Contact: "11223344", email: "john@example.com", Status: "Active" },
        { id: "2",category:'10', Name: " Doe", CompanyName: "34556", Contact: "11223344", email: "john@example.com", Status: "In Active" },
        { id: "3",category:'10', Name: "John ", CompanyName: "787456", Contact: "11223344", email: "john@example.com", Status: "Active" },
        { id: "4",category:'10', Name: "Jos", CompanyName: "54456", Contact: "11223344", email: "john@example.com", Status: "In Active" },
        { id: "4",category:'10', Name: "Jos", CompanyName: "54456", Contact: "11223344", email: "john@example.com", Status: "In Active" },

    ]

    const handleRowClick = () => {
        handleModalToggle(false,false,false,false,false,true)
           
         
         
    };

    const handleDelete = (id: string) => {
        alert(`Delete clicked for ID: ${id}`);
    };

    const handleEditClick = (id: string) => {
        alert(`Edit clicked for ID: ${id}`);
    };

    return (
        <>
        <div>
            <div className="flex justify-between ">
                <div>
                    <h1 className="text-lg font-bold text-[#2C3E50]">Products</h1>
                    <p className="text-[#818894] text-[12px] font-normal">
                    Add and Manage Service
                    </p>
                </div>

                <div className="bg-[#D9E9FF] rounded-2xl p-3 h-20 w-[500px]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[#2C3E50] font-bold text-base">Add Products</p>
                        </div>
                        <img src={bgimage} className="w-36 absolute right-32 object-contain" alt="" />
                        <div>
                            <div onClick={() => Navigate("/itemhub/products-add")} className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                                <ArrowUpRightIcon color="#FFE1AD" />
                            </div>
                           
                        </div>
                        

                    </div>
                   
                
                </div>


            </div>
            <div className="flex gap-4 my-3">
            <div className="bg-[#FFFF] rounded-2xl p-3 w-[25%]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[#2C3E50] font-bold text-sm">Add Category</p>
                        </div>
                        <div>
                            <div onClick={()=>handleModalToggle(true,false,false,false,false,false)} className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                                <ArrowUpRightIcon color="#FFE1AD" />
                            </div>
                        </div>

                    </div>
                    {/* <div  onClick={() => navigate("/itemHub/products")}>
               <Button className="mt-2">Explore <ArrowUpRight/></Button>
             </div> */}
                </div>
                <div className="bg-[#FFFF] rounded-2xl p-3 w-[25%]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[#2C3E50] font-bold text-sm">Manage Manufacture</p>
                        </div>
                        <div>
                            <div onClick={()=>handleModalToggle(false,true,false,false,false,false)} className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                                <ArrowUpRightIcon color="#FFE1AD" />
                            </div>
                        </div>

                    </div>
                    {/* <div  onClick={() => navigate("/itemHub/products")}>
               <Button className="mt-2">Explore <ArrowUpRight/></Button>
             </div> */}
                </div>
                <div className="bg-[#FFFF] rounded-2xl p-3 w-[25%]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[#2C3E50] font-bold text-sm">Manage Brand</p>
                        </div>
                        <div>
                            <div onClick={()=>handleModalToggle(false,false,true,false,false,false)} className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                                <ArrowUpRightIcon color="#FFE1AD" />
                            </div>
                        </div>

                    </div>
                    {/* <div  onClick={() => navigate("/itemHub/products")}>
               <Button className="mt-2">Explore <ArrowUpRight/></Button>
             </div> */}
                </div>
                <div className="bg-[#FFFF] rounded-2xl p-3 w-[25%]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[#2C3E50] font-bold text-sm">Manage Rack</p>
                        </div>
                        <div>
                            <div onClick={()=>handleModalToggle(false,false,false,true,false,false)} className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                                <ArrowUpRightIcon color="#FFE1AD" />
                            </div>
                        </div>

                    </div>
                    {/* <div  onClick={() => navigate("/itemHub/products")}>
               <Button className="mt-2">Explore <ArrowUpRight/></Button>
             </div> */}
                </div>

            </div>

            <div className="my-3">
                <Table

                    columns={columns}
                    data={data}
                    onRowClick={handleRowClick}
                    onDelete={handleDelete}
                    onEditClick={handleEditClick}
                    //renderColumnContent={renderColumnContent}
                    searchPlaceholder="Search Customer"
                    loading={false}
                    searchableFields={["CompanyName", "Name", "email"]}
                />

            </div>

        </div>
        <Modal open={isModalOpen.CategoryaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
        <CategoryModal  onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.ManufacturaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
        <ManufactureModal  onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.brandaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
        <BrandModal  onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.RackaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
        <RackModal  onClose={() => handleModalToggle()} />
      </Modal>
      <Modal open={isModalOpen.view} onClose={() => handleModalToggle()} className="w-[45%]">
        <ProductView  onClose={() => handleModalToggle()} />
      </Modal>
        </>
        )
}

export default ProductsHome