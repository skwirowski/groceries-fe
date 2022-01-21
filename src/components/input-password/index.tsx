import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";

interface State {
  showPassword: boolean;
}

interface Props {
  onPasswordChange: (value: string) => void;
}

export default function InputPassword({ onPasswordChange }: Props) {
  const [values, setValues] = useState<State>({
    showPassword: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onPasswordChange(event.target.value);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Grid item xs={12}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-input-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-input-password"
          type={values.showPassword ? "text" : "password"}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Grid>
  );
}
