const { program } = require('commander');
const express = require('express');
const app = express();
program
.option('-h, --host <server host>')
.option('-p, --port <server port>')
.option('-c, --cache <cache directory>');
program.parse();
const options = program.opts();
    app.get("/", (req, res) => {
    res.send("hello this is server");
    });
    if (options.host === undefined || options.port === undefined || options.cache === undefined) {
    console.log("please specify host, port and cache if u want server to work");
    return;
    }   
    else {
    app.listen(options.port);
    }