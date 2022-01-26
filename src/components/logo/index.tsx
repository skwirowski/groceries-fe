import { alpha, Box, Typography } from "@mui/material";
import logo from "misc/img/grocery.png";

export default function Logo() {
  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: `4px solid ${alpha("#fff", 0.5)}`,
          backgroundColor: "primary.main",
          mx: "auto",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "100%" }} />
      </Box>
      <Typography
        variant="h6"
        color="primary.main"
        align="center"
        sx={{ whiteSpace: "nowrap" }}
      >
        _groceries app
      </Typography>
    </Box>
  );
}
