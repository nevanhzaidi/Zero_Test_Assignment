import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { updateSuggestions } from '../../Apis'
import './Suggestions.css';

function Suggestions({ setSuggestions, setCode, inputFile, templateFile, suggestions }) {
  const [editedSuggestions, setEditedSuggestions] = useState(suggestions);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedSuggestions(suggestions)
  }, [suggestions])

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('input_table', inputFile);
    formData.append('template_table', templateFile)
    formData.append('suggestion', JSON.stringify(editedSuggestions))
    setLoading(true);
    updateSuggestions(formData).then(res => {
      setSuggestions([res.data.suggestion]);
      setCode(res.data.code);
      setLoading(false);
    })
      .catch(err => {
        setLoading(false);
      })
  };

  return (
    <div className="suggestions-container">
      <TextField
        value={editedSuggestions}
        onChange={(e) => setEditedSuggestions(e.target.value)}
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
        Update Suggestions
      </LoadingButton>
    </div>
  );
}

export default Suggestions;