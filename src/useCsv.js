import Papa from 'papaparse';
import { useState, useEffect } from 'react';

export function useCsv(url) {
  const [rows, setRows] = useState([]);
  console.log('rowsparser', rows)
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((csv) => {
        const rows = Papa.parse(csv).data;
        setRows(rows);
      });
  }, [url]);

  return rows;
}
