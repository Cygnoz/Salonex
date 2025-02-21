import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import bg from "../../../assets/images/Layer_x0020_1 (1).png"
import BrowseUploads from "../../../assets/icons/BrowseUploads"
import Input from "../../../Components/Form/Input"
import Select from "../../../Components/Form/Select"

import CirclePlus from "../../../assets/icons/circleplus"

import UserDuoIcon from "../../../assets/icons/UserDuoIcon"
import BoxIcon from "../../../assets/icons/BoxIcon"
import Button from "../../../Components/Button"
import { useState } from "react"

type Props = {
    onClose?: () => void;
}

const ProductsAdd = ({ onClose }: Props) => {
    const [quantityAlert, setQuantityAlert] = useState(0);
    return (
        <div>
            <div className="flex">
                <Link to={"/itemhub/products-home"}>
                    <div className="flex justify-center items-center h-11 w-11 bg-[#FFFFFF] rounded-full">
                        <BackIcon />
                    </div>
                </Link>
                <div className='flex ms-1'>
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
                        <img src={bg} className="w-8" alt="Back to Home Icon" />
                    </div>
                    <div className='ms-4'>
                        <h1 className="text-base font-bold text-deepStateBlue">Retail product</h1>
                        <h1 className="text-xs font-medium text-deepStateBlue">organize and update brand information for your products.</h1>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3 my-4">

                <form className="w-full mt-3">
                    <div className="mx-2 border-dashed border-2 border-[#B5636A] p-4 h-24 rounded gap-2 text-center mt-2">
                        <p className="text-[10px] mt-1 text-[#818894]">
                            <div className="flex justify-center">
                                <BrowseUploads />
                            </div>
                            Maximum file size allowed is 5MB
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 p-2">
                        <Select
                            placeholder="Select Category"
                            label="State"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />

                        <Input
                            placeholder="Enter Description"
                            label="product Name"

                        />
                    </div>
                    <div className="flex ms-3 gap-2 my-2">
                        <CirclePlus color="#495160" />
                        <h1 className="text-sm font-normal">Add New Category</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-2 p-2 my-2">
                        <Select
                            placeholder="Others"
                            label="UOM"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />

                        <Input
                            placeholder="Enter Barcode"
                            label="BarCode"

                        />
                        <Select
                            placeholder="Select Brand"
                            label="Brand"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />
                        <Select
                            placeholder="Select Manufacture"
                            label="Manufacture"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2 p-2 my-2">



                        <Select
                            placeholder="Select Rack"
                            label="Rack"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />

                        <Input
                            placeholder="Enter Price"
                            label="CostPrice"

                        />

                        <Input
                            placeholder="Enter Full Price"
                            label="Full Price"

                        />

                        <Input
                            placeholder="Enter Special Price"
                            label="Special Price"

                        />

                    </div>
                    <hr />
                    <h1 className="text-base font-bold text-[#2C3E50] p-1">Tax Info</h1>

                    <div className="grid grid-cols-3 gap-2 p-2 my-1">
                        <Input
                            placeholder="Enter tax Percentage"
                            label="Tax %"

                        />

                        <Input
                            placeholder="Enter HSN Code"
                            label="HSN Code"

                        />
                        <Input
                            placeholder="Enter Cess"
                            label="Additional Cess"

                        />
                    </div>
                    <div className="flex gap-2 ms-2">
                        <h1 className="text-sm font-medium text-[#495160]">Inclusive of all Taxes:</h1>
                        <input
                            type="checkbox"

                            className="w-5 h-5"
                        />
                        <h1 className="text-sm font-medium text-[#495160]">sales </h1>
                        <input
                            type="checkbox"

                            className="w-5 h-5"
                        />
                        <h1 className="text-sm font-medium text-[#495160]">Purchase</h1>
                    </div>
                    <h1 className="text-base font-bold text-[#2C3E50] p-1 mt-2">Staff Commission</h1>

                    <div className="bg-[#FAF1F1] p-4 rounded-sm">
                        <div className="flex gap-2">
                            <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center">
                                <UserDuoIcon color="#C96E76" />
                            </div>

                            <h1 className="mt-3 text-sm font-normal">Staff commission calculated for this particular product</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 my-1">
                        <Input
                            placeholder="Enter Commission"
                            label="Staff Commission"

                        />
                    </div>

                    <h1 className="text-base font-bold text-[#2C3E50] p-1 mt-2">Stock Control</h1>

                    <div className="bg-[#FAF1F1] p-4 rounded-sm">
                        <div className="flex gap-2">
                            <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center">
                                <BoxIcon color="#C96E76" />
                            </div>

                            <h1 className="mt-3 text-sm font-normal">List the available in stock quantities for the product. Also set a minimum quantity level and get alerts when the stock is less</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-2 my-1">
                        <Input
                            placeholder="Enter Commission"
                            label="In Stock Quantity"
                        />

                        <Select
                            placeholder="Select Rack"
                            label="Unit"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        />
                        <Input
                            placeholder="Enter Commission"
                            label="Quantity (1 Pack)"
                        />

                    </div>

                    <div className=" flex grid-cols-3 gap-1 mt-3">
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={() => setQuantityAlert((prev: number) => Math.max(1, prev - 1))}
                                className="w-10 h-10 mt-1 flex items-center justify-center text-lg"
                            >
                                -
                            </Button>

                            <div className="-mt-1">
                                <Input
                                    value={quantityAlert}
                                    placeholder=""
                                    label="Quantity Alert Level"

                                />
                            </div>

                            <Button
                                onClick={() => setQuantityAlert((prev: number) => prev + 1)}
                                className="w-10 h-10  mt-1 flex items-center justify-center text-lg"
                            >
                                +
                            </Button>

                        </div>
                        <div className=" flex grid-cols-1 gap-1 ms-2">

                            <Input
                                placeholder="Enter Product Usage"
                                label="Product Usage"

                            />
                        </div>




                    </div>

                    <div className="flex justify-end gap-2 mt-6 pb-4 my-3 me-2 ">
                        <Button
                            variant="tertiary"
                            className="h-10 text-sm border rounded-xl"
                            size="lg"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            className="h-10 text-sm border rounded-s-xl"
                            size="lg"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default ProductsAdd