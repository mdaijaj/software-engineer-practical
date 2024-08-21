
// // synchoronous
// const fs = require('fs');
// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('File content:', data);

// // // asyncronos
// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });


// const express = require('express');
// const app = express();
// // Application-level middleware
// app.use(express.json()); // Parses JSON request bodies

// app.use((req, res, next) => {
//     console.log('Request received');
//     next(); // Passes control to the next middleware function
// });

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });