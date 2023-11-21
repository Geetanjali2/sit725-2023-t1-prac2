const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
  const first_number = parseFloat(req.query.first_number);
  const second_number = parseFloat(req.query.second_number);

  if (isNaN(first_number) || isNaN(second_number)) {
    return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
  }
  if (first_number === undefined || second_number === undefined) {
      return res.status(400).json({ error: 'Invalid parameters. Please provide both numbers.' });
  }
    
  const result = first_number + second_number;

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});