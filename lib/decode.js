"use strict";
module.exports = function(str) {
  const decoded = Buffer.from(str, "base64").toString("ascii");
  return decoded;
};
