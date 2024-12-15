import React, { useState } from "react";
import Header from "./components/header.jsx";
import FileUploader from "./components/fileuploader.jsx";
import TaskSelector from "./components/taskselector.jsx";
import ResultViewer from "./components/taskresult.jsx";
import HistoryViewer from "./components/history_viewer.jsx";
import SubmitButton from "./components/bttn.jsx";
import {
  classifyDocument,
  performOCR,
  spellCheck,
  extractTables,
  analyzeHeadings,
  extractKeyData,
} from "./api";

const App = () => {
  const [file, setFile] = useState(null);
  const [task, setTask] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (files) => setFile(files[0]);

  const handleTaskChange = (selectedTask) => setTask(selectedTask);

  const handleSubmit = async () => {
    if (!file || !task) {
      alert("Please upload a file and select a task!");
      return;
    }

    setLoading(true);
    try {
      const filePath = `/uploads/${file.name}`;
      let response;

      switch (task) {
        case "classify":
          response = await classifyDocument(filePath);
          break;
        case "ocr":
          response = await performOCR(filePath);
          break;
        case "spellcheck":
          response = await spellCheck(filePath);
          break;
        case "extract_tables":
          response = await extractTables(filePath);
          break;
        case "analyze_headings":
          response = await analyzeHeadings(filePath);
          break;
        case "extract":
          response = await extractKeyData(filePath);
          break;
        default:
          throw new Error("Unknown task selected");
      }

      setResult(response.data);
      setHistory((prevHistory) => [
        ...prevHistory,
        { file: file.name, task, date: new Date().toLocaleString(), result: response.data },
      ]);
    } catch (error) {
      alert("Error processing request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
  
      <TaskSelector selectedTask={task} onTaskChange={handleTaskChange} />
      <FileUploader onFileUpload={handleFileUpload} />
      <SubmitButton onSubmit={handleSubmit} loading={loading} />
      {result && <ResultViewer result={result} />}
      <HistoryViewer history={history} />
    </div>
  );
};

export default App;
