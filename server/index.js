import express from "express";
import path from "path";

const app = express();

app.get('/', path.join(__dirname, '../index.html'))

app.use('/css', express.static(path.join(__dirname, '../style.css')));

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })