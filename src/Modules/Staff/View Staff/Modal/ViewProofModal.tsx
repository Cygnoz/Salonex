import { useState } from "react";
import Button from "../../../../Components/Button"
import Modal from "../../../../Components/modal/Modal";
import Eye from "../../../../assets/icons/Eye";
import PdfIcon from "../../../../assets/icons/PdfIcon";

type Props = {}

function ViewProofModal({ }: Props) {
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
        View Proof
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[50%] bg-[#E7E7ED] text-start px-7 py-6">

        <div className="flex justify-between">
          <h1 className="text-[14px] py-3 font-semibold text-[#2C3E50]">
            Proof
          </h1>
          <button className="me-3" onClick={closeModal} >
            ✖
          </button>
        </div>
        <div className="bg-white rounded-xl">
          <div className="bg-[#E7E7ED] rounded-xl p-3 flex justify-between">
            <div className="flex gap-2">

              <PdfIcon />
              <div>
                <p className="text-[#4F5152] text-[12px] font-normal">My Adhaar.pdf</p>
                <p className="text-[#818894] text-[12px] ">94 KB of 94 KB</p>
              </div>
            </div>
            <div className="flex gap-2">

              <p className="text-[#4F5152] text-[13px] pt-0.5 ">View</p> <Eye color="#3C7FBCC4" />
            </div>


          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} className="text-sm font-semibold">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default ViewProofModal