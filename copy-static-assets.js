const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Define the source and destination folders
const srcFolder = path.join(__dirname, 'src');
const distFolder = path.join(__dirname, 'dist');

// Define the files you want to copy
const filesToCopy = [
  'print.css','recorder.js'
];

// Use the CopyWebpackPlugin to copy the files
new CopyWebpackPlugin({
  patterns: filesToCopy.map((file) => ({
    from: path.join(srcFolder,file),
    to: path.join(distFolder, file),
  })),
}).apply();