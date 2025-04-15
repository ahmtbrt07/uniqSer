const axios = require('axios');;
const fs = require('node:fs');
const url = require('url');

const allList = process.argv[2]; // command line get domains  and subdomains list

fs.readFile(`${allList}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

  tempUrl = url.parse(`{data}`,true);
  console.log(tempUrl);
  
});





