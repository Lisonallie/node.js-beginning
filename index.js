#!/usr/bin/env node
const axios = require('axios');
// validator.validate("test@email.com"); // true
console.log("Hello, Node.JS!");

function translate() {
  
    let api = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=${fromLang}|${toLang}`
    const response = await axios.get(api);
    console.log(response);
    phrase.innerHTML = response;
}

executeTranslation.addEventListener("click", translate);

