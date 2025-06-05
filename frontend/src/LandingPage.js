import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const LandingPage = ({ onSelect }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "30px" }}>
      <Paper sx={{ padding: 8, maxWidth: 600, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Welcome to AWS Beacon
        </Typography>
        <Typography variant="body1" gutterBottom>
          What would you like to do?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, paddingTop: 2 }}>
          <Button variant="contained" onClick={() => onSelect("chat")}>Chat</Button>
          <Button variant="contained" onClick={() => onSelect("quiz")}>Quiz</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LandingPage;
