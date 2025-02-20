// import servicesBgImage from "../assets/images/services-2 1.png";
// import shirtImage from "../assets/images/shirt.png";
// import membershipImage from "../assets/images/Membership.png";
import { useNavigate } from "react-router-dom";
// import servicesBg from "../assets/images/servicesBg.png"
import bgimage from "../assets/images/Group 9.png"
import Button from "../Components/Button";
import ArrowUpRight from "../assets/icons/ArrowUpRight";
 import bg2 from "../assets/images/Group 13.png"
 import bg3 from "../assets/images/Group 12.png"
type Props = {};
 
function ItemHub({ }: Props) {
  const navigate = useNavigate();
 
  return (
    <div>
      <div>
        <h1 className="text-base font-bold text-heading">ItemHub</h1>
        <p className="text-subHeading mt-2 text-xs">
          Add and manage your services and products
        </p>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-6">
      
        <div className="col-span-12">
         <div className="flex gap-3"> 
         <div className="bg-white w-full h-[177px] p-6 rounded-3xl flex items-center justify-between">
         <div>
                  <p className="text-[#2C3E50] font-bold text-lg">Services</p>
                  <p className="text-[#784D00] text-sm mt-2 font-light">
                  Services include tailoring, alterations, and custom fittings to meet customer preferences
                  </p>
                  <Button className="mt-3 ms-3 p-2 text-[#FFFFFF]">Explore <ArrowUpRight color="#FFFFFF"/></Button>
                 
                </div>
                <img src={bgimage} className="w-96 h-44  right-4 object-contain" alt="" />
            {/* //<img src={bg1} className="w-64 -mt-16" alt="" /> */}
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl p-6 w-[50%]">
             
              {/* <div className="flex items-center justify-center">
                <img src={bg1} className="w-52 flex" alt="" />
              </div> */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[#2C3E50] font-bold text-lg">Membership</p>
                  <p className="text-[#004D4D] text-sm mt-2 font-normal">
                 Plan Based on Discounts and Counts
                  </p>
                  <div  >
                  <Button className="mt-2">Explore <ArrowUpRight color="#FFFFFF"/></Button>
                </div>
                 
                </div>
               
              </div>
            </div>
         </div>
          
          <div className="mt-6 flex justify-between items-center gap-6">
            <div className="bg-[#2C3E50] rounded-3xl p-6 w-[50%]  h-[306px]">
           
              {/* <div className="flex items-center justify-center">
                <img src={bg1} className="w-52 flex" alt="" />
              </div> */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[#FFFFFF] font-bold text-lg">Packages</p>
                  <p className="text-[#FFFFFF] text-sm mt-2 font-normal">
                  undled set of products or services offered together for convenience
                  </p>
                </div>
               
              </div>
              <div  >
                  <Button className="mt-2 bg-[#EBEBEB]">Explore <ArrowUpRight color="#FFFFFF"/></Button>
                  <img src={bg2} className="w-96 h-44 right-96 object-contain ml-96 -mt-3" alt="" />
                </div>
               
            </div>
            <div className="bg-[#FFFFFF] rounded-3xl p-6 w-[50%] h-[306px]">
             
              {/* <div className="flex items-center justify-center">
                <img src={bg1} className="w-56 flex" alt="" />
              </div> */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[#002E2E] font-bold text-2xl">
                  Products
                  </p>
                  <p className="text-[#004D4D] text-sm mt-2 font-light ">
                    Plans Based on Discounts and Counts
                  </p>
                </div>
              
              </div>
              <div  onClick={() => navigate("/itemhub/products-home")}>
                  <Button className="mt-2">Explore <ArrowUpRight color="#FFFFFF"/></Button>
                </div>
                <img src={bg3} className="w-96 h-44 right-96 object-contain ml-80 -mt-3" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ItemHub;
 
 