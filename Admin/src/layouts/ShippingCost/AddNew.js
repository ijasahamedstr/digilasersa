import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported
import Swal from "sweetalert2"; // Ensure Swal is imported
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddShippingCost() {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]); // To store cities list
  const [city, setCity] = useState(""); // Selected city
  const [amount, setAmount] = useState(""); // Shipping cost

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "city":
        setCity(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!city || !amount) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please select a city and enter a shipping cost.",
      });
      setLoading(false);
      return;
    }

    // Prepare the data for submission
    const payload = {
      city: city,
      amount: amount,
    };

    try {
      // Make the POST request to add the shipping cost
      const res = await axios.post(`${process.env.REACT_APP_API_HOST}/ShipingCity`, payload, {
        headers: {
          "Content-Type": "application/json", // Sending as JSON
        },
      });

      // Check response for success or failure
      if (res.data.status === 401 || !res.data) {
        // If error, display a failure message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Shipping cost addition failed. Please try again!",
        });
      } else {
        // On success, show a success message
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Shipping cost added successfully!",
        });

        // Clear form fields after successful addition
        setCity("");
        setAmount("");
      }
    } catch (error) {
      // If there's an error during the request, display a failure message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  // Fetch the cities for the dropdown
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/city`);
        const data = await response.json();
        setCities(data); // Assuming the response is an array of cities
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Add New Shipping Cost
                </MDTypography>
              </MDBox>

              {/* Add Shipping Cost Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* City Dropdown */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>City</InputLabel>
                    <Select
                      sx={{ height: "40px" }}
                      label="City"
                      name="city"
                      value={city}
                      onChange={handleChange}
                    >
                      {cities.map((city) => (
                        <MenuItem key={city.id} value={city.city}>
                          {city.city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Shipping Cost */}
                  <TextField
                    label="Shipping Amount"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default AddShippingCost;
