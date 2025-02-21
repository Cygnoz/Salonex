import { useEffect, useState } from 'react';
import bg from '../../../../assets/images/Frame 630214.png.png'


import Modal from '../../../../Components/modal/Modal';
import SearchBar from '../../../../Components/SearchBar';
import Button from '../../../../Components/Button';
import CirclePlus from '../../../../assets/icons/circleplus';
import PencilLine from '../../../../assets/icons/PencilLine';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import { useRegularApi } from '../../../../context/ApiContext';
import useApi from '../../../../Hooks/useApi';
import { endpoints } from '../../../../Services/apiEndpoints';
import toast from 'react-hot-toast';
import ConfirmModal from '../../../../Components/Table/ConfirmModal';
import RackAddModal from './RackAddModal';
import NoRecords from '../../../../Components/Norecords';


type Props = {
    onClose: () => void;
}

const RackModal = ({ onClose }: Props) => {
  const {allbmcrData,refreshContext}=useRegularApi()
  const { request: deletecategoryRequest } = useApi("delete", 5003);
  const [editId, setEditId] = useState<string | null>(null);4
 // const {loading,setLoading}=useResponse()


  const [allcategoryData, setAllcategoryData] = useState<any[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState({
    addForm: false,
  });

  const [searchValue, setSearchValue] = useState("");

  const handleModalToggle = (addForm = false) => {
    setIsModalOpen((prev) => ({
      ...prev,
      addForm,
    }));
  };

  const openDeleteModal = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedCategoryId(null);
    setIsDeleteModalOpen(false);
    const type={ type: "rack" }
    refreshContext({bmcrType:type})
  };

  const handleEdit = (id?: string) => {
    setEditId(id || null);
    handleModalToggle(true);
  };
  
 

 
  const handleDelete = async () => {
    if (!selectedCategoryId) return;

    try {
      const url = `${endpoints.DELETE_BRMC}/${selectedCategoryId}`;
      const { response, error } = await deletecategoryRequest(url);
      if (!error && response) {
        toast.success("Rack deleted successfully!");
        setAllcategoryData((prevData) =>
          prevData.filter((category) => category.id !== selectedCategoryId)
        );
        closeDeleteModal();
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error("Error occurred while deleting rack.");
    }
  };

  useEffect(() => {
    // loadcategorys();
    const type={ type: "rack" }
    refreshContext({bmcrType:type})
    if(allbmcrData){
      setAllcategoryData(allbmcrData);
    }
  }, [allbmcrData]);

  //console.log(allbmcrData);
  return (
    <>
   <div className='bg-[#F8F4F4] p-4 rounded-xl'>
       

       <div className="flex justify-between items-center mb-4 px-3">
      
        <div className='flex'>
       <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
       <img src={bg} className="w-8" alt="Back to Home Icon" />
       </div>
        <div className='ms-4'>
        <h1 className="text-base font-bold text-deepStateBlue">Manage rack</h1>
        <h1 className="text-xs font-medium text-deepStateBlue">track and organize details related to product Racks</h1>
        </div>
        </div>

         <button
             type="button"
             onClick={onClose}
             className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
         >
             &times;
         </button>
     </div>

     <div className="flex my-2 p-2">
           <div className="w-[50%]">
             <SearchBar
             
               searchValue={searchValue}
               onSearchChange={setSearchValue}
               placeholder="Search Manufacture"
             />
           </div>
           <div onClick={()=>handleModalToggle(true)}className="ml-auto">
           <Button >
         <CirclePlus size={18} />
         <p className="text-[14px] font-medium">
           <b>Add Rack</b>
         </p>
       </Button>
           </div>
         </div>
         <div className="grid grid-cols-3 gap-4 p-4">
  {allcategoryData?.length > 0 ? (
    allcategoryData.map((rackk) => (
      <div key={rackk.id} className="p-3 bg-[#FFFFFF]">
        <h1 className="text-sm font-semibold text-[#2C3E50] my-1">
          {rackk.rackName}
        </h1>
        <h1 className="text-xs text-[#818894] font-normal">
          {rackk.description}
        </h1>
        <div className="flex my-1 gap-1">
          <div onClick={() => handleEdit(rackk.id)}>
            <PencilLine color="#3C7FBC" />
          </div>
          <div
            onClick={() => openDeleteModal(rackk.id)}
            className="cursor-pointer"
          >
            <TrashIcon />
          </div>
        </div>
      </div>
    ))
  ) : (
    <NoRecords />
  )}
</div>


   </div>
   <Modal open={isModalOpen.addForm} onClose={() => handleModalToggle()} className="w-[35%]">
       <RackAddModal editId={editId} onClose={() => handleModalToggle()} />
     </Modal>
       {/* Delete Confirmation Modal */}
       <Modal open={isDeleteModalOpen} className="w-[30%]" onClose={closeDeleteModal}>
       <ConfirmModal
       open
         onConfirm={handleDelete}
         message="Are you sure you want to delete this rack?"
         onClose={closeDeleteModal}
       />
     </Modal>
    </>
  )
}

export default RackModal