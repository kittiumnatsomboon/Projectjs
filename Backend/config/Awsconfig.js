const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");
const s3Client = new S3Client({ region: process.env.AWS_REGION });
const BUCKET_NAME = process.env.AWS_BUCKET

const param = {
    Bucket:BUCKET_NAME,
    KEY:process.env.AWS_ACCESS_KEY_ID,
    SECREATE:process.env.AWS_SECRET_ACCESS_KEY
}

module.exports = {s3Client , param};