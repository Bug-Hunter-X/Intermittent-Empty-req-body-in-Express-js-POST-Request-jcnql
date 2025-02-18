const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/data', (req, res) => {
  console.log(req.body);
  const data = req.body;
  // Process the data here
  // ...
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));