import express from "express";


//create express app
const app = express();

app.get('/test', (req, res) => {
    res.send("hello from get request");
})

app.post('/test', (req, res) => {
    res.send("hello from post request");
})

export default app;