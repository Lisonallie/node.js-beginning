#!/usr/bin/env node
const axios = require('axios');

let standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

standard_input.on('data', function (data) {
    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('User Input Data : ' + data);
    }

    // Make a request for a user with a given ID
    axios.get('/user?ID=12345')
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
});



// function translate() {

//     let api = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=${fromLang}|${toLang}`
//     const response = await axios.get(api);
//     console.log(response);
//     phrase.innerHTML = response;
// }

// executeTranslation.addEventListener("click", translate);

