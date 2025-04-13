import ax from 'axios';
import fs from 'node:fs';

const allList = process.argv[3]; // command line get domains  and subdomains list

fs.readFile(`${allList}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});




