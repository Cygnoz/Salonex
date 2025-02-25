import CopyIcon from '../../assets/icons/CopyIcon';
import letterImage from '../../assets/images/pink-envelope-with-blank-card-paper-plane 1.png'
import Button from '../../Components/Button';

type Props = {
    onClose: () => void;
}

const SentInviteModal = ({onClose}: Props) => {
  return (
    <div>
        <div className="p-6">
        <div className="flex justify-between">
                <div>
                    <h1 className="text-lg font-bold text-[#2C3E50]">Send Booking Link</h1>
                    <p className="mt-2 text-[#818894] text-xs font-normal">Confirm sending the booking link to the customer for their service selection.</p>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-3xl w-3 h-3 cursor-pointer text-[#2C3E50]"
                >
                    &times;
                </button>
            </div>
            <div className='flex gap-2'>
                <div>
                    <img className='w-28 h-24' src={letterImage} alt="letter" />
                </div>
                <div className='flex gap-8 items-center'>
                <p className='text-[#000000] text-base font-semibold'>https://example.com/form/ABC123XYZ</p>
                <CopyIcon />
                </div>
            </div>

            <div className='flex justify-end mt-4'>
                <Button size='sm' className='w-20 h-8 items-center flex justify-center rounded-xl'>Done</Button>
            </div>
        </div>
    </div>
  )
}

export default SentInviteModal