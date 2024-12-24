import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

const ResultViewer = ({ result }) => {
  const copyToClipboard = () => {
    if (Array.isArray(result.results)) {
      const textToCopy = result.results.join("\n"); // Соединяем результаты в текст
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          alert("Text copied to clipboard!");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
    } else {
      alert("Nothing to copy!");
    }
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6">Results</Typography>
      <Paper sx={{ p: 2, mt: 2, overflowX: "auto" }}>
        {Array.isArray(result.results) ? (
          <>
            <ul>
              {result.results.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              onClick={copyToClipboard}
              sx={{ mt: 2 }}
            >
              Copy Text
            </Button>
          </>
        ) : (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
      </Paper>
    </Box>
  );
};

export default ResultViewer;
