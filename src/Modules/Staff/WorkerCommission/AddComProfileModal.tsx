import { ChangeEvent, FormEvent, useRef, useState } from "react"
import Button from "../../../Components/Button"
import Input from "../../../Components/Form/Input"
import Modal from "../../../Components/modal/Modal"
import CirclePlus from "../../../assets/icons/circleplus"
import bgImg1 from "../../../assets/images/Credit card-bro 2.png"
import bgImg2 from "../../../assets/images/Ribbon-3.png"
import Pen from "../../../assets/icons/Pen"
import Select from "../../../Components/Form/Select"

type Props = { page?: string };

const AddComProfileModal = ({ page }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);


    // If the value is negative and the field is openingBalance, reset it to 0


  };


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const formRef = useRef<HTMLFormElement>(null);

  const handleExternalSubmit = () => {
    setModalOpen(false);

  };

  const CommissionOptions = [
    { value: "Monthly", label: "Monthly" },
    { value: "Daily", label: "Daily" },
  ];

  return (
    <div>
      {page === "Edit" ? (
        <div onClick={openModal} className="cursor-pointer">
          <Pen color={"#C88000"} />
        </div>
      ) : (
        <Button onClick={openModal}>
          <CirclePlus />
          <p> Add Commission Profile</p>
        </Button>
      )}

      <Modal open={isModalOpen} onClose={closeModal} className="w-[50%] text-start px-7 py-6">
        <div
          className=" rounded-2xl bg-[#ffd6da] flex ps-5 justify-between items-center relative h-[143.51px]"

        >
          <div className="relative flex-1">
            <p className="text-[#383c42] font-bold text-base">Add Commission Profile</p>
            <p className="text-text_tertiary text-xs mt-2">
              Record and manage commission <br /> payouts for workers
            </p>
          </div>
          <div className="flex ml-auto">
            <img src={bgImg2} alt="" className="h-[140px] mt-2" />

            <img src={bgImg1} alt="" className="-[138px] -my-8 " />
          </div>
        </div>


        <div className="mt-4 bg-[#FAF7F2] p-4 rounded-2xl text-text_tertiary text-sm">
          <form ref={formRef} onSubmit={onSubmit}>
            <Input
              name="Profilename"
              label="Profile Name"
              onChange={handleChange}
              placeholder="Enter  name"
            />

            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="">
                <label className="block text-xs text-[#495160] font-normal text-deepStateBlue"
                  htmlFor="Proof">Select Commission Type</label>
                <div className="relative w-full">
                  <Select options={CommissionOptions} />
                </div>
              </div>
              <Input
                name="Commission"
                label="Commission"
                onChange={handleChange}
                placeholder="%"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="Threshold"
                label="Threshold Amont (Service)"
                onChange={handleChange}
                placeholder=""
              />
              <Input
                name="Threshold"
                label="Threshold Amont (Sale)"
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </form>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold">
            Cancel
          </Button>
          <Button onClick={handleExternalSubmit}>save</Button>
        </div>
      </Modal>
    </div>
  )
}

export default AddComProfileModal