import { useState } from "react"
import Button from "../../../Components/Button"
import Input from "../../../Components/Form/Input"
import Modal from "../../../Components/modal/Modal"
import CirclePlus from "../../../assets/icons/circleplus"
import bgImg1 from  "../../../assets/images/Credit card-bro 2.png"
import bgImg2 from  "../../../assets/images/Ribbon-3.png"
type Props = {}

function NewCashModal({ }: Props) {
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

            <Modal open={isModalOpen} onClose={closeModal} className="w-[719px] text-start p-8  bg-[#F8F4F4]">
                <div
                    className=" rounded-2xl bg-[#ffd6da] flex ps-5 justify-between items-center relative h-[143.51px]"
                   
                >
                    <div className="relative flex-1">
                        <p className="text-[#383c42] font-bold text-base">Create Cash Account</p>
                        <p className="text-text_tertiary text-xs mt-2">
                        Set up your cash account effortlessly!
                        </p>
                    </div>
                    <div className="flex ml-auto">
                    <img src={bgImg2} alt="" className="h-[140px] mt-2" />

                    <img src={bgImg1} alt="" className="-[138px] -my-8 " />
                    </div>
                </div>


                <div className="mt-6 rounded-2xl text-text_tertiary text-sm">
                    <form>
                        <p className="mb-2">Account Name</p>
                        <Input placeholder="Enter Account Name" />

                        <div className="mt-4 ">
                            <p className="mb-2">Account Code</p>
                            <Input
                                placeholder="Enter code"
                            />
                        </div>

                        <div className="mt-4">
                            <p className="mb-2">Description</p>
                            <Input placeholder="Enter Description" size="lg" />

                        </div>


                    </form>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                    <Button onClick={closeModal} variant="secondary" className="text-sm font-semibold pl-14 pr-14">
                        Cancel
                    </Button>
                    <Button className="pl-14 pr-14">save</Button>
                </div>


            </Modal>
        </div>
    )
}

export default NewCashModal