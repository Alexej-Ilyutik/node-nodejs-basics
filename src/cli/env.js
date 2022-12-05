const parseEnv = () => {
  const arrOfval = [];
  Object.entries(process.env).forEach(([key, val]) => {
    if (key.startsWith('RSS_')) {
      arrOfval.push(`${key} = ${val}`);
    }
  });
  console.log(arrOfval.join('; '));
};

parseEnv();
