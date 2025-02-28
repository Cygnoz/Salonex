import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/BackIcon";
import SearchBarPos from "../../Components/SearchBarPos";
import { useState } from "react";
import profile from '../../assets/images/Ellipse 47.png'
import Trash from "../../assets/icons/Trash";
import PencilLine from "../../assets/icons/PencilLine";
import EllipsisIcon from "../../assets/icons/EllipsisIcon";
import haircut from '../../assets/images/haircut.png'
import hairtStyling from '../../assets/images/hairstyling.png'
import haircoloring from '../../assets/images/haircoloring.png'
import beardstyling from '../../assets/images/Rectangle 32.png'
import skinpolishing from '../../assets/images/Rectangle 2.png'
import keratin from '../../assets/images/Rectangle 13.png'
import Scissors from "../../assets/icons/Scissors";
import DateInput from "../../Components/DateInput";
import Input from "../../Components/Form/Input";

type Props = {
    // onClose: () => void;
    page?: string
}

const NewBookingForm = ({ page }: Props) => {

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const services = [
        { id: 1, name: "Hair Cut", price: 1000, image: haircut },
        { id: 2, name: "Hair Colouring", price: 500, image: haircoloring },
        { id: 3, name: "Hair Styling", price: 1200, image: hairtStyling },
        { id: 4, name: "Keratin Treatment", price: 1500, image: keratin },
        { id: 5, name: "Beard Styling", price: 300, image: beardstyling },
        { id: 6, name: "Skin Polishing", price: 1200, image: skinpolishing },
    ];

    const hasMoreThanSix = services.some((service) => service.id > 6);

    const stylists = [
        {
            id: 1,
            name: "Cody Fisher",
            specialization: "Dandruff Treatment",
            image: haircut,
        },
        {
            id: 2,
            name: "Jane Doe",
            specialization: "Hair Coloring",
            image: haircut,
        },
        {
            id: 3,
            name: "John Smith",
            specialization: "Scalp Treatment",
            image: haircut,
        },
        {
            id: 4,
            name: "Cody Fisher",
            specialization: "Dandruff Treatment",
            image: haircut,
        },
        {
            id: 5,
            name: "Jane Doe",
            specialization: "Hair Coloring",
            image: haircut,
        },
        {
            id: 6,
            name: "John Smith",
            specialization: "Scalp Treatment",
            image: haircut,
        },
        {
            id: 7,
            name: "Cody Fisher",
            specialization: "Dandruff Treatment",
            image: haircut,
        },
        {
            id: 8,
            name: "Jane Doe",
            specialization: "Hair Coloring",
            image: haircut,
        },
    ];
    const [selected, setSelected] = useState<Record<number, boolean>>({});

    const handleCheckboxChange = (id: number) => {
        setSelected((prev: Record<number, boolean>) => ({
            ...prev,
            [id]: !prev[id] || false, // Ensure a boolean value
        }));
    };

    const days = [
        { id: 1, day: "Mon", date: 6 },
        { id: 2, day: "Tue", date: 7 },
        { id: 3, day: "Wed", date: 8 },
        { id: 4, day: "Thu", date: 9 },
        { id: 5, day: "Fri", date: 10 },
        { id: 6, day: "Sat", date: 11 },
        { id: 7, day: "Sun", date: 12 },
    ];

    const [daySelected, setDaySelected] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setDaySelected(id === daySelected ? null : id);
    };

    const timeSlots = [
        { id: 1, time: "08:00 AM" },
        { id: 2, time: "09:00 AM" },
        { id: 3, time: "10:00 AM" },
        { id: 4, time: "11:00 AM" },
        { id: 5, time: "12:00 PM" },
        { id: 6, time: "01:00 PM" },
        { id: 7, time: "02:00 PM" },
    ];
    const [timeSelected, setTimeSelected] = useState<number | null>(null);
    const handleTimeSelect = (id: number) => {
        setTimeSelected(id === timeSelected ? null : id)
    }


    return (
        <div>
            <div>
                <div className="flex gap-5 items-center mb-4">
                    <Link to={"/booking"}>
                        <div className="flex justify-center items-center h-11 w-11 bg-[#FFFFFF] rounded-full">
                            <BackIcon />
                        </div>
                    </Link>
                    <h4 className="font-bold text-base text-textColor">{page == "edit" ? "Edit" : "New"} Bookings</h4>
                </div>
                <div className="flex items-center gap-10">
                    <div className="w-[35%]">
                        <SearchBarPos
                            onSearchChange={setSearchValue}
                            searchValue={searchValue}
                            placeholder="9090909090"
                        />
                    </div>
                    <p className="text-[#4F5152] text-xs font-bold">Or <span className="mx-2 underline text-[#462729] text-sm font-bold cursor-pointer">Book as New Customer</span></p>
                </div>
                <div className="bg-[#C96E76] rounded-2xl px-4 py-6 my-4">
                    <div className="flex items-center gap-14">
                        <div className="flex items-center gap-3">
                            <div>
                                <img className="w-10 h-10 rounded-full" src={profile} alt="profile" />
                            </div>
                            <div>
                                <p className="text-[#FFFFFF] text-xs font-medium">Custmoer Name</p>
                                <p className="text-[#FFFFFF] text-base font-bold">Kumar</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#FFFFFF] text-xs font-medium">Address</p>
                            <p className="text-[#FFFFFF] text-base font-bold">Lorem Ipsum agent agna</p>
                        </div>
                        <div>
                            <p className="text-[#FFFFFF] text-xs font-medium">Contact Number</p>
                            <p className="text-[#FFFFFF] text-base font-bold">9090909090</p>
                        </div>
                        <div>
                            <p className="text-[#FFFFFF] text-xs font-medium">Card Number</p>
                            <p className="text-[#FFFFFF] text-base font-bold">2077</p>
                        </div>

                        <div className="flex justify-end items-center ml-auto gap-2">
                            <div className="bg-[#FFFFFF] w-8 h-8 rounded-xl p-2">
                                <Trash size={14} color="#6E7072" />
                            </div>
                            <div className="bg-[#FFFFFF] w-8 h-8 rounded-xl p-2">
                                <PencilLine size={14} color="#6E7072" />
                            </div>
                            <div className="bg-[#FFFFFF] w-8 h-8 rounded-xl p-2">
                                <EllipsisIcon />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="bg-[#FFFFFF] rounded-xl p-6">
                    <p className="text-[#37393A] text-sm font-bold">Select Service</p>
                    <div className="flex mt-3">
                        <div className="w-[50%] bg-[#F7F7F7]">
                            <SearchBarPos
                                onSearchChange={setSearchValue}
                                searchValue={searchValue}
                                placeholder="9090909090"
                            />
                        </div>
                    </div>

                    <div className={`${hasMoreThanSix ? "overflow-x-auto" : ""} whitespace-nowrap py-4`}>
                        <div className="flex gap-4">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`w-48 h-40 rounded-lg px-4 py-3 cursor-pointer 
                ${selectedCard === service.id ? "bg-[#FAF1F1] border border-[#C96E76]" : "bg-[#F6F6F6]"}
              `}
                                    onClick={() => setSelectedCard(service.id)}
                                >
                                    <img className="rounded-lg w-40 h-20" src={service.image} alt={service.name} />
                                    <p className="mt-3 text-[#2C3E50] text-xs font-bold">{service.name}</p>
                                    <p className="text-[#2C3E50] text-xs font-bold mt-2">&#8377; {service.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl p-6 mt-4">
                    <div className="flex justify-between">
                        <p className="text-[#37393A] text-sm font-bold">Choose Date & Time</p>
                        <div className="w-[20%]">
                            <DateInput className="bg-[#F7F7F7] border-0" />
                        </div>
                    </div>
                    <div className="flex gap-10">
                        {days.map(({ id, day, date }) => (
                            <div
                                key={id}
                                onClick={() => handleSelect(id)}
                                className={`rounded-lg gap-1 py-2 px-4 w-14 h-[52px] text-center my-4 cursor-pointer transition-all ${daySelected === id
                                    ? "bg-[#B5636A] text-white" // Selected style
                                    : "bg-[#F7F7F7] text-[#4F5152]"
                                    }`}
                            >
                                <p className={`text-xs font-normal ${daySelected === id ? "text-white" : "text-[#6E7072]"}`}>
                                    {day}
                                </p>
                                <p className={`text-sm font-bold ${daySelected === id ? "text-white" : "text-[#4F5152]"}`}>
                                    {date}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {timeSlots.map(({ id, time }) => (
                            <div
                                key={id}
                                onClick={() => handleTimeSelect(id)}
                                className={`rounded-3xl p-2 w-20 h-9 text-center flex justify-center cursor-pointer transition-all ${timeSelected === id
                                    ? "bg-[#E9F4FF] border border-[#1E90FF]" // Selected style
                                    : "bg-[#F2F5F8]"
                                    }`}
                            >
                                <p className="text-[#4F5152] text-xs font-bold">
                                    {time.split(" ")[0]}{" "}
                                    <span className="text-[#4F5152] text-[9px] font-bold">{time.split(" ")[1]}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl p-6 my-4">
                    <p className="text-[#37393A] text-sm font-bold">Select Staff</p>
                    <div className="flex mt-3">
                        <div className="w-[50%] bg-[#F7F7F7]">
                            <SearchBarPos
                                onSearchChange={setSearchValue}
                                searchValue={searchValue}
                                placeholder="Search Staff"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {stylists.map((stylist) => (
                            <div key={stylist.id} className="bg-[#FAF1F1] rounded-lg px-4 py-3 my-4 w-36 h-40">
                                <div className="flex flex-col items-center">
                                    <input
                                        checked={selected[stylist.id] || false}
                                        onChange={() => handleCheckboxChange(stylist.id)}
                                        className="ml-auto checked:bg-[#E69CB3] cursor-pointer" type="checkbox" />
                                    <img className="rounded-full w-12 h-12" src={stylist.image} alt={stylist.name} />
                                    <p className="text-[#37393A] text-xs font-bold my-1">{stylist.name}</p>
                                    <div className="flex items-center">
                                        <Scissors color="#4F5152" size={12} />
                                        <p className="text-[#4F5152] text-xs font-normal my-1">Specialization</p>
                                    </div>
                                    <p className="text-[#37393A] text-xs font-semibold text-center">{stylist.specialization}</p>
                                    {/* <p className="text-[#2C3E50] text-xs font-bold mt-2">&#8377; 1000</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl p-6 my-4">
                    <p className="text-[#37393A] text-sm font-bold">Add Details</p>
                    <div className="grid grid-cols-6">
                        {/* <div className="col-span-1 space-y-2"> */}
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <select
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-[205px] h-9"
                            name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                            Select Gender
                        </select>
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />

                        {/* </div> */}
                    </div>
                    <div className="grid grid-cols-5">
                        <div>
                            <label className="text-[#495160] text-xs font-normal" htmlFor="">Select Gender</label>
                            <select
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-[205px] h-8"
                            name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                            Select Gender
                        </select>

                        </div>
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-fit" />
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter First Name"
                            className="text-[#495160] text-xs font-normal border border-[#CECECE] rounded-[36px] py-2 px-3 w-full" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewBookingForm