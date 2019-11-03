# dependency-fetcher [![Build Status](https://travis-ci.org/RocktimSaikia/dependency-fetcher.svg?branch=develop)](https://travis-ci.org/RocktimSaikia/dependency-fetcher) ![dev](https://img.shields.io/david/dev/RocktimSaikia/dependency-fetcher) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Get all the dependencies and dev-dependencies of a github repository.

## Install

```
$ npm install dependency-fetcher
```

## Usage

```js
const getDependencies = require("dependency-fetcher");

//add user_name and repo_ name
getDependencies("RocktimSaikia", "git-job").then(res => {
  console.log(res);
});
/*
=>  {
  dependencies: [
    { package: 'axios', version: '0.18.1' },
    { package: 'chalk', version: '2.4.2' },
    { package: 'meow', version: '5.0.0' },
    { package: 'striptags', version: '3.1.1' }
  ],
  devDependencies: [
    { package: 'eslint', version: '5.16.0' },
    { package: 'eslint-config-airbnb-base', version: '13.2.0' },
    { package: 'eslint-plugin-import', version: '2.18.2' }
  ]
}

*/
```
