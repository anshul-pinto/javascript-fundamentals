/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise}
 */
// TC: O(functions.length)
var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    const resArr = new Array(functions.length);

    let curIdx = 0;
    let completed = 0;

    const helperPool = (idx, resArr) => {
      if (idx >= functions.length) return;
      const funcToRun = functions[idx];
      funcToRun().then((res) => {
        resArr[idx] = res;
        completed += 1;
        if (completed === functions.length) resolve(resArr);
        helperPool(idx + n, resArr);
      });
    };

    for (let i = 0; i < n; i += 1) {
      helperPool(curIdx, resArr);
      curIdx += 1;
    }
  });
};

const inputFns = [
  () => new Promise((res) => setTimeout(() => res(300), 300)),
  () => new Promise((res) => setTimeout(() => res(400), 400)),
  () => new Promise((res) => setTimeout(() => res(200), 200)),
  () => new Promise((res) => setTimeout(() => res(400), 400)),
  () => new Promise((res) => setTimeout(() => res(200), 200)),
  () => new Promise((res) => setTimeout(() => res(300), 300)),
  () => new Promise((res) => setTimeout(() => res(400), 400)),
];

console.time("timer");
promisePool(inputFns, 3).then((res) => {
  console.log(res);
  console.timeEnd("timer");
});
