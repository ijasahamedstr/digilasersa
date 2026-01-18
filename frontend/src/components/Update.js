import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function UpdateField() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    giftname: "",
    gifttype: "",
    gifttimage: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setFormData({
            giftname: data.giftname || "",
            gifttype: data.gifttype || "",
            gifttimage: data.gifttimage || null,
          });

          if (data.gifttimage) {
            setPreviewImage(
              `${process.env.REACT_APP_API_HOST}/uploads/Promotionalgifts/${data.gifttimage}`
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
  }, [id]); // setPreviewImage removed from here as it is a stable function from useState

  // Handle file changes for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, gifttimage: file });

      // Set the preview image for the selected file
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreviewImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  // Handle the update of promotional gifts
  const updatePromotionalgifts = async () => {
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("giftname", formData.giftname);
    formDataToSend.append("gifttype", formData.gifttype);

    // Only append image if a new file was actually selected
    if (formData.gifttimage instanceof File) {
      formDataToSend.append("gifttimage", formData.gifttimage);
    }

    try {
      // Removed 'res' assignment to fix "no-unused-vars" warning
      await axios.put(
        `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`,
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
    } catch (error) {
      console.error("Error updating data:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update data. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="d-flex flex-column align-items-center">
          <div className="w-100">
            <h2
              className="text-center"
              style={{ fontFamily: "Noto Kufi Arabic", marginTop: "1.5rem", marginBottom: "2rem" }}
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
                  name="gifttype"
                  value={formData.gifttype}
                  onChange={(e) =>
                    setFormData({ ...formData, gifttype: e.target.value })
                  }
                >
                  <option value="">اختر النوع</option>
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
                {previewImage && (
                  <div className="mt-3 text-center">
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      style={{ maxWidth: "100%", height: "150px", borderRadius: "8px", objectFit: "cover" }} 
                    />
                  </div>
                )}
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                style={{
                  fontFamily: "Noto Kufi Arabic",
                  fontSize: "14px",
                  background: "red",
                  border: "none",
                  width: "100%",
                  padding: "10px"
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