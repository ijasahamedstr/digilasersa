import { Box } from "@mui/material";
import AboutSection from "./AboutSection";
import VisionandMission from "./vision_and_Mission";

const Aboutus = () => {
  return (
    <>
      <Box mt={12.5}>
        {" "}
        {/* 100px / 8 = 12.5 (MUI spacing unit) */}
        <AboutSection />
      </Box>
      <VisionandMission />
    </>
  );
};

export default Aboutus;
