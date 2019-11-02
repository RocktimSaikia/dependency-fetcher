# dependency-fetcher [![Build Status](https://travis-ci.org/RocktimSaikia/dependency-fetcher.svg?branch=master)](https://travis-ci.org/RocktimSaikia/dependency-fetcher) ![dev](https://img.shields.io/david/dev/RocktimSaikia/dependency-fetcher) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


> Get all the dependencies of a github repository.

## Install

```
$ npm install dependency-fetcher
```

## Usage

```js
const getDependencies = require("dependency-fetcher");

//add user_name and repo_ name
getDependencies("RocktimSaikia", "dependency-fetcher");
/*
=>  [{ package: "mocha" version: "^6.2.2" },
     { package: "isomorphic-unfetch", version: "^3.0.0" }]
*/
```
