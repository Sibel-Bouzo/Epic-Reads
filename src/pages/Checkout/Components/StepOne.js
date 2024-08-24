import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const StepOne = ({
  personalInfo,
  libraryCardInfo,
  setPersonalInfo,
  setLibraryCardInfo,
}) => {
  const [errors, setErrors] = useState({});

  const handleValidation = (field, value) => {
    let newErrors = { ...errors };

    switch (field) {
      case "name":
      case "fullName":
        newErrors[field] = value.trim() === "" ? "This field is required" : "";
        break;
      case "email":
        newErrors[field] = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? ""
          : "Please enter a valid email address";
        break;
      case "phonenumber":
        newErrors[field] = value.match(/^\d{10}$/)
          ? ""
          : "Please enter a valid 10-digit phone number";
        break;
      case "cardNumber":
        newErrors[field] =
          value.trim() === "" ? "Library Card Number is required" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  return (
    <>
      <div>
        <h3>Personal Information</h3>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "20px",
              width: "50%",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            value={personalInfo.name}
            onChange={(e) => {
              const value = e.target.value;
              setPersonalInfo({ ...personalInfo, name: value });
              handleValidation("name", value);
            }}
            error={!!errors.name}
            helperText={errors.name}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#ffffff",
              },
              "& > :not(style)": {
                color: "#666",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "20px",
              width: "50%",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            value={personalInfo.email}
            onChange={(e) => {
              const value = e.target.value;
              setPersonalInfo({ ...personalInfo, email: value });
              handleValidation("email", value);
            }}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#ffffff",
              },
              "& > :not(style)": {
                color: "#666",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "20px",
              width: "50%",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={personalInfo.phonenumber}
            onChange={(e) => {
              const value = e.target.value;
              setPersonalInfo({ ...personalInfo, phonenumber: value });
              handleValidation("phonenumber", value);
            }}
            error={!!errors.phonenumber}
            helperText={errors.phonenumber}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#ffffff",
              },
              "& > :not(style)": {
                color: "#666",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
        </Box>
      </div>
      <div>
        <h3>Library Card Information</h3>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "20px",
              width: "50%",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Library Card Name"
            variant="outlined"
            value={libraryCardInfo.fullName}
            onChange={(e) => {
              const value = e.target.value;
              setLibraryCardInfo({ ...libraryCardInfo, fullName: value });
              handleValidation("fullName", value);
            }}
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#ffffff",
              },
              "& > :not(style)": {
                color: "#666",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "20px",
              width: "50%",
              color: "white",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Library Card Number"
            variant="outlined"
            value={libraryCardInfo.cardNumber}
            onChange={(e) => {
              const value = e.target.value;
              setLibraryCardInfo({ ...libraryCardInfo, cardNumber: value });
              handleValidation("cardNumber", value);
            }}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#ffffff",
              },
              "& > :not(style)": {
                color: "#666",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
          />
        </Box>
      </div>
    </>
  );
};
