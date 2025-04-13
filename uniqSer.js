import ax from 'axios';
import fs from 'node:fs';

const allList = process.argv[3]; // command line get domains  and subdomains list
requestData = fs.readFile(`${allList}`,'utf8') // async read file
console.log(requestData) 


