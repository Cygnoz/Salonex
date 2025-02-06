import ArrowRight from "../assets/icons/ArrowRight";
import building from "../assets/icons/Building";
import itemIcon from "../assets/icons/Frame";
import prefIcon from "../assets/icons/ListFilter";
import RewardIcon from "../assets/icons/Vector";
import saleIcon from "../assets/icons/BarChart";
import purchaseIcon from "../assets/icons/ShoppingBag";
import customization from "../assets/icons/Paint";
import orgImg from "../assets/images/org.png";
import itemImg from "../assets/images/image 49.png";
import taxImg from "../assets/images/image 47.png";
import prefImg from "../assets/images/image 47 (1).png";
import rewardImg from "../assets/images/image 48.png";
import saleImg from "../assets/images/image 51.png";
import purchaseImg from "../assets/images/image 45.png";
import customizationImg from "../assets/images/image 50.png";
import { Link } from "react-router-dom";
import Shirt from "../assets/icons/Shirt";
import orders from '../assets/images/orders.png'
const Settings = () => {
  const data = [
    {
      page: "Organization",
      icon: building,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: orgImg,
      imgH: 59,
      imgW: 64,
      route: "/settings/organization/profile",
      bottomColor: "bg-[#AEC6EB]",
    },
    {
      page: "Items",
      icon: itemIcon,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: itemImg,
      imgH: 69,
      imgW: 44,
      route: "/settings/items/item",
      bottomColor: "bg-[#F4E1AE]",
    },
    {
      page: "Orders",
      icon: Shirt,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: orders,
      imgH: 69,
      imgW: 44,
      route: "/settings/orders/ordersettings",
      bottomColor: "bg-[#CDECF0]",
    },
    {
      page: "Tax And Complaints",
      icon: building,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: taxImg,
      imgH: 47,
      imgW: 48,
      route: "/settings/tax-compliance/taxes",
      bottomColor: "bg-[#F8C1B8]",
    },
    {
      page: "Preferences",
      icon: prefIcon,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: prefImg,
      imgH: 60,
      imgW: 58,
      route: "/settings/preferences/customer-vendor",
      bottomColor: "bg-[#B2E8E3]",
    },
    {
      page: "Rewards Settings",
      icon: RewardIcon,
      text: "Lorem ipsum dolor sit ametLorem Lorem ipsum dolor sit ametLorem",
      img: rewardImg,
      imgH: 54,
      imgW: 57,
      route: "/settings/rewards-settings/rewards",
      bottomColor: "bg-[#F4EFB5]",
    },
    {
      page: "Sales",
      icon: saleIcon,
      text: "Lorem ipsum dolor sit ametLorem Lorem",
      img: saleImg,
      imgH: 51,
      imgW: 51,
      route: "/settings/sales/sales-order",
      bottomColor: "bg-[#F8C1D2]",
    },
    {
      page: "Purchase",
      icon: purchaseIcon,
      text: "Lorem ipsum dolor sit ametLorem Lorem",
      img: purchaseImg,
      imgH: 59,
      imgW: 60,
      route: "/settings/purchases/purchase-orders",
      bottomColor: "bg-[#D2B8F8]",
    },
    {
      page: "Customization",
      icon: customization,
      text: "Lorem ipsum dolor sit ametLorem",
      img: customizationImg,
      imgH: 92,
      imgW: 65,
      route: "/settings/customization/transaction-number-series",
      bottomColor: "bg-[#B5B9F8]",
    },
  ];

  return (
    <div className="-mt-5">
      <h1 className="text-lg font-bold text-[#2C3E50]">Settings</h1>
      <p className="text-[#495160]  text-xs  ">
        Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla{" "}
      </p>
      <div className="my-4 -mx-5 grid grid-cols-5 gap-y-5 bg-white rounded-xl p-8 items-center justify-center">
        {data?.map((data, index) => (
          <div
            key={index}
            className="relative w-56 h-48 border text-center rounded-xl border-[#DADBDD] bg-[#FFFFFF] p-4 flex flex-col justify-between mx-auto shadow-md overflow-hidden"
          >
            {/* Top Icon */}
            <div className="flex items-center justify-center">
              <img
                src={data.img}
                alt={`${data.page} illustration`}
                className={`w-14 object-cover ${data.page === "Customization" ? "-me-4 -mb-4" : ""}`}
              />
            </div>

            {/* Title & Description */}
            <div>
              <p className="text-[14px] font-semibold text-[#333333]">{data.page}</p>
              <p className="text-[10px] text-[#495160] mt-2">{data.text}</p>
            </div>

            {/* Bottom Arrow */}
            <div className="flex justify-end mb-1">
              <Link to={data?.route}>
                <ArrowRight size={17} color="#626973" />
              </Link>
            </div>

            {/* 🎨 Bottom Gradient Effect - FIXED */}
            <div className={`absolute bottom-0 left-0 w-full h-2.5 rounded-b-xl  bg-gradient-to-t ${data.bottomColor} `} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Settings;
