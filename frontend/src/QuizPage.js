import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import LoadingSpinner from "./Spinner";
import { QAHeader } from "./QAHeader";
import { modelList } from "./RAGModels";

const QuizPage = () => {
  const [certification, setCertification] = useState(
    "AWS Certified Cloud Practitioner"
  );
  const [quizText, setQuizText] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [selectedModel, setSelectedModel] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!baseUrl) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(baseUrl + "docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question:
            "Generate a 10 question multiple choice quiz for the " +
            certification +
            ". Provide the correct answer after each question.",
          modelId: selectedModel?.modelId,
        }),
      });
      const data = await res.json();
      setQuizText(data.response);
    } catch (err) {
      console.log("Quiz error", err);
      setQuizText(
        "Error generating quiz. Please check your browser console and backend logs."
      );
    }
    setLoading(false);
  };

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
      <Paper className="fade-in" sx={{ padding: 8, maxWidth: 600, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
          Quiz Page
        </Typography>
        <QAHeader
          setBaseUrl={setBaseUrl}
          baseUrl={baseUrl}
          modelList={modelList}
          setSelectedModel={setSelectedModel}
          selectedModel={selectedModel}
        />
        <Typography variant="overline" sx={{ paddingTop: "20px" }}>
          Certification
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
        />
        <Box sx={{ paddingTop: "20px", textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={generateQuiz}
            disabled={loading || !baseUrl}
          >
            Generate Quiz
          </Button>
        </Box>
        <Box sx={{ paddingTop: "20px" }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingSpinner />
            </Box>
          ) : (
            <Typography component="pre" sx={{ whiteSpace: "pre-wrap" }}>
              {quizText}
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default QuizPage;
