import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Editor } from "@tinymce/tinymce-react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddNews() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [newsheading, setNewsheading] = useState("");
  const [newsdec, setNewsdec] = useState("");
  const [file, setFile] = useState(null);
  const editorRef = useRef(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "newsheading") setNewsheading(value);
    if (name === "newsdec") setNewsdec(value);
  };

  // Handle image file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Preview image
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle TinyMCE editor changes
  const handleEditorChange = (content) => {
    setNewsdec(content);
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!newsheading || !newsdec || !file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields must be filled out, and an image must be uploaded!",
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("newsheading", newsheading);
    formData.append("newsdec", newsdec);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_HOST}/News`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Check response status and display appropriate message
      if (res.data.status === 401 || !res.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Category addition failed. Please try again!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category added successfully!",
        });

        // Clear the form
        setNewsheading("");
        setNewsdec("");
        setFile(null);
        setImagePreview(null);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred during the submission. Please try again.",
      });
      console.error(error);
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

              {/* Form for adding category */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="News Heading"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsheading"
                    value={newsheading}
                    onChange={handleChange}
                  />
                  <div style={{ marginBottom: "20px" }}>
                    <Editor
                      apiKey="hkk12ec9ohtvvpvn8nqjjmlq7gec9klnt54dk767ewll5f09"
                      value={newsdec}
                      onEditorChange={handleEditorChange}
                      init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                          "a11ychecker",
                          "advlist",
                          "advcode",
                          "advtable",
                          "autolink",
                          "checklist",
                          "export",
                          "lists",
                          "link",
                          "image",
                          "charmap",
                          "preview",
                          "anchor",
                          "searchreplace",
                          "visualblocks",
                          "powerpaste",
                          "fullscreen",
                          "formatpainter",
                          "insertdatetime",
                          "media",
                          "table",
                          "help",
                          "wordcount",
                          "emoticons", // Add emoticons plugin
                          "spellchecker", // Add spellchecker plugin
                          "mediaembed", // Add media embed plugin
                          "autosave", // Add autosave plugin
                        ],
                        toolbar:
                          "undo redo | casechange blocks | bold italic backcolor | " +
                          "alignleft aligncenter alignright alignjustify | " +
                          "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; margin-bottom: 20px; }",
                      }}
                    />
                  </div>
                  {/* Image Upload Button */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="image/*"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
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
                      Upload Image
                    </Button>
                  </label>

                  {/* Image Preview */}
                  {imagePreview && (
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        mb: 2,
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "200px",
                          borderRadius: "4px",
                        }}
                      />
                    </MDBox>
                  )}

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

export default AddNews;
