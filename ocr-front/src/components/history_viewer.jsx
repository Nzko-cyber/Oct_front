import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const HistoryViewer = ({ history }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h6">History</Typography>
    <List>
      {history.map((item, index) => (
        <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
          <ListItemText
            primary={`${item.file} (${item.task})`}
            secondary={`Date: ${item.date}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default HistoryViewer;
