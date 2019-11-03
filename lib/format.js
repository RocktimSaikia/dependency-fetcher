module.exports = (keys, values) => {
  const arr = [];
  keys.map((k, i) => {
    arr.push({
      package: k,
      version: values[i].replace("^", "")
    });
  });
  return arr;
};
