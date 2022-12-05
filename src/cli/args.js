const parseArgs = () => {
  const arrOfval = [];
  process.argv.forEach((el, i) => {
    if (el.startsWith('--')) {
      el = el.slice(2);
      arrOfval.push(`${el} is ${process.argv[i + 1]}`);
    }
  });
  console.log(arrOfval.join(', '));
};

parseArgs();
