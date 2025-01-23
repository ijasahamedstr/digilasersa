import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Promotionalgiftssection from "layouts/Promotional-gifts-section";
import AddPromotionalgifts from "layouts/Promotional-gifts-section/AddPromotionalgifts";

// @mui icons
import Icon from "@mui/material/Icon";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EditPromotionalgifts from "layouts/Promotional-gifts-section/EditPromotionalgifts";

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
    name: "Sign Out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    route: "/Add-Promotional-gifts-section",
    component: <AddPromotionalgifts />,
  },
  {
    type: "collapse",
    route: "/Edit-Promotional-gifts-section/:id",
    component: <EditPromotionalgifts />,
  },
];

export default routes;
