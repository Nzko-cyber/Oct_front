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

  const handleFileUpload = (files) => {
    setFile(files[0]);
    setResult(null); // Reset result when a new file is uploaded
  };

  const handleTaskChange = (selectedTask) => setTask(selectedTask);

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file!");
      return;
    }
    if (!task) {
      alert("Please select a task!");
      return;
    }
  
    console.log("Selected file:", file); // Добавлено для отладки
    console.log("Selected task:", task); // Добавлено для отладки
  
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      console.log("FormData before sending:", formData); // Добавлено для отладки
  
      let response;
      switch (task) {
        case "classify":
          response = await classifyDocument(formData);
          break;
        case "ocr":
          response = await performOCR(file); // Передача файла в performOCR
          break;
        case "spellcheck":
          response = await spellCheck(formData);
          break;
        case "extract_tables":
          response = await extractTables(formData);
          break;
        case "analyze_headings":
          response = await analyzeHeadings(formData);
          break;
        case "extract":
          response = await extractKeyData(formData);
          break;
        default:
          throw new Error("Unknown task selected");
      }
  
      console.log("Response from backend:", response.data); // Добавлено для отладки
      setResult(response.data);
  
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          file: file.name,
          task,
          date: new Date().toLocaleString(),
          result: response.data,
        },
      ]);
    } catch (error) {
      console.error("Error during task processing:", error);
      alert("An error occurred while processing your request.");
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
