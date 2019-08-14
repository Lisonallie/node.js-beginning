#!/usr/bin/env node
var validator = require("email-validator");
 
validator.validate("test@email.com"); // true
console.log("Hello, Node.JS!");
