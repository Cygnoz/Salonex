import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import TextArea from "../../../Components/Form/TextArea"
import RadioButton from "../../../Components/Form/RadioButton"
import Input from "../../../Components/Form/Input"
import Select from "../../../Components/Form/Select"
import { useState } from "react"
import DateInput from "../../../Components/DateInput"
import Button from "../../../Components/Button"
import PrinterIcon from "../../../assets/icons/PrinterIcon"

type Props = {}

function NewCreditNote({}: Props) {
      const [selected, setSelected] = useState<string>("Cash");
      const handleRadioChange = (value: string, name: string) => {
        console.log(`Selected ${name}: ${value}`);
        setSelected(value);
      };
  return (
    <div>
        <div className="flex items-center gap-4">
        <Link to={"/sales/credit-note"}>
          <BackIcon />
        </Link>
        <h1 className="text-lg font-bold text-[#2C3E50]">Create New Credit Note</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 max-h-[90vh] overflow-scroll hide-scrollbar mt-3">
      <div className="col-span-9 bg-white p-6 rounded-t-2xl">
      <div className="grid grid-cols-3 gap-4 ">
            <Select
              label="Select Customer"
              placeholder="Select Customer"
              options={[]}
            />
            <Select
              label="Place of Supply"
              placeholder="Select Place of Supply"
              options={[]}
            />
             <Input
              label="Credit Note"
              placeholder="CN-1"
              readOnly
            />
            <Select
              label="Invoice"
              placeholder="Select Invoice"
              options={[]}
            />
            <Select
              label="Invoice Type"
              placeholder="Select Invoice Type"
              options={[]}
            />

           <div className="-mt-2">
            <label className="text-[#495160] text-xs">Customer Credit Date</label>
            <DateInput className="mt-1"/>
            </div>

            <Select
              label="Paid Through"
              placeholder="Select Paid Through"
              options={[]}
            />

            <Input
              label="Subject"
              placeholder="Enter Subject in 50 characters"
            />
            <div>
              <label
                htmlFor="PaymentMode"
                className="block text-xs text-[#495160] mb-1 font-normal text-deepStateBlue"
              >
                Payment Mode
              </label>
              <div className="flex items-center space-x-4 text-textColor text-sm mt-2">
                <RadioButton
                  id="Cash"
                  name="paymentMode"
                  label="Cash"
                  selected={selected}
                  onChange={handleRadioChange}
                />
                <RadioButton
                  id="Credit"
                  name="paymentMode"
                  label="Credit"
                  selected={selected}
                  onChange={handleRadioChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white p-6 rounded-t-2xl" >
        <TextArea
            name="description"
            label="Add Note"
            placeholder="Add a note"
            size="md"
          />
          <TextArea
            name="description"
            label="Terms & conditions"
            placeholder="Add Terms & Conditions of your Business"
            size="md"
          />
        <div className=" my-4 pb-4  text-dropdownText border-b-2 border-slate-200 space-y-2  text-xs text-[#495160]" >
            <div className="flex ">
                <div className="w-[75%]">
                  {" "}
                  <p>Sub Total</p>
                </div>
                <div className="w-full text-end">
                  {" "}
                  <p className="text-end font-bold">
                    {/* {oneOrganization?.baseCurrency}{" "} */}₹{"0.00"}{" "}
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-[75%]">
                  {" "}
                  <p>Total Quantity</p>
                </div>
                <div className="w-full text-end">
                  {" "}
                  <p className="text-end font-bold">
                    {/* {oneOrganization?.baseCurrency}{" "} */}{"0.00"}{" "}
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-[75%]">
                  {" "}
                  <p>SGST</p>
                </div>
                <div className="w-full text-end">
                  {" "}
                  <p className="text-end font-bold">
                    {/* {oneOrganization?.baseCurrency}{" "} */}₹{"0.00"}{" "}
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-[75%]">
                  {" "}
                  <p>CGST</p>
                </div>
                <div className="w-full text-end">
                  {" "}
                  <p className="text-end font-bold">
                    {/* {oneOrganization?.baseCurrency}{" "} */}₹{"0.00"}{" "}
                  </p>
                </div>
              </div>
        </div>
        <div className="flex text-black my-4">
            <div className="w-[75%] font-bold text-sm text-[#495160]">
              {" "}
              <p>Total</p>
            </div>
            <div className="w-full text-end font-bold text-base">
              {" "}
              <p className="text-end"> ₹{"0.00"} </p>
            </div>
          </div>

        </div>
      </div>
      <div
        className=" flex bg-white p-4 rounded-b-2xl  sticky"
      >
        <div className="flex gap-2 ml-auto">
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary">
            <PrinterIcon color={"#B5636A"}  /> Print
          </Button>
          <Button variant="primary">Save & Send</Button>
        </div>
      </div>
    </div>
  )
}

export default NewCreditNote