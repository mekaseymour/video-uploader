const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
  const { file } = req.body;

  res.status(200).send({ message: `File ${file} uploaded successfully` });
});

module.exports = router;