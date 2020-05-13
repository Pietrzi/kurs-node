import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

export default () => {
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await axios.get('/cpu-stats');
    setData(response.data);
  }, []);

  const cpuInfo = useMemo(() => {
    return data && data.cpu ? `${data.cpu.model} - ${data.cpu.speed} MHz` : '';
  }, [data.cpu]);

  const totalMemInMB = useMemo(() => {
    return data.totalMem ? Math.round(data.totalMem / (1024 * 1024)) + 'MB' : 0;
  }, [data.totalMem]);

  return (
    <>
      <h1>OS Stats:</h1>
      <table>
        <tbody>
          <tr><td>Arch:</td><td>{ data.arch }</td></tr>
          <tr><td>CPU:</td><td>{ cpuInfo }</td></tr>
          <tr><td>Hostname:</td><td>{ data.hostname }</td></tr>
          <tr><td>Total mem:</td><td>{ totalMemInMB }</td></tr>
        </tbody>
      </table>
    </>
  )
};
