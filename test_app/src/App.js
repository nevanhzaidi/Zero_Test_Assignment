import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Suggestions from './components/Suggestions/Suggestions';
import CodeEditor from './components/CodeEditor/CodeEditor';
import OutputTable from './components/OutputTable/OutputTable';
import UploadCSV from './components/UploadCSV/UploadCSV';
import { getCodeAndSuggestions } from './Apis';
import './App.css';

function App() {
  const [file, setFile] = useState();
  const [template, setTemplate] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [outputData, setOutputData] = useState([]);

  const downloadCSV = () => {
    window.location.href = '/api/output/csv';
  };

  const handleSubmitFiles = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('input_table', file);
    formData.append('template_table', template)
    setLoading(true);
    getCodeAndSuggestions(formData).then(res => {
      setCode([res.data.code]);
      setSuggestions([res.data.suggestion])
      setLoading(false);
    })
      .catch(err => {
        setLoading(false);
      })
  }

  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h1>Zero App</h1>
        </Grid>
        <Grid className="form-input" container xs={12}>
          <Grid item xs={4}>
            <UploadCSV label="Input File" setFile={setFile} />
          </Grid>
          <Grid item xs={4}>
            <UploadCSV label="Template File" setFile={setTemplate} />
          </Grid>
          <Grid item xs={4}>
            <LoadingButton
              loading={loading}
              loadingPosition="center"
              variant="contained"
              onClick={handleSubmitFiles}
            >
              Upload Files
            </LoadingButton>
          </Grid>
        </Grid>
        <Grid className="grid-input" container xs={12}>
          <Grid item xs={5}>
            <h1>Suggestions</h1>
            <Suggestions setSuggestions={setSuggestions} setCode={setCode} inputFile={file} templateFile={template} suggestions={suggestions} />
          </Grid>
          <Grid item xs={5}>
            <h1>Code Editor</h1>
            <CodeEditor setOutputData={setOutputData} file={file} code={code} />
          </Grid>
        </Grid>
        <Grid className='table-grid' item xs={12}>
          <h1>Output Data</h1>
          <OutputTable data={[outputData]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
