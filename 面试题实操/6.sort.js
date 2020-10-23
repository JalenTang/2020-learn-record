// 请将数组 [[1,2,4],[1,1,2,1], [1,2,3],[1,3,4],[1,3,2]]
// 排序成 [[1,2,3],[1,2,4],[1,3,2],[1,3,4],[1,1,2,1]]

function sort(arr) {
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length === b.length) {
      return compare(a, b);
    } else {
      return -1;
    }
  });
  return arr;
}

function compare(a, b) {
  let res;
  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] < b[i]) {
      res = -1;
      break;
    } else if (a[i] === b[i]) {
      res = 0;
      continue;
    } else {
      res = 1;
      break;
    }
  }

  return res;
}

const arr = [
  [1, 2, 4],
  [1, 1, 2, 1],
  [1, 2, 3],
  [1, 3, 4],
  [1, 3, 2],
];
console.log(sort(arr));
