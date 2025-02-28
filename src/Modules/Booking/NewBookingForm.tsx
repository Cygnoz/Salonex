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

                    <div className="bg-[#FAF1F1] rounded-lg px-4 py-3 my-4 w-36 h-40">
                        <div>
                            <img className="rounded-full w-12 h-12" src={haircut} alt="haircut" />
                            <div className="flex items-center">
                                <Scissors color="#4F5152" size={12}/>
                            <p>Specialization</p>
                            </div>
                            <p className="text-[#2C3E50] text-xs font-bold">Hair Cut</p>
                            <p className="text-[#2C3E50] text-xs font-bold mt-2">&#8377; 1000</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewBookingForm