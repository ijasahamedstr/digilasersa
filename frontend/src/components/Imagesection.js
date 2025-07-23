import { Box } from "@mui/material";
import Container from "@mui/material/Container";

const Imagesection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ padding: 0 }}
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
    >
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/QZkXZb4/image.webp"
          alt="main-slide"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
          }}
        />
      </Box>
    </Container>
  );
};

export default Imagesection;
