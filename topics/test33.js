
// const fs=require("fs")
// const http=require("http")


// const app=http.createServer();

// let readingdata= fs.createReadStream("./dummy3.txt");

// readingdata.setEncoding("UTF-8")

// readingdata.on("data", (chunk)=>{
//     console.log("chunk", chunk)
// });

// readingdata.on("error", (err)=>{
//     if(err){
//         console.log("err", err)
//         throw err;
//     }
// })



// //writing the data
// let raw_data= "add new file here or content"
// let writestreamdata= fs.createWriteStream("dummy4.txt");

// writestreamdata.write(raw_data, "UTF-8")

// writestreamdata.on("finish", ()=>{
//     console.log("write data completed")
// })

// writestreamdata.on("error", ()=>{
//     console.log("error while uploading data", err)
// })


// const port=5000;
// app.listen(port,()=>{
//     console.log("server is listening this port", port)
// })



const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const app = express();

// Upload directory
const uploadDir = path.join(__dirname, 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Route to handle file upload
app.post('/upload', (req, res) => {
    const form = formidable({ 
        multiples: false, // Handle one file at a time
        uploadDir: uploadDir, 
        keepExtensions: true
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).send('Error parsing file');
        }

        const uploadedFile = files.file; // Assuming the file field is named 'file'
        
        // Create read and write streams for the file
        const readStream = fs.createReadStream(uploadedFile.filepath);
        const writeStream = fs.createWriteStream(path.join(uploadDir, uploadedFile.originalFilename));

        // Pipe the read stream to the write stream in chunks
        readStream.on('data', (chunk) => {
            console.log(`Received chunk of size: ${chunk.length}`);
        });

        readStream.pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('File upload complete.');
            res.status(200).send('File uploaded successfully.');
        });

        writeStream.on('error', (err) => {
            console.error('Error writing file:', err);
            res.status(500).send('Error during file upload.');
        });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
