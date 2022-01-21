import { Box } from "@mui/material";
import logo from "misc/img/grocery.png";

export default function Logo() {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "2px solid #fff",
        margin: "auto",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "100%" }} />
    </Box>
  );
}
