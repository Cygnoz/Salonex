import { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import Modal from "../../../Components/modal/Modal";
import CheckIcon from "../../../assets/icons/CheckIcon";
import Input from "../../../Components/Form/Input";
import DateInput from "../../../Components/DateInput";
import Select from "../../../Components/Form/Select";
import customerImage from "../../../assets/images/customerImage.png"
import file from "../../../assets/images/file.png"
import ConsultationModal from "./ConsultationModal";

const tabs = [
  { name: "General Info", key: "general" },
  { name: "Reference", key: "reference" },
  { name: "Additional Details", key: "additional" },
  { name: "Consultation", key: "consultation" },
];

const CreateCustomerModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = () => setModalOpen(true);

  const [visitedTabs, setVisitedTabs] = useState<boolean[]>(
    Array(tabs.length).fill(false)
  );

  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setVisitedTabs((prev) => {
        const updated = [...prev];
        updated[activeTab] = true;
        return updated;
      });
      setActiveTab(activeTab + 1);
    }
  };

  const handleBack = () => {
    if (activeTab > 0) {
      setVisitedTabs((prev) => {
        const updated = [...prev];
        updated[activeTab] = false; // Remove check from current tab
        updated[activeTab - 1] = false; // Remove check from the previous tab as well
        return updated;
      });
      setActiveTab(activeTab - 1);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTab(0);
    setVisitedTabs(Array(tabs.length).fill(false));
  };

  return (
    <>
      <Button className="text-xs" onClick={openModal}>
        <CirclePlus color="white" /> Create Customer
      </Button>

      <Modal
        className="w-[65%] p-8 bg-[#fdf8f8] rounded-2xl"
        open={isModalOpen}
        onClose={closeModal}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[#2C3E50] text-lg font-bold">
              Create New Customer
            </span>
            <p className="text-[#8F99A9] text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </p>
          </div>
          <div className="cursor-pointer" onClick={closeModal}>
            <span className="text-3xl">&times;</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center mt-4">
          {tabs.map((tab, index) => (
            <p
              key={tab.key}
              className={`pb-2 px-5 cursor-pointer font-semibold text-sm flex items-center gap-2 ${activeTab === index
                ? "text-[#303F58] font-semibold border-b-2 border-[#C96E76]"
                : visitedTabs[index]
                  ? "text-black font-bold"
                  : "text-[#303F58]"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {visitedTabs[index] && <CheckIcon />} {tab.name}
            </p>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-5">
          {activeTab === 0 && (
            <div className="bg-white p-4 rounded-lg">
              <div className="mt- flex items-center justify-between w-full">
                <div className="flex flex-col w-[48%]">
                  <label className="mb-1 text-[#495160] text-sm">
                    Customer Name
                  </label>
                  <Input placeholder="Enter Customer Name" />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label className="mb-1 text-[#495160] text-sm">
                    Contact Number
                  </label>
                  <Input placeholder="Enter Contact Number" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between w-full">
                <div className="flex flex-col w-[48%]">
                  <label className="mb-1 text-[#495160] text-sm">
                    Customer Number
                  </label>
                  <Input placeholder="Enter membership number" />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label className="mb-1 text-[#495160] text-sm">
                    Date of Birth
                  </label>
                  <DateInput placeholder="Select date of birth" />
                </div>
              </div>
              <div className="mt-4 w-[48%]">
                <label className="mb-1 text-[#495160] text-sm">
                  Email Address
                </label>
                <Input placeholder="Enter Customer Email" />
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="bg-white p-4 rounded-lg">
              <div className="bg-[#F3F8FF] py-8 px-6 rounded-2xl">
                <p className="text-[#C96E76] font-bold text-lg">
                  Refer a friend
                </p>
                <p className="text-[#495160] text-xs mt-1 w-[58%]">
                  Select referred friend from the list and he will get referral
                  bonus, and it will be credited to his account
                </p>
              </div>
              <div className="mt-4">
                <label className=" text-[#495160] text-sm">
                  Search Reference
                </label>
                <div className="mt-1 w-[50%]">
                  <Select
                    placeholder="Select Customer"
                    options={[{ value: "jacob_jones", label: "Jacob Jones" }]}
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between gap-6">
                <div className="w-[19%]">
                  <div className="flex justify-center items-center">
                    <img src={customerImage} className="w-20" alt="" />
                  </div>
                  <div className="flex justify-center items-center mt-3">
                    <Button variant="tertiary">
                      Upload Photo
                    </Button>
                  </div>
                </div>
                <div className="w-[80%]">
                  <div className="gap-4 flex items-center justify-between w-full">
                    <div className="flex flex-col w-[33%]">
                      <label className="mb-1 text-[#495160] text-sm">
                        GST Number
                      </label>
                      <Input placeholder="Enter GST Number" />
                    </div>
                    <div className="flex flex-col w-[33%]">
                      <label className="mb-1 text-[#495160] text-sm">
                        Anniversary
                      </label>
                      <Input placeholder="Enter Customer Anniversary" />
                    </div>
                    <div className="flex flex-col w-[33%]">
                      <label className="mb-1 text-[#495160] text-sm">
                        Profession
                      </label>
                      <Input placeholder="Enter Customer Profession" />
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between w-full">
                    <div className="flex flex-col w-[48%]">
                      <label className="mb-1 text-[#495160] text-sm">
                        Proof Type
                      </label>
                      <Select options={[]} placeholder="Select Proof" />
                    </div>
                    <div className="flex flex-col w-[48%]">
                      <label className="mb-1 text-[#495160] text-sm">
                        Document Number
                      </label>
                      <Input placeholder="Enter Document Number" />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <div
                        className="bg-white px-6 py-8 h-[8.9375rem] border-2 border-dashed w-[50%]
                         border-[#818894] flex flex-col justify-center items-center rounded-lg cursor-pointer"
                        onClick={() => document.getElementById("file-input")?.click()}
                      >

                        <>
                          <img src={file} className="w-8 mb-3" alt="Upload Icon" />
                          <p className="text-[#303F58] text-sm font-semibold">
                          Upload document
                          </p>
                        </>
                        <input
                          id="file-input"
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                        <p className="text-[0.625rem] text-[#4B5C79] mt-1">
                          Maximum File Size: 5 MB
                        </p>
                        <p className="text-[0.625rem] text-[#4B5C79]">
                          Supported Format: JPEG, PNG
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="bg-[#EAECF05E] p-8 rounded-lg">
              <p className="text-[#2C3E50] font-bold text-base">Client Consultation</p>
              <p className="text-[#495160] text-xs mt-3">This section captures important details about the client’s preferences, concerns, and needs. It includes areas like skin type, hair type, health conditions, and other relevant factors to ensure personalized services. The consultation helps tailor treatments, products, and recommendations for an optimal experience.</p>
              <div className="mt-3">
                <ConsultationModal/>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          {activeTab === 0 ? (
            <Button
              onClick={closeModal}
              variant="secondary"
              className="pl-10 pr-10"
            >
              Cancel
            </Button>
          ) : (
            <Button
              onClick={handleBack}
              variant="secondary"
              className="pl-10 pr-10"
            >
              Back
            </Button>
          )}
          {activeTab === 1 && (
            <Button
              onClick={handleNext}
              variant="secondary"
              className="pl-10 pr-10"
            >
              Skip
            </Button>
          )}
          {activeTab < tabs.length - 1 ? (
            <Button onClick={handleNext} className="pl-11 pr-11">
              Next
            </Button>
          ) : (
            <Button onClick={closeModal} className="pl-11 pr-11">
              Finish
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CreateCustomerModal;
