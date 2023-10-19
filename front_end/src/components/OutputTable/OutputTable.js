import React, { useRef } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from '@mui/material';
import { CSVLink } from 'react-csv';
import './OutputTable.css';

function OutputTable({ data }) {
  const csvLink = useRef()
  const isError = (typeof data?.[0]?.[0]) === 'string';
  const onDownload = () =>
    csvLink.current.link.click()

  if (isError) {
    return <div style={{
            marginBottom: '16px', 
            padding: '12px', 
            border: '1px solid red', 
            borderRadius: '5px',
            backgroundColor: '#ffe6e6', 
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>{data[0]}</div>
  }
  return (<div className="output-table-container">
    <Table>
      <TableHead>
        <TableRow>
          {Object.keys(data[0][0] || {}).map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data[0].map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {data[0].length ? 
      <Grid style={{ marginBottom: '16px' }} xs={12}>
        <CSVLink
          data={data[0]}
          filename='transactions.csv'
          className='hidden'
          ref={csvLink}
          // I also tried adding the onClick event on the link itself
          target="_blank"
        >          
          <Button
            className="download-button" variant="contained" color="primary" onClick={onDownload}
          >
            Download Results
          </Button>
        </CSVLink>
      </Grid> : null
    }

  </div>
  );
}

export default OutputTable;