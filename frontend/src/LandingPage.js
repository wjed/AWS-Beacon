import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const LandingPage = ({ onSelect }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#252F3E",
        padding: "30px",
      }}
    >
      <Paper sx={{ padding: 8, maxWidth: 600, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Welcome to AWS Beacon
        </Typography>
        <Typography variant="body1" gutterBottom>
          What would you like to do?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, paddingTop: 2 }}>
          <Button variant="contained" color="secondary" onClick={() => onSelect("chat")}>Chat</Button>
          <Button variant="contained" color="secondary" onClick={() => onSelect("quiz")}>Quiz</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LandingPage;
