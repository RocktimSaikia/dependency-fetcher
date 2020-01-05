const assert = require("assert");

const getData = require("../lib/fetch");
const decode = require("../lib/decode");
const getDescription = require("../lib/getDescription");
const {
  getAllDependencies,
  getDependencies,
  getDevDependencies
} = require("../src");

//decode test
describe("Decode", () => {
  it("should decode the 64bit encoded string", () => {
    const encoded = "VGhpcyBtb2R1bGUgd29ya3MganVzdCBmaW5l";
    const decoded = "This module works just fine";
    assert(decode(encoded) === decoded);
  });
});

describe("Fetch package.json", () => {
  it("should return 64encoded string", () => {
    return getData("RocktimSaikia", "dependency-fetcher");
  });
});

// getDescription test case
describe("Get the package description", () => {
  it("should return description of the package", async () => {
    const mockData = "Get all the dependencies of a github repository";
    const data = await getDescription("dependency-fetcher");
    assert.deepEqual(data, mockData);
  });
});

// getAllDependencies test case
describe("Get the all dependencies", () => {
  it("should return an object of all npm packages", async () => {
    const mockObj = {
      dependencies: [
        {
          package: "isomorphic-unfetch",
          version: "3.0.0",
          description:
            "Switches between unfetch & node-fetch for client & server."
        }
      ],
      devDependencies: [
        {
          package: "mocha",
          version: "7.0.0",
          description: "simple, flexible, fun test framework"
        }
      ]
    };
    const data = await getAllDependencies(
      "RocktimSaikia",
      "dependency-fetcher",
      "_desc"
    );
    assert.deepEqual(data, mockObj);
  });
});

// getDependencies test case
describe("Get the dependencies", () => {
  it("should return an array of dependencies", async () => {
    const mockObj = [
      {
        package: "isomorphic-unfetch",
        version: "3.0.0",
        description:
          "Switches between unfetch & node-fetch for client & server."
      }
    ];
    const data = await getDependencies(
      "RocktimSaikia",
      "dependency-fetcher",
      "_desc"
    );
    assert.deepEqual(data, mockObj);
  });
});

// getDevDependencies test case
describe("Get the dev-dependencies", () => {
  it("should return an array of dev-dependencies", async () => {
    const mockObj = [
      {
        package: "mocha",
        version: "7.0.0",
        description: "simple, flexible, fun test framework"
      }
    ];
    const data = await getDevDependencies(
      "RocktimSaikia",
      "dependency-fetcher",
      "_desc"
    );
    assert.deepEqual(data, mockObj);
  });
});
