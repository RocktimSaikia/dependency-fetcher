"use strict";
const fetch = require("isomorphic-unfetch");

module.exports = async function(d) {
  try {
    const data = await fetch(`https://api.npms.io/v2/package/${d}`);
    const {
      collected: {
        metadata: { description }
      }
    } = await data.json();
    return description;
  } catch (error) {
    console.log(error);
  }
};
