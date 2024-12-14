import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { ShoppingCart, Storefront, PersonAdd, LocalMall } from "@mui/icons-material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CategoryIcon from "@mui/icons-material/Category";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [citiesCount, setCitiesCount] = useState(0); // To store cities count
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/register`);
        const data = await response.json();
        console.log("Fetched cities data:", data); // Log response to verify structure

        // Check if the response contains a 'count' property and use it
        if (data && data.count !== undefined) {
          setCitiesCount(data.count); // Update state with the fetched count
        } else {
          console.error("Error: 'count' not found in the response.");
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or there's an error
      }
    };

    fetchCities();
  }, []); // Empty dependency array means it will run once when the component mounts

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {loading ? (
          <p>Loading...</p> // Display loading text while data is being fetched
        ) : (
          <Grid container spacing={3}>
            {/* Product Statistics */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<ShoppingCart />}
                  title="Products"
                  count={281}
                  color="primary"
                />
              </MDBox>
            </Grid>

            {/* Today's Users */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<HourglassEmptyIcon />}
                  title="Pending Orders"
                  count="23"
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
                  count="345"
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
                  count="91"
                />
              </MDBox>
            </Grid>

            {/* Active Customers */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<PersonAdd />}
                  title="Active Customers"
                  count={citiesCount || 0} // Fallback to 0 if citiesCount is invalid
                  color="info"
                />
              </MDBox>
            </Grid>

            {/* Categories (Example repetition) */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<CategoryIcon />}
                  title="Top Categories"
                  count={281}
                  color="primary"
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<CategoryIcon />}
                  title="Mid Categories"
                  count="2,300"
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
                  count="34k"
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="warning"
                  icon={<PersonAdd />}
                  title="Active Seller"
                  count="+91"
                />
              </MDBox>
            </Grid>
          </Grid>
        )}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
