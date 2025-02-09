class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {

        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (this.head === null) return null;
        if (this.tail === this.head) {
            let value = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return value;

        };

        let prev = this.head;
        let tmp = this.head;

        while (tmp.next !== null) {
            prev = tmp;
            tmp = tmp.next;
        }

        this.tail = prev;
        this.length--;
        prev.next = null;
        return this;

    }
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {

            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
        }

        this.length = Math.max(0, this.length - 1);
        return this;
    }

    getIndex(index)
    {   if(index < 0 ) return undefined
        if(!this.head === null) return undefined;
        let tmp = this.head;
        let count = 0;
        while(tmp.next !==null)
        {
            if (index === count) {
                return tmp.value;
            }
            count++;
            tmp = tmp.next;
        }
     return undefined;
    }
}




const firstLinkedList = new linkedList(1);

firstLinkedList.push(56);
firstLinkedList.push(9956)
firstLinkedList.push(12)
firstLinkedList.push(4)
firstLinkedList.pop();
firstLinkedList.unshift(621);
firstLinkedList.push(56);
firstLinkedList.push(9956);

console.log(firstLinkedList)
console.log(firstLinkedList.getIndex(0));



