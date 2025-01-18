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
                  title="Promotional gifts section"
                  count={0}
                  color="primary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Today's Users */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<HourglassEmptyIcon />}
                  title="Printing section"
                  count="0"
                  color="warning"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Revenue */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={<Storefront />}
                  title="Department of Fine Arts section"
                  count="0"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Followers */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="error"
                  icon={<DeliveryDiningIcon />}
                  title="Screens section"
                  count="0"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Active Customers */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<PersonAdd />}
                  title="Department of Arabic Calligraphy section"
                  count={citiesCount || 0} // Fallback to 0 if citiesCount is invalid
                  color="info"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Categories (Example repetition) */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<CategoryIcon />}
                  title="Software department section"
                  count={0}
                  color="primary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon={<CategoryIcon />}
                  title="Social media section"
                  count="0"
                  color="secondary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon={<CategoryIcon />}
                  title="Media and Communications Department"
                  count="0"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
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
