import { alpha, Box } from "@mui/material";
import logo from "misc/img/grocery.png";

export default function Logo() {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: `4px solid ${alpha("#fff", 0.5)}`,
        backgroundColor: "primary.main",
        my: 4,
      }}
    >
      <img src={logo} alt="logo" style={{ width: "100%" }} />
    </Box>
  );
}
