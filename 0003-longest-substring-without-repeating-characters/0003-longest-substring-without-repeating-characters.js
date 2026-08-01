/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map=new Map();
    let maxLen=0;
    let l=0;
    for(let r=0;r<s.length;r++){
        if(map.has(s[r])){
        l=Math.max(l,map.get(s[r])+1)
        }
        map.set(s[r],r);
        maxLen=Math.max(maxLen,r-l+1);
    }
    return maxLen;
};