
const fs=require("fs")
const http=require("http")


const app=http.createServer();

let readingdata= fs.createReadStream("./dummy3.txt");

readingdata.setEncoding("UTF-8")

readingdata.on("data", (chunk)=>{
    console.log("chunk", chunk)
});

readingdata.on("error", (err)=>{
    if(err){
        console.log("err", err)
        throw err;
    }
})



//writing the data
let raw_data= "add new file here or content"
let writestreamdata= fs.createWriteStream("dummy4.txt");

writestreamdata.write(raw_data, "UTF-8")

writestreamdata.on("finish", ()=>{
    console.log("write data completed")
})

writestreamdata.on("error", ()=>{
    console.log("error while uploading data", err)
})


const port=5000;
app.listen(port,()=>{
    console.log("server is listening this port", port)
})


