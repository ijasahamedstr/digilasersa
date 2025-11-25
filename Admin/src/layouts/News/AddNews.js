import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddNews = () => {
  const [loading, setLoading] = useState(false);

  // News Form field states
  const [News, setNews] = useState({
    newsname: "",
    newsdec: [""], // store descriptions as array
    newsimagelinks: [""], // store images as array
  });

  // Handle changes in input fields (for single inputs)
  const handleChange = ({ target: { name, value } }) => {
    setNews((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // ======================
  // Descriptions Handlers
  // ======================
  const handleDescChange = (index, value) => {
    const updatedDesc = [...News.newsdec];
    updatedDesc[index] = value;
    setNews((prevState) => ({
      ...prevState,
      newsdec: updatedDesc,
    }));
  };

  const addDescField = () => {
    setNews((prevState) => ({
      ...prevState,
      newsdec: [...prevState.newsdec, ""],
    }));
  };

  const removeDescField = (index) => {
    const updatedDesc = News.newsdec.filter((_, i) => i !== index);
    setNews((prevState) => ({
      ...prevState,
      newsdec: updatedDesc,
    }));
  };

  // ======================
  // Images Handlers
  // ======================
  const handleImageChange = (index, value) => {
    const updatedLinks = [...News.newsimagelinks];
    updatedLinks[index] = value;
    setNews((prevState) => ({
      ...prevState,
      newsimagelinks: updatedLinks,
    }));
  };

  const addImageField = () => {
    setNews((prevState) => ({
      ...prevState,
      newsimagelinks: [...prevState.newsimagelinks, ""],
    }));
  };

  const removeImageField = (index) => {
    const updatedLinks = News.newsimagelinks.filter((_, i) => i !== index);
    setNews((prevState) => ({
      ...prevState,
      newsimagelinks: updatedLinks,
    }));
  };

  // ======================
  // Submit form data
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/News`, News);

      if (response.data.status === 401 || !response.data) {
        Swal.fire({
          icon: "error",
          title: "News addition failed",
          text: "There was an issue adding the news. Please try again later.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Retry",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "News added successfully!",
          text: "Your news has been added. You can now view it in the list.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        setNews({ newsname: "", newsdec: [""], newsimagelinks: [""] });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong",
        text: "We encountered an error while adding the news. Please try again later.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Retry",
      });
    } finally {
      setLoading(false);
    }
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
                  Add New News
                </MDTypography>
              </MDBox>

              {/* Add News Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* News Name */}
                  <TextField
                    label="News Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsname"
                    value={News.newsname}
                    onChange={handleChange}
                  />

                  {/* Multiple News Descriptions */}
                  {News.newsdec.map((desc, index) => (
                    <MDBox key={index} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <TextField
                        label={`News Description ${index + 1}`}
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={desc}
                        onChange={(e) => handleDescChange(index, e.target.value)}
                      />
                      {index > 0 && (
                        <Button onClick={() => removeDescField(index)} color="error" sx={{ ml: 1 }}>
                          Remove
                        </Button>
                      )}
                    </MDBox>
                  ))}

                  {/* Add Another Description Button */}
                  <Button
                    onClick={addDescField}
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 2,
                      color: "#000000ff",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                        backgroundColor: "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    + Add Another Description
                  </Button>

                  {/* Multiple News Image Links */}
                  {News.newsimagelinks.map((link, index) => (
                    <MDBox key={index} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <TextField
                        label={`News Image Link ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        value={link}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                      />
                      {index > 0 && (
                        <Button
                          onClick={() => removeImageField(index)}
                          color="error"
                          sx={{ ml: 1 }}
                        >
                          Remove
                        </Button>
                      )}
                    </MDBox>
                  ))}

                  {/* Add Another Image Button */}
                  <Button
                    onClick={addImageField}
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 2,
                      color: "#000000ff",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                        backgroundColor: "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    + Add Another Image
                  </Button>

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
};

export default AddNews;
