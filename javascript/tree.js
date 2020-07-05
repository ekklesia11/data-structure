// binary tree datastructure

class Tree {
  constructor(data) {
    this.data = data;
    this.child = [];
  }

  appendChild(data) {
    let newNode = new Tree(data);

    function getEmptyNode(node) {
      for (let v of node.child) {
        if (node.child.length === 0) {
          return node.child.push(newNode);
        } else if (node.child.length === 1) {
          if (v.data < data) {
            return node.child.push(newNode);
          } else {
            return node.child.unshift(newNode);
          }
        } else {
          v.appendChild(data);
        }
      }
    }

    return getEmptyNode(this);
  }

  removeNode(data) {}

  nodeList(data) {}

  changeNode(currentData, newData) {}
}

const tree = new Tree(1);
tree.appendChild(2);
tree.appendChild(3);
tree.appendChild(4);
tree.appendChild(5);
// tree.appendChild(6);
// tree.appendChild(7);
// tree.appendChild(8);
// tree.appendChild(9);
// tree.appendChild(10);

console.log(tree);
console.log(tree.child[0]);
console.log(tree.child[1]);
