/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need={}
    for(let ch of t){
        need[ch]=(need[ch]||0)+1
    }
    console.log(need,'need');
    let left=0;
    let n=s.length;
    let count=t.length;
    let minLen=Infinity;
    let start=0;
    for(let right=0;right<n;right++){
        if(need[s[right]]>0){
            count--;
        }
        need[s[right]] = (need[s[right]] || 0) - 1;
        while(count==0){
               if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            // remove left char
            need[s[left]]++;
            if (need[s[left]] > 0) {
                count++;  // window became invalid
            }

            left++;
        }

    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
    
};