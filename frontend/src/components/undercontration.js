import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Undercontration() {
  const [gamename, setGamename] = useState("");
  const [gametype, setGametype] = useState("");
  const [gamedec, setGamedec] = useState("");
  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData();
    formData.append("gamename", gamename);
    formData.append("gametype", gametype);
    formData.append("gamedec", gamedec);
    files.forEach(file => formData.append("userimg", file));

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/Screensdepartment`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (response.status === 200) {
        resetForm();
        Swal.fire({
          title: 'Success!',
          text: 'Your operation was successful.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response?.data.error || "An error occurred",
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map(file => {
      const reader = new FileReader();
      return new Promise(resolve => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then(results => setImagePreviews(results));
  };

  const resetForm = () => {
    setGamename("");
    setGametype("");
    setGamedec("");
    setFiles([]);
    setImagePreviews([]);
  };

  return (
    <>
      <br /><br /><br /><br /><br />
      <Container>
        <Row>
          <div style={{ marginTop: '50px', marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '20px', color: 'white', background: 'red', padding: '15px' }}>
              منصة يوزر لن تطلب منك بيانات الحساب خارج هذه الصفحة بشكل نهائي | ولن تطلب منك تسليم أي بيانات عبر الواتس اب او منصات أخرى
            </h2>
          </div>
          <Col style={{ backgroundColor: '#FFFFFF' }}>
            <h4>بيع حساب لعبة</h4>
            <Container>
              <Row>
                <Col style={{ backgroundColor: '#FFFFFF' }}></Col>
              </Row>
              <Row style={{ background: '#F7F9F9', padding: '30px' }}>
                <h5>تختلف رسوم بيع حساب الألعاب عن رسوم بيع حسابات التواصل الإجتماعي والخدمات | الرجاء مراجعة صفحة الشروط والأحكام</h5>
                <br />
                <Col>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitle">
                      <Form.Label>العنوان</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        value={gamename}
                        onChange={e => setGamename(e.target.value)}
                        aria-label="gamename"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGame">
                      <Form.Label>اللعبة</Form.Label>
                      <Form.Select
                        required
                        value={gametype}
                        onChange={e => setGametype(e.target.value)}
                        aria-label="gametype"
                      >
                        <option value="PUBG">PUBG Mobile</option>
                        <option value="Fortnite">Fortnite</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                      <Form.Label>وصف الحساب</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        value={gamedec}
                        onChange={e => setGamedec(e.target.value)}
                        aria-label="Account description"
                      />
                      <p>لاتقم بوضع أي طريقة تواصل خارج المنصة في الوصف بشكل نهائي لأنها قد تعرض حسابك للحظر!</p>
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>ملف الصورة</Form.Label>
                      <Form.Control
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        aria-label="Upload images"
                      />
                      {imagePreviews.length > 0 && (
                        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                          {imagePreviews.map((preview, index) => (
                            <img
                              key={index}
                              src={preview}
                              alt={`Preview ${index}`}
                              style={{ maxWidth: '200px', height: 'auto', margin: '10px' }}
                            />
                          ))}
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ color: 'red' }}>
                      <Form.Check
                        type="checkbox"
                        label="اتعهد بخلو وصف المنتج من أي وسيلة تواصل خارج المنصة بأي طريقة كانت سواء مباشرة أو غير مباشرة"
                        required
                        aria-label="Commitment to no external contact"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ color: 'red' }}>
                      <Form.Check
                        type="checkbox"
                        label="اتعهد بتحمل كامل المسؤوليه القانونية بما مضى او صدر من الحساب المعروض من تاريخ انشاءه او شراءه الى تاريخ بيعه بمنصة يوزر واتعهد بخلوه من اي جرائم إلكترونيه"
                        required
                        aria-label="Legal responsibility commitment"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      style={{ fontFamily: 'Noto Kufi Arabic', fontSize: '13px' }}
                    >
                      عرض الحساب
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Undercontration;
