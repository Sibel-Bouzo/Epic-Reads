import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const StepOne = ({
  personalInfo,
  libraryCardInfo,
  setPersonalInfo,
  setLibraryCardInfo,
}) => {
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
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
            sx={{
              "& > :not(style)": {
                color: "#666",
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
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
            sx={{
              "& > :not(style)": {
                color: "#666",
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
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phonenumber: e.target.value })
            }
            sx={{
              "& > :not(style)": {
                color: "#666",
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
            onChange={(e) =>
              setLibraryCardInfo({
                ...libraryCardInfo,
                fullName: e.target.value,
              })
            }
            sx={{
              "& > :not(style)": {
                color: "#666",
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
            onChange={(e) =>
              setLibraryCardInfo({
                ...libraryCardInfo,
                cardNumber: e.target.value,
              })
            }
            sx={{
              "& > :not(style)": {
                color: "#666",
              },
            }}
          />
        </Box>
      </div>
    </>
  );
};
