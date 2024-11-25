const express = require('express');
const VideoMetadata = require('../models/VideoMetadata');

const router = express.Router();

// Syncing the database and models, replace with migrations in prod
VideoMetadata.sync()
  .then(() => console.log('VideoMetadata table created'))
  .catch((error) => console.error('Error creating table:', error));

router.post('/upload', (req, res) => {
  const { file } = req.body;

  res.status(200).send({ message: `File ${file} uploaded successfully` });
});

router.post('/upload-complete', async (req, res) => {
  const { url, metadata } = req.body;
  console.log('req.body', req.body, { metadata })
  const { name: title, size, contentType } = metadata
  // add uploaderID
  const uploaderId = 'anonymous';

  try {
    const slug = Math.random().toString(36).substring(2, 8);
    await VideoMetadata.create({
      slug,
      filePath: url,
      title,
    //   size,
    //   contentType,
      uploaderId,
    });

    res.json({ slug });
  } catch (error) {
    console.error('Error saving metadata:', error);
    res.status(500).send('Failed to save metadata');
  }
});

module.exports = router;