/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let l = 0;
    let len=0;
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[l])
            l++;
        }
        set.add(s[i])
        len=Math.max(len,set.size)
    }
    return len;
};