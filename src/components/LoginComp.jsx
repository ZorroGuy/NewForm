import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router";

export default function LoginComp() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userCredentials = [
    {
      user: "Patient",
      password: "12345678",
      role: "Patient",
    },
    {
      user: "Admin",
      password: "12345",
      role: "Admin",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = userCredentials.find(
      (staticData) =>
        staticData.user === username && staticData.password === password
    );

    if (foundUser) {
      // Create an object to store the login data
      const loginData = {
        user: username,
        password: password,
      };

      // Convert the object to a JSON string and save it in local storage
      localStorage.setItem("LoginData", JSON.stringify(loginData));
      // navigate("/user");
      // const user = {
      //   username,
      //   password,
      // };
      // onsubmit(user);
    } else {
      // Handle cases where no user is found or the login is invalid
      if (username.length > 0) {
        alert("Enter the username and password.");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="Parentclass">
        <div>
          <form>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "28ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="User"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>

            <FormControl sx={{ m: 1, width: "28ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div className="Button">
              <Button
                variant="contained"
                className="button"
                onClick={handleSubmit}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
