import { useState } from "react";
import Button from "../../../Components/Button"
import Modal from "../../../Components/modal/Modal";
import Input from "../../../Components/Form/Input";
import accountsBgImage from "../../../assets/images/bankBgImage.png"
import Select from "../../../Components/Form/Select";
import CirclePlus from "../../../assets/icons/circleplus";
import CheveronDown from "../../../assets/icons/CheveronDown";

type Props = {}

function NewBankModal({}: Props) {
      const [isModalOpen, setModalOpen] = useState(false);
    
      const openModal = () => {
        setModalOpen(true);
      };
      const closeModal = () => {
        setModalOpen(false);
      }
    
  return (
    <div>
        <Button onClick={openModal}>
        <CirclePlus />
        <p> Create Account</p>
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[649px] text-start p-8 bg-[#F8F4F4]">
        <div
          className="p-6 rounded-2xl flex justify-between items-center relative bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url(${accountsBgImage})`,
          }}
        >
          <div className="relative flex-1">
            <p className="text-[#2C3E50] font-bold text-base">Create Bank Account</p>
            <p className="text-[#4B5C79] text-xs mt-2">
            Open a new bank account swiftly and securely.
            </p>
          </div>
        </div>


        <div className="mt-6 rounded-2xl text-text_tertiary text-sm">
          <form>
            <p className="mb-2">Account Name</p>
            <Input placeholder="Enter Account Name" />

            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Account Code</label>
                <Input
                  placeholder="Enter code"
                />
              </div>

              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Account Number</label>
                <Input
                  placeholder="Enter account number"
                />
              </div>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-labelColor text-sm">Opening Balance</label>
                <div className="flex">
                  <div className="relative w-24 ">
                    <select
                      className="block appearance-none cursor-pointer w-full h-9 text-[#818894] bg-white border border-borderColor 
                                   text-sm pl-3.5 pr-2 rounded-l-full leading-tight 
                                   focus:outline-none"
                      name="openingType"
                    >
                      <option value="Debit">Dr</option>
                      <option value="Credit">Cr</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CheveronDown color="gray" />
                    </div>
                  </div>
                  <input
                    type="number"
                    min={0}
                    className="text-sm w-[100%] rounded-r-full text-start bg-white border border-borderColor h-9 py-2 px-3 focus:outline-none"
                    placeholder="Enter Opening Balance"
                    name="openingBalance"
                  />
                </div>
                </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">IFSC Code</label>
                <Input
                  placeholder="Enter IFSC code"
                />
              </div>

              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Currency</label>
                <Select
                  options={[]}
                  placeholder="Select currency"
                />
              </div>
            </div>


            <div className="mt-4">
              <p className="mb-2">Description</p>
              <Input placeholder="Enter Description" size="lg" />

            </div>


          </form>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold pl-14 pr-14">
            Cancel
          </Button>
          <Button className="pl-14 pr-14">save</Button>
        </div>


      </Modal>
    </div>
  )
}

export default NewBankModal