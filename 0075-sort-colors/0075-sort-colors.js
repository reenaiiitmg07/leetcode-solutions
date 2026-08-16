/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let l,m,r;
    l=0;
    m=0;r=nums.length-1;
    while(m<=r){
        if(nums[m]===0){
          [nums[l], nums[m]]=[nums[m],nums[l]];
          l++;
          m++;
        }
        else if(nums[m]===2){
            [nums[m],nums[r]]=[nums[r],nums[m]];
            r--;
        }
        else{
            m++;
        }
    }
    
};