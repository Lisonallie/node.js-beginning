#!/usr/bin/env node
const validator = require("email-validator");
const axios = require('axios');
// validator.validate("test@email.com"); // true
console.log("Hello, Node.JS!");
let input = document.createElement('input');

window.onload() = input;

async function translate() {
    let phrase = input.value;
    
    let api = `https://api.mymemory.translated.net/get?q=${phrase}&langpair=en|it`
    const response = await axios.get(api);
    console.log(response);
}      

