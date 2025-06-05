import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const QuizPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "30px" }}>
      <Paper sx={{ padding: 8, maxWidth: 600, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Quiz Page
        </Typography>
        <Typography variant="body1">
          Quiz functionality coming soon.
        </Typography>
      </Paper>
    </Box>
  );
};

export default QuizPage;
