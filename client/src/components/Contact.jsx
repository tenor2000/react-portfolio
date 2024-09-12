import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ContactModal = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        handleClose();
    };

    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', mt: 5 }}>     
                <Button variant="outlined" color="primary" onClick={handleClickOpen} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    Contact Me
                </Button>
            </Box>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Contact Me</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" color="textSecondary" align="center" gutterBottom>
                        Feel free to reach out for any inquiries or collaborations!
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: '1rem' }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            fullWidth
                            required
                            id="name"
                            label="Name"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            required
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            required
                            id="message"
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
                            <Button type="submit" variant="contained" color="primary">
                                Send Message
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ContactModal;
