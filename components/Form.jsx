import React, { useState } from "react";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

export default function Form({ onSubmit, fields, initialFormValues }) {
  const [formData, setFormData] = useState(initialFormValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    alert("SBMIT SUCCESSFULLY");
  };
  // ---------------------------------------------------- //////////////////////////;

  return (
    <div>
      <h1 className="Heading">THE FORM</h1>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, height: "60px", width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {fields.map((field) => {
            const { name, label, type, options } = field;
            return (
              <div key={name}>
                {type === "select" ? (
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id={`label-${name}`}>{label}</InputLabel>
                    <Select
                      labelId={`label-${name}`}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    id={`filled-${name}`}
                    required
                    label={label}
                    name={name}
                    type={type}
                    value={formData[name] || ""}
                    onChange={handleChange}
                  />
                )}
              </div>
            );
          })}
          <Button
            variant="contained"
            className="Submit"
            color="success"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Box>
      </form>
    </div>
  );
}
