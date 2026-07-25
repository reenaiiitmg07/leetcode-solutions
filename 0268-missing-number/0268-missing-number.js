/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let sum=((n+1)*(n))/2;
    let mSum=0;
    for(let i=0;i<n;i++){
       mSum=mSum+nums[i];
    }
    return sum-mSum;
};