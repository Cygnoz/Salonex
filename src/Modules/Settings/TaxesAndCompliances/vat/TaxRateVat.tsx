import { useState } from "react";
import CirclePlus from "../../../../assets/icons/circleplus";
import Button from "../../../../Components/Button";
import Modal from "../../../../Components/modal/Modal";
import Table from "../../../../Components/Table/Table";
import taxBgImage from "../../../../assets/images/Frame 629026.png"
import Input from "../../../../Components/Form/Input";
import ViewTaxDetailsVat from "./ViewTaxDetailsVat";

type Props = {};

function TaxRateVat({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedVatRate, setSelectedVatRate] = useState<any>(null);

  const dummyColumns = [
    { id: "TaxName", label: "Tax Name", visible: true },
    { id: "Rate", label: "Rate(%)", visible: true },
  ];

  const dummyData = [
    { _id: "1", TaxName: "VAT 0", Rate: "0%" },
    { _id: "2", TaxName: "VAT 1", Rate: "5%" },
    { _id: "3", TaxName: "VAT 2", Rate: "10%" },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEyeClick = (id: string) => {
    const selectedData = dummyData.find((item) => item._id === id);
    if (selectedData) {
      setSelectedVatRate(selectedData);
      setIsViewModalOpen(true);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#303F58] font-bold">Tax Rate</p>
        <div className="flex gap-4">
          <Button onClick={openModal} className="text-sm font-medium" size="sm">
            <CirclePlus color="white" /> New Tax
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <Table
          columns={dummyColumns}
          data={dummyData}
          searchPlaceholder={"Search Taxes"}
          searchableFields={["TaxName"]}
          loading={false}
          onRowClick={handleEyeClick}
        />
      </div>

      {/* "New Tax" Modal */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="w-[50%] p-8  bg-[#F8F4F4]"
      >
          <div
          className="mt-4  rounded-2xl flex justify-between items-center relative bg-cover bg-no-repeat bg-right"
        >
            <div className="relative flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img src={taxBgImage} className="w-12" alt="" />
              <div>
                <p className="text-[#004D4D] font-bold text-base">Create New Tax</p>
                <p className="text-[#818894] text-[10px]">
                  Lorem ipsum dolor sit amet cons Lorem ipsum dolor sit amet cons amet cons Lorem ipsu
                </p>
              </div>
            </div>
            <div className="text-4xl text-[#2C3E50]  cursor-pointer">&times;</div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl text-text_tertiary text-sm">
          <form>
            <div>
              <p className="mb-2">Tax Name</p>
              <Input placeholder="Enter tax name" />
            </div>
            <div className="mt-4">
              <p className="mb-2">Rate</p>
              <Input placeholder="Enter Rate" />
            </div>
          </form>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm pl-7 pr-7">
            Cancel
          </Button>
          <Button className="pl-7 pr-7">Save</Button>
        </div>
      </Modal>

      {/* "View Details" Modal */}
      <ViewTaxDetailsVat
        vatRate={selectedVatRate}
        open={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
}

export default TaxRateVat;