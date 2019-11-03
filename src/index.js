"use strict";
const getData = require("../lib/fetch");
const decode = require("../lib/decode");
const format = require("../lib/format");

module.exports = async function() {
  const opt = [...arguments] || {};

  const data = await getData(opt[0], opt[1]);
  const json = decode(data);
  const { dependencies = {}, devDependencies = {} } = JSON.parse(json);

  const keys = Object.keys(dependencies);
  const values = Object.values(dependencies);

  const dev_keys = Object.keys(devDependencies);
  const dev_values = Object.values(devDependencies);

  return {
    dependencies: format(keys, values),
    devDependencies: format(dev_keys, dev_values)
  };
};
