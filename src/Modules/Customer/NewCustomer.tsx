import { useState } from "react";
import Modal from "../../Components/modal/Modal";
import Button from "../../Components/Button";
import referenceImage from "../../assets/images/RefereneceImage.png";
import Input from "../../Components/Form/Input";
import GalleryIcon from "../../assets/icons/GalleryIcon";
import Twitter from "../../assets/icons/Twitter";
import Insta from "../../assets/icons/Insta";
import Snap from "../../assets/icons/Snap";
import FaceBook from "../../assets/icons/FaceBook";
import Select from "../../Components/Form/Select";
import CrossIcon from "../../assets/icons/CrossIcon";
import CirclePlus from "../../assets/icons/circleplus";
import CheveronDown from "../../assets/icons/CheveronDown";
import Pen from "../../assets/icons/Pen";
import ConsultationModal from "../../pages/pos/addCustomerPos/ConsultationModal";

type Props = { page?: string; id?: string };

const NewCustomer = ({ page, id }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  console.log(id);
  
  const handleNext = () => {
    if (activeTab < 5) {
      setActiveTab(activeTab + 1);
    }
  };

  const handleBack = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setActiveTab(1);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {page && page === "add" ? (
        <Button onClick={openModal}>
          <CirclePlus size={18} />
          <p className="text-[14px] font-medium">
            <b>Add Customer</b>
          </p>
        </Button>
      ) : (
        <div onClick={openModal}>
          <Pen color={"#3C7FBC"} size={18} />
        </div>
      )}

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="p-6 max-w-[1200px] max-h-[500px] w-full h-full pt-[32px] rounded-tl-[16px] rounded-tr-[16px] border border-t-0 border-l-0 border-r-0"
      >
        <div>
          <div className="p-2 m-2 bg-white flex justify-between items-center mb-5">
            <h1 className="font-bold text-md text-[#0B1320]">
              Add New Customer
            </h1>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition"
              aria-label="Close modal"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="p-2 w-[1111px] h-[56px] rounded-lg shadow-sm bg-[#f8f4f3] mb-6">
            <div className="flex p-2 items-center justify-between mb-6">
              {[
                { step: 1, label: "General Info" },
                { step: 2, label: "Reference" },
                { step: 3, label: "Additional Details" },
                { step: 4, label: "Consultation" },
                { step: 5, label: "Social Media" },
              ].map(({ step, label }) => (
               <div className="flex">
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-6 h-6 flex border-transparent   items-center justify-center rounded-full border-2 ${
                        activeTab === step
                          ? " bg-[#cc6c74] text-[#FFFFFF]"
                          : " text-[##4B5C79] bg-white"
                      } ${
                        activeTab < step ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      {step}
                    </div>
                    <span
                      className={`ml-2 text-[#303F58]  ${
                        activeTab === step ? " font-bold" : " font-medium"
                      }`}
                    >
                      {label}
                    </span>
                    {step < 5 && (
                      <div className="flex-1 h-[1px] bg-gray-300 w-20 mx-2"></div>
                    )}
                  </div>
               </div>
              ))}
            </div>
          </div>

            <div>
            {activeTab === 1 && (
              <div>
              {/* Row 1: Customer Name and Address */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                label="Customer Name"
                placeholder="Enter Customer Name"
                size="md"
                />
                <Input
                label="Customer Address"
                placeholder="Enter Customer Address"
                size="md"
                />
              </div>

              {/* Row 2: Contact, Email, and Date of Birth */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Input
                label="Contact"
                placeholder="Enter Contact"
                size="md"
                />
                <Input label="Email" placeholder="Enter Email" size="md" />
                <Input
                label="Date of Birth"
                placeholder="Enter Date of Birth"
                size="md"
                type="date"
                />
              </div>

              {/* Row 3: Membership Card and Opening Balance */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input
                label="Membership Card Number"
                placeholder="Enter Membership Card Number"
                size="md"
                />
                <div>
                <label className="block mb-1 font-normal text-[14px] text-[#495160]">
                  Opening Balance
                </label>
                <div className="flex">
                  {/* Dropdown */}
                  <div className="relative w-20">
                  <select className="block appearance-none w-full h-9 text-[#818894] bg-white border border-inputBorder text-sm pl-2 pr-2 rounded-l-3xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="credit">Cr</option>
                    <option value="debit">Dr</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CheveronDown />
                  </div>
                  </div>

                  {/* Input Field */}
                  <input
                  type="text"
                  className="text-sm w-[100%] rounded-r-3xl text-start bg-white border border-slate-300 h-9 p-2 text-[#818894]"
                  placeholder="Enter Opening Balance"
                  />
                </div>
                </div>
              </div>
              </div>
            )}

            {/* Tab 2: Reference Section */}
            {activeTab === 2 && (
              <div className="relative p-8 m-2 border rounded-lg shadow-md overflow-hidden">
              {/* Background Image */}
              <img
                src={referenceImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Title and Description with a semi-transparent background */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">
                Do you want to add a new reference?
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                Select a referred friend from the list, and they will get a
                referral bonus, which will be <br />
                credited to their account.
                </p>
              </div>
              </div>
            )}

            {/* Select Customer Section (Only for Tab 2) */}
            {activeTab === 2 && (
              <div className="mt-4 ">
              <Select
                placeholder="Select Customer"
                label="Customer"
                options={[
                { value: "jacob_jones", label: "Jacob Jones" },
                // Add more options as needed
                ]}
              />
              </div>
            )}

            {/* Tab 3: Additional Details Section */}
            {activeTab === 3 && (
              <div className="flex space-x-8">
              {/* Column 1: Upload Profile Image */}
              <div className="border border-[#B47300] border-dashed rounded-lg flex items-center justify-center text-center py-3 w-[250px] h-[200px]">
                <label className="cursor-pointer" htmlFor="image">
                <div className="bg-lightPink flex items-center justify-center h-16 w-36 rounded-lg">
                  <div className="gap-4 flex items-center">
                  <div className="bg-darkRed rounded-full flex items-center w-6 h-6 justify-center">
                    <GalleryIcon />
                  </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-textColor mt-1">
                  Upload Image{" "}
                  <span className="text-[#B47300]">browse</span>
                  </p>
                  <p className="text-xs text-[#818894] mt-1">
                  Support: JPG, PNG
                  </p>
                </div>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  name="itemImage"
                  accept="image/*"
                />
                </label>
              </div>

              {/* Column 2: Additional Details Inputs */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Row 1: GST Number and Company Name */}
                <Input
                label="GST Number"
                placeholder="Enter GST Number"
                size="md"
                />
                <Input
                label="Company Name"
                placeholder="Enter Company Name"
                size="md"
                />

                {/* Row 2: Company Address (Full Width) */}
                <div className="col-span-2">
                <Input
                  label="Company Address"
                  placeholder="Enter Company Address"
                  size="lg"
                />
                </div>

                {/* Row 3: Anniversary and Profession */}
                <Input
                label="Anniversary"
                placeholder="Enter Date of Birth"
                size="md"
                type="date"
                />

                <Input
                label="Profession"
                placeholder="Enter Profession"
                size="md"
                />
              </div>
              </div>
            )}
            {/* Tab 4: Client Consultation Section */}
            {activeTab === 4 && (
              <div className="bg-[#EAECF05E] p-8 rounded-lg">
              <p className="text-[#2C3E50] font-bold text-base">Client Consultation</p>
              <p className="text-[#495160] text-xs mt-3">This section captures important details about the client’s preferences, concerns, and needs. It includes areas like skin type, hair type, health conditions, and other relevant factors to ensure personalized services. The consultation helps tailor treatments, products, and recommendations for an optimal experience.</p>
              <div className="mt-3">
                <ConsultationModal/>
              </div>
            </div>
            )}
            {/* Tab 5: Social Media Section */}
            {activeTab === 5 && (
              <div className="grid grid-cols-2 gap-6 w-full">
              {/* Twitter */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                <Twitter />
                </div>
                <div className="w-full">
                <Input
                  label="Twitter"
                  placeholder="Add Twitter Link"
                  size="md"
                />
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                <Insta />
                </div>
                <div className="w-full">
                <Input
                  label="Instagram"
                  placeholder="Add Instagram Link"
                  size="md"
                />
                </div>
              </div>

              {/* Snapchat */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                <Snap />
                </div>
                <div className="w-full">
                <Input
                  label="Snapchat"
                  placeholder="Add Snapchat Link"
                  size="md"
                />
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 rounded-lg object-cover">
                <FaceBook />
                </div>
                <div className="w-full">
                <Input
                  label="Facebook"
                  placeholder="Add Facebook Link"
                  size="md"
                />
                </div>
              </div>
              </div>
            )}
            </div>

          {/* Navigation buttons */}
          <div className="flex justify-end mt-4 space-x-4">
            {/* Cancel Button */}
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>

            {/* Back Button (for Tabs > 1) */}
            {activeTab > 1 && (
              <Button variant="primary" onClick={handleBack}>
                Back
              </Button>
            )}

            {/* Next or Save Button */}
            {activeTab < 5 ? (
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={closeModal}>
                Save
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewCustomer;
