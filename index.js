const http = require('http');
const fs = require('fs');
const csvParser = require('csv-parser');

async function readCSV(file, column, value) {
   return new Promise((resolve, reject) => {
     const results = [];

     fs.createReadStream(file, { encoding: 'utf-8' })
       .pipe(csvParser())
       .on('data', data => {
         if (data[column] === value) {
           results.push(data);
         }
       })
       .on('end', () => resolve(results))
       .on('error', reject);
   });
 }



const server = http.createServer(async (req, res) => {
   const startsWith = searchString => req.url.startsWith(searchString);
   res.setHeader('Content-Type', 'application/json');
   const response = async (...args) => res.end(JSON.stringify(await readCSV(...args)));
   const code = req.url.split('/')[2];

   if (req.url === '/provinces') {
      response('data/provinces.csv');
   } else if (startsWith('/regencies/')) {
      response('data/regencies.csv', 'province_code', code);
   } else if (startsWith('/districts/')) {
      response('data/districts.csv', 'regency_code', code);
   } else if (startsWith('/villages/')) {
      response('data/villages.csv', 'district_code', code);
   } else {
      res.end(JSON.stringify({ message: 'Api wilayah indonesia' }));
   }
});

server.listen(3000, () => {
   console.log('Server berjalan di http://localhost:3000');
});
