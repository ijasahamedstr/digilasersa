import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import axios from "axios"; // Make sure to import axios for data fetching
import Swal from "sweetalert2"; // Import SweetAlert2

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Helper function to create Author data
const Author = ({ name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

// Add PropTypes validation
Author.propTypes = {
  name: PropTypes.string.isRequired,
};

// Helper function to create Job data
const Job = ({ title }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
  </MDBox>
);

// Add PropTypes validation
Job.propTypes = {
  title: PropTypes.string.isRequired,
};

function News() {
  const [MidCategories, setMidCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/WebsiteSlider`);
        setMidCategories(response.data); // Set the fetched categories
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Define the columns for the DataTable
  const columns = [
    { Header: "Categories", accessor: "Categories", width: "20%", align: "left" },
    { Header: "MidCategories", accessor: "MidCategories", width: "20%", align: "left" },
    { Header: "Categories description", accessor: "Categoriesdescription", align: "left" },
    { Header: "Categories status", accessor: "Categoriesstatus", align: "center" },
    { Header: "Background Image", accessor: "BackgroundImage", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  // Function to handle delete action with SweetAlert2
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_HOST}/WebsiteSlider/${id}`);
        setMidCategories(MidCategories.filter((midcategory) => midcategory._id !== id)); // Update local state after deletion
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting category: ", error);
        setError("Failed to delete category");
        Swal.fire("Error!", "There was an issue deleting the category.", "error");
      }
    }
  };

  // Map through the Categories data to build rows
  const rows = MidCategories.map((item) => ({
    Categories: <Author name={item.categories} />,
    MidCategories: <Author name={item.midCategories} />,
    Categoriesdescription: <Job title={item.Categoriedec} />,
    Categoriesstatus: (
      <MDBadge
        badgeContent={item.Categoriesstatus === "Yes" ? "Yes" : "No"}
        color={item.Categoriesstatus === "Yes" ? "success" : "error"}
        variant="gradient"
        size="sm"
      />
    ),
    BackgroundImage: (
      <MDBox>
        {item.image_path ? (
          <img
            src={`${process.env.REACT_APP_API_HOST}/uploads/Categories/${item.image_path}`}
            alt="Background"
            style={{
              maxWidth: "50px", // Set a smaller size for the image
              borderRadius: "8px",
            }}
          />
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
            alt="Default Background"
            style={{
              maxWidth: "50px", // Set a smaller size for the image
              borderRadius: "8px",
            }}
          />
        )}
      </MDBox>
    ),
    action: (
      <MDBox display="flex" justifyContent="center" alignItems="center" gap={2}>
        {/* Edit button with icon */}
        <Link to={`/edit-category/${item._id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditIcon sx={{ marginRight: "4px" }} />}
            sx={{
              backgroundColor: "#3f51b5", // Custom background color for Edit button
              color: "white", // White text color for Edit button
              "&:hover": {
                backgroundColor: "#303f9f", // Darker blue on hover
              },
              padding: "6px 10px", // Custom padding for smaller buttons
            }}
          >
            Edit
          </Button>
        </Link>
        {/* Delete button */}
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(item._id)}
          sx={{
            backgroundColor: "red", // Custom red background for Delete button
            color: "white", // White text color for Delete button
            "&:hover": {
              backgroundColor: "#ff4d4d", // Darker red on hover
            },
            padding: "6px 10px", // Custom padding for smaller buttons
          }}
        >
          Delete
        </Button>
      </MDBox>
    ),
  }));

  const handleNewFieldClick = () => {
    console.log("New Field button clicked");
  };

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
                  News Table
                </MDTypography>
                <Link to="/new-categories">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNewFieldClick}
                    size="small"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    Add New
                  </Button>
                </Link>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={5}
                  showTotalEntries={true}
                  pagination
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default News;
