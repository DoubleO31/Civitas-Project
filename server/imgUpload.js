'use strict';
const storage = require('@google-cloud/storage');
const fs = require('fs')
const fileType = require('file-type');

const gcs = storage({projectId: 'civitas-211123', keyFilename: './keyfile.json'});

const bucketName = 'civitasphoto'
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if (!req.file)
    return next();
  const infoFile = fileType(req.file.buffer);
  if (!infoFile)
    return next();
    console.log(infoFile.ext);
  if (infoFile.ext != 'png' && infoFile.ext != 'jpg' && infoFile.ext != 'jpeg' && infoFile.ext != 'gif')
    return next();

  // Can optionally add a path to the gcsname below by concatenating it before the filename
  const gcsname = req.file.originalname;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    file.makePublic();
    next();
  });

  stream.end(req.file.buffer);
}

module.exports = ImgUpload;
