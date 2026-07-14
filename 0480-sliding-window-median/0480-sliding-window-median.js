/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    function lowerBound(arr, target) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
    let ans = [];
    let left = 0;
    let window = [];
   for (let right = 0; right < nums.length; right++) {

    let idx = lowerBound(window, nums[right]);
    window.splice(idx, 0, nums[right]);

    if (right >= k - 1) {

        let mid;

        if (k % 2 === 0)
            mid = (window[k / 2] + window[k / 2 - 1]) / 2;
        else
            mid = window[Math.floor(k / 2)];

        ans.push(mid);

        let removeIdx = lowerBound(window, nums[left]);
        window.splice(removeIdx, 1);

        left++;
    }
}
    return ans;
};