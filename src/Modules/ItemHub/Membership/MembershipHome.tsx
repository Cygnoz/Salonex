import { useState } from "react";
import CirclePlus from "../../../assets/icons/circleplus"
import Button from "../../../Components/Button"
import Modal from "../../../Components/modal/Modal";
import AddMembership from "./AddMembership";


type Props = {}

const MembershipHome = ({

}: Props) => {

  const [isModalOpen, setIsModalOpen] = useState({
    MembershipaddForm: false,


  });

  // Function to toggle modal visibility
  const handleModalToggle = (
    MembershipaddForm = false,


  ) => {
    setIsModalOpen((prev) => ({
      ...prev,

      MembershipaddForm

    }));

  };

  const plans = [
    {
      name: "Premium Plan",
      planType: "Discount",
      duration: "3 months",
      description:
        "This membership includes a limited number of uses for selected salon services over the plan duration.",
      services: ["Hair Spa", "Facial Treatment"],
      pricing: [
        { service: "Haircut", price: "₹1000.00" },
        { service: "Pedicure/Manicure", price: "₹1000.00" },
      ],
      discount: "20%",
      totalPrice: "₹2000.00",
      sellingPrice: "₹1600.00",
    },
    {
      name: "Gold Plan",
      planType: "Flat Rate",
      duration: "6 months",
      description:
        "Get unlimited access to selected salon services at a fixed rate  services over the plan duration.",
      services: ["Full Body Massage", "Hair Treatment"],
      pricing: [
        { service: "Hair Color", price: "₹1500.00" },
        { service: "Nail Art", price: "₹1200.00" },
      ],
      discount: "15%",
      totalPrice: "₹2700.00",
      sellingPrice: "₹2295.00",
    },
    {
      name: "Gold Plan",
      planType: "Flat Rate",
      duration: "6 months",
      description:
        "Get unlimited access to selected salon services at a fixed rate  services over the plan duration.",
      services: ["Full Body Massage", "Hair Treatment"],
      pricing: [
        { service: "Hair Color", price: "₹1500.00" },
        { service: "Nail Art", price: "₹1200.00" },
      ],
      discount: "15%",
      totalPrice: "₹2700.00",
      sellingPrice: "₹2295.00",
    },
    {
      name: "Gold Plan",
      planType: "Flat Rate",
      duration: "6 months",
      description:
        "Get unlimited access to selected salon services at a fixed rate  services over the plan duration.",
      services: ["Full Body Massage", "Hair Treatment"],
      pricing: [
        { service: "Hair Color", price: "₹1500.00" },
        { service: "Nail Art", price: "₹1200.00" },
      ],
      discount: "15%",
      totalPrice: "₹2700.00",
      sellingPrice: "₹2295.00",
    },
   
  ];
  return (
    <>
      <div className="">

        <div>
          <div className="flex justify-between ">
            <div>
              <h1 className="text-lg font-bold text-[#2C3E50]">Membership plan</h1>
              <p className="text-[#818894] text-[12px] font-normal">
                Add & Manage membership plans with exclusive benefits and discounts
              </p>
            </div>

            <div

              className="ml-auto">
              <Button onClick={() => handleModalToggle(true)}>
                <CirclePlus size={18} />
                <p className="text-[14px] font-medium">
                  <b>Add Membership</b>
                </p>
              </Button>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 my-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="mx-auto bg-white rounded-xl shadow-md border h-[500px] w-[400px]"
        >
          <h2 className="text-sm font-bold text-[#975359] p-3">{plan.name}</h2>
          <div className="mt-2 text-gray-600 flex gap-6 p-3">
            <div>
              <p className="font-normal text-xs text-[#818894]">Plan Type</p>
              <p className="font-semibold text-xs text-[#0B1320]">
                {plan.planType}
              </p>
            </div>
            <div>
              <p className="font-normal text-xs text-[#818894]">Duration</p>
              <p className="font-semibold text-xs text-[#0B1320]">
                {plan.duration}
              </p>
            </div>
          </div>
          <div className="p-3">
            <p className="mt-2 text-xs text-[#818894] font-normal">
              {plan.description}
            </p>
          </div>
          <div className="border-dashed border border-[#1A1A1A2E] my-2 mx-2"></div>
          <div className="mt-4 p-3">
            <h3 className="text-xs font-normal text-[#818894]">Service</h3>
            <ul className="mt-2 space-y-1">
              {plan.services.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-[#495160] text-xs font-bold"
                >
                  ✅ {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-dashed border border-[#1A1A1A2E] my-2 mx-2"></div>
          <div className="mt-4">
            <table className="w-full text-left ml-10 border-collapse">
              <thead>
                <tr>
                  <th className="py-2 text-xs text-[#818894] font-normal">
                    Service
                  </th>
                  <th className="py-2 text-xs text-[#818894] font-normal">
                    Unit Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {plan.pricing.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-1 text-[#495160] text-xs font-semibold">
                      {item.service}
                    </td>
                    <td className="py-1 text-[#495160] text-xs font-semibold">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-dashed border border-[#1A1A1A2E] my-2 mx-2"></div>
          <div className="ms-auto text-right my-2 p-3">
            <p className="font-normal text-xs text-[#818894]">Discount</p>
            <p className="text-[#495160] text-xs font-bold">{plan.discount}</p>
          </div>
          <div className="flex justify-between gap-3 bg-[#F7ECD9] w-full p-3">
            <div className="h-12 rounded-lg text-end p-2">
              <p className="text-[#818894] text-xs font-normal">
                Total Service Price
              </p>
              <p className="font-bold text-[#495160] text-xs">
                {plan.totalPrice}
              </p>
            </div>
            <div className="rounded-lg text-white text-end bg-gradient-to-b from-[#004D4D] to-[#0CA65B] p-2">
              <p className="text-[#F3F1EE] text-xs font-normal">
                Total Selling Price
              </p>
              <p className="text-[#FFFFFF] text-xs font-normal">
                {plan.sellingPrice}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

      </div>
      <Modal open={isModalOpen.MembershipaddForm} onClose={() => handleModalToggle()} className="w-[50%]">
        <AddMembership onClose={() => handleModalToggle()} />
      </Modal>
    </>

  )
}

export default MembershipHome