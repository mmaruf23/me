const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Selamat datang di web server sederhana!');
});

app.listen(port, () => {
  console.log(`Web server berjalan di http://localhost:${port}`);
});