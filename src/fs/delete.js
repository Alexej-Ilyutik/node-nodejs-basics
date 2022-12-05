import { unlink } from 'fs/promises';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';
import { successMessage } from '../constants/successMessage.js';

const remove = async () => {
  const deleteFile = getPathFile(import.meta.url, '/files/fileToRemove.txt');
  try {
    await unlink(deleteFile);
    console.log(successMessage);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
