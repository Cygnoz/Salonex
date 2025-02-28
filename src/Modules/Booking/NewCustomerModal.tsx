import Button from "../../Components/Button"
import Input from "../../Components/Form/Input"

type Props = {
    onClose: () => void
}

const NewCustomerModal = ({ onClose }: Props) => {
    return (
        <div>
            <div className="p-6">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-base font-semibold text-[#333333]">Are you a New Customer?</h1>
                        <p className="mt-2 text-[#A3A9B3] text-xs font-normal">Enter below details to Register You as a New Customer</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-3xl w-3 h-3 cursor-pointer text-[#2C3E50]"
                    >
                        &times;
                    </button>
                </div>

                <form>

                    <div className="grid grid-cols-1 gap-3 my-4 px-2">
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-full" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-full" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-full" />
                    </div>

                </form>

                <div className="flex gap-2 justify-end mt-6">
                    <Button variant="secondary" className="w-28 h-8 items-center flex justify-center text-xs font-semibold">Close</Button>
                    <Button variant="primary" className="w-28 h-8 items-center flex justify-center text-xs font-semibold">Done</Button>

                </div>
            </div>
        </div>
    )
}

export default NewCustomerModal