"use strict";
const getDependencies = require("../src/index");

getDependencies("RocktimSaikia", "git-job").then(res => {
  console.log(res);
});
