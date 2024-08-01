import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <form className="upload-form">
        <div className="form-content">
        <form className="inner-form">
            <img src="/cloud-fill.png" alt="Cloud" className="cloud-image" />
            <p className="browse-text">Browse Files to upload</p>
          </form>
        </div>
       
        <div className="form-images">
          <img src="/file-image.png" alt="File" className="file-image" />
          <span className="text">No selected file ―</span>
          <img src="/delete.png" alt="No Selected File" className="delete-image" />
        </div>
      </form>
    </div>
  );
};

export default App;
