import Table from "../../../../Components/Table/Table";
import Button from "../../../../Components/Button";
import CirclePlus from "../../../../assets/icons/circleplus";
import Modal from "../../../../Components/modal/Modal";
import { useState } from "react";
import Select from "../../../../Components/Form/Select";
import Input from "../../../../Components/Form/Input";
import ViewTaxDetails from "./ViewTaxDetails";
import taxBgImage from "../../../../assets/images/Frame 629026.png"

type Props = {};

type TaxGst = {
  _id: string;
  taxName: string;
  taxRate: string;
  cgst: string;
  sgst: string;
  igst: string;
};

function TaxRate({ }: Props) {
  const initialTaxGst = {
    _id: "",
    taxName: "",
    taxRate: "",
    cgst: "",
    sgst: "",
    igst: "",
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [taxGst, setTaxGst] = useState<TaxGst>(initialTaxGst);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedGstRate, setSelectedGstRate] = useState<any>(null);

  console.log(taxGst);

  const openModal = (taxRate: TaxGst | null = null) => {
    if (taxRate) {
      setTaxGst(taxRate);
    } else {
      setTaxGst(initialTaxGst);
    }
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setTaxGst(initialTaxGst);
  };

  const dummyColumns = [
    { id: "TaxName", label: "Tax Name ", visible: true },
    { id: "Rate", label: "Rate", visible: true },
    { id: "CGST", label: "CGST", visible: true },
    { id: "SGST", label: "SGST", visible: true },
    { id: "IGST", label: "IGST", visible: true },
  ];

  const dummyData = [
    {
      _id: "1",
      TaxName: "GST 0",
      Rate: "0%",
      CGST: "0%",
      SGST: "0%",
      IGST: "0%",
    },
    {
      _id: "2",
      TaxName: "GST 1",
      Rate: "10%",
      CGST: "5%",
      SGST: "5%",
      IGST: "10%",
    },
    {
      _id: "3",
      TaxName: "GST 2",
      Rate: "0%",
      CGST: "0%",
      SGST: "0%",
      IGST: "0%",
    },
  ];
  const handleEyeClick = (id: string) => {
    const selectedData = dummyData.find((item) => item._id === id);
    if (selectedData) {
      setSelectedGstRate(selectedData);
      setIsViewModalOpen(true);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#303F58] font-bold">Tax Rate</p>
        <div className="flex gap-4">
          <Button
            onClick={() => openModal(null)}
            className="text-sm font-medium"
            size="sm"
          >
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

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="w-[50%] p-8 bg-[#F8F4F4]"
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
            <p className="mb-2">Tax Name</p>
            <Input placeholder="Enter tax name" />

            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">Rate</label>
                <Select options={[]} placeholder="Enter tax rate" />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">CGST</label>
                <Input placeholder="CGST" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">IGST</label>
                <Select options={[]} placeholder="Enter tax rate" />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="mb-1">SGST</label>
                <Input placeholder="CGST" />
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={closeModal} variant="secondary" className="text-sm pl-7 pr-7">
            Cancel
          </Button>
          <Button className="pl-7 pr-7">save</Button>
        </div>

      </Modal>

      <ViewTaxDetails
        gstRate={selectedGstRate}
        open={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </div>
  );
}

export default TaxRate;