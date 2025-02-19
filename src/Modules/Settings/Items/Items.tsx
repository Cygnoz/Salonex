import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../../Components/Button";
import useApi from "../../../Hooks/useApi";
import toast from "react-hot-toast";
import { endpoints } from "../../../Services/apiEndpoints";
import Banner from "../Organization/Banner";
import CheveronDown from "../../../assets/icons/CheveronDown";
import { useRegularApi } from "../../../context/ApiContext";
import RadioButton from "../../../Components/Form/RadioButton"; // Import RadioButton component
import Checkbox from "../../../Components/Form/Checkbox"; // Import Checkbox component

type Props = {};

interface item {
  itemDecimal: string;
  itemDimensions: string;
  itemWeights: string;
  barcodeScan: string;

  itemDuplicateName: boolean;
  hsnSac: boolean;
  hsnDigits: string;

  priceList: boolean;
  priceListAtLineLevel: boolean;

  compositeItem: boolean;
  stockBelowZero: boolean;
  outOfStockBelowZero: boolean;
  notifyReorderPoint: boolean;
  trackCostOnItems: boolean;
}

function Items({ }: Props) {
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const { settingsData, refreshContext } = useRegularApi();
  const { request: addItem } = useApi("put", 5003);
  const [inputData, setInputData] = useState<item>({
    itemDecimal: "",
    itemDimensions: "",
    itemWeights: "",
    barcodeScan: "",

    itemDuplicateName: false,
    hsnSac: false,
    hsnDigits: selectedRadio,

    priceList: false,
    priceListAtLineLevel: false,

    compositeItem: false,

    stockBelowZero: false,
    outOfStockBelowZero: false,
    notifyReorderPoint: false,
    trackCostOnItems: false,
  });

  useEffect(() => {
    refreshContext({ settingsData: true });
  }, []);

  useEffect(() => {
    if (settingsData) {
      setInputData((prevData) => ({
        ...prevData,
        ...settingsData?.itemSettings,
      }));
    }
  }, [settingsData]);

  useEffect(() => {
    if (inputData.hsnSac) {
      setSelectedRadio(inputData.hsnDigits || "4");
    } else {
      setSelectedRadio("");
    }
  }, [inputData.hsnSac, inputData.hsnDigits]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setInputData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    setInputData((prevData) => ({
      ...prevData,
      hsnDigits: value,
    }));
  };

  const handleSave = async () => {
    try {
      const url = `${endpoints.ADD_ITEMS}`;
      const { response, error } = await addItem(url, inputData);
      console.log(response);
      console.log(error);

      if (!error && response) {
        toast.success(response?.data);
      } else {
        toast.error(error?.response?.data?.message);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
    }
  };

  

  return (
    <div className="m-4 text-[#303F58]">
      <Banner />

      <p className="text-[20px] font-bold mt-3">Item</p>
      <div className="space-y-4 mt-2">
        {/* Quantity */}
        <div className="bg-white w-full p-6 rounded-lg">
          <div className="space-y-4">
            <div className="grid grid-cols-12 items-center space-x-20">
              <p className="col-span-4 text-[14px] font-semibold">
                Set decimal rate of your item quantity:
              </p>
              <div className="relative col-span-2 w-[60px]">
                <select
                  name="itemDecimal"
                  value={inputData.itemDecimal}
                  onChange={handleInputChange}
                  className="block appearance-none text-zinc-400 bg-white border border-inputBorder text-sm h-[24px] w-[58px] pl-2 rounded-md focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                >
                  <option className="hidden">1</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 text-gray-700">
                  <CheveronDown size={19} strokeWidth={1.2} color="#495160" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center space-x-20">
              <p className="col-span-4 text-[14px] font-semibold">
                Measure item dimensions:
              </p>
              <div className="relative col-span-2 w-[60px]">
                <select
                  name="itemDimensions"
                  value={inputData.itemDimensions}
                  onChange={handleInputChange}
                  className="block appearance-none text-zinc-400 bg-white border border-inputBorder text-sm h-[24px] w-[58px] pl-2 rounded-md focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                >
                  <option className="hidden" value="">
                    CM
                  </option>
                  <option value="cm">CM</option>
                  <option value="m">M</option>
                  <option value="inch">Inch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 text-gray-700">
                  <CheveronDown strokeWidth={1.2} size={19} color="#495160" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center space-x-20">
              <p className="col-span-4 text-[14px] font-semibold">
                Measure item weights In:
              </p>
              <div className="relative col-span-2 w-[60px]">
                <select
                  name="itemWeights"
                  value={inputData.itemWeights}
                  onChange={handleInputChange}
                  className="block appearance-none text-zinc-400 bg-white border border-inputBorder text-sm h-[24px] w-[58px] pl-2 rounded-md focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                >
                  <option className="hidden" value="">
                    KG
                  </option>
                  <option value="kg">KG</option>
                  <option value={"g"}>g</option>
                  <option value="lb">lb</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 text-gray-700">
                  <CheveronDown size={19} strokeWidth={1.2} color="#495160" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Duplicate Item name */}
        <div className="bg-white w-full p-6 text-[14px] rounded-lg space-y-3">
          <p className="font-bold">Duplicate Item Name</p>
          <Checkbox
            label="Allow duplicate item names"
            checked={inputData.itemDuplicateName}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                itemDuplicateName: checked,
              }))
            }
          />
          <p className="text-[#818894]">
            If you allow duplicate item names, all imports involving items will
            use SKU as the primary field for mapping
          </p>
        </div>

        {/* HSN Code or SAC */}
        <div className="bg-white w-full p-6 text-[14px] rounded-lg space-y-4">
          <p className="font-bold">HSN Code or SAC</p>
          <Checkbox
            label="Enable the HSN Code or SAC field"
            checked={inputData.hsnSac}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                hsnSac: checked,
              }))
            }
          />
          {inputData.hsnSac && (
            <>
             <div className="flex justify-start items-center">
             <RadioButton
                id="4"
                label="4-Digit HSN Code or SAC"
                name="hsnDigits"
                selected={selectedRadio}
                onChange={handleRadioChange}
              />
             </div>
              <p className="w-[82%] text-[13px] text-[#818894]">
                Select this option if your business’s annual turnover was less
                than 5crores in the previous year. The 4-digit HSN Code or SAC
                is mandatory for B2B, SEZ Export or Deemed Export tax invoices
                and optional for B2C tax invoices.
              </p>
              <div className="flex justify-start items-center">
              <RadioButton
                id="6"
                label="6-Digit HSN Code or SAC"
                name="hsnDigits"
                selected={selectedRadio}
                onChange={handleRadioChange}
              />
              </div>
              <p className="text-[13px] text-[#818894]">
                Select this option if your business’s annual turnover was more
                than 5crores in the previous year. The 6-digit HSN Code or SAC
                is mandatory for invoices.
              </p>
            </>
          )}
        </div>

        {/* Price List */}
        <div className="bg-white w-full p-6 text-[14px] rounded-lg space-y-3">
          <p className="font-bold">Price List</p>
          <Checkbox
            label="Enable Price List"
            checked={inputData.priceList}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                priceList: checked,
              }))
            }
          />
          <p className="text-[#818894]">
            Price Lists enables you to customise the rates of the items in your
            sales and purchase transactions
          </p>
          {inputData.priceList && (
            <>
              <Checkbox
                label="Apply price list at line time level"
                checked={inputData.priceListAtLineLevel}
                onChange={(checked:any) =>
                  setInputData((prevData) => ({
                    ...prevData,
                    priceListAtLineLevel: checked,
                  }))
                }
              />
              <p className="text-[#818894]">
                Select this option if you want to apply different price lists
                for each line item.
              </p>
            </>
          )}
        </div>

        {/* Composite Items */}
        <div className="bg-white w-full p-6 text-[14px] rounded-lg space-y-3">
          <p className="font-bold">Composite Items</p>
          <Checkbox
            label="Enable Composite Items"
            checked={inputData.compositeItem}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                compositeItem: checked,
              }))
            }
          />
        </div>

        {/* Advanced Inventory Tracking */}
        <div className="bg-white w-full p-6 text-[14px] rounded-lg space-y-3">
          <p className="font-bold">Advanced Inventory Tracking</p>
          <Checkbox
            label="Prevent stock from going below zero"
            checked={inputData.stockBelowZero}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                stockBelowZero: checked,
              }))
            }
          />
          <Checkbox
            label="Show an Out of Stock warning when an item's stock drops below zero"
            checked={inputData.outOfStockBelowZero}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                outOfStockBelowZero: checked,
              }))
            }
          />
          <Checkbox
            label="Track landed cost on items"
            checked={inputData.trackCostOnItems}
            onChange={(checked:any) =>
              setInputData((prevData) => ({
                ...prevData,
                trackCostOnItems: checked,
              }))
            }
          />
        </div>

        <Button
          onClick={handleSave}
          variant="primary"
          className="h-[38px] w-[120px] flex justify-center float-end"
        >
          <p className="text-sm">Save</p>
        </Button>
      </div>
    </div>
  );
}

export default Items;