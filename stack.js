class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(value)
    {
        this.top = new Node(value);
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }
    pop()
    {
        if(!this.top) return null;
        let cuurTop = this.top;
        this.top =  this.top.next;
        this.length--;
        return cuurTop.value;
    };
    peek() {
        return this.top ? this.top.value : null;
    };

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

class StackWithArr {
    constructor() {
        this.stackList = [];
    }
 
 
    push(value) {
       
            this.stackList.push(value);
          return this;
    }

    pop()
    {
        if(this.stackList.length === 0)return null;
       
        return this.stackList.pop() ;
    }
}

let myFirstSatck = new StackWithArr();
myFirstSatck.push(1);
myFirstSatck.push(2);
myFirstSatck.push(5);
myFirstSatck.pop();
myFirstSatck.pop();

console.log(myFirstSatck.pop());
