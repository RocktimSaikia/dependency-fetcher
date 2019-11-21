const getDescription = require("./getDescription");

module.exports = async function() {
  const opt = [...arguments] || [];
  const keys = opt[0];
  const values = opt[1];
  let arr = [];

  if (opt[2]) {
    arr = Promise.all(
      keys.map(async (k, i) => ({
        package: k,
        version: values[i].replace("^", ""),
        description: await getDescription(k)
      }))
    );
    return arr;
  }
  arr = keys.map((k, i) => ({
    package: k,
    version: values[i].replace("^", "")
  }));
  return arr;
};
