import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

function Promotionalgiftssection() {
  const [News, setNews] = useState([
    {
      _id: "1",
      newsheading: "News Headline 1",
      newsdec: "Description of News 1",
      Categoriedec: "Category 1",
      Categoriesstatus: "Yes",
      imgpath: "image1.jpg",
    },
    {
      _id: "2",
      newsheading: "News Headline 2",
      newsdec: "Description of News 2",
      Categoriedec: "Category 2",
      Categoriesstatus: "No",
      imgpath: "image2.jpg",
    },
  ]);

  const columns = [
    { Header: "News", accessor: "News", width: "20%", align: "left" },
    { Header: "News Description", accessor: "News_description", width: "20%", align: "left" },
    { Header: "Background Image", accessor: "BackgroundImage", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  const rows = News.map((item) => ({
    News: <Author name={item.newsheading} />,
    News_description: <Author name={item.newsdec} />,
    News_des: <Job title={item.Categoriedec} />,
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
        {item.imgpath ? (
          <img
            src={`/uploads/News/${item.imgpath}`}
            alt="Background"
            style={{
              maxWidth: "150px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
            alt="Default Background"
            style={{
              maxWidth: "50px",
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
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
              padding: "6px 10px",
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
          onClick={() => {
            setNews(News.filter((newsItem) => newsItem._id !== item._id));
          }}
          sx={{
            backgroundColor: "red",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff4d4d",
            },
            padding: "6px 10px",
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
                  Promotional Gifts Section
                </MDTypography>
                <Link to="/new-News">
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

export default Promotionalgiftssection;
