import { useState } from "react";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/BackIcon";
import Input from "../../Components/Form/Input";
import PhoneNumberInput from "../../Components/Form/PhoneInput";
import Select from "../../Components/Form/Select";
import DateInput from "../../Components/DateInput";
import TextArea from "../../Components/Form/TextArea";
import staff from '../../assets/icons/StaffUplaodPhoto.svg'
import AttachmentIcon from "../../assets/icons/AttachmentIcon";
import Checkbox from "../../Components/Form/Checkbox";
type Props = {}

function AddStaff({ }: Props) {
  // const {refreshContext,currencyData,countryData}=useRegularApi()

  const [activeTab, setActiveTab] = useState(1);
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

  const navigate = useNavigate();
  const closeTab = () => {
    navigate("/staffs");
  };


  const GenderOptions = [
    { value: "", label: "Select Gender" },
    { value: "Male", label: "Male" },
    { value: "Female.", label: "Female" },
  ];


  const PoofOptions = [
    { value: "", label: "Select Proof" },
    { value: "Licence", label: "Licence" },
    { value: "Passport", label: "Passport" },];

  return (
    <div>

      <div className="flex items-center gap-4 mb-4">
        <Link to={"/staffs"}>
          <BackIcon />
        </Link>
        <h1 className="text-lg font-bold text-[#2C3E50]">Create New Staff</h1>
      </div>
      <div className="py-5 px-[20%]  rounded-lg shadow-sm bg-[#ffffff] mb-6">
        <div className="flex p-2 items-center justify-between ">
          {[
            { step: 1, label: "General Info" },
            { step: 2, label: "Additional Details" },
            { step: 3, label: "Permission Access" },
          ].map(({ step, label }) => (
            <div className="flex">
              <div key={step} className="flex items-center">
                <div
                  className={`w-7 h-7 flex border-transparent   items-center justify-center text-[#4B5C79] font-semibold rounded-full border-2 ${activeTab === step
                    ? " bg-[#cc6c74] text-[#FFFFFF]"
                    : " text-[##4B5C79] bg-[#F6F6F6]"
                    } ${activeTab < step ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                  {step}
                </div>
                <span
                  className={`ml-2 text-[#303F58]  ${activeTab === step ? " font-bold" : " font-medium"
                    }`}
                >
                  {label}
                </span>
                {step < 3 && (
                  <div className="flex-1 h-[1px] bg-gray-300 w-32 mx-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {
          activeTab === 1 && (
            <div className="rounded-lg shadow-sm p-5 bg-[#ffffff]">
              <div className="grid grid-cols-3 gap-3">

                <Input
                  label="First Name"
                  placeholder="Enter First Name"
                />
                <div className="">
                  <label className="block text-xs text-[#495160] mb-1 font-normal text-deepStateBlue"
                    htmlFor="Gender">Gender</label>
                  <div className="relative w-full">
                    <Select options={GenderOptions} />
                  </div>
                </div>

                <Input
                  label="Email"
                  placeholder="Enter Email"
                />
                <DateInput
                  label="Date Of Joining"
                  placeholder="Select Date"
                />
                <DateInput
                  label="Date Of Birth"
                  placeholder="Select Date"
                />
                <Input
                  label="Salary"
                  placeholder="Enter Salary"
                />
                <PhoneNumberInput
                  label="Contact"
                  name="workPhone"
                  placeholder="Enter phone number"
                // value={supplierdata.workPhone}
                // onChange={(value: any) =>
                //   setSupplierData({ ...supplierdata, workPhone: value })
                // }
                // countryData={data?.country}
                />
                <PhoneNumberInput
                  label="Contact 2"
                  name="workPhone"
                  placeholder="Enter phone number"
                // value={supplierdata.workPhone}
                // onChange={(value: any) =>
                //   setSupplierData({ ...supplierdata, workPhone: value })
                // }
                // countryData={data?.country}
                />
                <TextArea
                  label="Address"
                  placeholder="Enter Address"
                />

              </div>
            </div>
          )
        }

        {
          activeTab === 2 && (
            <div className="rounded-lg shadow-sm p-5 bg-[#ffffff]">
              <div className="grid grid-cols-4 gap-3">

                <div className="">
                  <div className="  rounded-lg items-center justify-center flex text-center py-3 ">
                    <label className="cursor-pointer" htmlFor="image">
                      <div className="bg-lightPink flex items-center justify-center h-16 w-36 rounded-lg ">
                        <img
                          src={staff}
                          alt="Item"
                          className="max-h-16 max-w-36"
                        />
                      </div>
                      <div className="border border-[#565148] bg-[#FEFDFA] rounded-lg mt-2 py-2">
                        <p className="text-[#565148] text-[12px]">
                          Upload Photo
                        </p>
                      </div>
                      <input
                        type="file"
                        id="image"
                        // onChange={handleFileChange}
                        className="hidden"
                        name="itemImage"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>


                <div className="">
                  <p className="text-[16px] text-[#6E7072] font-semibold">Upload Proof</p>
                  <div className=" border border-[#cc6c74] mt-2 border-dashed rounded-lg items-center justify-center max-w-[250px] flex text-center py-3  ">
                    <label className="cursor-pointer" htmlFor="image">
                      <div className="flex ">
                        <div className=" flex items-center justify-center gap-4 rounded-lg ">

                          <AttachmentIcon />

                        </div>
                        <div className="ms-2">
                          <p className="text-sm  text-textColor mt-1">
                            Upload Document{" "}
                          </p>
                          <p className="text-xs text-[#818894] mt-1">
                            Maximum File Size : 5 MB
                            <br />
                            Supported Format : PDF
                          </p>
                        </div>
                      </div>
                      <input
                        type="file"
                        id="image"
                        // onChange={handleFileChange}
                        className="hidden"
                        name="itemImage"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>

                <div className="">
                  <label className="block text-xs text-[#495160] mt-4 font-normal text-deepStateBlue"
                    htmlFor="Proof">Proof</label>
                  <div className="relative w-full">
                    <Select options={PoofOptions} />
                  </div>
                </div>
                <div className="mt-3">

                  <Input
                    label="Document Number"
                    placeholder="Enter Document Number"
                  />
                </div>
              </div>
            </div>

          )
        } {
          activeTab === 3 && (
            <div className="grid grid-cols-5 gap-5">

              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Quick Sale
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Client
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Purchase
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                   Staff
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Supplier
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Service
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Product
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>

              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Package
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Expense
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    SMS Campaign
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Reports
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
              <div className="flex justify-between  bg-[#ffffff] p-4 rounded-lg">
                <div>
                  <p className="text-[14px] text-[#2C3E50] font-semibold">
                    Booking
                  </p>
                  <p className="text-[12px] text-[#818894] ">
                    Loremmmm
                  </p>
                </div>
                <Checkbox
                />
              </div>
            </div>
          )
        }
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-end mt-4 space-x-4">
        {/* Cancel Button */}
        <Button variant="secondary" onClick={closeTab}>
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
          <Button variant="primary" >
            Save
          </Button>
        )}
      </div>
    </div>
  )
}

export default AddStaff