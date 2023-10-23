import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Usercomponent from "./Usercomponent";
import LoginComp from "./components/LoginComp";
import AuthRequired from "./AuthRequired";
import Layout from "./components/Layout";
import Unauthorized from "./components/Unauthorized";

function App() {
  // const handleSubmit = (loginData) => {
  //   console.log("***************", loginData);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* {PUBLIC ROUTES} */}
          <Route path="/login" element={<LoginComp />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* {PROTECTED ROUTES} */}

          <Route element={<AuthRequired allowedRoles={["Patient"]} />}>
            <Route path="/user" element={<Usercomponent />} />
          </Route>
          <Route element={<AuthRequired allowedRoles={["Admin"]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
