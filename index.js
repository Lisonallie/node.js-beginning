#!/usr/bin/env node
const validator = require("email-validator");
const axios = require('axios');
// validator.validate("test@email.com"); // true
console.log("Hello, Node.JS!");
let input = document.createElement('input');
let phrase = input.value.length;

window.onload() = input;

async function translate() {
    let key = ""
    const response = await axios.get('/user?ID=12345');
    console.log(response);
}      

