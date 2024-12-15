import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // URL вашего API

export const classifyDocument = (filePath) =>
  axios.post(`${API_BASE_URL}/classify`, { file_path: filePath });

export const performOCR = (filePath) =>
  axios.post(`${API_BASE_URL}/ocr`, { file_path: filePath });

export const spellCheck = (ocrResultsDir) =>
  axios.post(`${API_BASE_URL}/spellcheck`, { ocr_results_dir: ocrResultsDir });

export const extractTables = (filePath) =>
  axios.post(`${API_BASE_URL}/extract_tables`, { file_path: filePath });

export const analyzeHeadings = (filePath) =>
  axios.post(`${API_BASE_URL}/analyze_headings`, { file_path: filePath });

export const extractKeyData = (ocrResultsDir) =>
  axios.post(`${API_BASE_URL}/extract`, { ocr_results_dir: ocrResultsDir });
