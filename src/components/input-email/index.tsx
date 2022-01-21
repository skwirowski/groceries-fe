import { AccountCircle } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  onEmailChange: (value: string) => void;
}
export default function InputEmail({ onEmailChange }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onEmailChange(event.target.value);

  return (
    <Grid item xs={12}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-input-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-input-email"
          type="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end" sx={{ p: 1 }}>
              <AccountCircle />
            </InputAdornment>
          }
          label="Email"
        />
      </FormControl>
    </Grid>
  );
}
