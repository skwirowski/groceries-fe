import ButtonSubmit from "components/button-submit";
import InputEmail from "components/input-email";
import InputPassword from "components/input-password";
import { Fragment, useState } from "react";

interface State {
  email: string;
  password: string;
}
export default function SignUp() {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
  });

  const handleChange = (prop: keyof State) => (value: string) => {
    setValues({
      ...values,
      [prop]: value,
    });
  };

  return (
    <Fragment>
      <InputEmail onEmailChange={handleChange("email")} />
      <InputPassword onPasswordChange={handleChange("password")} />
      <ButtonSubmit />
    </Fragment>
  );
}
