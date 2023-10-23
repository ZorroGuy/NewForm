import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Unauthorized() {
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate("/login");
  // };

  return (
    <>
      <div>
        <h1>Unauthorised</h1>
        <br />
        <span>
          <Link to="/login">To the Login Page</Link>
          <p>You do not have access to the requested page.</p>
        </span>
      </div>
    </>
  );
}
