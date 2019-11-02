"use strict";
const fetch = require("isomorphic-unfetch");

module.exports = async function(name, repo) {
  try {
    const url = `https://api.github.com/repos/${name}/${repo}/contents/package.json?ref=master`;
    const data = await fetch(url);
    const { content } = await data.json();
    return content;
  } catch (error) {
    console.log(error);
  }
};
