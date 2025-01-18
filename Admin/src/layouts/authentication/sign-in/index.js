import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after login
import axios from "axios"; // For API requests

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// SweetAlert2 import
import Swal from "sweetalert2";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // For navigating to another page after successful login

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      Swal.fire({
        title: "Error",
        text: "Please fill in both fields.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/Adminlogin", { email, password });

      // Handle successful login (store token, user data, etc.)
      if (response.data.token) {
        // Save token in localStorage or sessionStorage
        if (rememberMe) {
          localStorage.setItem("authToken", response.data.token);
        } else {
          sessionStorage.setItem("authToken", response.data.token);
        }

        // SweetAlert for success
        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => {
          navigate("/dashboard"); // Navigate to dashboard after SweetAlert is dismissed
        });
      }
    } catch (err) {
      // SweetAlert for failed login
      Swal.fire({
        title: "Error",
        text: "Invalid credentials. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
