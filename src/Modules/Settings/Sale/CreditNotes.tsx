import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CheveronDown from "../../../assets/icons/CheveronDown";
import CirclePlus from "../../../assets/icons/circleplus";
import Link2 from "../../../assets/icons/Link2";
import WalletMinimal from "../../../assets/icons/WalletMinimal";
import Button from "../../../Components/Button";
import Checkbox from "../../../Components/Form/Checkbox";
import Input from "../../../Components/Form/Input";
import TextArea from "../../../Components/Form/TextArea";
import Modal from "../../../Components/modal/Modal";
import { useRegularApi } from "../../../context/ApiContext";
import useApi from "../../../Hooks/useApi";
import { endpoints } from "../../../Services/apiEndpoints";
import Banner from "../Organization/Banner";

type Props = {};

interface creditNote {
  overRideCostPrice: boolean;
  creditNoteQr: boolean;
  creditNoteQrType: string;
  creditNoteQrDescription: string;
  recordLocking: boolean;
  creditNoteTC: string;
  creditNoteCN: string;
}

function CreditNotes({ }: Props) {
  const organizationDetails = [
    "${ORGANIZATION.CITY} ${ORGANIZATION.STATE} ${ORGANIZATION.POSTAL_CODE}",
    "${ORGANIZATION.COUNTRY}",
    "${ORGANIZATION.GSTNO_LABEL} ${ORGANIZATION.GSTNO_VALUE}",
    "${ORGANIZATION.PHONE}",
    "${ORGANIZATION.EMAIL}",
    "${ORGANIZATION.WEBSITE}",
  ];

  const organisationData = {
    creditNotes: [
      "Credit Note Date",
      "Credit Note#",
      "Reff#",
      "Total",
      "Total in Base Currency without Currency Code",
    ],
    customer: [
      "Salutation",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Mobile",
      "Department",
      "Designation",
      "Name",
      "Company Name",
      "Billing Attention",
      "Billing Address",
      "Billing City",
    ],
    organization: [
      "Organization Name",
      "Logo",
      "Street Address 1",
      "Street Address 2",
      "City",
      "ZIP/Postal Code",
      "State/Province",
      "Country",
      "Phone#",
      "Fax#",
    ],
  };



  const { request: addCrditNote } = useApi("put", 5007);
  const [invoiceURLDropdown, setInvoiceURLDropdown] = useState(false);
  const [configureModal, setConfigureModal] = useState(false);
  const [placeHolderModal, setPlaceHolderModal] = useState(false);
  const {settingsData,refreshContext}=useRegularApi()

  const [inputData, setInputData] = useState<creditNote>({
    overRideCostPrice: false,
    creditNoteQr: false,
    creditNoteQrType: "",
    creditNoteQrDescription: "",
    recordLocking: false,
    creditNoteTC: "",
    creditNoteCN: "",
  });

  // console.log(inputData);

  const handleInputChange = (
    eventOrChecked: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | boolean,
    name?: string
  ) => {
    if (typeof eventOrChecked === "boolean" && name) {
      // If it's a checkbox value (boolean), update state directly
      setInputData((prevData) => ({
        ...prevData,
        [name]: eventOrChecked,
      }));
    } else {
      // Handle input/select/textarea changes
      const event = eventOrChecked as ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
      const { name, type } = event.target;

      if (type === "checkbox") {
        const target = event.target as HTMLInputElement;
        setInputData((prevData) => ({
          ...prevData,
          [name]: target.checked,
        }));
      } else {
        const target = event.target as HTMLSelectElement | HTMLTextAreaElement;
        setInputData((prevData) => ({
          ...prevData,
          [name]: target.value,
        }));
      }
    }
  };




  const handleOptionClick = (option: string) => {
    setInputData((prevData) => ({
      ...prevData,
      creditNoteQrType: option,
    }));
    setInvoiceURLDropdown(false);
  };

  const handleSaveCreditNote = async () => {
    try {
      const url = `${endpoints.ADD_CREDIT_NOTE_SETTINGS}`;
      console.log("inou",inputData);
      
      const apiResponse = await addCrditNote(url, inputData);
      console.log(apiResponse);
      const { response, error } = apiResponse;
      if (!error && response) {
        toast.success(response.data);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      console.log(error, " Error in adding Credit note");
    }
  };

  const openModal = (configure: boolean, placeholder: boolean) => {
    if (configure) {
      setConfigureModal(configure);
    } else if (placeholder) {
      setPlaceHolderModal(placeholder);
    }
  };

  const closeModal = (configure: boolean, placeholder: boolean) => {
    if (!configure) {
      setConfigureModal(configure);
    } else if (!placeholder) {
      setPlaceHolderModal(placeholder);
    }
  };

  useEffect(() => {
    refreshContext({settingsData:true})
  }, []);

  useEffect(() => {
    if (!inputData.creditNoteQr) {
      setInputData((prevData) => ({
        ...prevData,
        creditNoteQrDescription: "",
        creditNoteQrType: "",
      }));
    }


  }, [inputData.creditNoteQr]);


  useEffect(() => {
    if (settingsData) {
      setInputData((prevData) => ({
        ...prevData,
        ...settingsData?.creditNoteSettings,
      }));
    }
  }, [settingsData]);

 console.log("ds",inputData);
 
  return (
    <div className="p-5 text-[#303F58] h-[100vh] hide-scrollbar overflow-scroll">
      <Banner />
      <p className="  font-bold text-xl mt-4">Credit Notes</p>

      {/* Cost Price Preference */}
      <div className="mt-4 p-6 rounded-lg bg-white space-y-2">
        <p className="font-semibold text-sm">Cost Price Preference</p>

        <Checkbox
          label="Allow users to override cost prices in credit notes"
          checked={inputData.overRideCostPrice}
          onChange={(checked) => handleInputChange(checked, "overRideCostPrice")}
        />


        <p className="text-xs mt-2 text-[#818894]">
          Mark this option to allow users to manually edit and update the
          cost price that is fetched from the recent transaction. Once you
          override the cost price, the latest cost price will not be updated
          based on the recent transaction.
        </p>


      </div>

      {/* QR Code Toggle */}
      <div className="mt-4 p-6 rounded-lg bg-white space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm  ">Credit Note QR Code</p>
        </div>
        <div className="bg-[#FEFBF8] rounded-lg  space-y-3">
          <p className="text-xs   ">
            Enable and configure the QR code you want to display on the PDF copy
            of an Credit Note. Your customers can scan the QR code using their
            device to access the URL or other information that you configure.
          </p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">

              <input
                type="checkbox"
                className="sr-only"
                checked={inputData.creditNoteQr}
                name="creditNoteQr"
                onChange={handleInputChange}
              />
              <div
                className={`w-9 h-5 rounded-full shadow-inner transition-colors ${inputData.creditNoteQr ? "bg-[#97998d]" : "bg-[#97998d]"
                  }`}
              ></div>
              <div
                className={`dot absolute w-3 h-3 bg-white rounded-full top-1 transition-transform ${inputData.creditNoteQr
                  ? "transform translate-x-full left-2"
                  : "left-1"
                  }`}
              ></div>
            </div>
            <div className="ml-2   font-semibold text-xs">
              {inputData.creditNoteQr ? "Enabled" : "Disabled"}
            </div>
          </label>
        </div>
        {inputData.creditNoteQr && (
          <div className="grid grid-cols-12 items-center gap-3 text-xs">
            <div className="relative col-span-4">
              <label htmlFor="qrCodeType" className="text-slate-600">
                QR Code Type
              </label>
              <div
                onClick={() => setInvoiceURLDropdown(!invoiceURLDropdown)}
                className="relative w-full mt-2 cursor-pointer"
              >
                <p
                  id="qrCodeType"
                  className={`appearance-none w-full text-slate-600 bg-white text-xs h-[39px] pl-3 pr-8 rounded-3xl leading-tight focus:outline-none border focus:bg-white ${invoiceURLDropdown ? "border-darkRed" : "border-inputBorder"
                    } flex items-center`}
                >
                  {inputData.creditNoteQrType || "Select an option"}
                </p>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CheveronDown color="gray" />
                </div>
              </div>

              {/* Custom dropdown items */}
              {invoiceURLDropdown && (
                <div className="absolute w-full mt-1 bg-white text-[#4B5C79] rounded-md shadow-lg z-10">
                  <div className="flex flex-col p-2">
                    <div
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 border-b flex border-b-inputBorder space-x-1"
                      onClick={() => handleOptionClick(" UPI ID")}
                    >
                      <p className="mt-[2px]">
                        <WalletMinimal color="#4B5C79" size={16} />
                      </p>
                      <div className="flex flex-col">
                        <p className="font-medium text-slate-700 flex space-x-1 items-center">
                          UPI ID
                        </p>
                        <p className="text-xs text-slate-500">
                          UPI ID Will be displayed as QR code on invoices
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 border-b flex border-b-inputBorder space-x-1"
                      onClick={() => handleOptionClick(" Invoice URL")}
                    >
                      <p className="mt-[2px]">
                        <Link2 size={16} color="#4B5C79" />
                      </p>
                      <div className="flex flex-col">
                        <p className="font-medium text-slate-700 flex space-x-1 items-center">
                          Invoice URL
                        </p>
                        <p className="text-xs text-slate-500">
                          Lorem ipsum dolor sit amet consectetur. Commodo enim
                        </p>
                      </div>
                    </div>
                    <div
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex space-x-1"
                      onClick={() => handleOptionClick("Custom")}
                    >
                      <p className="mt-[2px]">
                        <Link2 color="#4B5C79" size={16} />
                      </p>
                      <div className="flex flex-col">
                        <p className="font-medium text-slate-700 flex space-x-1 items-center">
                          Custom
                        </p>
                        <p className="text-xs text-slate-500">
                          Lorem ipsum dolor sit amet consectetur. Commodo enim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative col-span-8">

              <Input 
              value={inputData?.creditNoteQrDescription}
                onChange={(e)=>setInputData({...inputData,creditNoteQrDescription:e.target.value})} placeholder="Enter Description " label=" QR Code Description" />
            </div>

            <div className="col-span-12">
              <Button
                onClick={() => openModal(true, false)}
                className="w-[120px] h-[38px] flex justify-center rounded-lg"
              >
                <p>Configure</p>
              </Button>
              <Modal
                open={configureModal}
                onClose={() => closeModal(false, true)}
                align="top"
                className="w-[665px]"
              >
                <div className="p-5 mt-3">
                  <div className="mb-5 flex p-4 items-center rounded-xl h-[64px] bg-gradient-to-br from-[#F7ECD9] to-[#B5F0D3]  relative overflow-hidden">
                    <div
                      className="absolute top-0 -right-8 w-[178px] h-[68px]"
                    // style={{
                    //   backgroundImage: `url(${topImg})`,
                    //   backgroundRepeat: "no-repeat",
                    // }}
                    ></div>
                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-text_primary">
                        Configure Custom QR Code
                      </h3>
                    </div>
                    <div
                      className="ms-auto text-3xl cursor-pointer relative z-10"
                      onClick={() => closeModal(false, true)}
                    >
                      &times;
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div
                      onClick={() => openModal(false, true)}
                      className="text-[#00534d] flex items-center space-x-1 font-bold text-sm cursor-pointer"
                    >
                      <p>Insert Placeholders</p>
                      <CirclePlus color="#00534d" size={14} />
                    </div>
                    <Modal
                      open={placeHolderModal}
                      onClose={() => closeModal(true, false)}
                      style={{ width: "740px", padding: "12px" }}
                    >
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h3 className="font-bold">Credit Notes</h3>
                          {organisationData.creditNotes.map((item) => (
                            <div
                              key={item}
                              className="p-2 my-2 text-[12px] rounded hover:bg-[#F3E6E6] cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        <div>
                          <h3 className="font-bold">Customer</h3>
                          {organisationData.customer.map((item) => (
                            <div
                              key={item}
                              className="p-2 my-2 text-[12px] rounded hover:bg-[#F3E6E6] cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        <div>
                          <h3 className="font-bold">Organization</h3>
                          {organisationData.organization.map((item) => (
                            <div
                              key={item}
                              className="p-2 my-2 text-[12px] rounded hover:bg-[#F3E6E6] cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Modal>
                    <div className="p-3 bg-[#F4F4F4]">
                      {organizationDetails.map((data) => (
                        <p key={data} className="text-[12px]">
                          {data}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end my-4 gap-2">
                    <Button
                      onClick={() => closeModal(false, true)}
                      variant="secondary"
                      className="h-[38px] w-[120px] flex justify-center"
                    >
                      <p className="text-sm">Cancel</p>
                    </Button>
                    <Button
                      onClick={() => closeModal(false, true)}
                      variant="primary"
                      type="submit"
                      className="h-[38px] w-[120px] flex justify-center"
                    >
                      <p className="text-sm">Update</p>
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        )}
      </div>

      {/* Record Locking Toggle */}
      <div className="mt-4 p-6 rounded-lg bg-white space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm  ">Record Locking</p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={inputData.recordLocking}
                name="recordLocking"
                onChange={handleInputChange}
              />
              <div
                className={`w-9 h-5 rounded-full shadow-inner transition-colors ${inputData.recordLocking ? "bg-[#97998d]" : "bg-[#97998d]"
                  }`}
              ></div>
              <div
                className={`dot absolute w-3 h-3 bg-white rounded-full top-1 transition-transform ${inputData.recordLocking
                  ? "transform translate-x-full left-2"
                  : "left-1"
                  }`}
              ></div>
            </div>
            <div className="ml-2   font-semibold text-sm">
              {inputData.recordLocking ? "Enabled" : "Disabled"}
            </div>
          </label>
        </div>
        <div className="bg-[#FEFBF8] rounded-lg p-3 space-y-3">
          <p className="text-xs ">
            Record locking helps you control who can make changes to certain
            records within your organization. This can be useful if you want to
            protect important information or prevent accidental changes from
            being made. When you lock a record, only users with permission to
            edit locked records will be able to edit or delete it.
          </p>
        </div>
      </div>

      {/* Terms & Condition */}
      <div className="mt-4 p-6 rounded-lg bg-white">
        <p className="font-semibold   text-sm mb-3">Terms & Conditions</p>
        <TextArea
          name="creditNoteTC"
          value={inputData.creditNoteTC}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 p-6 rounded-lg bg-white">
        <p className="font-semibold  text-sm mb-3">Customer Notes</p>
        <TextArea
          value={inputData.creditNoteCN}
          name="creditNoteCN"
          onChange={handleInputChange}
        />
      </div>

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <Button
          size="sm"
          className="text-sm  pl-10 pr-10"
          onClick={handleSaveCreditNote}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default CreditNotes;