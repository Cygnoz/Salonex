import { useState } from "react";
import bg from "../../../../assets/images/Frame 630214.png.png";
import img from "../../../../assets/images/Rectangle 13 (1).png";
import Modal from "../../../../Components/modal/Modal";
import SearchBar from "../../../../Components/SearchBar";
import Button from "../../../../Components/Button";
import CirclePlus from "../../../../assets/icons/circleplus";
import PencilLine from "../../../../assets/icons/PencilLine";
import TrashIcon from "../../../../assets/icons/TrashIcon";
import ServiceAddEditModal from "./ServiceAddEditModal";

type Props = {
  onClose: () => void;
};

const ServiceCategoryModal = ({ onClose }: Props) => {
//   const [editId, setEditId] = useState<string | null>(null);
//   const [allcategoryData, setAllcategoryData] = useState<any[]>([]);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState({ addForm: false });
  const [searchValue, setSearchValue] = useState("");

  const handleModalToggle = (addForm = false) => {
    setIsModalOpen((prev) => ({ ...prev, addForm }));
  };

  return (
    <>
      <div className="bg-[#F8F4F4] p-4 rounded-xl">
        <div className="flex justify-between items-center mb-4 px-3">
          <div className="flex">
            <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
              <img src={bg} className="w-8" alt="Back to Home Icon" />
            </div>
            <div className="ms-4">
              <h1 className="text-base font-bold text-deepStateBlue">Manage Category</h1>
              <h1 className="text-xs font-medium text-deepStateBlue">
                Organize and control product or service categories efficiently
              </h1>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900">&times;</button>
        </div>

        <div className="flex my-2 p-2">
          <div className="w-[50%]">
            <SearchBar searchValue={searchValue} onSearchChange={setSearchValue} placeholder="Search Category" />
          </div>
          <div onClick={() => { handleModalToggle(true); }} className="ml-auto">
            <Button>
              <CirclePlus size={18} />
              <p className="text-[14px] font-medium"><b>Add Category</b></p>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4">
         
              <div  className="p-3 bg-[#FFFFFF]">
              
                  <div className="w-40 h-28">
                    <img className="w-40 h-24" src={bg}  />
                  </div>
             
                <h1 className="text-sm font-semibold text-[#2C3E50] my-1">sgfrs</h1>
                <h1 className="text-xs text-[#818894] font-normal">rgdf</h1>
                <div className="flex my-1 gap-1">
                  <div >
                    <PencilLine color="#3C7FBC" />
                  </div>
                  <div className="cursor-pointer">
                    <TrashIcon />
                  </div>
                </div>
              </div>

              <div  className="p-3 bg-[#FFFFFF]">
              
              <div className="w-40 h-28">
              <img className="w-40 h-24" src={bg}  />

              </div>
         
            <h1 className="text-sm font-semibold text-[#2C3E50] my-1">sgfrs</h1>
            <h1 className="text-xs text-[#818894] font-normal">rgdf</h1>
            <div className="flex my-1 gap-1">
              <div >
                <PencilLine color="#3C7FBC" />
              </div>
              <div className="cursor-pointer">
                <TrashIcon />
              </div>
            </div>
          </div>

          <div  className="p-3 bg-[#FFFFFF]">
              
              <div className="w-40 h-28">            
                        <img className="w-40 h-24" src={img}  />

              </div>
         
            <h1 className="text-sm font-semibold text-[#2C3E50] my-1">sgfrs</h1>
            <h1 className="text-xs text-[#818894] font-normal">rgdf</h1>
            <div className="flex my-1 gap-1">
              <div >
                <PencilLine color="#3C7FBC" />
              </div>
              <div className="cursor-pointer">
                <TrashIcon />
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <Modal
        open={isModalOpen.addForm}
        onClose={() => handleModalToggle()}
        className="w-[35%]"
      >
        <ServiceAddEditModal  onClose={() => handleModalToggle()} />
      </Modal>
    </>
  );
};

export default ServiceCategoryModal;
