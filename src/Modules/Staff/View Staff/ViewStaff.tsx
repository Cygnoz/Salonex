import { Link } from 'react-router-dom'
import BackIcon from '../../../assets/icons/BackIcon'
import AddPaymentModal from './Modal/AddPaymentModal'
import ChangeComModal from './Modal/ChangeComModal'
import AttendanceModal from './Modal/AttendanceModal'
import ViewProofModal from './Modal/ViewProofModal'
import Pen from '../../../assets/icons/Pen'
import CommissionHistory from './History Tables/CommissionHistory'
import PaymentHistory from './History Tables/PaymentHistory'
import staffbg from '../../../assets/images/satffbg.png'
import CalendarDays from '../../../assets/icons/CalendarDays'
type Props = {}

function ViewStaff({ }: Props) {
    return (
        <div>
            <div className="flex items-center gap-4 mb-4">
                <Link to={"/staffs"}>
                    <BackIcon />
                </Link>
                <h1 className="text-lg font-bold text-[#2C3E50]">Staff Details</h1>
            </div>
            <div className='flex justify-between p-3  rounded-lg'
                style={{
                    backgroundImage: `url(${staffbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="">
                    <div className='text-[16px] text-[#FFFFFF] py-5 font-bold'>
                        Staff ID:
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="" alt="" />
                        <div className="">
                            <p className='text-[16px] text-[#FFFFFF] font-bold'>
                                Divya
                            </p>
                            <p className='text-[14px] text-[#FFFFFF]'>
                                9876543210
                            </p>
                        </div>
                        <div className="">
                            <p className='text-[16px] text-[#FFFFFF] font-bold'>
                                DOB:
                            </p>
                            <p className='text-[14px] text-[#FFFFFF]'>
                                9876543210
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 gap-3">
                    <div className='bg-[#EED2D5] h-15 px-5 pt-5 flex gap-2 rounded-lg'>
                        <ChangeComModal />
                        <AddPaymentModal />
                        <AttendanceModal />
                        <ViewProofModal />
                    </div>
                    <div className='bg-[#FFFFFF] rounded-lg w-10 flex justify-center items-center mt-4 h-10 p-2'>
                        <Pen color='#794247' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-2 my-4 '>
                <div className="bg-[#FFFFFF] p-2 rounded-lg">
                    <p className='text-[#2C3E50] font-bold text-[14px] p-3'>Commission History</p>
                    <CommissionHistory />
                </div>
                <div className="bg-[#FFFFFF] p-2 rounded-lg">
                    <p className='text-[#2C3E50] font-bold text-[14px] p-3'>Payment History</p>
                    <PaymentHistory />
                </div>
            </div>

            <div
                className="p-3 my-3 rounded-lg w-[50%]"
                style={{
                    background: "linear-gradient(353.13deg, #FFFFFF 30%, #F9DEDC 94.65%)",
                }}
            >
                <div className='flex justify-between m-3'>
                    <div className="flex gap-3">
                        <p className='bg-[#FFADC7] mt-1 w-10 p-2.5 h-10 rounded-full'>
                            <CalendarDays width={20} height={20} color='#734E5A' />
                        </p>
                        <div>
                            <p className="text-[16px] text-[#000000E5] font-semibold">
                                Monthly Status
                            </p>
                            <p className="text-[16px] text-[#0B1320B0] font-normal">
                                October
                            </p>
                        </div>
                    </div>
                    <p className="text-[#0B1320B0] text-[14px] font-semibold">Balance Amount     {"  "}   20000</p>

                </div>
                <div className='border border-[#E7E7ED] rounded-xl mb-3 px-10 py-3 grid grid-cols-2'>
                    <div className="text-[#303F58] text-[14px] font-normal">
                        <p className='py-2' >Salary</p>
                        <p className='py-2'>Total Commission</p>
                        <p className='py-2'>Advanced Amount Recieved</p>
                        <p className='py-2'>Deduction</p>
                    </div>
                    <div className="text-[#303F58] text-[14px] font-semibold ps-10">
                        <p className='py-2'>6600</p>
                        <p className='py-2'>7900</p>
                        <p className='py-2'>A67800</p>
                        <p className='py-2'>67000</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewStaff