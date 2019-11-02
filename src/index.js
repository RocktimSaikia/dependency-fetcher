"use strict";
const getData = require("../lib/fetch");
const decode = require("../lib/decode");

module.exports = async function() {
  const opt = [...arguments] || {};

  const packages = [];
  const data = await getData(opt[0], opt[1]);
  const json = decode(data);
  const { dependencies } = JSON.parse(json);

  const package_names = Object.keys(dependencies);
  const versions = Object.values(dependencies);

  package_names.map((p, i) => {
    packages.push({
      package: p,
      version: versions[i]
    });
  });
  return packages;
};
