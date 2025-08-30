import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Helper component for displaying Author information
const Author = ({ name, style }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDBox ml={2} lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" style={style}>
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

// Helper component for displaying Job information
const Job = ({ title }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
  </MDBox>
);

Job.propTypes = {
  title: PropTypes.string.isRequired,
};

function MediaCommunicationsvideo() {
  const [MediaCommunicationsvideo, setMediaCommunicationsvideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo`
        );
        // Reverse the array to show latest videos first
        const reversedData = response.data.slice().reverse();
        setMediaCommunicationsvideo(reversedData);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Handle delete action
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`);
        setMediaCommunicationsvideo((prev) => prev.filter((v) => v._id !== id));
        Swal.fire("Deleted!", "The MediaCommunications Video has been deleted.", "success");
      } catch (err) {
        console.error("Error deleting video: ", err);
        Swal.fire("Error!", "There was an issue deleting the video.", "error");
      }
    }
  };

  // Helper to convert YouTube/Vimeo links to embed URLs
  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("youtube.com")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url; // direct video file
  };

  // Render video preview
  const renderVideoPreview = (url) => {
    if (!url) return <MDTypography>No video available</MDTypography>;

    const embedUrl = getEmbedUrl(url);
    const isEmbed = embedUrl.includes("youtube.com/embed") || embedUrl.includes("player.vimeo.com");

    if (isEmbed) {
      return (
        <iframe
          width="250"
          height="180"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Preview"
          style={{ borderRadius: "8px" }}
        />
      );
    }

    // HTML5 video for direct files
    return (
      <video width="250" height="180" controls style={{ borderRadius: "8px" }}>
        <source src={embedUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  // Define columns
  const columns = [
    {
      Header: "Video Name",
      accessor: "MediaCommunications_video_Name",
      width: "20%",
      align: "left",
    },
    {
      Header: "Video Type",
      accessor: "MediaCommunications_video_Type",
      width: "20%",
      align: "left",
    },
    { Header: "Video Preview", accessor: "MediaCommunications_video", align: "center" },
    { Header: "Action", accessor: "action", align: "center" },
  ];

  // Map rows
  const rows = MediaCommunicationsvideo.map((item) => ({
    MediaCommunications_video_Name: (
      <Author
        name={item.MediaCommunicationsvideoname}
        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "18px" }}
      />
    ),
    MediaCommunications_video_Type: (
      <Author
        name={item.MediaCommunicationsvideotype}
        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "18px" }}
      />
    ),
    MediaCommunications_video: (
      <MDBox>{renderVideoPreview(item.MediaCommunicationsvideolink)}</MDBox>
    ),
    action: (
      <MDBox display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Link
          to={`/Edit-MediaCommunications-video-section/${item._id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditIcon />}
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": { backgroundColor: "#303f9f" },
              padding: "6px 10px",
            }}
          >
            Edit
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(item._id)}
          sx={{
            backgroundColor: "red",
            color: "white",
            "&:hover": { backgroundColor: "#ff4d4d" },
            padding: "6px 10px",
          }}
        >
          Delete
        </Button>
      </MDBox>
    ),
  }));

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
                  Media Communications Video Table
                </MDTypography>
                <Link to="/Add-MediaCommunications-video-section">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      color: "black",
                      "&:hover": { backgroundColor: "#f5f5f5" },
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

export default MediaCommunicationsvideo;
