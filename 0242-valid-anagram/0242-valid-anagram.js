/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }
    for (let c of t) {
        map.set(c, (map.get(c) || 0) - 1)
    }
    for (let c of t) {
        if (map.get(c)!==0)return false;
    }
    return true;

};