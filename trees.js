class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right - null;
    }
}

// binarySearchTree


class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let tmp = this.root;

        while (tmp) {
            if (value === tmp.value) return this;

            if (value < tmp.value) {
                if (!tmp.left) {
                    tmp.left = newNode;
                    return this;
                }
                tmp = tmp.left;
            } else {
                if (!tmp.right) {
                    tmp.right = newNode;
                    return this;
                }
                tmp = tmp.right;
            }
        }
    };
    contain(value) {
        if (this.root === null) return false;
        let tmp = this.root;

        while (tmp) {
            if (tmp.value === value) return true;
            if (tmp.value < value) {
                tmp = tmp.right;
            }
            else {
                tmp = tmp.left;
            }
        }

        return false;

    }
}


let myFirstTree = new BST();
myFirstTree.insert(30);
myFirstTree.insert(22);
myFirstTree.insert(1);
myFirstTree.insert(-52);
myFirstTree.insert(15);
myFirstTree.insert(50);
myFirstTree.insert(60);


console.log(myFirstTree);
console.log(myFirstTree.contain(89));