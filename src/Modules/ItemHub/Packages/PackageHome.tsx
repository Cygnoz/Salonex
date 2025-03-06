
import bgimage1 from "../../../assets/images/image 222.png"
import bgimage2 from "../../../assets/images/image (333).png"
import bgimage3 from "../../../assets/images/image (444).png"
import { Link, useNavigate } from "react-router-dom";
import ArrowUpRightIcon from "../../../assets/icons/ArrowUpRightIcon";
import Table from "../../../Components/Table/Table";

import BackIcon from "../../../assets/icons/BackIcon";




type Props = {}

function PackageHome({ }: Props) {
   const Navigate = useNavigate();
   // // State to manage modal visibility


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
           <div className="flex">
           <Link to={"/itemhub"}>
                   <div className="flex justify-center items-center h-11 w-11 bg-[#FFFFFF] rounded-full">
                       <BackIcon />
                   </div>
               </Link>

                 <div className="ms-4">  <h1 className="text-lg font-bold text-[#2C3E50]">Packages</h1>
                   <p className="text-[#818894] text-[12px] font-normal">
                   Add and Manage Packages
                   </p></div>
               </div>

               <div className="bg-[#F4DCDE] rounded-2xl p-3 h-20 w-[669px] ml-auto mx-4">
                   <div className="flex justify-between items-center">
                       <div>
                           <p className="text-[#2C3E50] font-bold text-base">Add Packages</p>
                       </div>
                       <div className="flex ml-36">
                       <img src={bgimage1} className="w-14 h-14" alt="" />
                       <img src={bgimage2} className="w-14 h-14" alt="" />
                       <img src={bgimage3} className="w-14 h-14" alt="" />

                       </div>
                     
                       <div onClick={() => Navigate("/itemhub/package-add")}>
                           <div className="rounded-full bg-black w-12 h-12 flex items-center justify-center">
                               <ArrowUpRightIcon color="#FFE1AD" />
                           </div>
                          
                       </div>
                       

                   </div>
                  
               
               </div>

           


           </div>
      

           <div className="my-3">
               <Table

                   columns={columns}
                   data={data}
                  
                   onDelete={handleDelete}
                   onEditClick={handleEditClick}
                   //renderColumnContent={renderColumnContent}
                   searchPlaceholder="Search Customer"
                   loading={false}
                   searchableFields={["CompanyName", "Name", "email"]}
               />

           </div>

       </div>
       {/* <Modal open={isModalOpen.CategoryaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
       <PackageAddForm  onClose={() => handleModalToggle()} />
     </Modal> */}
    
    

       </>
       )
}

export default PackageHome