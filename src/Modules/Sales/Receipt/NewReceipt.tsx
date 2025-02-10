import { Link } from "react-router-dom"
import PrinterIcon from "../../../assets/icons/PrinterIcon"
import Button from "../../../Components/Button"
import Input from "../../../Components/Form/Input"
import Select from "../../../Components/Form/Select"
import TextArea from "../../../Components/Form/TextArea"
import BackIcon from "../../../assets/icons/BackIcon"
import ObjectSelect from "../../../Components/Form/ObjectSelect"
import NewCustomer from "../../Customer/NewCustomer"
import { useState } from "react"





const NewReceipt = () => {


    

// const [supplierBills] = useState<[] | any>([]);
// const [paymentState, setPaymentState] = useState<[] | any>([]);
const [selectedCustomer, setSelectedCustomer] = useState<any>([]);
const [Customers] = useState<[] | any>([
  {
    supplierProfile:
      "https://i.postimg.cc/Qd5VB9FY/colorful-swirl-logo-design-concept-illustration-vector.jpg",
    ame: "John",
    lastName: "Doe",
    companyName: "Tech Solutions Ltd.",
    supplierDisplayName: "Tech Supplies",
    supplierEmail: "john.doe@techsolutions.com",
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
    supplierProfile:
      "https://i.postimg.cc/XY8qcMg9/depositphotos-75675633-stock-illustration-colorful-sun-logo.webp",
    ame: "Jane",
    lastName: "Smith",
    companyName: "Innovate Corp.",
    supplierDisplayName: "Innovate Supplies",
    supplierEmail: "jane.smith@innovatecorp.com",
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
    supplierProfile:
      "https://i.postimg.cc/XY8qcMg9/depositphotos-75675633-stock-illustration-colorful-sun-logo.webp",
    ame: "Jane",
    lastName: "Smith",
    companyName: "Innovate Corp.",
    supplierDisplayName: "Innovate Supplies",
    supplierEmail: "jane.smith@innovatecorp.com",
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
  console.log("Selected Customer:", option);
};

  return (
    <div>
    <div className="flex mb-3 gap-5">
      <Link to={"/sales/receipt"}>
        <div className="flex justify-center items-center h-11 w-11 bg-[white] rounded-full">
          <BackIcon  />
        </div>
      </Link>
      <div className="flex justify-center items-center">
      <h4 className="font-bold text-base text-[#0B1320]">Create New Reciept</h4>
      </div>
    </div>

    <div className="grid grid-cols-12  gap-4 overflow-scroll hide-scrollbar ">
      <div className="col-span-9 bg-white p-6 rounded-t-2xl text-xs">
        <div className=" grid grid-cols-3 gap-4 pb-3">
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
              optionLabel: "CustomerDisplayName",
              optionMobile: "mobileNumber",
            }}
            NewItem={NewCustomer}
          />
          <Input label="Payment " placeholder="Payment " />
          <Input label="Amount Recieved" placeholder="Amount Recieved" />
          <Select
            label="Deposite To"
            placeholder="Select Account"
            options={[]}
          />
           
           <Input label="Payment Date" placeholder="Select Date" type="Date" />


          <Select
            label="Payment Mode"
            placeholder="Select payment mode"
            options={[]}
          />
         
        </div>
        {/* <PaymentTable
          supplierBills={supplierBills}
          paymentState={paymentState}
          setPaymentState={setPaymentState}
        /> */}
       
      </div>
      <div className="col-span-3 h-[50vh] bg-white p-6 rounded-t-2xl space-y-1 text-xs text-text_tertiary">
      <TextArea
          name="Add note"
          label="Add note"
          placeholder="Add note"
          size="sm"
        />
        <div className="flex">
          <div className="w-[75%]">
            <p>Amount Received</p>
          </div>
          <div className="w-full text-end font-bold">
            <p className="text-end">₹{"0.00"}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[100%]">
            <p>Amount used for payment</p>
          </div>
          <div className="w-full text-end font-bold">
            <p className="text-end">₹{"0.00"}</p>
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
          <PrinterIcon color={"#0b9d56"}  /> Print
        </Button>
        <Button variant="primary">Save & Send</Button>
      </div>
    </div>
  </div>
  )
}

export default NewReceipt