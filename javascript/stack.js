// stack datastructure

class Stack {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  push(data) {
    let lastKey;
    for (let key in this) {
      lastKey = key;
    }

    if (!lastKey) {
      this["0"] = data;
    } else {
      this[Number(lastKey) + 1] = data;
    }

    return data;
  }

  pop() {}

  peek() {}

  clear() {}

  isEmpty() {}

  length() {
    let leng = 0;
    for (let key in this) {
      leng = Number(key);
    }

    return leng;
  }
}

// test
const stack = new Stack();

console.log("empty stack : ", stack);
console.group("actions");
console.log("push return : ", stack.push(1));
console.log("push return : ", stack.push(2));
console.log("push return : ", stack.push(3));
console.groupEnd();
console.log("after action : ", stack);
console.log("length : ", stack.length());
