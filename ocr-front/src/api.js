import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Ваш базовый URL API

export const classifyDocument = (formData) =>
  axios.post(`${API_BASE_URL}/classify`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  
  export const performOCR = (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    return axios.post(`${API_BASE_URL}/ocr`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  
  
  

export const spellCheck = (formData) =>
  axios.post(`${API_BASE_URL}/spellcheck`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const extractTables = (formData) =>
  axios.post(`${API_BASE_URL}/extract_tables`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const analyzeHeadings = (formData) =>
  axios.post(`${API_BASE_URL}/analyze_headings`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const extractKeyData = (formData) =>
  axios.post(`${API_BASE_URL}/extract`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
