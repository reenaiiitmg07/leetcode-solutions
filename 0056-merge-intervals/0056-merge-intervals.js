/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   intervals.sort((a,b)=>a[0]-b[0]);
   let result=[intervals[0]];
   for(let i=1;i<intervals.length;i++){
    let last=result[result.length-1];
    let curr=intervals[i];
    if(curr[0]>last[1]){
        result.push(curr);
    }else{
       last[1]=Math.max(last[1],curr[1])
    }
   }
   return result;
};