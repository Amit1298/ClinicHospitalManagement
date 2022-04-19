// console.log("Hello Clinic");

/*
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello this is Clinic Management System");
});

server.listen(4500, ()=>{
    console.log("Server is Started");
});
*/

/*
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Clinic Management is working");
});

app.listen(4500,()=>{
    console.log("Server is Started");
})
*/

const express = require('express');
const app = express();

const Hospital = [
    {
        DrID: "113",
        PasentName: "Amit"
    },
    {
        DrID: "218",
        PasentName: "Sumit"
    },
    {
        DrID: "218",
        PasentName: "Sumit"
    },
];

app.get("/Hospital",(req,res)=>{
    const data = JSON.stringify({
        success: true,
        result: Hospital
    });
    res.send(data);
});

app.listen(4500,()=>{
    console.log("Server is Started");
});