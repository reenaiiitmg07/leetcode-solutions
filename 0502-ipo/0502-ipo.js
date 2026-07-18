/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
class MYHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) return null;

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];

        // Move last element to the root.
        this.heap[0] = this.heap.pop();

        this.heapifyDown();

        return top;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // Parent is already in the correct position.
            if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
                break;
            }

            [this.heap[index], this.heap[parent]] = [
                this.heap[parent],
                this.heap[index],
            ];

            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (
                left < length &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];

            index = smallest;
        }
    }
}

var findMaximizedCapital = function (k, w, profits, capital) {
    let minHeap = new MYHeap((a, b) => a[0] - b[0]);
    let maxHeap = new MYHeap((a, b) => b - a);
    for (let i = 0; i < capital.length; i++) {
        minHeap.push([capital[i], profits[i]]);
    }
    console.log(maxHeap)
    for (let i = 0; i < k; i++) {
        while (!minHeap.isEmpty() && minHeap.peek()[0] <= w) {
            let [c, p] = minHeap.pop();
            maxHeap.push(p);
        }
        if (maxHeap.isEmpty()) return w;
        let p = maxHeap.pop()
        w = w + p;
    }
    return w;
};