import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => (
  <Box textAlign="center" py={4}>
    <Typography variant="h4" gutterBottom>
      OCR & Document Analysis System
    </Typography>
    <Typography variant="subtitle1">
      Upload your files, choose a task, and get instant results!
    </Typography>
  </Box>
);

export default Header;
