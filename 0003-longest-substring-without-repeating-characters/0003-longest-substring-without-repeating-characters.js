/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set=new Set();
    let maxLen=0;
    let l=0;
    for(let c of s){
        if(set.has(c)){
          while(set.has(c)){
            set.delete(s[l]);
            l++;
          }

        }
        set.add(c);
        maxLen=Math.max(maxLen,set.size);
    }
    return maxLen;
};