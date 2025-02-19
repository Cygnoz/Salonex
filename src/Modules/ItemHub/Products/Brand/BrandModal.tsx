import { useState } from 'react';
import bg from '../../../../assets/images/Frame 630214.png.png'
import bg2 from '../../../../assets/images/Rectangle 13 (1).png'
import bg1 from '../../../../assets/images/Rectangle 13.png'
import Modal from '../../../../Components/modal/Modal';
import SearchBar from '../../../../Components/SearchBar';
import Button from '../../../../Components/Button';
import CirclePlus from '../../../../assets/icons/circleplus';
import PencilLine from '../../../../assets/icons/PencilLine';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import BrandAddModal from './BrandAddModal';


type Props = {
    onClose: () => void;
}

const BrandModal = ({ onClose }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState({
        addForm: false,
    });

    // Function to toggle modal visibility
    const handleModalToggle = (addForm = false) => {
        setIsModalOpen((prev) => ({
            ...prev,
            addForm,
        }));
    };

    const [searchValue, setSearchValue] = useState("");
  return (
    <>
    <div className='bg-[#F8F4F4] p-4 rounded-xl'>
       

        <div className="flex justify-between items-center mb-4 px-3">
       
         <div className='flex'>
        <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
        <img src={bg} className="w-8" alt="Back to Home Icon" />
        </div>
         <div className='ms-4'>
         <h1 className="text-base font-bold text-deepStateBlue">Manage Brand</h1>
         <h1 className="text-xs font-medium text-deepStateBlue">organize and update brand information for your products.</h1>
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
                placeholder="Search Brand"
              />
            </div>
            <div onClick={()=>handleModalToggle(true)}className="ml-auto">
            <Button >
          <CirclePlus size={18} />
          <p className="text-[14px] font-medium">
            <b>Add Brand</b>
          </p>
        </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg2} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg1} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Garnier</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg2} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Brand 3</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4">
          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg1} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Matrix</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg2} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Brand 6</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
            <div>
                <img src={bg1} alt="" />
            </div>
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>
          </div>

    </div>
    <Modal open={isModalOpen.addForm} onClose={() => handleModalToggle()} className="w-[35%]">
        <BrandAddModal  onClose={() => handleModalToggle()} />
      </Modal>
    </>
  )
}

export default BrandModal