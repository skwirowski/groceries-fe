import { Container } from "@mui/material";
import routes from "config/routes";
import Dashboard from "pages/dashboard";
import Default from "pages/default";
import EntryWall from "pages/entry-wall";
import SignIn from "pages/entry-wall/signin";
import SignUp from "pages/entry-wall/signup";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Routes>
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route
          path={`${routes.entryWall}/signup`}
          element={<EntryWall child={<SignUp />} />}
        />
        <Route
          path={`${routes.entryWall}/signin`}
          element={<EntryWall child={<SignIn />} />}
        />
        <Route path="*" element={<Default />} />
      </Routes>
    </Container>
  );
}
