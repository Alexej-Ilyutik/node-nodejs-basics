import fs from 'fs';
import path from 'path';
const folderFromCopy = './hh';
const folderToCopy = './files_copy';

const copy = async () => {
   fs.access(folderToCopy, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('FS operation failed ;;;');
    } else {
      console.log('ff');
    }
  });
};

await copy();
