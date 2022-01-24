import { AccountCircle } from "@mui/icons-material";
import {
  FormControl,
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
    <FormControl
      variant="outlined"
      required
      fullWidth
      sx={{
        my: 1,
      }}
    >
      <InputLabel htmlFor="outlined-input-email">Email Address</InputLabel>
      <OutlinedInput
        id="outlined-input-email"
        type="text"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end" sx={{ p: 1 }}>
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
