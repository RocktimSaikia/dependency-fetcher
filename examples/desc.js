"use strict";
const getDescription = require("../lib/getDescription");

const arr = ["axios", "chalk", "meow", "striptags"];

arr.map(d => {
  getDescription(d).then(res => {
    console.log(res);
  });
});
