import { useState } from "react";
import SearchBarPos from "../../Components/SearchBarPos"
import nail from '../../assets/images/nailPolish.png'
import allService from '../../assets/images/AllService.png'
import haircut from '../../assets/images/haircut.png'
import hairtStyling from '../../assets/images/hairstyling.png'
import haircoloring from '../../assets/images/haircoloring.png'
import beardstyling from '../../assets/images/Rectangle 32.png'
import skinpolishing from '../../assets/images/Rectangle 2.png'
import keratin from '../../assets/images/Rectangle 13.png'
import Button from "../../Components/Button";
import DateInput from "../../Components/DateInput";
import Scissors from "../../assets/icons/Scissors";
import profile from '../../assets/images/Ellipse 47.png'
import Modal from "../../Components/modal/Modal";
import NewCustomerModal from "./NewCustomerModal";
import ShowerHead from "../../assets/icons/ShowerHead";
import Rupee from "../../assets/icons/Rupee";
import ClockIcon from "../../assets/icons/ClockIcon";
import Calender from "../../assets/icons/Calender";
import UserIcon from "../../assets/icons/UserIcon";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/BackIcon";
import bookingProfile from '../../assets/images/bookAppointmentImage.png'
import PhoneIcon from "../../assets/icons/PhoneIcon";
import CalendarCheck from "../../assets/icons/CalendarCheck";
import TickIcon from "../../assets/icons/TickIcon";

type Props = {}

