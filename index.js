#!/usr/bin/env node
const axios = require('axios');

// Get process.stdin as the standard input object.
let standardInput = process.stdin;

// Set input character encoding.
standardInput.setEncoding('utf-8');

//data is the physical input. fromLang is automatically detected.
standardInput.on('data', function (data) {
    let fromLang = "";
    let toLang = "jpn";
    
    axios({
        method: "get",
        url: `https://api.mymemory.translated.net/get?q=${data}&langpair=${fromLang}|${toLang}`,
        // responses are given in JSON as a standard.
        responseType: "JSON"
    }).then(function (response) {
        // location in the api response where the translation lives. 
        console.log(response.data.responseData.translatedText);
    });
});


// great link for language codes
// https://www.nationsonline.org/oneworld/country_code_list.htm