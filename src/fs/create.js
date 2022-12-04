import fs from 'fs';

const path = './files/fresh.txt';

const create = async () => {
  fs.writeFile(path, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) {
      console.error('FS operation failed');
    } else {
      console.log('File created');
    }
  });
};

await create();
