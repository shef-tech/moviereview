import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

const Contact = () => {
    return (
        <>
            <div className="contact-details">
                <Box sx={{ my: 4, ml: 11, "& h4": { fontSize: 30, fontWeight: "bold", mb: 1, mt: 8 } }}>
                    <Typography variant="h4" className="contact-title" >Contact Us</Typography>
                </Box>
                <Box
                    sx={{
                        m: 3,
                        width: "600px",
                        ml: 10,
                        "@media (max-width:600px)": {
                            width: "300px",
                        },
                    }}
                >
                    <TableContainer component={Paper}>
                        <Table aria-label="contact table">
                            <TableHead >
                                <TableRow>
                                    <TableCell
                                        sx={{ bgcolor: "#B2C8DF", color: "#3C4048", fontSize: 20 }}
                                        align="center"
                                    >
                                        Contact Details
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 12 }}>
                                        <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 6778-878-878
                                        (tollfree)
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 12 }}>
                                        <MailIcon sx={{ color: "skyblue", pt: 1 }} /> enquiry@smovies.com
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: 12 }}>
                                        <CallIcon sx={{ color: "green", pt: 1 }} /> 3787687498
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </>
    );
};

export default Contact;