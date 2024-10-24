import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import emailjs from "@emailjs/browser";

// Keys for emailjs, safe to expose according to emailjs docs
const serviceId = "service_8klj9ow";
const templateId = "template_a8wwc9o";
const publicKey = "oUEUSvSEKQ1mpr8t0";

const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    handleClose();
  };

  return (
    <>
      <Box
        className="animation-scroll"
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          Contact Me
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "primary.main",
          },
        }}
      >
        <DialogTitle color="Primary">Contact Me</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            color="primary"
            align="center"
            gutterBottom
          >
            Feel free to reach out for any inquiries or collaborations!
          </Typography>
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            sx={{ mt: "1rem", borderColor: "primary.main" }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit">Send</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactModal;
