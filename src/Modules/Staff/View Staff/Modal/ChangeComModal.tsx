import { useState } from "react";
import Button from "../../../../Components/Button"
import Modal from "../../../../Components/modal/Modal";
import RadioButton from "../../../../Components/Form/RadioButton";

type Props = {}

function ChangeComModal({ }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [selected, setSelected] = useState("");
  const handleRadioChange = (value: string) => {
    setSelected(value);
  };
  return (
    <div>
      <Button size="sm" onClick={openModal} variant="secondary" className="text-sm ">
        Change Commission Profile
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[50%] bg-[#F7F7F7] text-start px-7 py-6">
        <div className="flex justify-between">
          <h1 className="text-[14px] py-3 font-semibold text-[#2C3E50]">
            Assign Commission Profile
          </h1>
          <button className="me-3" onClick={closeModal} >
            ✖
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5">

          <div className="bg-[#FFFFFF] rounded-lg p-4">
            <div className="flex justify-between">
              <h1 className="text-[#2C3E50] text-[14px] font-semibold">
                Flat Hike
              </h1>
              <RadioButton
                id="When a Purchase Receive is recorded"
                name="purchaseOrderClose"
                selected={selected}
                onChange={handleRadioChange}
              />
            </div>
            <p className="text-[12px] text-[#818894] mt-2">
              Lorem ipsum dolor sit ame and the first inpu but thint
            </p>
            <div className="bg-[#FFEDEFA3] p-2 grid grid-cols-2 gap-2 mt-4 rounded-lg">
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  Commission %
                </p>
                <p className="text-[#495160] text-[10px]">
                  Commission Type
                </p>
                <p className="text-[#495160] text-[10px]">
                  Thrushold Amount
                </p>
              </div>
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
                <p className="text-[#495160] text-[10px]">
                  byservice
                </p>
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-lg p-4">
            <div className="flex justify-between">
              <h1 className="text-[#2C3E50] text-[14px] font-semibold">
                Flat Hike
              </h1>
              <RadioButton
                id="When a Purchase Receive is recorded"
                name="purchaseOrderClose"
                selected={selected}
                onChange={handleRadioChange}
              />
            </div>
            <p className="text-[12px] text-[#818894] mt-2">
              Lorem ipsum dolor sit ame and the first inpu but thint
            </p>
            <div className="bg-[#FFEDEFA3] p-2 grid grid-cols-2 gap-2 mt-4 rounded-lg">
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  Commission %
                </p>
                <p className="text-[#495160] text-[10px]">
                  Commission Type
                </p>
                <p className="text-[#495160] text-[10px]">
                  Thrushold Amount
                </p>
              </div>
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
                <p className="text-[#495160] text-[10px]">
                  byservice
                </p>
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-lg p-4">
            <div className="flex justify-between">
              <h1 className="text-[#2C3E50] text-[14px] font-semibold">
                Flat Hike
              </h1>
              <RadioButton
                id="When a Purchase Receive is recorded"
                name="purchaseOrderClose"
                selected={selected}
                onChange={handleRadioChange}
              />
            </div>
            <p className="text-[12px] text-[#818894] mt-2">
              Lorem ipsum dolor sit ame and the first inpu but thint
            </p>
            <div className="bg-[#FFEDEFA3] p-2 grid grid-cols-2 gap-2 mt-4 rounded-lg">
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  Commission %
                </p>
                <p className="text-[#495160] text-[10px]">
                  Commission Type
                </p>
                <p className="text-[#495160] text-[10px]">
                  Thrushold Amount
                </p>
              </div>
              <div className="">
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
                <p className="text-[#495160] text-[10px]">
                  byservice
                </p>
                <p className="text-[#495160] text-[10px]">
                  10
                </p>
              </div>
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
    </div>
  )
}

export default ChangeComModal