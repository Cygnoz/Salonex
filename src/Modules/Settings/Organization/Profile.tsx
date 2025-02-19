import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../Components/Button";
import useApi from "../../../Hooks/useApi";
import { endpoints } from "../../../Services/apiEndpoints";
import Plus from "../../../assets/icons/Plus";
import Banner from "./Banner";
import Trash from "../../../assets/icons/Trash";
import Input from "../../../Components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "../../../Components/Form/Select";
import PhoneNumberInput from "../../../Components/Form/PhoneInput";
import { ProfileData } from "../../../Interface/Profile";
import { useRegularApi } from "../../../context/ApiContext";
import toast from "react-hot-toast";
import { useOrganization } from "../../../context/OrgContext";



const Profile = () => {
  const {refreshContext,settingsAdditionalDatas,currencyData,countryData}=useRegularApi()
 const {organizationData,refreshOrg}=useOrganization()
  const { request: createOrganization } = useApi("post", 5004);
  const [data, setData] = useState<{
    country: any[];
    state: { label: string; value: string }[];
    dateFormate: { label: string; value: string }[];
    industry: { label: string; value: string }[];
    dateSplit: { label: string; value: string }[];
    financialYear: { label: string; value: string }[];
     timezones: { label: string; value: string;timeZoneExp:string }[];
     currency:{ label: string; value: string }[];
  }>({ country: [], state: [],dateFormate:[],industry:[],dateSplit:[],financialYear:[],timezones:[],currency:[] });

  

  const validationSchema = yup.object({
    organizationName: yup.string().required("Organization Name is a required field"),
    organizationLogo: yup.string().optional(),
    organizationCountry: yup.string().required("Country is a required field"),
    organizationIndustry: yup.string(),
    addline1: yup.string().optional(),
    addline2: yup.string().optional(),
    city: yup.string().optional(),
    pincode: yup.string().optional(),
    state: yup.string().required("State is a required field"),
    organizationPhNum: yup.string().required("Phone is a required field"),
    website: yup.string(),
    baseCurrency: yup.string().required("Base Currency is a required field"),
    fiscalYear: yup.string().optional(),
    timeZone: yup.string().required("Time Zone is a required field"),
    timeZoneExp: yup.string().optional(),
    dateFormat: yup.string().required("Date Format is a required field"),
    dateFormatExp: yup.string(),
    dateSplit: yup.string().required("Date Split is a required field"),
    phoneNumberCode: yup.string(),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: yupResolver(validationSchema),
  });




  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    key:any
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue(key,base64String)
      };

      reader.readAsDataURL(file);
    }
  };


  const onSubmit: SubmitHandler<ProfileData> = async (data, event) => {
    event?.preventDefault();
    console.log("Form Data:", data);

    try {
      const { response, error } = await createOrganization(
        endpoints.CREATE_ORGANIZATION,
        data
      );
      if (response && !error) {
        toast.success(response.data.message); // Show success toast
        refreshOrg()
      } else if (error) {
        toast.error(error.response?.data?.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Unexpected error submitting data:", err);
      // toast.error("An unexpected error occurred."); // Handle unexpected errors
    }
  };





  
  useEffect(() => {
    const filteredCountries = countryData?.map((items: any) => ({
      ...items,
      label: items.name,
      value: String(items.name), // Ensure `value` is a string
    })) || [];
    setData((prevData: any) => ({ ...prevData, country: filteredCountries }));
  }, [countryData]);

  // // Effect to fetch and populate states based on selected country
  useEffect(() => {
    const selectedCountry = watch("organizationCountry");
    if (selectedCountry) {
      const filteredStates = countryData?.filter(
        (country: any) => country.name === selectedCountry
      );

      const transformedStates = filteredStates?.flatMap((country: any) =>
        country.states.map((state: any) => ({
          label: state,
          value: state,
        }))|| []
      );
      setData((prevData: any) => ({ ...prevData, state: transformedStates }));
    }
  }, [watch("organizationCountry"), countryData]);

  useEffect(() => {
    
    setData((prev) => ({
      ...prev, // Spread the previous state values
      dateFormate: [
        ...(settingsAdditionalDatas?.dateFormats?.short || []),
        ...(settingsAdditionalDatas?.dateFormats?.medium || []),
        ...(settingsAdditionalDatas?.dateFormats?.long || []),
      ].map((dateFormat: any) => ({
        value: dateFormat.format,
        label: dateFormat.format,
      })) || [],
      industry: (settingsAdditionalDatas?.industry || []).map((industry: any) => ({
        value: industry,
        label: industry,
      })) || [],
      dateSplit: (settingsAdditionalDatas?.dateSplit || []).map((dateSplit: any) => ({
        value: dateSplit,
        label: dateSplit,
      })) || [],
      financialYear: (settingsAdditionalDatas?.financialYear || []).map((financialYear: any) => ({
        value: financialYear,
        label: financialYear,
      })) || [],
      timezones: (settingsAdditionalDatas?.timezones || []).map((timezone: any) => ({
        value: timezone.zone,
        timeZoneExp:timezone?.timeZone,
        label: timezone.zone + " - " + timezone.description,
      })) || [],
    }));
  }, [settingsAdditionalDatas]);

  useEffect(()=>{
    const filteredZone=data.timezones.find((time)=>time.value===watch("timeZone"))
    if(filteredZone){
      setValue("timeZoneExp",filteredZone.timeZoneExp)
    }
  },[watch("timeZone")])


  useEffect(() => {
    setData((prev) => ({
      ...prev, // Spread the previous state to keep other properties intact
      currency: (currencyData || []).map((currency: any) => ({
        value: currency.currencyCode,
        label: `${currency.currencyName} (${currency.currencyCode})`,
      })),
    }));
  }, [currencyData]); // Triggered when currencyData changes
  
  


  const handleInputChange = (field: keyof ProfileData) => {
    clearErrors(field);
  };
 
  const setFormValues = (data: ProfileData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof ProfileData, data[key as keyof ProfileData]);
    });
  };
  
  useEffect(()=>{
    refreshContext({currencyData:true})
    if(organizationData){
      setFormValues(organizationData)
    }
  },[organizationData])

  
  


  return (
    <div className="">
      <Banner seeOrgDetails />

      {/* FORM */}
      <form
        className="text-slate-800 text-sm "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="h-56 p-3 border-dashed border-neutral-400  rounded-md mt-5 border bg-white text-textColor w-[403px]">
          {" "}
          <label>
            <div
              className={`bg-[#f8f7f5] mt-2 flex h-28 justify-center items-center rounded-lg ${
                watch("organizationLogo") ? "h-[90px] rounded-b-none" : ""
              }`}
            >
              {watch("organizationLogo") ? (
                <div className="">
                  <img
                    src={watch("organizationLogo")}
                    alt=""
                    className="py-0 h-[51px]"
                  />
                </div>
              ) : (
                <>
                  <div className="justify-center flex items-center bg-[#794247] text-white  p-1 rounded-full ">
                    <Plus color="white" classname="h-3 w-3" />
                  </div>
                  <p className="text-sm ms-2">
                    {" "}
                    Upload Your Organizational Logo
                  </p>
                </>
              )}
              <input
                accept="image/*"
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, "organizationLogo")}
              />
            </div>
          </label>
          {watch("organizationLogo")  && (
            <div className="bg-neutral-200 rounded-b-lg h-7 flex items-center justify-end px-4">
              <button onClick={()=>setValue("organizationLogo","")}>
                {" "}
                <Trash color={"darkRed"} />
              </button>
            </div>
          )}
          <div className="text-center">
            <p className="mt-3 text-text_primary ">
              <b>Organization Logo</b>
            </p>
            <p className="text-[10px] mt-1 text-text_secondary">
              Preferred Image Dimensions: 240&times;240&times; pixels @ 72 DPI{" "}
              <br />
              Maximum File size 1MB
            </p>
          </div>
        </div>

        <p className="mt-4 text-text_tertiary ">
          <b>Organizational Details</b>
        </p>

        <div className="bg-white p-5 rounded-lg mt-2">
          <div className="grid grid-cols-3 gap-4 ">
            <Input
              required
              label="Organization Name"
              placeholder="Enter organization Name"
              error={errors.organizationName?.message}
              {...register("organizationName")}
            />

            <Select
              required
              placeholder="Select Country"
              error={errors.organizationCountry?.message}
              label="Organization Location"
              options={data.country}
              onChange={(value: string) => {
                setValue("organizationCountry", value);
                handleInputChange("organizationCountry");
              }}
              value={watch("organizationCountry")}
            />

            <Select
              required
              placeholder="Select Industry"
              error={errors.organizationIndustry?.message}
              onChange={(value: string) => {
                setValue("organizationIndustry", value);
                handleInputChange("organizationIndustry");
              }}
              value={watch("organizationIndustry")}
              label="Organization Indusrty"
              options={data.industry}
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 mt-3 space-y-3">
            <Input
              label="Organization Address"
              placeholder="Street 1"
              error={errors.addline1?.message}
              {...register("addline1")}
              onChange={() => handleInputChange("addline1")}
            />

            <div className="pt-2.5">
              <Input
                label=""
                placeholder="Street 2"
                error={errors.addline2?.message}
                {...register("addline2")}
                onChange={() => handleInputChange("addline2")}
              />
            </div>
            <Input
              label="City"
              placeholder="Enter City"
              error={errors.city?.message}
              {...register("city")}
              onChange={() => handleInputChange("city")}
            />
            <Input
              label="Pin / Zip / Post Code"
              placeholder="Pin / Zip / Post Code"
              error={errors.pincode?.message}
              {...register("pincode")}
              onChange={() => handleInputChange("pincode")}
            />
            <Select
              required
              placeholder={watch("organizationCountry")?"Select State / Region / County":"Select a Country"}
              error={errors.state?.message}
              onChange={(value: string) => {
                setValue("state", value);
                handleInputChange("state");
              }}
              value={watch("state")}
              label="State / Region / County"
              options={data?.state||[]}
            />
            <PhoneNumberInput
              label="Phone"
              name="companyPhone"
              error={errors.organizationPhNum?.message}
              placeholder="Enter phone number"
              value={watch("organizationPhNum")}
              onChange={(value:any) => {
                handleInputChange("organizationPhNum");
                setValue("organizationPhNum", value);
              }}
              countryData={data?.country}
            />
          </div>
        </div>

        <p className="mt-4 text-text_tertiary ">
          <b>Website Address</b>
        </p>

        <div className="bg-white p-5 rounded-lg mt-2">
          <Input
            label="Website URL"
            placeholder="Website URL"
            error={errors.website?.message}
            {...register("website")}
            onChange={() => handleInputChange("website")}
          />
        </div>

        <p className="mt-4 text-text_tertiary ">
          <b>Financial Settings</b>
        </p>

        <div className="bg-white p-5 rounded-lg mt-2 grid grid-cols-2 gap-4">
          <Select
            required
            placeholder=" Select Currency"
            error={errors.baseCurrency?.message}
            label="Base Currency"
            onChange={(value: string) => {
                setValue("baseCurrency", value);
                handleInputChange("baseCurrency");
              }}
              value={watch("baseCurrency")}
            options={data?.currency}
          />
          <Select
            required
            placeholder="Select Financial Year"
            error={errors.fiscalYear?.message}
        
            label="Financial Year"
            onChange={(value: string) => {
              setValue("fiscalYear", value);
              handleInputChange("fiscalYear");
            }}
            value={watch("fiscalYear")}
            options={data?.financialYear}
          />
        </div>

        <p className="mt-4 text-text_tertiary ">
          <b>Preferences </b>
        </p>

        <div className="grid grid-cols-12 gap-4 bg-white p-5 rounded-lg mt-2">
          <div
            className=" col-span-8
            "
          >
            <Select
              required
              placeholder="Select Time zone"
              error={errors.timeZone?.message}
              onChange={(value: string) => {
                setValue("timeZone", value);
                handleInputChange("timeZone");
              }}
              value={watch("timeZone")}
              label="Time Zone"
              options={data?.timezones}
            />
          </div>
          <div
            className=" col-span-8
            "
          >
            <Select
              required
              placeholder="Select Date Fromat"
              error={errors.dateFormat?.message}
              onChange={(value: string) => {
                setValue("dateFormat", value);
                handleInputChange("dateFormat");
              }}
              value={watch("dateFormat")}
              label="Date Format"
              options={data?.dateFormate}
            />
          </div>
          <div className="col-span-4 pt-6">
            <Select
              placeholder="Select Date Split"
              error={errors.dateSplit?.message}
              onChange={(value: string) => {
                setValue("dateSplit", value);
                handleInputChange("dateSplit");
              }}
              value={watch("dateSplit")}
              label=""
              options={data?.dateSplit}
            />
          </div>
        </div>

        <div className="flex my-4 gap-4">
          <Button variant="primary" className="pl-12 pr-12" size="sm" type="submit">
            Update
          </Button>

          <Button variant="secondary" size="sm" className="pl-12 pr-12">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
