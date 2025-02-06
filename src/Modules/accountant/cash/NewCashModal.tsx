import { useState } from "react"
import Button from "../../../Components/Button"
import Input from "../../../Components/Form/Input"
import Modal from "../../../Components/modal/Modal"
import accountsBgImage from "../../../assets/images/cashBgimage.png"
import CirclePlus from "../../../assets/icons/circleplus"

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

            <Modal open={isModalOpen} onClose={closeModal} className="w-[649px] text-start p-8 bg-[#F8F4F4]">
                <div
                    className="p-6 rounded-2xl flex justify-between items-center relative bg-cover bg-no-repeat bg-right"
                    style={{
                        backgroundImage: `url(${accountsBgImage})`,
                    }}
                >
                    <div className="relative flex-1">
                        <p className="text-[#004D4D] font-bold text-base">Account Details</p>
                        <p className="text-text_tertiary text-xs mt-2">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
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