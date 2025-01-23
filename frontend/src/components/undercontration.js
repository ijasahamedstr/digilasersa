import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2"; // Import SweetAlert2
import { Link } from 'react-router-dom';

const Undercontration = () => {
  const [Printingdepartment, setPrintingdepartment] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/Printingdepartment`);
        setPrintingdepartment(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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
          await axios.delete(`${process.env.REACT_APP_API_HOST}/Printingdepartment/${id}`);
          setPrintingdepartment(Printingdepartment.filter((Printingdepartment) => Printingdepartment._id !== id));
          Swal.fire("Deleted!", "Your category has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting category: ", error);
          Swal.fire("Error!", "There was an issue deleting the category.", "error");
        }
      }
    };

  return (
    <Container>
      <br/><br/><br/><br/>
      <h2 className="text-center mt-4">Promotional Gifts Data Table</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Gift Name</th>
            <th>Gift Type</th>
            <th>Gift Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Printingdepartment.map((Printing, index) => (
            <tr key={Printing.id}>
              <td>{index + 1}</td>
              <td>{Printing.Printingname}</td>
              <td>{Printing.Printingtype}</td>
              <td>
              {Printing.Printingimage ? (
                  <img
                    src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${Printing.Printingimage}`}
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
              </td>
              <td>
                {/* Add your actions here, such as Edit or Delete buttons */}
                <Button variant="info" className="me-2" as={Link} to={`/update/${Printing._id}`}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(Printing._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Undercontration;
