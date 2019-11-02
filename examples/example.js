"use strict";
const getDependencies = require("../src/index");

getDependencies("RocktimSaikia", "portfolio-v1").then(res => {
  console.log(res);
});
