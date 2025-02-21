class Node{
    constructor(value)
    {
        this.value = value;
        this.next=null;
    }
};

class Queue{
    constructor(value)
    {
        let newNode = new Node(value);
        this.first = newNode;
        this.last=newNode;
        this.length=1;
    };
    enqueue(value)
    {
        let newNode = new Node(value);
        if(this.length === 0)
        {
        this.first = newNode;
        this.last=newNode;
        }
        else{

            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
        
    }
    dequeue()
    {
        if(this.length === 0)return undefined;
        let tmp = this.first;
        if(this.length ===1)
        {
            this.first =null;
            this.last =null;
        }else{
            this.first = this.first.next;
            tmp.next = null;
        }

        this.length--;
        return tmp;

    }

}

let myFirstQueue = new Queue(1);
myFirstQueue.enqueue(33);
myFirstQueue.enqueue(45);
myFirstQueue.dequeue();
myFirstQueue.dequeue();
myFirstQueue.dequeue();

console.log(myFirstQueue);