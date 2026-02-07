const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const router = express.Router();


// 1. ตั้งค่า Client
const s3Client = new S3Client({
    region: process.env.AWS_REGION, // เช่น สิงคโปร์
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
router.get('/', async (req, res) => {
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: "IMG_0346.JPG",
    };

    const response = await s3Client.send(
      new GetObjectCommand(params)
    );

    res.setHeader("Content-Type", response.ContentType);
    response.Body.pipe(res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;