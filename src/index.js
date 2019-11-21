"use strict";
const getData = require("../lib/fetch");
const decode = require("../lib/decode");
const format = require("../lib/format");

module.exports = {
  getAllDependencies: async function() {
    const opt = [...arguments] || {};
    const data = await getData(opt[0], opt[1]);
    const json = decode(data);
    const { dependencies = {}, devDependencies = {} } = JSON.parse(json);

    const keys = Object.keys(dependencies);
    const values = Object.values(dependencies);

    const dev_keys = Object.keys(devDependencies);
    const dev_values = Object.values(devDependencies);

    if (opt[2] === "_desc") {
      return {
        dependencies: await format(keys, values, "_"),
        devDependencies: await format(dev_keys, dev_values, "_")
      };
    }

    return {
      dependencies: await format(keys, values),
      devDependencies: await format(dev_keys, dev_values)
    };
  },
  getDependencies: async function() {
    const opt = [...arguments] || {};

    const data = await getData(opt[0], opt[1]);
    const json = decode(data);
    const { dependencies = {} } = JSON.parse(json);

    const keys = Object.keys(dependencies);
    const values = Object.values(dependencies);

    if (opt[2] === "_desc") {
      return await format(keys, values, "_");
    }

    return await format(keys, values);
  },

  getDevDependencies: async function() {
    const opt = [...arguments] || {};

    const data = await getData(opt[0], opt[1]);
    const json = decode(data);
    const { devDependencies = {} } = JSON.parse(json);

    const dev_keys = Object.keys(devDependencies);
    const dev_values = Object.values(devDependencies);

    if (opt[2] === "_desc") {
      return await format(dev_keys, dev_values, "_");
    }

    return await format(dev_keys, dev_values);
  }
};
