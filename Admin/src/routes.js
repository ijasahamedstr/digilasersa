// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import Editcategories from "layouts/categories/Editcategories";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import Size from "layouts/Size";
import AddSize from "layouts/Size/AddNew";
import Color from "layouts/Color";
import AddColor from "layouts/Color/AddNew";
import City from "layouts/City";
import Addcity from "layouts/City/AddNew";
import ShippingCost from "layouts/ShippingCost";
import AddShippingCost from "layouts/ShippingCost/AddNew";
import WebsiteSlider from "layouts/website slider";
import WebsiteSliderAdd from "layouts/website slider/AddNew";
import News from "layouts/News";

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
    name: "Website Slider",
    key: "Website Slider",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/WebsiteSlider",
    component: <WebsiteSlider />,
  },
  {
    type: "collapse",
    name: "News",
    key: "News",
    icon: <CategoryIcon />,
    route: "/News",
    component: <News />,
  },
  {
    type: "collapse",
    name: "Size",
    key: "Size",
    icon: <FormatSizeIcon />,
    route: "/Size",
    component: <Size />,
  },
  {
    type: "collapse",
    name: "Color",
    key: "Color",
    icon: <ColorLensIcon />,
    route: "/Color",
    component: <Color />,
  },
  {
    type: "collapse",
    name: "City",
    key: "City",
    icon: <LocationCityIcon />,
    route: "/City",
    component: <City />,
  },
  {
    type: "collapse",
    name: "Shipping Cost",
    key: "Shipping Cost",
    icon: <MonetizationOnIcon />,
    route: "/Shipping-Cost",
    component: <ShippingCost />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    route: "/new-WebsiteSlider",
    component: <WebsiteSliderAdd />,
  },
  {
    type: "collapse",
    route: "/edit-category/:id",
    component: <Editcategories />,
  },
  {
    type: "collapse",
    route: "/new-size",
    component: <AddSize />,
  },
  {
    type: "collapse",
    route: "/new-color",
    component: <AddColor />,
  },
  {
    type: "collapse",
    route: "/new-city",
    component: <Addcity />,
  },
  {
    type: "collapse",
    route: "/new-shippingcost",
    component: <AddShippingCost />,
  },
];

export default routes;
