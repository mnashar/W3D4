class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(newStackNode) {
        if (newStackNode.next) {
            newStackNode.next = null;
        }

        if (!this.top) {
            this.top = newStackNode;
            this.bottom = newStackNode;
        } else {
            const temp = this.top;
            this.top = newStackNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        const temp = this.top;
        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val) {
        const newQueueNode = new Node(val);
        if (!this.front) {
            this.front = newQueueNode;
            this.back = newQueueNode;
        } else {
            this.back.next = newQueueNode;
            this.back = newQueueNode;
        }

        this.inStack.push(new Node(newQueueNode.value));
        return this.size();
    }

   
};

