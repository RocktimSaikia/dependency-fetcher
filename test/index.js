const assert = require("assert");
const getDependencies = require("../src");
const getData = require("../lib/fetch");
const decode = require("../lib/decode");

describe("Decode", () => {
  it("should decode the 64bit encoded string", () => {
    const encoded = "VGhpcyBtb2R1bGUgd29ya3MganVzdCBmaW5l";
    const decoded = "This module works just fine";
    assert(decode(encoded) === decoded);
  });
});

describe("Fetch package.json", () => {
  it("should return 64encoded string", () => {
    return getData("RocktimSaikia", "portfolio-v1");
  });
});

describe("Get the dependencies", () => {
  it("should return object of npm packages", async () => {
    const mockObj = [
      { package: "@emotion/core", version: "^10.0.22" },
      { package: "isomorphic-unfetch", version: "^3.0.0" },
      { package: "next", version: "^9.1.1" },
      { package: "react", version: "^16.11.0" },
      { package: "react-dom", version: "^16.11.0" },
      { package: "react-reveal", version: "^1.2.2" },
      { package: "react-spinners", version: "^0.6.1" }
    ];
    const data = await getDependencies("RocktimSaikia", "portfolio-v1");
    assert.deepEqual(data, mockObj);
  });
});
