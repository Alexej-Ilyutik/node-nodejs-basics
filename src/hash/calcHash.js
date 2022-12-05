import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';

const calculateHash = async () => {
  const path = getPathFile(
    import.meta.url,
    '/files/fileToCalculateHashFor.txt'
  );
  try {
    const currentFile = await readFile(path);
    const hash = createHash('SHA256').update(currentFile).digest('hex');
    console.log(`Hash: ${hash}`);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await calculateHash();
