/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    slow = nums[slow]
    fast = nums[nums[fast]]

    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    slow = 0
    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};
