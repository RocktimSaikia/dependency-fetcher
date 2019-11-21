"use strict";
const {
  getAllDependencies,
  getDependencies,
  getDevDependencies
} = require("../src/index");

getAllDependencies("RocktimSaikia", "git-job", "_desc").then(res => {
  console.log(res);
});
