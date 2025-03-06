import { useState } from 'react';
import bg from '../../../assets/images/Frame 630214.png'
import Input from '../../../Components/Form/Input';
import RadioButton from '../../../Components/Form/RadioButton';
import Select from '../../../Components/Form/Select';
import SearchBar from '../../../Components/SearchBar';
import Rupee from '../../../assets/icons/Rupee';
import CheveronDown from '../../../assets/icons/CheveronDown';
import Button from '../../../Components/Button';
type Props = {
    onClose?: () => void;
};

const AddMembership = ({ onClose }: Props) => {
    const [type, setType] = useState<"Currency" | "Percentage">("Currency");
    const [types, setTypes] = useState<"All" | "Selected">("All");
    const [searchValue, setSearchValue] = useState("");
    const [isDiscountSelected, setIsDiscountSelected] = useState(false);

    const [DiscountSelected, setDiscountSelected] = useState(true);
    const [isExpand, setIsExpand] = useState(false);
    const handleExpand = () => setIsExpand((prev) => !prev);


    return (
        <div className='p-3 h-[90vh] overflow-y-auto hide-scrollbar'>

            <div className="flex justify-between items-center mb-4 px-3">

                <div className='flex'>
                    <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center">
                        <img src={bg} className="w-8" alt="Back to Home Icon" />
                    </div>
                    <div className='ms-4'>
                        <h1 className="text-base font-bold text-deepStateBlue">Add MemberShip</h1>
                        <h1 className="text-xs font-medium text-deepStateBlue">track and organize details related to product manufacturers</h1>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
                >
                    &times;
                </button>
            </div>

            <div className='bg-[#F3F1EE] p-4'>
                <form className="w-full mt-3">
                    <div className="grid grid-cols-1 gap-2 p-2 ">
                        <Input
                            placeholder="Enter  Name"
                            label="Plan Name"
                            required

                        />
                        <Input
                            placeholder="Enter Description"
                            label="Description"
                        />
                    </div>

                    <p className="text-text_primary text-xs font-semibold my-3">
                        Select Plan Type
                    </p>
                    <div className="flex gap-3 mb-3">
                        {/* Count Option */}
                        <div
                            className='flex gap-2 items-center bg-white p-2 w-[30%] rounded-lg cursor-pointer'
                            onClick={() => {
                                setType("Currency");
                                setIsDiscountSelected(false); // Hide discount-related inputs
                                setDiscountSelected(true)
                            }}
                        >
                            <p className="text-text_primary">%</p>
                            <p className="text-xs text-text_primary">Count</p>
                            <div className="ml-auto">
                                <RadioButton
                                    id="Currency"
                                    label=''
                                    name="planType"
                                    selected={type}
                                    onChange={() => {
                                        setType("Currency");
                                        setIsDiscountSelected(false);
                                        setDiscountSelected(true)
                                    }}
                                />
                            </div>
                        </div>

                        {/* Discount Option */}
                        <div
                            className='flex gap-2 items-center bg-white p-2 w-[30%] rounded-lg cursor-pointer'
                            onClick={() => {
                                setType("Percentage");
                                setIsDiscountSelected(true); // Show discount-related inputs
                                setDiscountSelected(false)
                            }}
                        >
                            <p className="text-text_primary">%</p>
                            <p className="text-xs text-text_primary">Discount</p>
                            <div className="ml-auto">
                                <RadioButton
                                    label=''
                                    id="Percentage"
                                    name="planType"
                                    selected={type}
                                    onChange={() => {
                                        setType("Percentage");
                                        setIsDiscountSelected(true);
                                        setDiscountSelected(false)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>


                        <Select
                            placeholder="Select Duration"
                            label="Duration"
                            options={[
                                { label: "option1", value: "123" },
                                { label: "option2", value: "456" },
                                { label: "option3", value: "789" }
                            ]}
                        /></div>



                    {isDiscountSelected && (
                        <>
                            {/* Discount Input */}
                            <Input
                                placeholder="Enter Discount"
                                label="Discount (%)"
                            />

                            {/* Discount is Applicable For */}
                            <p className="text-text_primary text-xs font-semibold mt-3">
                                Discount is Applicable for
                            </p>

                            <div className="flex items-start gap-[22px] text-[#495160] mt-2">
                                {/* All Services */}
                                <label htmlFor="all" className="flex items-center cursor-pointer">
                                    <RadioButton
                                        label=''
                                        id="All"
                                        name="discountApplication"
                                        selected={types}
                                        onChange={() => setTypes("All")}
                                    />
                                    <p className="text-xs cursor-pointer ml-2">All Services</p>
                                </label>

                                {/* Selected Services */}
                                <label htmlFor="selected" className="flex items-center cursor-pointer">
                                    <RadioButton
                                        label=''
                                        id="Selected"
                                        name="discountApplication"
                                        selected={types}
                                        onChange={() => setTypes("Selected")}
                                    />
                                    <p className="text-xs cursor-pointer ml-2">Selected Services</p>
                                </label>
                            </div>
                        </>
                    )}

                    <div className='my-3'>

                        <div className='flex justify-between'>
                            <h1>Select Service</h1>
                            <div className="w-[50%]">
                                <SearchBar

                                    searchValue={searchValue}
                                    onSearchChange={setSearchValue}
                                    placeholder="Search Service"
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 overflow-x-auto whitespace-nowrap p-3 hide-scrollbar'>


                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>

                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>

                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="w-36 h-fit p-3 my-3 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">

                                <p className=' ml-auto'> <input
                                    type="checkbox"

                                    className="w-5 h-5"
                                /></p>
                                <img src={bg} alt="" className="w-24 h-24 object-cover" />
                                <h1 className="text-lg font-semibold mt-2">Hair Cutting</h1>
                                <h1 className="text-sm text-gray-600">Price</h1>
                                <div className="flex items-center gap-1 p-2 rounded-lg">
                                    <Rupee size="18" />
                                    <h1 className="text-base font-bold">1000</h1>
                                </div>
                                {DiscountSelected && (
                                    <>
                                        <div className=' border border-[#CECECE]'>
                                            <Input placeholder="Set Count" className="w-full text-center mt-2" />

                                        </div>
                                    </>
                                )}

                            </div>



                        </div>

                    </div>
                    {DiscountSelected && (
                                    <>
                    <div className="grid grid-cols-2 gap-2 p-2 ">

                        <Input
                            placeholder="Enter Actual Rate"
                            label="Actual Rate"

                        />
                        <Input
                            placeholder="Enter Selling Rate"
                            label="Selling Rate"

                        />
                    </div>
                    </>
                    )}
                    <div className="bg-white text-xs rounded-lg text-text_primary p-3 mt-3">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-7 space-y-2">
                                <p>Plan Name</p>
                                <p className="font-semibold text-text_fourthirty">subi</p>
                            </div>
                            <div className="col-span-2 space-y-2">
                                <p>Plan Type</p>
                                <p className="font-semibold text-text_fourthirty">llll</p>
                            </div>
                            <div className="col-span-2 space-y-2">
                                <p>Duration</p>
                                <p className="font-semibold text-text_fourthirty">10 Days</p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <button onClick={(e) => { e.preventDefault(); handleExpand(); }}>
                                    <CheveronDown
                                        color="black"
                                        className="transition-transform duration-300"
                                    />
                                </button>
                            </div>
                        </div>

                        {isExpand && (
                            <div className="text-text_primary mt-2">
                                <p className="font-semibold mt-3 mb-1">Description</p>
                                <p>lsalla</p>
                                <div className="flex items-end justify-end my-2 pt-2 mx-2 border-b border-r-text_secondary">
                                    <table className="w-[50%]">
                                        <thead>
                                            <tr className="text-xs font-normal pb-2">
                                           
                                                <th className="font-normal text-end">Service</th>
                                            
                                              {DiscountSelected && (
                                                          <>
                                                <th className="font-normal text-end">Count</th>
                                                </>
                                            )}
                                                <th className="font-normal text-end">Unit Price</th>
                                                {DiscountSelected && (
                                                          <>
                                                <th className="font-normal text-end">Sub Total</th>
                                                </>
                                            )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="font-semibold text-end">hhh</td>
                                                  
                                              {DiscountSelected && (
                                                          <>
                                                <td className="font-semibold text-end">12</td>
                                                </>
                                            )}
                                                <td className="font-semibold text-end">hbb</td>
                                                          
                                              {DiscountSelected && (
                                                          <>
                                                <td className="font-semibold text-end">111</td>
                                                </>
                                            )}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <div className="h-12 rounded-lg w-32 text-white text-end bg-gradient-to-b from-[#004D4D] to-[#0CA65B] p-2">
                                        <p>Top Selling Price</p>
                                        <p className="font-semibold">ppp</p>
                                    </div>
                                    <div className="h-12 rounded-lg w-32 text-end p-2">
                                        <p>Top Service Price</p>
                                        <p className="font-semibold">ppp</p>
                                    </div>
                                </div>
                            </div>
                        )}
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

export default AddMembership