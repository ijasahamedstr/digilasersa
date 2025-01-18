import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { ShoppingCart, Storefront, PersonAdd } from "@mui/icons-material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CategoryIcon from "@mui/icons-material/Category";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* Product Statistics */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon={<ShoppingCart />} title="Products" color="primary" />
            </MDBox>
          </Grid>

          {/* Today's Users */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<HourglassEmptyIcon />}
                title="Pending Orders"
                color="warning"
              />
            </MDBox>
          </Grid>

          {/* Revenue */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<Storefront />}
                title="Completed Orders"
              />
            </MDBox>
          </Grid>

          {/* Followers */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon={<DeliveryDiningIcon />}
                title="Completed Shipping"
              />
            </MDBox>
          </Grid>

          {/* Active Customers */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon={<PersonAdd />} title="Active Customers" color="info" />
            </MDBox>
          </Grid>

          {/* Categories (Example repetition) */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CategoryIcon />}
                title="Top Categories"
                color="primary"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CategoryIcon />}
                title="Mid Categories"
                color="secondary"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<CategoryIcon />}
                title="End Categories"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
