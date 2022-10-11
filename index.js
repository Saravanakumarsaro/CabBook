const express = require('express');
const app = express();
app.use(express.json);
const port = '2209';
const DataBase = require('./connection')

const initial = async () => {
  const temp = await DataBase();
  if (temp) {
    console.log(`This Appilation is listens to http://localhost:${port}`);
  } else {
    console.log('Not Connected');
  }
};

initial();
