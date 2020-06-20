// linked-list datastructure

class LinkedList {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  append(data) {
    if (!this.head) {
      this.head = {
        data: data,
        to: null,
      };
    } else {
      let randomNodeName = Math.random().toString();
      if (this.head.to === null) {
        this.head.to = randomNodeName;
        this[randomNodeName] = {
          data: data,
          to: null,
        };
      } else {
        // get tail node
        let tailNode = this[this.head.to];
        while (tailNode.to !== null) {
          tailNode = this[tailNode.to];
        }

        tailNode.to = randomNodeName;
        this[randomNodeName] = {
          data: data,
          to: null,
        };
      }
    }

    return data;
  }

  removeAt(index) {
    if (index === 0) {
      this.head.data = this[this.head.to].data;

      let nextNode = this.head.to;
      this.head.to = this[this.head.to].to;
      delete this[nextNode];

      return 0;
    }
    let current = this.head;
    let target = this.head;
    let targetIndex = 0;
    while (targetIndex !== index) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        current = target;
        target = this[target.to];
        targetIndex++;
      }
    }

    let targetNode = current.to;
    current.to = target.to;
    delete this[targetNode];

    return `removed at ${index}`;
  }

  indexOf(data) {
    let target = this.head;
    let targetIndex = 0;
    while (target.data !== data) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        target = this[target.to];
        targetIndex++;
      }
    }

    return targetIndex;
  }

  remove(data) {
    let index = this.indexOf(data);
    this.removeAt(index);

    return `data removed!`;
  }

  insert(index, data) {
    let newKey = Math.random().toString();

    if (index === 0) {
      this[newKey] = {
        data: this.head.data,
        to: this.head.to,
      };
      this.head.data = data;
      this.head.to = newKey;

      return data;
    } else if (index === this.length() - 1) {
      return this.append(data);
    }

    let current = this.head;
    let target = this.head;
    let targetIndex = 0;
    while (targetIndex !== index) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        current = target;
        target = this[target.to];
        targetIndex++;
      }
    }

    this[newKey] = {
      data: data,
      to: current.to,
    };
    current.to = newKey;

    return data;
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

// linked-list test
const linkedList = new LinkedList();

console.log("empty linkedList : ", linkedList);
console.log("length : ", linkedList.length());
console.log("clear return : ", linkedList.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", linkedList.isEmpty());
console.log("first append return : ", linkedList.append("a"));
console.log("second append return : ", linkedList.append("b"));
console.log("third append return : ", linkedList.append("c"));
console.log("forth append return : ", linkedList.append("d"));
console.log("fifth append return : ", linkedList.append("e"));
console.log("indexOf return : ", linkedList.indexOf("c"));
console.log("linkedList : ", linkedList);
console.log("length : ", linkedList.length());
console.log("removeAt return : ", linkedList.removeAt(2));
console.log("remove return : ", linkedList.remove("b"));
console.log(
  "insert at first index return : ",
  linkedList.insert(0, "first inserted data")
);
console.log("insert return : ", linkedList.insert(2, "second inserted data"));
console.log(
  "insert at the end return : ",
  linkedList.insert(4, "third inserted data")
);
console.log("isEmpty return : ", linkedList.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", linkedList);
console.log("length : ", linkedList.length());
console.log("clear return : ", linkedList.clear());
