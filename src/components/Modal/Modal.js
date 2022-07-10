import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import FileUploader from "./FileUploader";
import CloseIcon from "@mui/icons-material/Close";

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
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="modal">
      <form onSubmit={submitForm}>
        <CloseIcon className="close" onClick={closeModal} />

        <label>Title</label>
        <input type="text" />
        <label>Description</label>
        <input type="text" />

        {/* <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}
        <label class="custom-file-upload">
          <input
            type="file"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          Custom Upload
        </label>

        <button onClick={(e) => e.preventDefault()}>Add</button>
      </form>
    </div>
  );
};

export default Modal;
