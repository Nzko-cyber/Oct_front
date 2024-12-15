import React from "react";
import { Button, CircularProgress } from "@mui/material";

const SubmitButton = ({ onSubmit, loading }) => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <Button variant="contained" color="primary" onClick={onSubmit} disabled={loading}>
      {loading ? <CircularProgress size={24} color="inherit" /> : "Process"}
    </Button>
  </div>
);

export default SubmitButton;
