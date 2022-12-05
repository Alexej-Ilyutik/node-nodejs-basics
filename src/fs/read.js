import { readFile } from 'fs/promises';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';

const read = async () => {
  const fileToRead = getPathFile(import.meta.url, '/files/fileToRead.txt');
  
  try {
    const text = await readFile(fileToRead, 'utf8');
    console.log(text);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await read();
