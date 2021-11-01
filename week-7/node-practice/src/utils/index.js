const updateArray = (arr, newEntry) => {
  arr.push(newEntry);
  return arr;
};

const expandArray = (arr, newInfo) => {
  let lastEntry = arr[arr.length - 1];
  lastEntry = [lastEntry, newInfo];
  arr.pop();
  arr.push(lastEntry);
  return arr;
};

module.exports = { updateArray, expandArray };
