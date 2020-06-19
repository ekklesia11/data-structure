// stack datastructure

// stack constructor
class Stack {
  constructor() {
    this.data = {};
  };

  push(data) {
    let lastKey;
    for (let key in this.data) {
      lastKey = key;
    };

    if (!lastKey) {
      this.data["0"] = data;
    } else {
      this.data[Number(lastKey) + 1] = data;
    };

    return this.data;
  };

  pop() { };

  peek() { };

  clear() { };

  isEmpty() { };

  length() { };
};


// test
const stack = new Stack();

