import { pipeline, Transform } from 'stream';
import { EOL } from 'os';

import { errorMessage } from '../constants/errorMessage.js';

const transform = async () => {
  const revert = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL
      );
    },
  });
  pipeline(process.stdin, revert, process.stdout, (err)=>{
    throw new Error(errorMessage);
  });
  console.log('Input text: \n');
};

await transform();
