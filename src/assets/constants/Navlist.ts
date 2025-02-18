import BarChartIcon from "../icons/BarChartIcon";
import FileBarChart from "../icons/FileBarChart";
import HomeIcon from "../icons/HomeIcon";
import PhoneCall from "../icons/PhoneCall";
import PosIcon from "../icons/PosIcon";
import RecieptIndianRupee from "../icons/RecieptIndianRupee";
import Scissors from "../icons/Scissors";
import SettingsIcon from "../icons/SettingsIcon";
import ShoppingCart from "../icons/ShoppingCart";
import SquarUserIcon from "../icons/SquarUserIcon";
import TruckIcon from "../icons/TruckIcon";
import TwoUserIcon from "../icons/TwoUserIcon";
import UserIcon from "../icons/UserIcon";

export const navList = [
  {
    nav: "Dashboard",
    icon: HomeIcon,
    route: "/dashboard",
  },
  {
    nav: "Item hub",
    icon: Scissors,
    route: "/itemHub",
  },
  {
    nav: "Booking",
    icon: PhoneCall,
    route: "/booking",
  },
  // {
  //   nav: "Sale",
  //   icon: Flame,
  //   route: "/order",
  // },
  {
    nav: "Sales",
    icon: BarChartIcon,
    route: "/sales/invoice",
    subhead: [
      {
        headName: "Invoice",
        subRoute: "/sales/invoice",
      },
      {
        headName: "Receipt",
        subRoute: "/sales/receipt",
      },
      {
        headName: "Credit Note",
        subRoute: "/sales/credit-note",
      },
    ],
  },
  {
    nav: "POS",
    icon: PosIcon,
    route: "/pos",
  },
  {
    nav: "Customer",
    icon: UserIcon,
    route: "/customer",
  },
  {
    nav: "Staffs",
    icon: TwoUserIcon,
    route: "/staffs",
  },
  {
    nav: "Expense",
    icon: RecieptIndianRupee,
    route: "/expense",
  },

  {
    nav: "Purchase",
    icon: ShoppingCart,
    route: "/purchase/bills",
    subhead: [
      {
        headName: "Bills",
        subRoute: "/purchase/bills",
      },
      {
        headName: "Payment Made",
        subRoute: "/purchase/payment-made",
      },
      {
        headName: "Debit Note",
        subRoute: "/purchase/debitnote",
      },
    ],
  },
  
  {
    nav: "Supplier",
    icon: TruckIcon,
    route: "/supplier",
  },
  
  {
    nav: "Accountant",
    icon: SquarUserIcon,
    route: "/accountant",
    subhead: [
      {
        headName: "Chart Of Account",
        subRoute: "/accountant",
      },
      {
        headName: "Manual Journals",
        subRoute: "/accountant/manualjournal",
      },
      {
        headName: "Bank",
        subRoute: "/accountant/bank",
      },
      {
        headName: "Cash",
        subRoute: "/accountant/cash",
      },
    ],
  },
  {
    nav: "Settings",
    icon: SettingsIcon,
    route: "/settings",
  },
  {
    nav: "Report",
    icon: FileBarChart,
    route: "/report",
  },
];
