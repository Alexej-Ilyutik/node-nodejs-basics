import { readdir } from 'fs/promises';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';

const list = async () => {
  const folder = getPathFile(import.meta.url, '/files');
   try {
     const entries = await readdir(folder, { withFileTypes: true });
     entries.forEach((file)=>{
        console.log(file.name);
     })
   } catch (err) {
     throw new Error(errorMessage);
   }
};

await list();
