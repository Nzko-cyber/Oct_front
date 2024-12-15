import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TaskSelector = ({ selectedTask, onTaskChange }) => (
  <FormControl fullWidth style={{width:"500px", display:"flex",margin:"auto"}}>
    <InputLabel>Task</InputLabel>
    <Select value={selectedTask} onChange={(e) => onTaskChange(e.target.value)}>
      <MenuItem value="classify">Classify Document</MenuItem>
      <MenuItem value="ocr">Perform OCR</MenuItem>
      <MenuItem value="spellcheck">Spell Check</MenuItem>
      <MenuItem value="extract_tables">Extract Tables</MenuItem>
      <MenuItem value="analyze_headings">Analyze Headings</MenuItem>
      <MenuItem value="extract">Extract Key Data</MenuItem>
    </Select>
  </FormControl>
);

export default TaskSelector;
