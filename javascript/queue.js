// queue datastructure

class Queue {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  enqueue(data) {
    let lastKey = this.length();
    this[lastKey.toString()] = data;
    return data;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let firstValue = this["0"];
      delete this["0"];
      for (let key in this) {
        let newKey = Number(key) - 1;
        this[newKey] = this[key];
        delete this[key];
      }
      return firstValue;
    } else {
      return;
    }
  }

  first() {
    return this["0"];
  }

  last() {
    return this.isEmpty() ? undefined : this[(this.length() - 1).toString()];
  }

  clear() {
    if (this.isEmpty()) {
      return "nothing to clear!";
    } else {
      for (let key in this) {
        delete this[key];
      }
      return "clear done!";
    }
  }

  isEmpty() {
    return this.length() ? false : true;
  }

  length() {
    let leng = 0;
    for (let key in this) {
      if (key) {
        leng++;
      } else {
        return 0;
      }
    }

    return leng;
  }
}

// queue test
const queue = new Queue();

console.log("empty queue : ", queue);
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", queue.isEmpty());
console.log("first enqueue return : ", queue.enqueue("a"));
console.log("second enqueue return : ", queue.enqueue("b"));
console.log("third enqueue return : ", queue.enqueue("c"));
console.log("queue : ", queue);
console.log("length : ", queue.length());
console.log("dequeue return : ", queue.dequeue());
console.log("fisrt value return : ", queue.first());
console.log("last value return : ", queue.last());
console.log("isEmpty return : ", queue.isEmpty());
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());
console.log("isEmpty return : ", queue.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", queue);
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());
