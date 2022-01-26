import { Typography } from "@mui/material";

interface Props {
  heading: string;
}
export default function EntryHeading(props: Props) {
  return (
    <Typography component="h1" variant="h5">
      {props.heading}
    </Typography>
  );
}
