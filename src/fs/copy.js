import { mkdir, readdir, copyFile } from 'fs/promises';

import { getPathFile } from '../constants/getPathFile.js';
import { errorMessage } from '../constants/errorMessage.js';
import { successMessage } from '../constants/successMessage.js';

const copy = async () => {
  const folderFromCopy = getPathFile(import.meta.url, '/files');
  const folderToCopy = getPathFile(import.meta.url, '/files_copy');

  try {
    await mkdir(folderToCopy);
    const copyFilesArray = await readdir(folderFromCopy);
    await Promise.all(
      copyFilesArray.map((file) =>
        copyFile(`${folderFromCopy}/${file}`, `${folderToCopy}/${file}`)
      )
    );
    console.log(successMessage);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await copy();
