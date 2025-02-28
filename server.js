require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express()
const reportRouter = require("./router/reportRouter")
require('./database/connection/connection')

server.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization"
}));

server.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(200);
});

server.use(helmet()); 
server.use(express.json())
server.use(reportRouter)

const PORT = 6006;

server.get('/',(req,res)=>{
    res.status(200).json("Dev Saloonex server started - Report v1")
})

server.listen(PORT,()=>{
    console.log(`Saloonex server Report started at port : ${PORT}`);

})
