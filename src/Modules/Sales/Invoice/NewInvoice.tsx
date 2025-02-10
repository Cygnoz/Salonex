import { Link } from "react-router-dom"
import BackIcon from "../../../assets/icons/BackIcon"
import { useState } from "react";
import ObjectSelect from "../../../Components/Form/ObjectSelect";
import Input from "../../../Components/Form/Input";
import Select from "../../../Components/Form/Select";
import RadioButton from "../../../Components/Form/RadioButton";
import DateInput from "../../../Components/DateInput";
import TextArea from "../../../Components/Form/TextArea";
import Upload from "../../../assets/icons/Upload";
import Button from "../../../Components/Button";
import PrinterIcon from "../../../assets/icons/PrinterIcon";

type Props = {}

function NewInvoice({}: Props) {
    const [selected, setSelected] = useState<string>("Cash");
    const [isInterState] = useState<boolean>(false);
    const [state, setState] = useState<[]>([]);
    const [isNonTaxable] = useState<boolean>(false);
    const [selectedCustomer, setSelectedCustomer] = useState<any>([]);
     const [Customers] = useState<[] | any>([
        {
          CustomerProfile:
            "https://i.postimg.cc/Qd5VB9FY/colorful-swirl-logo-design-concept-illustration-vector.jpg",
          ame: "John",
          lastName: "Doe",
          companyName: "Tech Solutions Ltd.",
          customerDisplayName: "Tech Supplies",
          customerEmail: "john.doe@techsolutions.com",
          workPhone: "+1234567890",
          mobile: "+0987654321",
          billingCountry: "India",
          billingAddressStreet1: "123 Tech Park",
          billingAddressStreet2: "Block B",
          billingCity: "Pune",
          billingState: "Maharashtra",
          billingPinCode: "411057",
          billingPhone: "+911234567890",
          billingFaxNum: "+912345678901",
          shippingCountry: "India",
          shippingAddressStreet1: "456 Tech Street",
          shippingAddressStreet2: "Suite 202",
          shippingCity: "Mumbai",
          shippingState: "Maharashtra",
          shippingPinCode: "400001",
          shippingPhone: "+912345678901",
          shippingFaxNum: "+911234567890",
        },
        {
          CustomerProfile:
            "https://i.postimg.cc/XY8qcMg9/depositphotos-75675633-stock-illustration-colorful-sun-logo.webp",
          ame: "Jane",
          lastName: "Smith",
          companyName: "Innovate Corp.",
          customerDisplayName: "Innovate Supplies",
          customerEmail: "jane.smith@innovatecorp.com",
          workPhone: "+9876543210",
          mobile: "+1234567890",
          billingCountry: "USA",
          billingAddressStreet1: "789 Innovation Drive",
          billingAddressStreet2: "Building A",
          billingCity: "San Francisco",
          billingState: "California",
          billingPinCode: "94107",
          billingPhone: "+14155551234",
          billingFaxNum: "+14155554321",
          shippingCountry: "USA",
          shippingAddressStreet1: "789 Innovation Drive",
          shippingAddressStreet2: "Building B",
          shippingCity: "San Francisco",
          shippingState: "California",
          shippingPinCode: "94107",
          shippingPhone: "+14155556789",
          shippingFaxNum: "+14155598765",
        },
        {
          CustomerProfile:
            "https://i.postimg.cc/XY8qcMg9/depositphotos-75675633-stock-illustration-colorful-sun-logo.webp",
          ame: "Jane",
          lastName: "Smith",
          companyName: "Innovate Corp.",
          customerDisplayName: "Innovate Supplies",
          customerEmail: "jane.smith@innovatecorp.com",
          workPhone: "+9876543210",
          mobile: "+1234567890",
          billingCountry: "USA",
          billingAddressStreet1: "789 Innovation Drive",
          billingAddressStreet2: "Building A",
          billingCity: "San Francisco",
          billingState: "California",
          billingPinCode: "94107",
          billingPhone: "+14155551234",
          billingFaxNum: "+14155554321",
          shippingCountry: "USA",
          shippingAddressStreet1: "789 Innovation Drive",
          shippingAddressStreet2: "Building B",
          shippingCity: "San Francisco",
          shippingState: "California",
          shippingPinCode: "94107",
          shippingPhone: "+14155556789",
          shippingFaxNum: "+14155598765",
        },
      ]);
      const handleSelect = (option: any) => {
        setSelectedCustomer(option);
        console.log("Selected Supplier:", option);
      };
    
      const handleRadioChange = (value: string, name: string) => {
        console.log(`Selected ${name}: ${value}`);
        setSelected(value);
      };
  return (
    <div>
      <div className="flex items-center gap-4">
        <Link to={"/sales/invoice"}>
          <BackIcon />
        </Link>
        <h1 className="text-lg font-bold text-[#2C3E50]">Create New Invoice</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 h-[90vh] overflow-scroll hide-scrollbar mt-3">
         <div className="col-span-9 bg-white p-6 rounded-t-2xl">
         <div className=" grid grid-cols-3 gap-4 ">
            <ObjectSelect
              required
              placeholder="Select Customer"
              options={Customers}
              label="Select Customer"
              selectedOption={selectedCustomer}
              onSelect={handleSelect}
              searchKey={"customerDisplayName"}
              displayFields={{
                optionImage: "CustomerProfile",
                optionLabel: "customerDisplayName",
                optionMobile: "mobileNumber",
              }}
            />

            <Input
              readOnly
              label="Invoice" placeholder="Enter Invoice No" />

              <div className="-mt-2">
            <label className="text-[#495160] text-xs">Invoice Date</label>
            <DateInput className="mt-1"/>
              </div>

            <Input label="Sales Order Number" placeholder="Enter Order No" />

            <Input label="Reference" placeholder="Reference" />
        
            <div className="-mt-2">
            <label className="text-[#495160] text-xs">Invoice Date</label>
            <DateInput className="mt-1"/>
              </div>

          <div className="-mt-2">
            <label className="text-[#495160] text-xs">Expected Shipment Date</label>
            <DateInput className="mt-1"/>
           </div>

          <div className="-mt-2">
            <label className="text-[#495160] text-xs">Due Date</label>
            <DateInput className="mt-1"/>
           </div>

           <Select
              label="Payment Terms"
              placeholder="Select Payment Terms"
              options={[]}
            />
              
            <Select
              label="Delivery Methods"
              placeholder="Select"
              options={[]}
            />
            <div>
              <label
                htmlFor="PaymentMode"
                className="block text-xs text-[#495160] mb-1 font-normal text-deepStateBlue"
              >
                Payment Mode
              </label>
              <div className="flex items-center space-x-4 text-textColor text-sm mt-2">
                <div>

                <RadioButton
                  id="Cash"
                  name="paymentMode"
                  label="Cash"
                  selected={selected}
                  onChange={handleRadioChange}
                  />
                  </div>
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
        <div className="col-span-3 bg-white p-6 rounded-t-2xl">
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
          <div className="text-xs mt-3 ">
            <div className="border-inputBorder text-textColor border-[#C96E76] w-full border-dashed border p-2 rounded flex flex-col gap-2 justify-center items-center bg-white mb-4 mt-2">
              <span className="text-center inline-flex items-center gap-2">
                <Upload color="#C96E76" />
                <span className="text-[#0B0B0B] text-xs">Upload File</span> <span className="text-[#C96E76]">browse</span>
              </span>
              <div className="text-center  text-text_tertiary">
                <span className="text-[10px]">Support JPG,PNG</span>
              </div>
            </div>
            <p className="text-xs mt-1 text-gray-600"></p>
            <input
              type="file"
              className="hidden"
              value=""
              name="documents"
            // onChange={(e)=>handleFileChange(e)}
            />
          </div>

          <div className=" pb-4  text-dropdownText border-b-2 border-slate-200 space-y-2  text-xs text-[#495160]">
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
                <p> Total Quantity</p>
              </div>
              <div className="w-full text-end">
                {" "}
                <p className="text-end font-bold">₹{"0.00"} </p>
              </div>
            </div>

            <div className="flex ">
              <div className="w-[75%]">
                <p> Total Item Discount</p>
              </div>
              <div className="w-full text-end">
                <p className="text-end font-bold">₹{"0.00"} </p>
              </div>
            </div>

            <div>
              {isInterState ? (
                <div className="flex ">
                  <div className="w-[75%]">
                    {" "}
                    <p> IGST</p>
                  </div>
                  <div className="w-full text-end">
                    {" "}
                    <p className="text-end font-bold">₹{"0.00"} </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex ">
                    <div className="w-[75%]">
                      {" "}
                      <p> SGST</p>
                    </div>
                    <div className="w-full text-end">
                      {" "}
                      <p className="text-end font-bold">₹{"0.00"} </p>
                    </div>
                  </div>

                  <div className="flex mt-2">
                    <div className="w-[75%]">
                      {" "}
                      <p> CGST</p>
                    </div>
                    <div className="w-full text-end">
                      {" "}
                      <p className="text-end font-bold">₹{"0.00"} </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {!isInterState && (
              <div className="flex ">
                <div className="w-[75%]">
                  {" "}
                  <p> Total Tax</p>
                </div>
                <div className="w-full text-end">
                  {" "}
                  <p className="text-end font-bold"> ₹{"0.00"} </p>
                </div>
              </div>
            )}

            <div className="flex ">
              <div className="w-[75%]">
                {" "}
                <p>Other Expense</p>
              </div>
              <div className="w-full text-end font-bold">
                {" "}
                <p className="text-end">₹{"0.00"} </p>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[75%]">
                {" "}
                <p>Fright</p>
              </div>
              <div className="w-full text-end font-bold">
                {" "}
                <p className="text-end">₹{"0.00"} </p>
              </div>
            </div>

            <div className="flex ">
              <div className="w-[75%]">
                {" "}
                <p>Rount Off</p>
              </div>
              <div className="w-full text-end font-bold">
                {" "}
                <p className="text-end">₹{"0.00"} </p>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[150%]">
                {" "}
                <p>Bill Discount</p>
                <div className=""></div>
              </div>

              <div className=" ">
                <div className="border border-inputBorder rounded-lg flex items-center justify-center p-1 gap-1">
                  <input
                    step="0.01"
                    name="transactionDiscount"
                    type="text"
                    placeholder="0"
                    className="w-[30px]  focus:outline-none text-center"
                  />
                  <select
                    className="text-xs   text-zinc-400 bg-white relative"
                    name="transactionDiscountType"
                  >
                    <option value="percentage">%</option>
                    <option value="currency"></option>
                  </select>
                </div>
              </div>
              <div className="w-full text-end ">
                {" "}
                <p className="text-end">
                  <p className="text-end font-bold">₹{"0.00"} </p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-black my-4">
            <div className="w-[75%] font-bold text-sm text-[#495160]">
              {" "}
              <p>Total Gross</p>
            </div>
            <div className="w-full text-end font-bold text-base">
              {" "}
              <p className="text-end"> ₹{"0.00"} </p>
            </div>
          </div>

          {selected === "Cash" && (
            <>
              <div className="flex gap-4 items-center justify-center mb-2">
                <Select
                  options={[]}
                  label="  Paid Through Account"
                  placeholder="Select Account"
                />
              </div>

              <Input label="Paid Amount" placeholder="Enter Amount" />

              <div className=" text-sm flex mt-2 items-center justify-end">
                <p> Balance ₹{"0.00"} </p>
              </div>
            </>
          )}
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

export default NewInvoice