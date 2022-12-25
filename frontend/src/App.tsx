import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import { Grid } from "@mui/material";
// @ts-ignore
import { Header } from './components'

const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', function (evt) {
  ws.send("Hello");
});

ws.addEventListener('message', function (evt) {
  console.log('received: %s', evt.data);
});

function App({ ...props }) {



  useEffect(() => {
    axios.get('/api/hi').then((res) => console.log(res))
    // axios.get('/ws').then((res) => console.log(res))

  }, [])


  return (
    <>

    </>
  )
}

export default App
