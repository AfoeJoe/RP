const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('hello Wordl');
});
app.listen(3000);
