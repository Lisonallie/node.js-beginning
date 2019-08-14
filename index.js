#!/usr/bin/env node
const axios = require('axios');

// Get process.stdin as the standard input object.
let standardInput = process.stdin;

// Set input character encoding.
standardInput.setEncoding('utf-8');

standardInput.on('data', function (data) {
    let fromLang = "";
    let toLang = "jpn";

    axios({
        method: "get",
        url: `https://api.mymemory.translated.net/get?q=${data}&langpair=${fromLang}|${toLang}`,
        responseType: "JSON"
    }).then(function (response) {
        console.log(response.data.responseData.translatedText);
    });
});

