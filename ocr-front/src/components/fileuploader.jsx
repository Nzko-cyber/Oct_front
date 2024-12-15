import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Chip } from "@mui/material";

const FileUploader = ({ onFileUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.png,.pdf,.docx",
    onDrop: (acceptedFiles) => onFileUpload(acceptedFiles),
  });

  return (
    <Box component="section"  sx={{ p: 4, width:"500px",display:'flex',margin:'auto',marginTop:"1%", justifyContent:'center', textAlign:  "center", border: "2px dashed #ccc", borderRadius: "8px" }}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Typography variant="h6">Drag and drop a file here or click to upload</Typography>
        <Typography variant="subtitle2">(Supported: JPG, PNG, PDF, DOCX)</Typography>
      </div>
    </Box>
  );
};

export default FileUploader;
