import  { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import Modal from "../../../Components/modal/Modal";
import bgImg1 from "../../../assets/images/money_on_hand-removebg-preview 1.png";
import bgImg2 from "../../../assets/images/Ribbon-3.png";

import Input from "../../../Components/Form/Input";
import Select from "../../../Components/Form/Select";
import TextArea from "../../../Components/Form/TextArea";
type Props = {};

const AddPaymentModal = ({}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>
        <CirclePlus />
        <p>Add Payment</p>
      </Button>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="w-[50%] text-start p-8 bg-[#F8F4F4]"
      >
        <div
          className=" rounded-2xl flex justify-between items-center relative ps-5 pe-10  bg-[#ffd6da] "
         
        >
          <div className="relative flex-1">
            <p className="text-[#383c42] font-bold text-base">
              Account Details
            </p>
            <p className="text-text_tertiary text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex ">
          <img src={bgImg2} alt="" />
          <img src={bgImg1} alt="" />

           
          </div>
        </div>

        <div className="mt-6 rounded-2xl text-text_tertiary text-sm">
          <form>
          <div className=" grid grid-cols-3 gap-4 ">
                <Select  placeholder="Select Payment ID" label="Payment ID" options={[]} />
    
               
                  <Input placeholder="" type="date" label="Expense Data" />
               
    
               
                  <Input placeholder="Enter Amount" label="Total Amount"  />
              
          </div>
        <div className="mt-3">  <TextArea label="Remark"/></div>
          </form>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            onClick={closeModal}
            variant="secondary"
            className="text-sm font-semibold pl-14 pr-14"
          >
            Cancel
          </Button>
          <Button className="pl-14 pr-14">save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddPaymentModal;
