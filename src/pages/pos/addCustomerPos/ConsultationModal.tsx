import { useState } from "react";
import ChevronRight from "../../../assets/icons/ChevronRight";
import Button from "../../../Components/Button";
import Modal from "../../../Components/modal/Modal";
import Input from "../../../Components/Form/Input";

const tabs = [
    { name: "Skin Type", options: ["Normal Skin", "Normal to Sensitive Skin", "Oily Skin", "Oily to Sensitive Skin", "Dry Skin", "Dry to Sensitive Skin", "Normal to Dry Skin", "Normal to Oily Skin", "Oily to Dry Skin", "Sensitive Skin", "T-Zone"] },
    { name: "Skin Problems", options: ["Pimple/Acne", "Open Pores", "Tanning", "Aging/Wringles", "Dark Circle", "Dandruff Related  Issue", "Dark Spot", "Pigmentaion", "Facial Hair Growth"] },
    { name: "Hair Type", options: ["Dry Hair", "Oily Hair", "Normal Hair", "Combination Hair"] },
    { name: "Hair Problems", options: ["Hair Fall", "Frezzy Hair", "Treated Hair", "Split End", "Thin Hair", "Thick Hair", "Other"] },
    { name: "Scalp Type", options: ["Dry Scalp", "Oily Scalp", "Normal Scalp", "Combination Scalp", "Sensitive Scalp"] },
    { name: "Scalp Problem", options: ["Dandruffy", "Fungal Infection"] },
    { name: "Health Check", options: ["Diabetes", "Thyroid", "PCOS", "Hormonal Imbalance"] },
    { name: "Habits & Routines" },
    { name: "Medical Condition If Any" }
];

function ConsultationModal() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string[] }>({});

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setActiveTab(0);
        setSelectedOptions({});
    };

    const handleOptionClick = (option: string) => {
        setSelectedOptions((prev) => {
            const selected = prev[activeTab] || [];
            if (selected.includes(option)) {
                return { ...prev, [activeTab]: selected.filter((item) => item !== option) };
            } else {
                return { ...prev, [activeTab]: [...selected, option] };
            }
        });
    };

    const handleNext = () => {
        if (activeTab < tabs.length - 1) {
            setActiveTab(activeTab + 1);
        } else {
            closeModal();
        }
    };

    return (
        <div>
            <Button onClick={openModal}>
                Start <ChevronRight color="white" />
            </Button>
            <Modal
                className="w-[40%] p-8 bg-[#fdf8f8] rounded-2xl"
                open={isModalOpen}
                onClose={closeModal}
            >
                {/* Heading */}
                <p className="text-[#2C3E50] font-bold text-lg">{tabs[activeTab].name}</p>
                <p className="mt-2 text-[#495160] text-xs">
                    Please choose the option that best describes your {tabs[activeTab].name.toLowerCase()}
                </p>

                {/* Options */}
                <div className="flex flex-wrap gap-3 mt-4">
                    {tabs[activeTab]?.options?.map((option) => (
                        <div
                            key={option}
                            className={`px-4 py-2 border rounded-full cursor-pointer text-sm font-semibold ${selectedOptions[activeTab]?.includes(option)
                                ? "border-[#C96E76] text-[#C96E76]"
                                : "border-[#D1D1D1] text-[#495160]"
                                }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>

                {(activeTab === 1 || activeTab === 5) && (
                    <div className="mt-4">
                        <label className="text-sm text-[#303F58]">Other</label>
                        <div className="mt-1">
                            <Input placeholder="Enter details" />
                        </div>
                    </div>
                )}


                {/* Pagination and Buttons */}
                <div className="flex justify-between items-center mt-6">
                    <p className="text-xs text-[#818894] font-semibold">
                        {activeTab + 1} of {tabs.length}
                    </p>

                    <div className="flex gap-4">
                        {activeTab === 0 ? (
                            <Button onClick={closeModal} variant="secondary" className="pl-6 pr-6">
                                Cancel
                            </Button>
                        ) : (
                            <Button onClick={() => setActiveTab(activeTab - 1)} variant="secondary" className="pl-6 pr-6">
                                Back
                            </Button>
                        )}

                        <Button onClick={handleNext} className="pl-6 pr-6">
                            {activeTab < tabs.length - 1 ? "Save & Next" : "Finish"}
                        </Button>
                    </div>
                </div>

            </Modal>
        </div>
    );
}

export default ConsultationModal;