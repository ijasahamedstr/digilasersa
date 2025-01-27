import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Promotionalgiftssection from "layouts/Promotional-gifts-section";
import AddPromotionalgifts from "layouts/Promotional-gifts-section/AddPromotionalgifts";

// @mui icons
import Icon from "@mui/material/Icon";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EditPromotionalgifts from "layouts/Promotional-gifts-section/EditPromotionalgifts";
import PrintingDepartment from "layouts/Printing-Department-Section";
import PrintIcon from "@mui/icons-material/Print";
import AddPrintingDepartment from "layouts/Printing-Department-Section/AddPrintingDepartment";
import EditPrintingDepartment from "layouts/Printing-Department-Section/EditPrintingDepartment";
import Screenssection from "layouts/Screens-section";
import SmartScreenIcon from "@mui/icons-material/SmartScreen";
import AddScreenssection from "layouts/Screens-section/AddScreenssection";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Promotional gifts section",
    key: "Promotional-gifts-section",
    icon: <CardGiftcardIcon />,
    route: "/Promotional-gifts-section",
    component: <Promotionalgiftssection />,
  },
  {
    type: "collapse",
    name: "PrintingDepartment",
    key: "PrintingDepartment",
    icon: <PrintIcon />,
    route: "/PrintingDepartment",
    component: <PrintingDepartment />,
  },
  {
    type: "collapse",
    name: "Screenssection",
    key: "Screenssection",
    icon: <SmartScreenIcon />,
    route: "/Screenssection",
    component: <Screenssection />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    route: "/Add-Promotional-gifts-section",
    component: <AddPromotionalgifts />,
  },
  {
    route: "/Edit-Promotional-gifts-section/:id",
    component: <EditPromotionalgifts />,
  },
  {
    route: "/Add-PrintingDepartment",
    component: <AddPrintingDepartment />,
  },
  {
    route: "/Edit-PrintingDepartment/:id",
    component: <EditPrintingDepartment />,
  },
  {
    route: "/Add-Screenssection",
    component: <AddScreenssection />,
  },
];

export default routes;
