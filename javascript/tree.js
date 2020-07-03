// binary tree datastructure

class Tree {
  constructor(data) {
    this.data = data;
    this.child = [];
  }

  appendChild(data) {
    function searchForNode(currentNode, nodeChild) {
      if (nodeChild.length < 2) {
        return currentNode.appendChild(data);
      } else {
        for (let v of nodeChild) {
          if (v.child < 2) {
            return searchForNode(v, v.child);
          }
        }
      }
    }

    let newTree = new Tree(data);

    if (this.child.length === 0) {
      return this.child.push(newTree);
    } else if (this.child.length === 1) {
      if (this.child[0].data < data) {
        return this.child.push(newTree);
      } else {
        return this.child.unshift(newTree);
      }
    } else if (this.child.length === 2) {
      return searchForNode(this, this.child);
    }
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
