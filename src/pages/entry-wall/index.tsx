import { Box } from "@mui/material";
import Copyright from "components/copyright";
import Logo from "components/logo";

type Props = {
  child: React.ReactChild;
};

export default function EntryWall(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "95vh",
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
        {props.child}
      </Box>

      <Copyright />
    </Box>
  );
}
