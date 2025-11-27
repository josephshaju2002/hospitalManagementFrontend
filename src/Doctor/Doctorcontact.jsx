import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";

function Doctorcontact() {
  return (
    <>
      <DoctorHeader />

      <Box sx={{ py: 8, px: 4, maxWidth: 600, mx: "auto", bgcolor: "#FAF7FF", borderRadius: 3,my:5 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", color: "#5E35B1", fontWeight: "bold" }}
        >
          Contact With Management
        </Typography>

        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            sx={{
              mb: 3,
              bgcolor: "#EDE7F6",
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "#7E57C2" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#D1C4E9" },
                "&:hover fieldset": { borderColor: "#7E57C2" },
                "&.Mui-focused fieldset": { borderColor: "#5E35B1" },
              },
            }}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            sx={{
              mb: 3,
              bgcolor: "#EDE7F6",
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "#7E57C2" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#D1C4E9" },
                "&:hover fieldset": { borderColor: "#7E57C2" },
                "&.Mui-focused fieldset": { borderColor: "#5E35B1" },
              },
            }}
            required
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            sx={{
              mb: 3,
              bgcolor: "#EDE7F6",
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "#7E57C2" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#D1C4E9" },
                "&:hover fieldset": { borderColor: "#7E57C2" },
                "&.Mui-focused fieldset": { borderColor: "#5E35B1" },
              },
            }}
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            sx={{
              mb: 3,
              bgcolor: "#EDE7F6",
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "#7E57C2" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#D1C4E9" },
                "&:hover fieldset": { borderColor: "#7E57C2" },
                "&.Mui-focused fieldset": { borderColor: "#5E35B1" },
              },
            }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#7E57C2",
              width: "100%",
              "&:hover": { backgroundColor: "#5E35B1" },
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
      <Footer2 />
    </>
  );
}

export default Doctorcontact;
