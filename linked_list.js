class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insertAtLast(val) {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    removeAtLast() {
        if (!this.head) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    insertAtFirst(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    removeAtFirst() {
        if (!this.head) {
            return undefined;
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var count = 0;
        var current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, val) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        var count = 0;
        var current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        current.val = val;
        return true;
    }

    insertAt(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.insertAtLast(val);
        }
        if (index === 0) {
            return !!this.insertAtFirst(val);
        }

        var node = new Node(val);
        var previous = this.get(index - 1);
        var temp = previous.next;

        previous.next = node;
        node.next = temp;
        this.length++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.removeAtFirst();
        }
        if (index === this.length - 1) {
            return this.removeAtLast();
        }

        var previous = this.get(index - 1);
        var removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

var sll = new SinglyLinkedList();

const printBooks = () => {
    let books = [];
    books = sll.print();
    console.log(books);
    let listOfBooks = "";
    for (let i in books) {
        listOfBooks += "<tr>";
        listOfBooks += "<td>" + (parseInt(i) + 1) + "</td>";
        listOfBooks += "<td>" + books[i] + "</td>";
        listOfBooks += "</tr>";
    }
    document.getElementById("table").removeAttribute("hidden");
    document.getElementById("booksTable").innerHTML = listOfBooks;
};

const insertAtLast = () => {
    let book = document.getElementById("insertAtLast").value;
    sll.insertAtLast(book);
    printBooks();
};

const removeAtLast = () => {
    sll.removeAtLast();
    printBooks();
};

const insertAtFirst = () => {
    let book = document.getElementById("insertAtFirst").value;
    sll.insertAtFirst(book);
    printBooks();
};

const removeAtFirst = () => {
    sll.removeAtFirst();
    printBooks();
};

const removeAt = () => {
    let bookIndex = document.getElementById("removeAt").value;
    sll.removeAt(parseInt(bookIndex));
    printBooks();
};
