import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { mapCode } from '../../Apis';
import 'react-toastify/dist/ReactToastify.css';
import './CodeEditor.css';

function CodeEditor({ file, code, setOutputData }) {
  const [editedCode, setEditedCode] = useState(code);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedCode(code)
  }, [code])

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('input_table', file);
    formData.append('code', editedCode)
    setLoading(true);
    mapCode(formData).then(res => {
      
        setOutputData(res.data)
      
      // if (!res.data.code) {
      //   const errorData = res.data;
      //   toast(errorData?.[2], {type: 'error'})
      // }
      setLoading(false);
    })
      .catch(err => {
        setLoading(false);
      })
  };

  return (
    <div className="code-editor-container">
      <TextField
        value={editedCode}
        onChange={(e) => setEditedCode(e.target.value)}
        multiline
        rows={10}
        variant="outlined"
        fullWidth
      />
      <LoadingButton
        loading={loading}
        loadingPosition="center"
        variant="contained"
        onClick={handleSubmit}
      >
        Map
      </LoadingButton>
      <ToastContainer />
    </div>
  );
}

export default CodeEditor;