import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ResultViewer = ({ result }) => (
  <Box sx={{ mt: 4, p: 2 }}>
    <Typography variant="h6">Result</Typography>
    <Paper sx={{ p: 2, mt: 2, overflowX: "auto" }}>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </Paper>
  </Box>
);

export default ResultViewer;
