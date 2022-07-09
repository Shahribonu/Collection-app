import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import FileUploader from "./FileUploader";

const Modal = ({ modal, setModal }) => {
  const [name, setName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    axios
      .post("UPLOAD_URL", formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="modal">
      <form onSubmit={submitForm}>
        <label>Title</label>
        <input type="text" />
        <label>Description</label>
        <input type="text" />

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        {/* <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}

        <button onClick={(e) => e.preventDefault()}>Add</button>
      </form>
    </div>
  );
};

export default Modal;
