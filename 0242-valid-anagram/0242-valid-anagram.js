/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;
    let count=new Array(26).fill(0);
    for(let c of s){
        count[c.charCodeAt(0)-97]++;
    }
    for(let c of t){
        count[c.charCodeAt(0)-97]--;
    }
    for(let i=0;i<26;i++){
        if(count[i]!==0)return false;
    }
    return true;
    
};