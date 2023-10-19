import React from "react";
import './UploadCSV.css';

function UploadCSV({setFile, label}) {
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <form>
        <label>{label}:  </label>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default UploadCSV;
