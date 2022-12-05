import { createWriteStream } from 'fs';

import { getPathFile } from '../constants/getPathFile.js';
import { successMessage } from '../constants/successMessage.js';

const write = async () => {
  const path = getPathFile(import.meta.url, '/files/fileToWrite.txt');
  const writeStream = createWriteStream(path);
  process.stdin.on('data', (data) => {
    writeStream.write(data.toString());
    console.log(`Вы ввели: ${data} \n`);
    console.log(
      'Введите следующий текст. Либо нажмите ctrl+C, чтобы выйти.'
    );
  });
};

await write();
