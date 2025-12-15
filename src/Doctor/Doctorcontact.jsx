import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoctorHeader from "./DoctorHeader";
import Footer2 from "../Common/Components/Footer2";
import { toast } from "react-toastify";
import { sendContactMessageAPI } from "../services/allAPI";

function Doctorcontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      const res = await sendContactMessageAPI({
        ...formData,
        role: "doctor",
      });

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent to management");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const userData = JSON.parse(sessionStorage.getItem("existingUser"));
      setFormData((prev) => ({
        ...prev,
        name: userData.username,
        email: userData.email || "",
      }));
    }
  }, []);

  return (
    <>
      <DoctorHeader />

      <Box
        sx={{
          py: 8,
          px: 4,
          maxWidth: 600,
          mx: "auto",
          bgcolor: "#FAF7FF",
          borderRadius: 3,
          my: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textAlign: "center",
            color: "#5E35B1",
            fontWeight: "bold",
          }}
        >
          Contact With Management
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={inputStyle}
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={inputStyle}
            required
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            sx={inputStyle}
            required
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            sx={inputStyle}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#7E57C2",
              width: "100%",
              py: 1.2,
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

const inputStyle = {
  mb: 3,
  bgcolor: "#EDE7F6",
  borderRadius: 1,
  "& .MuiInputLabel-root": { color: "#7E57C2" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#D1C4E9" },
    "&:hover fieldset": { borderColor: "#7E57C2" },
    "&.Mui-focused fieldset": { borderColor: "#5E35B1" },
  },
};

export default Doctorcontact;
