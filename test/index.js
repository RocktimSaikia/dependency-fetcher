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
    return getData("RocktimSaikia", "git-job");
  });
});

describe("Get the dependencies", () => {
  it("should return object of npm packages", async () => {
    const mockObj = {
      dependencies: [
        { package: "axios", version: "0.18.1" },
        { package: "chalk", version: "2.4.2" },
        { package: "meow", version: "5.0.0" },
        { package: "striptags", version: "3.1.1" }
      ],
      devDependencies: [
        { package: "eslint", version: "5.16.0" },
        { package: "eslint-config-airbnb-base", version: "13.2.0" },
        { package: "eslint-plugin-import", version: "2.18.2" }
      ]
    };
    const data = await getDependencies("RocktimSaikia", "git-job");
    assert.deepEqual(data, mockObj);
  });
});
