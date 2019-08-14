#!/usr/bin/env node
const axios = require('axios');

// Get process.stdin as the standard input object.
let standardInput = process.stdin;

// Set input character encoding.
standardInput.setEncoding('utf-8');

standardInput.on('data', function (data) {

    let phrase = "It's a beautiful day.";
    let fromLang = "";
    let toLang = "fr";
    let api = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=${fromLang}|${toLang}`;

    // Make a request for a user with a given ID
    axios.get(api)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('User Input Data : ' + data);
    }
});

