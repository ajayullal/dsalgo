/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = strs[0];

  strs.slice(1).forEach((str) => {
    let cprefix = "";

    Array.from(str).every((s, i) => {
      if (commonPrefix[i] === s) {
        cprefix += s;
        return true;
      } else {
        return false;
      }
    });

    commonPrefix = cprefix;
  });

  return commonPrefix;
};
