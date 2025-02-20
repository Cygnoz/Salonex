 import bg from '../../../assets/images/Rectangle 13 (2).png'
import Button from '../../../Components/Button';

//  import bg1 from '../../../../assets/images/Rectangle 13.png'
// import Modal from '../..';
// import SearchBar from '../../../../Components/SearchBar';
// import Button from '../../../../Components/Button';
// import CirclePlus from '../../../../assets/icons/circleplus';
// import PencilLine from '../../../../assets/icons/PencilLine';
// import TrashIcon from '../../../../assets/icons/TrashIcon';
// import RackAddModal from './RackAddModal';


type Props = {
    onClose: () => void;
}


type Transaction = {
    title: string;
    date: string;
    time: string;
    credit: number;
    debit: number;
  };
  
  const transactions: Transaction[] = [
    { title: "New Stock", date: "18 May 2024", time: "5:10 PM", credit: 10.0, debit: 0.0 },
    { title: "Sold", date: "22 May 2024", time: "6:10 PM", credit: 0.0, debit: 2.0 },
    { title: "Internal Use", date: "02 June 2024", time: "5:10 PM", credit: 10.0, debit: 0.0 },
  ];

const ProductView = ({ onClose }: Props) => {
   
    //const [searchValue, setSearchValue] = useState("");
  return (
    <>
    <div className='bg-[#F8F4F4] p-4 rounded-xl'>
       

       <div className="flex justify-between items-center mb-4 px-3">
       
         <div className='flex'>
      
      
         <h1 className="text-base font-bold text-deepStateBlue"> Product History</h1>
         </div>
        

          <button
              type="button"
              onClick={onClose}
              className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
          >
              &times;
          </button>
      </div>

      <div className='justify-between flex'>
        <div className='bg-white w-60'>
        <div className='w-60  p-2'>
                <img src={bg} alt="" />
            </div>
        </div>

        <div>
            <Button>Hair</Button>
        </div>
      </div>

      <h1 className='text-sm font-bold text-[#2C3E50] my-3 ms-2'>SilkShine</h1>

<div className='flex justify-between m-3'> 
    <div>
        <h1 className='text-xs text-[#495160] font-semibold'>Price</h1>
        <h1 className='text-xs text-[#975359] font-bold'>1000</h1>
    </div>

    <div>
        <h1 className='text-xs text-[#495160] font-semibold'>Price</h1>
        <h1 className='text-xs text-[#975359] font-bold'>58</h1>
    </div>

    <div>
        <h1 className='text-xs text-[#495160] font-semibold'>Price</h1>
        <h1 className='text-xs text-[#975359] font-bold'>AB01</h1>
    </div>
</div>
<div className="flex justify-between font-semibold text-gray-700 pb-2 px-2 border-b mt-4">
        <span className="ml-auto">Credit</span>
        <span className="ml-16">Debit</span>
      </div>
      <div className="relative border-l-2 border-red-400 mt-4 pl-4 ml-3">
  {transactions.map((transaction, index) => (
    <div key={index} className="mb-6 relative flex items-center justify-between">
      {/* Left Side (Title and Date) */}
      <div className="relative flex-1">
        <div className="absolute -left-[21px] w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="font-semibold text-gray-800 ml-4">{transaction.title}</div>
        <div className="text-sm text-gray-500 ml-4">{transaction.date} • {transaction.time}</div>
      </div>

      {/* Right Side (Credit and Debit) */}
      <div className="flex space-x-10 text-right">
        <div className="w-20">{transaction.credit.toFixed(2)}</div>
        <div className="w-20 px-2">{transaction.debit.toFixed(2)}</div>
      </div>
    </div>
  ))}
</div>



       {/* <div className="flex my-2 p-2">
            <div className="w-[50%]">
              <SearchBar
              
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                placeholder="Search Rack"
              />
            </div>
            <div onClick={()=>handleModalToggle(true)}className="ml-auto">
            <Button >
          <CirclePlus size={18} />
          <p className="text-[14px] font-medium">
            <b>Add Rack</b>
          </p>
        </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair care</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Skin Care</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
          
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair Color</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4">
          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4">
          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair care</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
           
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Skin Care</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>

          <div className='p-3 bg-[#FFFFFF]'>
          
            <h1 className='text-sm font-semibold text-[#2C3E50] my-1'>Hair Color</h1>
          
            <h1 className='text-xs text-[#818894] font-normal'>Includes haircuts, styling, coloring, and treatments for healthy hair</h1>
            <div className='flex my-1 gap-1'>
                <div><PencilLine color='#3C7FBC'/></div>
              <div>  <TrashIcon/></div>
            </div>
          </div>
          </div> */}


    </div>
   
    </>
  )
}

export default ProductView