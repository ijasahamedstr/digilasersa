import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Ensure you have sweetalert2 installed
import axios from "axios"; // Ensure axios is installed
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

export default function EditPromotionalgifts() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [formData, setFormData] = useState({
    giftname: "", // Corrected syntax for initializing the state
    gifttype: "",
    gifttimage: null,
  });
  const [previewImage, setPreviewImage] = useState(null); // State for image preview
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedFile, setUpdatedFile] = useState(null);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}Promotionalgifts/${id}`); // Corrected URL structure
        if (response.ok) {
          const data = await response.json();
          setFormData({
            giftname: data.giftname || "", // Ensure the fields are populated correctly
            gifttype: data.gifttype || "",
            gifttimage: data.gifttimage || null, // Set the existing image URL if it exists
          });
          // Set the preview for the existing image (if any)
          if (data.gifttimage) {
            setPreviewImage(
              `${process.env.REACT_APP_API_HOST}uploads/Promotionalgifts/${data.gifttimage}` // Corrected image path
            );
          }
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  // Handle file changes for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, gifttimage: file });

    // Set the preview image for the selected file
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreviewImage(fileReader.result); // Preview the image
    };
    if (file) {
      fileReader.readAsDataURL(file); // Read the file as data URL
    } else {
      setPreviewImage(null); // Reset if no file is selected
    }
  };

  // Handle the update of promotional gifts
  const updatePromotionalgifts = async () => {
    setLoading(true); // Set loading state to true while the request is being processed
    const formDataToSend = new FormData();
    formDataToSend.append("giftname", formData.giftname);
    formDataToSend.append("gifttype", formData.gifttype);
    if (updatedFile) {
      formDataToSend.append("gifttimage", updatedFile); // Append the updated image file
    }

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_HOST}Promotionalgifts/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data updated successfully.",
      });
      setFormData({
        giftname: res.data.giftname,
        gifttype: res.data.gifttype,
        gifttimage: res.data.gifttimage,
      });
    } catch (error) {
      console.error("Error updating data", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update data. Please try again later.",
      });
    } finally {
      setLoading(false); // Reset loading state after the request is finished
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, fontFamily: "Noto Kufi Arabic" }}>
        تحديث البيانات
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePromotionalgifts();
        }}
      >
        {/* Gift Name */}
        <TextField
          label="اسم الهدية"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          name="giftname"
          value={formData.giftname}
          onChange={(e) => setFormData({ ...formData, giftname: e.target.value })}
        />

        {/* Gift Type */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>نوع الهدية</InputLabel>
          <Select
            label="نوع الهدية"
            name="gifttype"
            value={formData.gifttype}
            onChange={(e) => setFormData({ ...formData, gifttype: e.target.value })}
          >
            <MenuItem value="passport">جواز السفر</MenuItem>
            <MenuItem value="id">بطاقة الهوية</MenuItem>
            <MenuItem value="driving_license">رخصة القيادة</MenuItem>
          </Select>
        </FormControl>

        {/* Display Image or Default Image */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {previewImage ? (
            <img
              src={previewImage}
              alt="Gift"
              style={{
                maxWidth: "150px", // Set a smaller size for the image
                borderRadius: "8px",
              }}
            />
          ) : formData.gifttimage ? (
            <img
              src={`${process.env.REACT_APP_API_HOST}uploads/Promotionalgifts/${formData.gifttimage}`}
              alt="Gift"
              style={{
                maxWidth: "150px", // Set a smaller size for the image
                borderRadius: "8px",
              }}
            />
          ) : (
            <img
              src="https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
              alt="Default Image"
              style={{
                maxWidth: "50px", // Set a smaller size for the image
                borderRadius: "8px",
              }}
            />
          )}
        </Box>

        {/* File Upload */}
        <input
          type="file"
          name="gifttimage"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          id="gifttimage"
        />
        <label htmlFor="gifttimage">
          <Button variant="outlined" component="span" fullWidth sx={{ mb: 2 }}>
            اختيار صورة
          </Button>
        </label>

        {/* Submit Button */}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={loading}
          sx={{
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "#d32f2f",
            },
          }}
        >
          {loading ? "جارٍ التحديث..." : "تحديث البيانات"}
        </Button>
      </form>
    </Container>
  );
}
