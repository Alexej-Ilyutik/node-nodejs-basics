import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPathFile = (url, fileName) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return join(__dirname, fileName);
};
