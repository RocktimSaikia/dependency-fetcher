# dependency-fetcher

![Travis (.org) branch](https://img.shields.io/travis/RocktimSaikia/dependency-fetcher/master?style=for-the-badge) ![David](https://img.shields.io/david/RocktimSaikia/dependency-fetcher?style=for-the-badge) ![David](https://img.shields.io/david/dev/RocktimSaikia/dependency-fetcher?style=for-the-badge) ![npm](https://img.shields.io/npm/v/dependency-fetcher?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/RocktimSaikia/dependency-fetcher?style=for-the-badge)

> Get all the dependencies and dev-dependencies of a github repository.

<a href="https://www.buymeacoffee.com/7BdaxfI" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Install

```bash

$ npm install dependency-fetcher

```

## Usage

```javascript
const {
  getAllDependencies,
  getDependencies,
  getDevDependencies
} = require("dependency-fetcher");

//add user_name and repo_ name
getAllDependencies("RocktimSaikia", "git-job").then(res => {
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

//get only the dependencies
getDependencies("RocktimSaikia", "git-job").then(res => {
  console.log(res);
});
/*
=>  [
      { package: 'axios', version: '0.18.1' },
      { package: 'chalk', version: '2.4.2' },
      { package: 'meow', version: '5.0.0' },
      { package: 'striptags', version: '3.1.1' }
  ],
*/

//get only the dev-dependencies
getDevDependencies("RocktimSaikia", "git-job").then(res => {
  console.log(res);
});
/*
=> [
    { package: 'eslint', version: '5.16.0' },
    { package: 'eslint-config-airbnb-base', version: '13.2.0' },
    { package: 'eslint-plugin-import', version: '2.18.2' }
  ]
*/
```

If you want to get the descriptions of each packages then simply pass `"_desc"` as the third parameter to the function call.
ex:

```javascript
getDependencies("RocktimSaikia", "git-job", "_desc").then(res => {
  console.log(res);
});
/*
=> [
    {
      package: 'axios',
      version: '0.18.1',
      description: 'Promise based HTTP client for the browser and node.js'
    },
    {
      package: 'chalk',
      version: '2.4.2',
      description: 'Terminal string styling done right'
    },
    {
      package: 'meow',
      version: '5.0.0',
      description: 'CLI app helper'
    },
    {
      package: 'striptags',
      version: '3.1.1',
      description: 'PHP strip_tags in Node.js'
    }
  ]
*/
```
