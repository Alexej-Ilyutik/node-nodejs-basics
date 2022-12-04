const fs = require('fs');
const path = require('path');

const create = async () => {
  fs.open('files/fresh.txt', 'I am fresh and young', (err) => {
    if (err) throw err;
    console.log('File created');
  });
};

await create();
