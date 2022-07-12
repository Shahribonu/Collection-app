import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ modal, setModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", selectedFile);
    try {
      const response = axios({
        method: "POST",
        url: "https://collection-sh.herokuapp.com/api/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setModal(false);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <CloseIcon className="close" onClick={closeModal} />
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" />
      </form>
    </div>
  );
};

export default Modal;
