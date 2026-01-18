import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Ensure you have sweetalert2 installed
import axios from "axios"; // Ensure axios is installed

export default function UpdateField() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [formData, setFormData] = useState({
    giftname: "",
    gifttype: "",
    gifttimage: null, // Initially null as there's no image uploaded
  });
  const [ setPreviewImage] = useState(null); // State for image preview
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedFile] = useState(null);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`,
        );
        if (response.ok) {
          const data = await response.json();
          setFormData({
            giftname: data.giftname || "",
            gifttype: data.gifttype || "",
            gifttimage: data.gifttimage || null, // Set the existing image URL if it exists
          });
          // Set the preview for the existing image (if any)
          if (data.gifttimage) {
            setPreviewImage(
              `${process.env.REACT_APP_API_HOST}/uploads/Promotionalgifts/${data.gifttimage}`,
            );
          }
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
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
        `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
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
      console.error("Error updating data:", error);
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
    <Container className="mt-5">
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="col-12">
            <h2
              className="text-center"
              style={{ fontFamily: "Noto Kufi Arabic", marginTop: "1.5rem" }}
            >
              تحديث البيانات
            </h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                updatePromotionalgifts();
              }}
            >
              <Form.Group className="mb-3" controlId="formGridGiftName">
                <Form.Label>اسم الهدية</Form.Label>
                <Form.Control
                  placeholder="اسم الهدية"
                  name="giftname"
                  value={formData.giftname}
                  onChange={(e) =>
                    setFormData({ ...formData, giftname: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridGiftType">
                <Form.Label>نوع الهدية</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="gifttype"
                  value={formData.gifttype}
                  onChange={(e) =>
                    setFormData({ ...formData, gifttype: e.target.value })
                  }
                >
                  <option value="passport">جواز السفر</option>
                  <option value="id">بطاقة الهوية</option>
                  <option value="driving_license">رخصة القيادة</option>
                </Form.Select>
              </Form.Group>

  
              <Form.Group className="mb-3" controlId="formGridGiftImage">
                <Form.Label>وثيقة الإثبات</Form.Label>
                <Form.Control
                  type="file"
                  name="gifttimage"
                  onChange={handleFileChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "Noto Kufi Arabic",
                  fontSize: "13px",
                  background: "red",
                }}
              >
                {loading ? "جارٍ التحديث..." : "تحديث البيانات"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
