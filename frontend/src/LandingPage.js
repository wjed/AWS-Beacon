import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const awsLogo = process.env.PUBLIC_URL + "/aws-logo.svg";

const LandingPage = ({ onSelect }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #252F3E 0%, #1A202C 100%)",
        padding: "30px",
      }}
    >
      <Paper className="fade-in" sx={{ padding: 8, maxWidth: 600, textAlign: "center", boxShadow: 3 }}>
        <img src={awsLogo} alt="AWS Logo" style={{ width: "120px", marginBottom: "20px" }} />
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
        <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
          "Work hard, have fun, make history."
        </Typography>
      </Paper>
    </Box>
  );
};

export default LandingPage;
