import { Box } from "@mui/material";
import Copyright2 from "components/copyright";
import Logo from "components/logo";
import SingUp from "pages/entry-wall/signup";

export default function EntryWall() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Logo />
        <SingUp />
      </Box>

      <Copyright2 />
    </Box>
  );
}
