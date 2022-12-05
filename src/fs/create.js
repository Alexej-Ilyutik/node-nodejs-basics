import { writeFile } from 'fs/promises';

import { errorMessage } from '../constants/errorMessage.js';
import { successMessage } from '../constants/successMessage.js';

const path = './files/fresh.txt';
const text = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(path, text, { flag: 'wx' });
    console.log(successMessage);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await create();
