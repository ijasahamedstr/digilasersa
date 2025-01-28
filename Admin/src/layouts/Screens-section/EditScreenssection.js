import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Swal from "sweetalert2";
import axios from "axios"; // Add axios import
import { useNavigate, useParams } from "react-router-dom"; // Add useParams import for getting the ID

const EditScreenssection = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [projectname, setProjectname] = useState("");
  const [projectype, setProjectype] = useState("");
  const [projectdec, setProjectdec] = useState("");
  const navigate = useNavigate(); // Initialize navigate
  const { id } = useParams(); // Get the id from URL params (assuming the route contains an 'id' param)

  // Use useEffect to fetch the data for the existing project if the component is used for editing.
  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/Screensdepartment/${id}`)
        .then((response) => {
          const data = response.data;
          setProjectname(data.projectname);
          setProjectype(data.projectype);
          setProjectdec(data.projectdec);
          // Optionally, you could set images from the response if you want to preview them
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: error?.response?.data?.error || "Failed to fetch project data",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before submission
    const formData = new FormData();
    formData.append("projectname", projectname);
    formData.append("projectype", projectype);
    formData.append("projectdec", projectdec);
    files.forEach((file) => formData.append("userimg", file));

    try {
      const method = id ? "put" : "post"; // If there's an id, we do an update (PUT), otherwise create (POST)
      const url = id
        ? `${process.env.REACT_APP_API_HOST}/Screensdepartment/${id}`
        : `${process.env.REACT_APP_API_HOST}/Screensdepartment`; // If updating, target the specific id

      const response = await axios[method](url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200 || response.status === 201) {
        resetForm();
        Swal.fire({
          title: "Success!",
          text: "Your operation was successful.",
          icon: "success",
          confirmButtonText: "OK",
        });
        if (!id) navigate("/your/redirect/route"); // If it's a new creation, redirect after success
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error?.response?.data?.error || "An error occurred",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then((results) => setImagePreviews(results));
  };

  const resetForm = () => {
    setProjectname("");
    setProjectype("");
    setProjectdec("");
    setFiles([]);
    setImagePreviews([]);
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
                  {id ? "Update Category" : "Add New Category"}
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Project Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="projectname"
                    value={projectname}
                    onChange={(e) => setProjectname(e.target.value)}
                  />

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Project Type</InputLabel>
                    <Select
                      label="Project Type"
                      sx={{ height: "40px" }}
                      name="projectype"
                      value={projectype}
                      onChange={(e) => setProjectype(e.target.value)}
                    >
                      <MenuItem value="دروع ومجسمات">دروع ومجسمات</MenuItem>
                      <MenuItem value="خشـبيات">خشـبيات</MenuItem>
                      <MenuItem value="مكتـبيات">مكتـبيات</MenuItem>
                      <MenuItem value="اكسسوارات">اكسسوارات</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Project Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="projectdec"
                    multiline
                    rows={4}
                    value={projectdec}
                    onChange={(e) => setProjectdec(e.target.value)}
                  />

                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="projectimage"
                      accept="image/*"
                      type="file"
                      multiple
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth
                      sx={{
                        mb: 2,
                        textTransform: "none",
                        borderColor: "#1976d2",
                        color: "#1976d2",
                        "&:hover": {
                          borderColor: "#1565c0",
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      Upload Images
                    </Button>
                  </label>

                  {imagePreviews.length > 0 && (
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {imagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Preview ${index}`}
                          style={{
                            maxWidth: "150px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "4px",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : id ? "Update" : "Submit"}
                  </Button>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default EditScreenssection;
