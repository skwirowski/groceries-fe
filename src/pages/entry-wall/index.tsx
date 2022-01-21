import { Grid } from "@mui/material";
import Logo from "components/logo";
import SingUp from "pages/entry-wall/signup";

export default function EntryWall() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <SingUp />
    </Grid>
  );
}
