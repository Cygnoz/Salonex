import { useState } from "react";
import Button from "../../../../Components/Button"
import Modal from "../../../../Components/modal/Modal";
import DateInput from "../../../../Components/DateInput";
import Input from "../../../../Components/Form/Input";
import TextArea from "../../../../Components/Form/TextArea";
import bg from '../../../../assets/images/staffaddpaymentbg.png'
type Props = {}

function AddPaymentModal({ }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>

      <Button size="sm" onClick={openModal} variant="secondary" className="text-sm ">
        Add Payment
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[50%] bg-[#E7E7ED] text-start px-7 py-6">
        <div className="">
         
          <div className="flex justify-between">
          <h1 className="text-[18px] py-3 font-bold text-[#2C3E50]">
            Add Payment
          </h1>
          <button className="me-3" onClick={closeModal} >
            ✖
          </button>
        </div>
          <div
            className=" rounded-2xl  flex ps-5 justify-between items-center relative h-[143.51px]"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
          }}
          >
            <div className="relative flex-1">
              <p className="text-[#383c42] font-bold text-base">Add Payment</p>
              <p className="text-text_tertiary text-xs mt-2">
                Record and manage payments
              </p>
            </div>
            
          </div>

          <div className="bg-[#FFF7F9] p-4 my-2 rounded-xl">
            <div className="grid grid-cols-2 gap-2 py-2">
              <DateInput label="Payment Date" />
              <Input label="Total Amount" />
            </div>
            <TextArea label="Remark" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold">
            Cancel
          </Button>
          <Button onClick={closeModal}>save</Button>
        </div>
      </Modal>
    </div>
  )
}

export default AddPaymentModal