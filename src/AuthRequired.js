import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

export default function AuthRequired({ allowedRoles }) {
  const [dataFromLocalstorage, setdataFromLocalstorage] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const LocalStorageData = localStorage.getItem("LoginData");

    console.log(LocalStorageData);

    if (LocalStorageData) {
      setdataFromLocalstorage(JSON.parse(LocalStorageData));
    } else {
      console.log("no data");
    }
  }, []);

  const loginData = { dataFromLocalstorage };

  console.log("******************", loginData);

  return loginData.length ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : allowedRoles.filter((roles) => roles === loginData.username).length ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
  );
}
