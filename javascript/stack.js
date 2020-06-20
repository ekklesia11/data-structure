// stack datastructure

class Stack {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  push(data) {
    let lastKey = this.length();
    this[lastKey.toString()] = data;
    return data;
  }

  pop() {
    if (!this.isEmpty()) {
      let lastKey = (this.length() - 1).toString();
      let lastValue = this[lastKey];
      delete this[lastKey];
      return lastValue;
    } else {
      return;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      let lastKey = (this.length() - 1).toString();
      let lastValue = this[lastKey];
      return lastValue;
    } else {
      return;
    }
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

// stack test
const stack = new Stack();

console.log("empty stack : ", stack);
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", stack.isEmpty());
console.log("first push return : ", stack.push("a"));
console.log("second push return : ", stack.push("b"));
console.log("third push return : ", stack.push("c"));
console.log("length : ", stack.length());
console.log("pop return : ", stack.pop());
console.log("peek return : ", stack.peek());
console.log("isEmpty return : ", stack.isEmpty());
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());
console.log("isEmpty return : ", stack.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", stack);
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());
