import Calender from "../../assets/icons/Calender";
import ClockIcon from "../../assets/icons/ClockIcon";
import Mail from "../../assets/icons/Mail";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Pipette from "../../assets/icons/Pipette";
import profile from '../../assets/images/viewBookingProfile.png'
import staff from '../../assets/images/customerImage.png'
import CheveronDown from "../../assets/icons/CheveronDown";
// import profile from '../../assets/images/customerImage.png'

type Props = {
    onClose: () => void;
}

const ViewBooking = ({ onClose }: Props) => {
    return (
        <div className="bg-[#F8F4F4] rounded-2xl">
            <div className="flex justify-between p-4">
                <div>
                    <h1 className="text-lg font-bold text-[#2C3E50]">View Booking</h1>
                    <p className="mt-2 text-[#818894] text-xs font-normal">View and manage booking details with real-time status updates</p>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-3xl w-3 h-3 cursor-pointer text-[#2C3E50]"
                >
                    &times;
                </button>
            </div>

            <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-3">
                    <div className="bg-[#FFFFFF] rounded-lg py-2 mb-2">
                        <div className="flex justify-end gap-2 pt-2 px-4">
                            <div className="bg-[#EAECF0CC] rounded-full w-7 h-7 items-center flex justify-center">
                                <PhoneIcon size={12} color="#4C5870" />
                            </div>
                            <div className="bg-[#EAECF0CC] rounded-full w-7 h-7 items-center flex justify-center">
                                <Mail />
                            </div>
                        </div>
                        <div className="px-2">
                            <img className="w-[130px] h-[140px]" src={profile} alt="profile" />
                            <p className="text-[#975359] text-sm font-semibold my-2 text-start">Bethany Minjung</p>
                        </div>
                        <div className="grid grid-cols-2 px-2 gap-3">
                            <p className="text-[#828C99] text-xs font-semibold">Gender</p>
                            <p className="text-[#4C5259] text-xs font-semibold">Female</p>
                            <p className="text-[#828C99] text-xs font-semibold">Age</p>
                            <p className="text-[#4C5259] text-xs font-semibold">23</p>
                            <p className="text-[#828C99] text-xs font-semibold">Blood group</p>
                            <p className="text-[#4C5259] text-xs font-semibold">A+</p>
                            <p className="text-[#828C99] text-xs font-semibold">Card Number</p>
                            <p className="text-[#A1585E] text-xs font-semibold">00345</p>

                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] rounded-lg p-4">
                        <div className="flex gap-1">
                            <p className="text-[#626973] text-xs font-semibold">Booker for</p>
                            <Pipette size={14} color="#65242A" />
                        </div>
                        <p className="text-[#495160] text-sm font-semibold mt-4 mb-2">Dandruff Treatment</p>
                        <p className="text-[#818894] text-xs font-medium">The customer’s dandruff treatment appointment has</p>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="bg-[#FFFFFF] rounded-lg p-4 mb-2">
                        <div className="flex justify-between">
                        <p className="text-[#626973] text-sm font-semibold">Personal Details</p>
                        <div className="flex gap-1 bg-[#C96E76] w-fit py-1 px-2 rounded-xl">
                            <p className="text-[#FFFFFF] text-xs font-medium">Change status</p>
                            <CheveronDown size={16} color="#FFFFFF"/>
                        </div>
                        </div>
                        <div className="grid grid-cols-4 py-8 px-2">
                        <p className="text-[#828C99] text-xs font-semibold">Booking Status</p>
                        <p className="text-[#828C99] text-xs font-semibold">First Name</p>
                        <p className="text-[#828C99] text-xs font-semibold">Last Name</p>
                        <p className="text-[#828C99] text-xs font-semibold">Date of Birth</p>
                        <p className="text-[#34C759] text-xs font-semibold">Booked</p>
                        <p className="text-[#4C5259] text-xs font-semibold">Bathany</p>
                        <p className="text-[#4C5259] text-xs font-semibold">Minung</p>
                        <p className="text-[#4C5259] text-xs font-semibold">05-12-2000</p>
                        </div>
                        <div>
                            <p className="text-[#828C99] text-xs font-semibold">Address</p>
                            <p className="text-[#4C5259] text-xs font-semibold">83 mile drive los angels CA , California City</p>
                        </div>
                        <div className="grid grid-cols-4 py-8 px-2">
                            <div className="flex gap-1 items-center">
                                <PhoneIcon size={12} color="#828C99"/>
                                <p className="text-[#828C99] text-xs font-semibold">Booking Status</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Mail size={12} color="#828C99"/>
                                <p className="text-[#828C99] text-xs font-semibold">Booking Status</p>
                            </div>
                        <p className="text-[#4C5259] text-xs font-semibold"></p>
                        <p className="text-[#4C5259] text-xs font-semibold"></p>
                        <p className="text-[#4C5259] text-xs font-semibold">98567840213</p>
                        <p className="text-[#4C5259] text-xs font-semibold">Bethany@gmail.com</p>
                        </div>

                        <div className="bg-[#F1F7FFC9] rounded-xl py-3 mb-3 px-10 flex items-center justify-between">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex gap-1">
                                    <Calender width={12} height={12} color="#6E7072" />
                                    <p className="text-[#828C99] text-xs font-semibold">Booked on</p>
                                </div>
                                <p className="text-[#4C5259] text-xs font-semibold">12-03-2025</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex gap-1">
                                    <ClockIcon />
                                    <p className="text-[#828C99] text-xs font-semibold">Time</p>
                                </div>
                                <p className="text-[#4C5259] text-xs font-semibold">12.30 pm</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex gap-1">
                                    {/* <Calender width={12} height={12} color="#6E7072" /> */}
                                    <img className="w-5 h-5 rounded-full" src={staff} alt="staff" />
                                    <p className="text-[#828C99] text-xs font-semibold">Staff</p>
                                </div>
                                <p className="text-[#4C5259] text-xs font-semibold">Andria Thomas</p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#FFFFFF] rounded-lg p-4">
                        <p className="text-[#495160] text-sm font-medium">Remarks</p>
                        <p className="text-xs font-normal text-[#333333C2] my-3">Lorem ipsum dolor sit amet consectetur. Maecenas eget sed sem mauris sit lorem consectetur tristique. Mi aliquet nam tincidunt id viverra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBooking