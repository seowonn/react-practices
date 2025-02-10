const http = require('http');
const path = require('path');
const express = require('express');

const port = 3000;
// public/ 폴더 내에 있는 JS를 호출. 이때 JS는 전통적인 방식으로 HTML을 조작하는 코드이다.
const application = express().use(express.static(path.join(__dirname, 'public')))
http
    .createServer(application)
    .on('listening', ()=>{
        console.log(`server starts...on ${port}`);
    })
    .listen(port);
