import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoctorHeader from "./DoctorHeader";



function Doctorcontact() {
 

  return (
    <>
    <DoctorHeader/>


    <Box sx={{ py: 8, px: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Contact With Management
      </Typography>

      <form>
        <TextField
          fullWidth
          label="Name"
          name="name"
          sx={{ mb: 3 }}
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          sx={{ mb: 3 }}
          required
        />
        <TextField
          fullWidth
          label="Subject"
          name="subject"
          
          sx={{ mb: 3 }}
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          
          multiline
          rows={5}
          sx={{ mb: 3 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#3918bcff", width: "100%" }}
        >
          Send Message
        </Button>
      </form>
    </Box>
    </>
  );
}

export default Doctorcontact;




