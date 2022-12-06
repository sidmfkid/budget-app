// backend code goes here
import express from 'express';

const app = express();

app.use(express.json())

app.get('/hi', (req, res) => {
    try {
    res.json({data: 'Hello World!'})
        
    } catch (error) {
        console.log(error)
    res.json({error})

    }
  })