import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
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
            {/* Promotional gifts section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  title="Promotional gifts section"
                  count={0} // Set the count to 0 or dynamic if required
                  color="primary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                  icon={
                    <img
                      src="https://i.ibb.co/HdgVtF5/image.webp"
                      alt="Promotional Gifts"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }} // Set size and fit the image
                    />
                  }
                />
              </MDBox>
            </Grid>

            {/* Printing section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/dmvyMMn/image-1.webp"
                      alt="Printing"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  title="Printing section"
                  count="0"
                  color="warning"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Department of Fine Arts section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/LP17MwP/image-6.webp"
                      alt="Fine Arts"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  color="success"
                  title="Department of Fine Arts section"
                  count="0"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Screens section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/dmvyMMn/image-1.webp"
                      alt="Screens"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  color="error"
                  title="Screens section"
                  count="0"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Department of Arabic Calligraphy section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/5vHKmx1/image-2.webp"
                      alt="Calligraphy"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  title="Department of Arabic Calligraphy section"
                  count={citiesCount || 0} // Fallback to 0 if citiesCount is invalid
                  color="info"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Software department section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/DDCFSm4/image-3.webp"
                      alt="Software"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  title="Software department section"
                  count={0}
                  color="primary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Social media section */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/K5khVnQ/image-4.webp"
                      alt="Social Media"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  title="Social media section"
                  count="0"
                  color="secondary"
                  sx={{ fontSize: "1.2rem" }} // Setting font size for the count text
                />
              </MDBox>
            </Grid>

            {/* Media and Communications Department */}
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  // Replacing icon with an image
                  icon={
                    <img
                      src="https://i.ibb.co/8BD4CKD/image-5.webp"
                      alt="Media & Communications"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                  }
                  color="success"
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
