import { Link, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/skwirowski">
        Paweł Skwirowski
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