const BookAppointment = ({ }: Props) => {

    const [searchValue, setSearchValue] = useState<string>("");
    const services = [
        { id: 1, name: "All", image: allService },
        { id: 2, name: "Haircut", image: nail },
        { id: 3, name: "Spa", image: allService },
        { id: 4, name: "Massage", image: nail },
    ];
    const [selected, setSelected] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelected(id === selected ? null : id); // Toggle selection
    };

    const options = [
        { id: 1, name: "Hair Cut", price: 1000, image: haircut },
        { id: 2, name: "Hair Colouring", price: 500, image: haircoloring },
        { id: 3, name: "Hair Styling", price: 1200, image: hairtStyling },
        { id: 4, name: "Keratin Treatment", price: 1500, image: keratin },
        { id: 5, name: "Beard Styling", price: 300, image: beardstyling },
        { id: 6, name: "Skin Polishing", price: 1200, image: skinpolishing },
    ];
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

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

    const handleDaySelect = (id: number) => {
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

    const [checkSelected, setCheckSelected] = useState<Record<number, boolean>>({});

    const handleCheckboxChange = (id: number) => {
        setCheckSelected((prev: Record<number, boolean>) => ({
            ...prev,
            [id]: !prev[id] || false, // Ensure a boolean value
        }));
    };

    const [isModalOpen, setIsModalOpen] = useState({
        newCustomer: false,
    })

    const handleModalToggle = (newCustomer = false,) => {
        setIsModalOpen((prev) => ({
            ...prev,
            newCustomer,
        }))
    }

    const [activeTab, setActiveTab] = useState(1)
    const handleNext = () => {
        if (activeTab < 5) {
            setActiveTab(activeTab + 1);
        }
    }
    const handleBack = () => {
        if (activeTab > 1) {
            setActiveTab(activeTab - 1);
        }
    };

    const steps = [
        { icon: <PhoneIcon size={14} color="#2C3E50" />, title: "Your Details", subtitle: "Mobile/Card Number Input" },
        { icon: <Scissors size={14} color="#2C3E50" />, title: "Service Selection", subtitle: "Select Services you want" },
        { icon: <CalendarCheck width={14} height={14} color="#2C3E50" />, title: "Date & Time Selection", subtitle: "Choose Date & Time" },
        { icon: <UserIcon size={16} color="#2C3E50" />, title: "Staff Selection", subtitle: "Choose Your Stylist" },
        { icon: <TickIcon size={14} color="#2C3E50" />, title: "Confirmation", subtitle: "Review & Confirm" },
    ];


    return (
        <div>
            <div className="grid grid-cols-12 gap-4 bg-[#FFFFFF]">
                <div className="col-span-3 p-6">
                    <div className="bg-[#FAFAFA] rounded-lg px-6 py-4">
                        <div className="flex">
                            <Link to={"/booking"}>
                                <div className="flex justify-center items-center h-11 w-11 bg-[#FFFFFF] rounded-full">
                                    <BackIcon />
                                </div>
                            </Link>
                            <p className="text-[#2C3E50] text-base font-bold mt-2">Book Your Appointment</p>
                        </div>
                        {steps.map((step, index) => {
                            const isActive = activeTab === index + 1;
                            const isCompleted = activeTab > index + 1;
                            // Set colors dynamically
                            // const iconColor = isActive || isCompleted ? "#303F58" : "#D0D0D0";
                            const textColor = isActive || isCompleted ? "text-[#303F58]" : "text-[#D0D0D0]";
                            const hrColor = isCompleted ? "bg-[#303F58]" : "bg-[#D0D0D0]";
                            return (
                                <div key={index} className="flex gap-4 my-8 items-center">
                                    <div className="bg-[#FFFFFF] w-9 h-8 rounded-lg p-2 border border-[#E3E3E3]">
                                        {step.icon}
                                        {/* {index !== steps.length - 1 && (
                                            <hr
                                                className={`w-0.5 h-8 mx-2 mt-2 ${isCompleted ? "bg-[#303F58]" : "bg-[#D0D0D0]"}`}
                                            />
                                        )} */}
                                         {index !== steps.length - 1 && <hr className={`w-0.5 h-8 mx-2 mt-2 ${hrColor}`} />}
                                    </div>
                                    <div>
                                        {/* <p className={`text-xs font-bold ${isActive ? "text-[#303F58]" : "text-[#67707E]"}`}>{step.title}</p>
                                        <p className={`text-xs font-medium ${isActive ? "text-[#303F58]" : "text-[#67707E]"}`}>{step.subtitle}</p> */}
                                        <p className={`text-xs font-bold ${textColor}`}>{step.title}</p>
                                        <p className={`text-xs font-medium ${textColor}`}>{step.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <img src={bookingProfile} alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-span-9 p-6 mb-4">

                    {/* 1st page */}
                    {activeTab === 1 && (
                        <div className="">
                            <div className="text-center items-center p-6">
                                <p className="text-[#2C3E50] text-lg font-bold">Enter Your Details</p>
                                <p className="text-[#67707E] text-xs font-medium">Mobile/Card Number Input</p>
                                <div className="grid grid-cols-1 items-center justify-center">
                                    <div className="w-[50%]">
                                        <SearchBarPos
                                            onSearchChange={setSearchValue}
                                            searchValue={searchValue}
                                            placeholder="Search Service"
                                        />
                                    </div>
                                    <div className="bg-[#F7F9FC] rounded-lg p-3 gap-3 flex w-[50%] h-16">
                                        <div>
                                            <img className="rounded-full w-10 h-10" src={profile} alt="profile" />
                                        </div>
                                        <div>
                                            <p className="text-[#2C3E50] text-xs font-bold">Vyshakh Vinod</p>
                                            <p className="text-[#67707E] text-xs font-medium">9665789887</p>
                                        </div>
                                    </div>
                                </div>
                                <p onClick={() => handleModalToggle(true)} className="text-[#2C3E50] text-xs font-semibold my-4 cursor-pointer">New Customer?</p>
                            </div>
                        </div>
                    )}


                    {/* 2nd page */}
                    {activeTab === 2 && (
                        <div>
                            <div className="text-center items-center p-6">
                                <p className="text-[#2C3E50] text-lg font-bold">Select Services</p>
                                <p className="text-[#67707E] text-xs font-medium">Select Salon Service You Want</p>
                            </div>
                            <div className="w-full">
                                <SearchBarPos
                                    onSearchChange={setSearchValue}
                                    searchValue={searchValue}
                                    placeholder="Search Service"
                                />
                            </div>

                            <div className="flex flex-wrap gap-6 my-3">
                                {services.map(({ id, name, image }) => (
                                    <div
                                        key={id}
                                        onClick={() => handleSelect(id)}
                                        className={`w-fit h-11 rounded-lg py-2 px-3 flex gap-2 items-center cursor-pointer transition-all ${selected === id ? "bg-[#E9F4FF] border border-[#1E90FF]" : "bg-[#F7F9FC]"
                                            }`}
                                    >
                                        <img className="rounded-full w-6 h-6" src={image} alt={name} />
                                        <p className="text-xs font-semibold text-[#2C3E50]">{name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-4 gap-4 px-4 py-2">
                                {options.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`w-48 h-40 rounded-lg px-4 py-3 cursor-pointer 
                ${selectedCard === service.id ? "bg-[#F7F9FC] border border-[#C96E76]" : "bg-[#F7F9FC]"}
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
                    )}


                    {/* 3rd page */}
                    {activeTab === 3 && (
                        <div>
                            <div className="text-center items-center p-6">
                                <p className="text-[#2C3E50] text-lg font-bold">Choose Date & Time</p>
                                <p className="text-[#67707E] text-xs font-medium">Select Salon Service You Want</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <p className="text-[#67707E] text-xs font-medium text-center">Select Month</p>
                                    <DateInput className="bg-[#F7F7F7] border-0 my-4" />
                                </div>
                            </div>

                            <div className="grid grid-cols-7 px-6 gap-2">
                                {days.map(({ id, day, date }) => (
                                    <div
                                        key={id}
                                        onClick={() => handleDaySelect(id)}
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

                            <div className="grid grid-cols-5 px-6 gap-2">
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
                    )}

                    {/* 4th page */}
                    {activeTab === 4 && (
                        <div>
                            <div className="text-center items-center p-6">
                                <p className="text-[#2C3E50] text-lg font-bold">Choose Your Stylist</p>
                                <p className="text-[#67707E] text-xs font-medium">Select Stylist You Want</p>
                            </div>
                            <div className="w-full">
                                <SearchBarPos
                                    onSearchChange={setSearchValue}
                                    searchValue={searchValue}
                                    placeholder="Search Service"
                                />
                            </div>

                            <div className="flex flex-wrap gap-6 my-3">
                                {services.map(({ id, name, image }) => (
                                    <div
                                        key={id}
                                        onClick={() => handleSelect(id)}
                                        className={`w-fit h-11 rounded-lg py-2 px-3 flex gap-2 items-center cursor-pointer transition-all ${selected === id ? "bg-[#E9F4FF] border border-[#1E90FF]" : "bg-[#F7F9FC]"
                                            }`}
                                    >
                                        <img className="rounded-full w-6 h-6" src={image} alt={name} />
                                        <p className="text-xs font-semibold text-[#2C3E50]">{name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-4 px-6">
                                {stylists.map((stylist) => (
                                    <div key={stylist.id} className="bg-[#FAF1F1] rounded-lg px-4 py-3 my-4 w-36 h-40">
                                        <div className="flex flex-col items-center">
                                            <input
                                                checked={checkSelected[stylist.id] || false}
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
                    )}

                    {/* 5th page */}

                    {activeTab === 5 && (
                        <div>
                            <div className="text-center items-center p-6">
                                <p className="text-[#2C3E50] text-lg font-bold">Booking Confirmation</p>
                                <p className="text-[#67707E] text-xs font-medium">Confirm Your Booking</p>
                            </div>

                            <div className="flex justify-center items-center">
                                <div className="bg-[#F7F9FC] rounded-lg px-5 py-4 w-[620px]">
                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-[#4B5C79] text-xs font-normal">Customer Name</p>
                                            <p className="text-[#303F58] text-xs font-bold">Ralph Edwards</p>
                                        </div>
                                        <div>
                                            <p className="text-[#4B5C79] text-xs font-normal">Phone</p>
                                            <p className="text-[#303F58] text-xs font-bold">9878987898</p>
                                        </div>
                                        <div>
                                            <p className="text-[#4B5C79] text-xs font-normal">Email</p>
                                            <p className="text-[#303F58] text-xs font-bold">ralphedwards@gmail.com</p>
                                        </div>
                                        <div>
                                            <img className="w-10 h-10 rounded-full" src={profile} alt="" />
                                        </div>
                                    </div>
                                    <p className="text-[#4B5C79] text-xs font-normal my-1">Service Details</p>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex gap-1">
                                            <div className="flex items-center gap-1">
                                                <ShowerHead />
                                                <p className="text-[#303F58] text-xs font-bold">Dandruff Treatment</p>
                                            </div>
                                            <div className="w-px h-5 mx-4 mt-1 bg-gray-300"></div>
                                            <div className="flex items-center gap-1">
                                                <ClockIcon />
                                                <p className="text-[#303F58] text-xs font-bold">1 hr</p>
                                            </div>
                                            <div className="w-px h-5 mx-4 mt-1 bg-gray-300"></div>
                                            <div className="flex items-center gap-1">
                                                <Rupee />
                                                <p className="text-[#303F58] text-xs font-bold">&#8377; 2000</p>
                                            </div>

                                        </div>
                                        <div>
                                            <button className="bg-[#FAF1F1] border border-[#C96E76] rounded-xl flex justify-center items-center text-[#C96E76] text-xs font-semibold py-2 px-3">Edit Services</button>
                                        </div>
                                    </div>
                                    <p className="text-[#4B5C79] text-xs font-normal my-1">Appointment Date & Time</p>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex gap-1">
                                            <div className="flex items-center gap-1">
                                                <Calender width={12} height={12} color="#2C3E50" />
                                                <p className="text-[#303F58] text-xs font-bold">23 Nov 2024</p>
                                            </div>
                                            <div className="w-px h-5 mx-4 mt-1 bg-gray-300"></div>
                                            <div className="flex items-center gap-1">
                                                <ClockIcon />
                                                <p className="text-[#303F58] text-xs font-bold">10 AM</p>
                                            </div>

                                        </div>
                                        <div>
                                            <button className="bg-[#FAF1F1] border border-[#C96E76] rounded-xl flex justify-center items-center text-[#C96E76] text-xs font-semibold py-2 px-3">Change Time</button>
                                        </div>
                                    </div>
                                    <p className="text-[#4B5C79] text-xs font-normal my-1">Staff Details</p>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-1">
                                            <UserIcon color="#2C3E50" />
                                            <p className="text-[#303F58] text-xs font-bold">Cody Fisher</p>

                                        </div>
                                        <div>
                                            <button className="bg-[#FAF1F1] border border-[#C96E76] rounded-xl flex justify-center items-center text-[#C96E76] text-xs font-semibold py-2 px-3">Edit Staff</button>
                                        </div>
                                    </div>

                                    <div className="mt-6 mb-1 flex justify-between">
                                        <p className="text-[#2C3E50] text-xs font-semibold">Total Item</p>
                                        <p className="text-[#2C3E50] text-xs font-semibold">1 Item</p>
                                    </div>
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-[#495160] text-xs font-medium">Dandruff Treatment</p>
                                        <p className="text-[#2C3E50] text-xs font-semibold">&#8377; 2000.00</p>
                                    </div>
                                    <hr className="border border-dashed border-[#A3A9B3] my-3" />
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-[#2C3E50] text-xs font-semibold">Sub total</p>
                                        <p className="text-[#2C3E50] text-xs font-semibold">&#8377; 2000.00</p>
                                    </div>
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-[#2C3E50] text-xs font-semibold">Tax</p>
                                        <p className="text-[#2C3E50] text-xs font-semibold">&#8377; 100.00</p>
                                    </div>
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-[#2C3E50] text-xs font-semibold">Discount</p>
                                        <p className="text-[#2C3E50] text-xs font-semibold">&#8377; 200.00</p>
                                    </div>
                                    <hr className="border border-dashed border-[#A3A9B3] my-3" />
                                    <div className="mb-1 flex justify-between">
                                        <p className="text-[#2C3E50] text-base font-semibold">Total</p>
                                        <p className="text-[#2C3E50] text-base font-semibold">&#8377; 1900.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="flex gap-4 justify-center mt-10 mb-6 items-center">
                        <Button onClick={handleBack} variant="secondary" disabled={activeTab === 1} className="rounded-xl w-36 h-6 flex justify-center items-center">Back</Button>
                        {activeTab < 5 ? (
                            <Button onClick={handleNext} variant="primary" className="rounded-xl w-36 h-9 py-2 px-3 flex justify-center items-center">Next</Button>
                        ) : (
                            <Button variant="primary" className="rounded-xl w-96 h-9 py-2 px-3 flex justify-center items-center">Confirm Booking</Button>
                        )}
                    </div>
                    <div className="flex gap-4 justify-center mt-5">
                        {[1, 2, 3, 4, 5].map((step) => (
                            <div
                                key={step}
                                className={`w-10 h-1 rounded-3xl ${activeTab === step ? "bg-[#C96E76]" : "bg-[#D9D9D9]"
                                    }`}
                            ></div>
                        ))}
                    </div>

                </div>
            </div>
            <Modal className="w-[28%]" open={isModalOpen.newCustomer} onClose={() => handleModalToggle()}>
                <NewCustomerModal onClose={() => handleModalToggle()} />
            </Modal>
        </div>
    )
}

export default BookAppointment