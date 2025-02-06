import { useEffect, useState } from "react";
import PosHeader from "./PosHeader";
import ServicesIcon from "../../assets/icons/ServicesIcon";
import ProductsIcon from "../../assets/icons/ProductsIcon";
import AddItemsPos from "./AddItemsPos";
import useApi from "../../Hooks/useApi";
// import { endponits } from "../../Services/apiEndpoints";
import { endpoints } from "../../Services/apiEdpoints";
import serviceImage from "../../assets/Images/serv.png";
import SearchBar from "../../Components/SearchBar";
import bgImage from "../../assets/Images/posservices.png";
import PackagesIcon from "../../assets/icons/PackagesIcon";
import bgimage from "../../assets/images/Rectangle 32.png"
import Modal from "../../Components/modal/Modal";
import staffIcon from "../../assets/images/StaffIcon.png";
import SearchBarPos from "../../Components/SearchBarPos";
import defaultCustomerImage from "../../assets/Images/Rectangle 5558.png";
import Button from "../../Components/Button";


type Props = {};

function Pos({ }: Props) {
  const [tabSwitch, setTabSwitch] = useState<string>("products");
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [goodsItems, setGoodsItems] = useState<any[]>([]);
  const [serviceItems, setServiceItems] = useState<any[]>([]);
  const [allCategoryData, setAllCategoryData] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchValueModal, setSearchValueModal] = useState<string>("");

  // const { request: GetAllItems } = useApi("get", 5003);
  const { request: fetchAllCategories } = useApi("put", 5003);

  useEffect(() => {
    const fetchAllItems = async () => {
      // try {
      //   const url = `${endponits.GET_ALL_ITEMS_TABLE}`;
      //   const { response, error } = await GetAllItems(url);
      //   if (!error && response) {
      //     const allItems = response.data;
      //     setGoodsItems(allItems.filter((item: any) => item.itemType === "goods"));
      //     setServiceItems(allItems.filter((item: any) => item.itemType === "service"));
      //   } else {
      //     console.error("Error in response:", error);
      //   }
      // } catch (error) {
      //   console.error("Error fetching items:", error);
      // }
    };

    const loadCategories = async () => {
      // try {
      //   const url = `${endponits.GET_ALL_BRMC}`;
      //   const body = { type: "category" };
      //   const { response, error } = await fetchAllCategories(url, body);
      //   if (!error && response) {
      //     setAllCategoryData(response.data);
      //   } else {
      //     console.error("Failed to fetch Category data.");
      //   }
      // } catch (error) {
      //   console.error("Error in fetching Category data", error);
      // }
    };

    fetchAllItems();
    loadCategories();
  }, []);

  const handleSelectCustomer = (customer: any) => {
    setSelectedCustomer(customer);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemTemp, setSelectedItemTemp] = useState<any>(null);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItemTemp(null);
  };

  const handleItemClick = (item: any) => {
    setSelectedItemTemp(item);
    openModal();
  };

  const handleAddStaff = () => {
    if (selectedItemTemp) {
      setSelectedItems((prevItems) => {
        const isAlreadySelected = prevItems.some(
          (selected) => selected.itemName === selectedItemTemp.itemName
        );
        if (!isAlreadySelected) {
          return [...prevItems, selectedItemTemp];
        }
        return prevItems;
      });
    }
    closeModal();
  };

  const handleTabSwitch = (tabName: string) => {
    setTabSwitch(tabName);
    setSelectedCategory("All")
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };
  const handleRemoveItem = (itemToRemove: any) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.itemName !== itemToRemove.itemName)
    );
  };


  const currentItems = tabSwitch === "products" ? goodsItems : serviceItems;
  const uniqueCategories = allCategoryData.filter((category) =>
    currentItems.some((item) => item.categories === category.categoriesName)
  );


  //uncomment this code to use the actual data

  // const filteredItems = currentItems.filter((item: any) => {  
  //   const matchesCategory =
  //     selectedCategory === "All" || item.categories === selectedCategory;
  //   const matchesSearch = item.itemName
  //     ?.toLowerCase()
  //     .includes(searchValue.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  const dummyItems = [
    {
      itemName: "Water Bottle 1L",
      itemImage: bgimage,
      sellingPrice: 20,
    },
    {
      itemName: "Sparkling Water 500ml",
      itemImage: bgimage,
      sellingPrice: 35,
    },
    {
      itemName: "Mineral Water 5L",
      itemImage: bgimage,
      sellingPrice: 80,
    },
    {
      itemName: "Spring Water 750ml",
      itemImage: bgimage,
      sellingPrice: 50,
    },
    {
      itemName: "Distilled Water 1L",
      itemImage: bgimage,
      sellingPrice: 25,
    },
    {
      itemName: "Alkaline Water 2L",
      itemImage: bgimage,
      sellingPrice: 60,
    },
  ];

  const filteredItems = dummyItems; // Use this variable in your component
  const filteredCustomers = [
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
    {
      customerDisplayName: "alwin",
      staffId: "Staff ID: 10091"
    },
  ]


  return (
    <>
      <PosHeader onSelectCustomer={handleSelectCustomer} />
      <div className="flex justify-between px-5 gap-7">
        {/* Left Section */}
        <div className="w-[65%]">
          {/* Tabs */}
          <div className="flex justify-between items-center gap-3">
            <div
              className={`w-[50%] py-2 px-3 rounded-lg flex items-center gap-3 cursor-pointer ${tabSwitch === "products"
                ? "border-[1.5px] border-[#C96E76] bg-[#FAF1F1]"
                : "bg-white"
                }`}
              onClick={() => handleTabSwitch("products")}
            >
              <div
                className={`${tabSwitch === "products" ? "bg-[#C96E76]" : "bg-[#FAF1F1]"
                  } rounded-full p-2`}
              >
                <ProductsIcon
                  color={`${tabSwitch === "products" ? "#FFFEFB" : "#303F58"}`}
                />
              </div>
              <div>
                <p className="text-[#2C3E50] font-bold text-sm">Products</p>
                <p className="text-[#2C3E50] font-semibold text-[10px]">
                  {goodsItems.length} Items
                </p>
              </div>
            </div>
            <div
              className={`w-[50%] py-2 px-3 rounded-[10px] flex items-center gap-3 cursor-pointer ${tabSwitch === "services"
                ? "border-[1.5px] border-[#C96E76] bg-[#E6EDED]"
                : "bg-white"
                }`}
              onClick={() => handleTabSwitch("services")}
            >
              <div
                className={`${tabSwitch === "services" ? "bg-[#C96E76]" : "bg-[#E6EDED]"
                  } rounded-full p-2`}
              >
                <ServicesIcon
                  color={`${tabSwitch === "services" ? "#FFFEFB" : "#303F58"}`}
                />
              </div>
              <div>
                <p className="text-[#2C3E50] font-bold text-sm">Services</p>
                <p className="text-[#2C3E50] font-semibold text-[10px]">
                  {serviceItems.length} Items
                </p>
              </div>
            </div>
            <div
              className={`w-[50%] py-2 px-3 rounded-[10px] flex items-center gap-3 cursor-pointer ${tabSwitch === "Packages"
                ? "border-[1.5px] border-[#C96E76] bg-[#E6EDED]"
                : "bg-white"
                }`}
              onClick={() => handleTabSwitch("Packages")}
            >
              <div
                className={`${tabSwitch === "Packages" ? "bg-[#C96E76]" : "bg-[#E6EDED]"
                  } rounded-full p-2`}
              >
                <PackagesIcon
                  color={`${tabSwitch === "Packages" ? "#FFFEFB" : "#303F58"}`}
                />
              </div>
              <div>
                <p className="text-[#2C3E50] font-bold text-sm">Packages</p>
                <p className="text-[#2C3E50] font-semibold text-[10px]">
                  {serviceItems.length} Items
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-scroll hide-scrollbar gap-4 mt-2">
            <div
              onClick={() => handleCategoryClick("All")}
              className={`px-2 py-1 rounded-[10px] flex justify-center gap-2 items-center min-w-max cursor-pointer mt-1 ${selectedCategory === "All"
                ? "border border-[#C96E76] bg-[#FAF1F1]"
                : "bg-white"
                }`}
            >
              <img src={serviceImage} className="w-6 h-6 rounded-full" alt="All" />
              <p className="text-xs font-semibold text-[#2C3E50]">All</p>
            </div>
            {uniqueCategories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.categoriesName)}
                className={`px-2 py-1 rounded-[10px] flex justify-center gap-2 items-center min-w-max cursor-pointer mt-1 ${selectedCategory === category.categoriesName
                  ? "border border-[#C96E76] bg-[#FAF1F1]"
                  : "bg-white"
                  }`}
              >
                <img
                  src={category.image || serviceImage}
                  className="w-6 h-6 rounded-full"
                  alt={category.categoriesName}
                />
                <p className="text-xs font-semibold text-[#2C3E50]">
                  {category.categoriesName}
                </p>
              </div>
            ))}
          </div>

          {/* Items List */}
          <div className="mt-3">
            <SearchBar
              onSearchChange={setSearchValue}
              searchValue={searchValue}
              placeholder="Search"
            />
            <div className="mt-3 grid grid-cols-4 h-full gap-4 overflow-y-scroll max-h-96 hide-scrollbar">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-lg p-2 h-[168px] bg-white flex flex-col items-center shadow-sm cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.itemImage || bgImage}
                    alt={item.itemName}
                    className="w-44 h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs font-bold text-[#2C3E50]">
                    {item.itemName}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full bg-[#D9E9FF] p-1 rounded-b-lg">
                    <p className="text-xs font-bold text-[#2C3E50] ms-2">
                      ₹{item.sellingPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Modal
            className="w-[45%] p-8 bg-[#F8F4F4] rounded-2xl"
            open={isModalOpen}
            onClose={closeModal}
          >
            <div className="flex">
              <div className="flex items-center justify-between">
                <img src={staffIcon} className="w-11" alt="" />
                <p className="text-[#2C3E50] font-bold text-sm ms-3">Select Staff</p>
              </div>
              <div className="ms-auto flex items-center">
                <span className="text-3xl">&times;</span>
              </div>
            </div>

            <p className="text-[#2C3E50] text-sm font-semibold mt-3">Please Select Staff for “Olaplex”</p>

            <div className="bg-white rounded-lg px-4 py-3 mt-3 mb-4 flex justify-start items-center">
              <img src={serviceImage} className="w-10 rounded-full object-cover" alt="" />
              <div className="ms-4">
                <p className="text-[#495160] text-xs">Service Name</p>
                <p className="text-[#2C3E50] text-sm font-semibold mt-1">Hair styling</p>
              </div>
              <div className="ms-8">
                <p className="text-[#495160] text-xs">Price</p>
                <p className="text-[#2C3E50] text-sm font-semibold mt-1">₹6000.00</p>
              </div>
            </div>

            <SearchBarPos
              onSearchChange={setSearchValueModal}
              searchValue={searchValueModal}
              placeholder="Search"
            />

            <div className="w-[100%] mt-4  pr-4 overflow-y-scroll max-h-[300px] hide-scrollbar grid grid-cols-3 gap-[34px]">
              {filteredCustomers.map((customer: any) => (
                <div
                  key={customer.id}
                  className={`bg-[#F5F2EE] rounded-lg py-4 px-[10px] flex flex-col h-32 items-center
                     justify-center cursor-pointer ${selectedCustomer?._id === customer._id
                      ? "border-2 border-[#C96E76] bg-[#FAF1F1]"
                      : "bg-white"
                    }`}
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <img
                    src={customer.customerProfile || defaultCustomerImage}
                    className="w-14 h-14 rounded-full mb-3"
                    alt="Customer"
                  />
                  <p className="text-[#2C3E50] text-[10px]">{customer.staffId}</p>
                  <p className="text-[#2C3E50] font-bold text-xs mt-1">
                    {customer.customerDisplayName}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end items-center gap-4">
              <Button onClick={closeModal} variant="secondary" className="text-sm pl-7 pr-7">
                Cancel
              </Button>
              <Button onClick={handleAddStaff} className="pl-7 pr-7">Add Staff</Button>
            </div>

          </Modal>
        </div>

        {/* Right Section */}
        <div className="w-[35%]">
          <AddItemsPos selectedItems={selectedItems} selectedCustomer={selectedCustomer} onRemoveItem={handleRemoveItem} />
        </div>
      </div>
    </>
  );
}

export default Pos;
