import { writeFile } from 'fs/promises';

import { errorMessage } from '../constants/errorMessage.js';

const path = './files/fresh.txt';
const text = 'I am fresh and young';
const successMessage = 'File create';

const create = async () => {
  try {
    await writeFile(path, text, { flag: 'wx' });
    console.log(successMessage);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
