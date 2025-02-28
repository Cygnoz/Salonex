import { useState } from "react";
import Button from "../../../../Components/Button"
import Modal from "../../../../Components/modal/Modal";
import CirclePlus from "../../../../assets/icons/circleplus";
import CalendarDays from "../../../../assets/icons/CalendarDays";
import DateInput from "../../../../Components/DateInput";
import RadioButton from "../../../../Components/Form/RadioButton";
import TextArea from "../../../../Components/Form/TextArea";

type Props = {}

function AttendanceModal({ }: Props) {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAttOpen, setAttModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const AttopenModal = () => {
    setAttModalOpen(true);
  };

  const AttcloseModal = () => {
    setAttModalOpen(false);
  };

  const Status = [
    {
      title: "Total Days",
      days: "31"
    },
    {
      title: "Working Days",
      days: "0"
    },
    {
      title: "Present Days",
      days: "0"
    },
    {
      title: "Absent Days",
      days: "0"
    },
    {
      title: "Salary ",
      days: "30000"
    },
    {
      title: "Half Days",
      days: "0"
    },
    {
      title: "Deduction",
      days: "0"
    },
    {
      title: "LOP Days",
      days: "0"
    },

  ]


  const [selected, setSelected] = useState("");
  const handleRadioChange = (value: string) => {
    setSelected(value);
  };
  return (
    <div>
      <Button size="sm" onClick={openModal} variant="secondary" className="text-sm ">
        Attendance
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[50%] bg-[#F7F7F7] text-start px-7 py-6">
        <div className="flex justify-between">
          <h1 className="text-[18px] py-3 font-bold text-[#2C3E50]">
            View Attendance
          </h1>
          <Button onClick={AttopenModal}>
            <CirclePlus />
            <p> Add Attendance</p>
          </Button>
        </div>
        <div className="bg-[#FFFFFF] p-4 my-2 rounded-xl">
          <h1 className="flex gap-2 text-[15px] text-[#495160] font-semibold">
            Monthly Status
            <CalendarDays width={20} height={20} />
          </h1>
          <div className="grid grid-cols-4 gap-4 m-4">
            {
              Status.map((stat) => (

                <div className="bg-[#F3F8FF] p-3 text-center rounded-xl">
                  <p className="flex justify-center items-center">
                    <CalendarDays color="#667085" width={20} height={20} />
                  </p>
                  <p className="py-2 text-[12px] text-[#37393A] font-medium">
                    {stat.title}
                  </p>
                  <p className=" text-[12px] text-[#37393A] font-bold">

                    {stat.days}
                  </p>
                </div>
              ))
            }

          </div>
          <div className="grid grid-cols-2  p-3 gap-4">
            <div className="flex justify-between border border-[#5FBF7A] p-2 rounded-xl">
              <p className="text-[#2C3E50] text-[14px] font-normal">
                Net Payout
              </p>
              <p className="text-[#2C3E50] text-[14px] font-bold">
                65000
              </p>
            </div>
            <div className="flex justify-between border border-[#5FBF7A] p-2 rounded-xl">
              <p className="text-[#2C3E50] text-[14px] font-normal">
                Balance
              </p>
              <p className="text-[#2C3E50] text-[14px] font-bold">
                65000
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold">
            Cancel
          </Button>
          <Button onClick={closeModal}>save</Button>
        </div>
      </Modal>


      <Modal open={isAttOpen} onClose={AttcloseModal} className="w-[50%] bg-[#E7E7ED] text-start px-7 py-6">
        <h1 className="text-[18px] py-3 font-bold text-[#2C3E50]">
          Add Attendance
        </h1>
        <div className="bg-[#FFFFFF] p-4 my-2 rounded-xl">
          <div className="bg-[#DB828A4F] p-4 my-2 rounded-xl mb-3">
            <img src="" alt="" />
            <div>
              <p className="text-[#263238] text-[14px] font-medium">Green</p>
              <p className="text-[#263238] text-[14px] font-medium">Card number : <span className="font-bold">00986 456</span></p>
            </div>
          </div>
          <DateInput
            label="Select Date" />
          <div className="flex gap-5 py-5">
            <RadioButton
              id="When a Purchase Receive is recorded"
              name="Present"
              selected={selected}
              onChange={handleRadioChange}
              label="Present"
            />
            <RadioButton
              id="When a Purchase Receive is recorded"
              name="purchaseOrderClose"
              selected={selected}
              onChange={handleRadioChange}
              label="Hlaf Day"
            />
            <RadioButton
              id="When a Purchase Receive is recorded"
              name="purchaseOrderClose"
              selected={selected}
              onChange={handleRadioChange}
              label="Absent"
            />
          </div>
          <TextArea
            label="Note" />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={AttcloseModal} variant="secondary" className="text-sm font-semibold">
            Cancel
          </Button>
          <Button onClick={AttcloseModal}>save</Button>
        </div>
      </Modal>
    </div>
  )
}

export default AttendanceModal