const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
  const { fileName } = req.body;
  res.status(200).send({ message: `File ${fileName} uploaded successfully` });
});

module.exports = router;