import toast from "react-hot-toast";
import * as Yup from "yup";
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Form/Input";
import Select from "../../../../Components/Form/Select";
import Modal from "../../../../Components/modal/Modal";
import { useEffect, useState } from "react";
import useApi from "../../../../Hooks/useApi";
import topImg from "../../../../assets/Images/image 43.png";
import bgImg from "../../../../assets/images/Group (1).png";
import bgimg2 from "../../../../assets/images/Mask group (2).png";
import Pen from "../../../../assets/icons/Pen";
import CirclePlus from "../../../../assets/icons/circleplus";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { endpoints } from "../../../../Services/apiEndpoints";
import { InputCurrencyData } from "../../../../Interface/InputCurrencyData";
import { useRegularApi } from "../../../../context/ApiContext";

type Props = { editItem?:any };

const CurrencyModal: React.FC<Props> = ({ editItem }) => {
  const { request: CreateNewCurrency } = useApi("post", 5004);
  const {refreshContext}=useRegularApi()
  const { request: editCurrency } = useApi("put", 5004);
  const [newCurrencyModal, setNewCurrencyModal] = useState(false);

  // ✅ Validation Schema
  const validationSchema = Yup.object().shape({
    currencyCode: Yup.string().required("Currency Code is required"),
    currencySymbol: Yup.string().required("Currency Symbol is required"),
    currencyName: Yup.string().required("Currency Name is required"),
    decimalPlaces: Yup.string().optional(),
    format: Yup.string().optional(),
  });

  // ✅ Form Hook
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<InputCurrencyData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      currencyCode: "",
      currencySymbol: "",
      currencyName: "",
      decimalPlaces: "",
      format: "",
    },
  });

  // ✅ Dropdown options
  const decimalPlacesOptions = [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  const formatOptions = [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  // ✅ Open/Close Modal Functions
  const openModal = () => setNewCurrencyModal(true);
  const closeModal = () => setNewCurrencyModal(false);

  // ✅ API Submission
  const onSubmit = async (data: InputCurrencyData) => {
    console.log("data",data);
    const body={
      ...data,
      currencyId:editItem?data?._id:''
    }
    try {
      const api = editItem ? editCurrency : CreateNewCurrency;
      const url =
        editItem ? `${endpoints.EDIT_CURRENCIES}` : endpoints.ADD_CURRENCIES;
      
      const { response, error } = await api(url, body);

      if (response && !error) {
        toast.success(response.data.message || "Success!");
        refreshContext({currencyData:true})
        closeModal();
      } else {
        toast.error(error.response?.data?.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // ✅ Function to set form values for editing
  useEffect(() => {
    if (editItem) {
      Object.keys(editItem).forEach((key) => {
        setValue(key as keyof InputCurrencyData, editItem[key as keyof InputCurrencyData]);
      });
    }
  }, [editItem, setValue]);

   const handleInputChange = (field: keyof InputCurrencyData) => {
      clearErrors(field);
    };

  return (
    <div>
      {editItem ? (
         <button onClick={openModal}>
         <Pen color={"#3d7fbc"} />
       </button>
      ) : (
        <Button onClick={openModal} variant="primary" size="sm">
          <CirclePlus size={16} color={"white"} />
          <p className="text-sm">New Currency</p>
        </Button>
       
      )}

      {/* ✅ Modal for Adding / Editing Currency */}
      <Modal open={newCurrencyModal} onClose={closeModal} className="w-[50%] text-start h-auto">
        <div className="p-5 mt-3">
          {/* ✅ Header Section */}
          <div className="mb-5 flex p-4 rounded-xl bg-gradient-to-br from-[#F7ECD9] to-[#B5F0D3] relative overflow-hidden">
            <div
              className="absolute top-0 -right-8 w-[178px] h-[89px]"
              style={{
                backgroundImage: `url(${topImg})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-[#004D4D]">
                {editItem ? "Edit Currency" :"Create New Currency"}
              </h3>
              <p className="text-text_tertiary text-xs mt-1">
                Open a new bank account swiftly and securely.
              </p>
            </div>
            <img src={bgImg} alt="" className="-mt-5 h-10 w-20" />
            <img src={bgimg2} alt="" className=" -mb-5 mt-auto h-10 w-20" />
            <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={closeModal}>
              &times;
            </div>
          </div>

          {/* ✅ Form Section */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-[#faf7f2] p-4 rounded-2xl">
              <div className="grid grid-cols-2 my-2 gap-4">
                {/* ✅ Currency Code */}
                <Input
                  required
                  label="Currency Code"
                  placeholder="Enter Currency Code"
                  {...register("currencyCode")}
                  error={errors.currencyCode?.message}
                  value={watch("currencyCode")}
                />

                {/* ✅ Currency Symbol */}
                <Input
                  required
                  label="Currency Symbol"
                  placeholder="Enter Currency Symbol"
                  {...register("currencySymbol")}
                  error={errors.currencySymbol?.message}
                  value={watch("currencySymbol")}
                />

                {/* ✅ Currency Name */}
                <Input
                  required
                  label="Currency Name"
                  placeholder="Enter Currency Name"
                  {...register("currencyName")}
                  error={errors.currencyName?.message}
                  value={watch("currencyName")}
                />

                {/* ✅ Decimal Place & Format */}
                <div className="grid grid-cols-2 gap-4 ">
                  <Select
                    value={watch("decimalPlaces")}
                    options={decimalPlacesOptions}
                    onChange={(value: string) => {
                      setValue("decimalPlaces", value);
                      handleInputChange("decimalPlaces");
                    }}
                    label="Decimal Place"
                    placeholder="Select Decimal place"
                    error={errors.decimalPlaces?.message}
                  />
                  <Select
                    value={watch("format")}
                    {...register("format")}
                    label="Format Value"
                    onChange={(value: string) => {
                      setValue("format", value);
                      handleInputChange("format");
                    }}
                    placeholder="Select Format value"
                    error={errors.format?.message}
                    options={formatOptions}
                  />
                </div>
              </div>
            </div>

            {/* ✅ Buttons */}
            <div className="mt-3 flex justify-end gap-3">
              <Button type="button" onClick={closeModal} variant="secondary" size="sm">
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CurrencyModal;
