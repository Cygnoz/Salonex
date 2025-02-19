import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import GSTComponent from "./gst/GSTComponent";
import VATComponent from "./vat/VATComponent";
import Banner from "../Organization/Banner";
import RadioButton from "../../../Components/Form/RadioButton";
import { useRegularApi } from "../../../context/ApiContext";

type Props = {};

function Taxes({}: Props) {
  const {allTaxData,refreshContext}=useRegularApi()
  const [selected, setSelected] = useState<string>("GST");
  const [taxType, setTaxType] = useState<string | null>(null);
  const navigate = useNavigate();



  useEffect(() => {
    if(allTaxData){
      setTaxType(allTaxData?.taxType)
      refreshContext({allTaxData:true})
    }
  }, [allTaxData]);

  const handleProceed = () => {
    if (selected === "GST") {
      navigate("/settings/tax-compliance/GST");
    } else if (selected === "VAT") {
      navigate("/settings/tax-compliance/VAT");
    }
  };

  const handleChange = (value: string) => {
    setSelected(value);
  };

  if (taxType === "GST") {
    return <GSTComponent />;
  } else if (taxType === "VAT") {
    return <VATComponent />;
  } else {
    return (
      <>
        <Banner />
        <div className="mt-5">
          <div
            className="mt-3 p-6 rounded-lg flex justify-between items-center gap-4 bg-[#F3F1EE]"
          >
            <div>
              <p className="text-[#303F58] text-sm">
                Choose your Tax Type for your business
              </p>
              <div className="flex items-start gap-[22px] text-[#495160] mt-4">
                {/* GST Radio Button */}
                <RadioButton
                  id="GST"
                  name="taxType"
                  label="GST"
                  selected={selected}
                  onChange={handleChange}
                  className="text-base text-[#495160] font-semibold cursor-pointer"
                />
                {/* VAT Radio Button */}
                <RadioButton
                  id="VAT"
                  name="taxType"
                  label="VAT"
                  selected={selected}
                  onChange={handleChange}
                  className="text-base text-[#495160] font-semibold cursor-pointer"
                />
              </div>
            </div>
            <div>
              <Button
                variant="primary"
                size="sm"
                className="text-sm font-medium"
                onClick={handleProceed}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Taxes;
