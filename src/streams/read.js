import { createReadStream } from 'fs';

import { getPathFile } from '../constants/getPathFile.js';

const read = async () => {
  const path = getPathFile(import.meta.url, '/files/fileToRead.txt');
  const readStream = createReadStream(path, 'utf-8');
  readStream.on('data', (data) => process.stdout.write(data));
  readStream.on('error', (error) => console.log('Error', error.message));
};

await read();
