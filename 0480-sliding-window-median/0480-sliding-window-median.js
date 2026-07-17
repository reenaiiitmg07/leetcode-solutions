class MyHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.size() === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return top;
    }

    heapifyUp() {
        let idx = this.size() - 1;

        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);

            if (this.compare(this.heap[idx], this.heap[parent])) {
                [this.heap[idx], this.heap[parent]] =
                    [this.heap[parent], this.heap[idx]];
                idx = parent;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let idx = 0;

        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let target = idx;

            if (
                left < this.size() &&
                this.compare(this.heap[left], this.heap[target])
            ) {
                target = left;
            }

            if (
                right < this.size() &&
                this.compare(this.heap[right], this.heap[target])
            ) {
                target = right;
            }

            if (target === idx) break;

            [this.heap[idx], this.heap[target]] =
                [this.heap[target], this.heap[idx]];

            idx = target;
        }
    }
}


var medianSlidingWindow = function (nums, k) {

    const small = new MyHeap((a, b) => a > b); //max heap
    const large = new MyHeap((a, b) => a < b); //min heap

    let smallSize = 0;
    let largeSize = 0;

    const delayed = new Map();


    function prune(heap) {

        while (heap.size()) {

            let num = heap.peek();

            if (delayed.has(num)) {

                delayed.set(num, delayed.get(num) - 1);

                if (delayed.get(num) === 0) {
                    delayed.delete(num);
                }

                heap.pop();
            } else {
                break;
            }
        }
    }


    function rebalance() {

        if (smallSize > largeSize + 1) {

            large.push(small.pop());
            smallSize--;
            largeSize++;

            prune(small);

        } else if (smallSize < largeSize) {

            small.push(large.pop());
            largeSize--;
            smallSize++;

            prune(large);
        }
    }


    function addNum(num) {

        if (!small.size() || num <= small.peek()) {
            small.push(num);
            smallSize++;
        } else {
            large.push(num);
            largeSize++;
        }

        rebalance();
    }


    function removeNum(num) {

        delayed.set(num, (delayed.get(num) || 0) + 1);

        if (num <= small.peek()) {

            smallSize--;

            if (num === small.peek()) {
                prune(small);
            }

        } else {

            largeSize--;

            if (large.size() && num === large.peek()) {
                prune(large);
            }
        }

        rebalance();
    }


    function getMedian() {

        if (k % 2 === 1) {
            return small.peek();
        }

        return (small.peek() + large.peek()) / 2;
    }


    for (let i = 0; i < k; i++) {
        addNum(nums[i]);
    }

    const result = [];
    result.push(getMedian());


    for (let i = k; i < nums.length; i++) {

        addNum(nums[i]);

        removeNum(nums[i - k]);

        result.push(getMedian());
    }

    return result;
};