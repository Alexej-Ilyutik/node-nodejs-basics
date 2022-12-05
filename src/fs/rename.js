import { rename as changeName} from 'fs/promises';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';
import { successMessage } from '../constants/successMessage.js';

const rename = async () => {
  const wrongName = getPathFile(import.meta.url, '/files/wrongFilename.txt');
  const newName = getPathFile(import.meta.url, '/files/properFilename.md');
  try {
    await changeName(wrongName, newName);
    console.log(successMessage);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await rename();
