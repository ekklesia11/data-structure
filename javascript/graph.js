// graph datastructure

// two types of graph
// Undirectional & Directional
/* example:
    graph = {
      0: {
        data: string || any,
        from: [1, 3],
        to: [1]
      },
      1: {
        data: string || any,
        from: [0],
        to: [0, 3]
      },
      2: {
        data: string || any,
        from: [],
        to: [1]
      },
      3: {
        data: string || any,
        from: [1],
        to: [0]
      },
    }
*/

class Graph {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  addNode(data) {
    let index = this.length();
    this[index.toString()] = {
      data: data,
      from: [],
      to: [],
    };

    return data;
  }

  indexOf(data) {
    if (!this.length()) {
      return;
    }
    let targetIndex = 0;
    while (this[targetIndex.toString()].data !== data) {
      targetIndex++;
      if (targetIndex === this.length()) {
        return;
      }
    }

    return targetIndex;
  }

  addEdge(data1, data2) {
    let from = this.indexOf(data1);
    let to = this.indexOf(data2);
    if (from !== undefined && to !== undefined) {
      this[from].to.push(to);
      this[to].from.push(from);
      return [data1, data2];
    }
    return;
  }

  edgeList(data) {
    let index = this.indexOf(data);
    let list = [];

    let target = this[index.toString()];

    for (let i of target.from) {
      let edgeInfo = {
        from: i,
        weight: index + i,
      };
      list.push(edgeInfo);
    }

    for (let i of target.to) {
      let edgeInfo = {
        to: i,
        weight: index + i,
      };
      list.push(edgeInfo);
    }

    return list;
  }

  removeNode(data) {
    let index = this.indexOf(data);
    let target = this[index.toString()];

    for (let i of target.from) {
      this[i.toString()].to = this[i.toString()].to.filter((v) => index !== v);
    }

    for (let i of target.to) {
      this[i.toString()].from = this[i.toString()].from.filter(
        (v) => index !== v
      );
    }

    delete this[index.toString()];
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

// graph test
const graph = new Graph();

console.log("empty graph : ", graph);
console.log("length : ", graph.length());
console.log("clear return : ", graph.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", graph.isEmpty());
console.log("addNode return : ", graph.addNode("a"));
console.log("addNode return : ", graph.addNode("b"));
console.log("addNode return : ", graph.addNode("c"));
console.log("addNode return : ", graph.addNode("d"));
console.log("addNode return : ", graph.addNode("e"));
console.log("indexOf return : ", graph.indexOf("c"));
console.log("addEdge return : ", graph.addEdge("a", "b"));
console.log("addEdge return : ", graph.addEdge("a", "c"));
console.log("addEdge return : ", graph.addEdge("a", "d"));
console.log("addEdge return : ", graph.addEdge("d", "e"));
console.log("addEdge return : ", graph.addEdge("e", "a"));
console.log("addEdge return : ", graph.addEdge("e", "b"));
console.log("edgeList return : ", graph.edgeList("e"));
console.log("graph : ", graph);
console.log("removeNode return : ", graph.removeNode("a"));
console.log("length : ", graph.length());
console.log("isEmpty return : ", graph.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", graph);
console.log("length : ", graph.length());
console.log("clear return : ", graph.clear());
