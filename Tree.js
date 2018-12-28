const Node = require('./Node')

class Tree {
  constructor() {
    this.root = null
  }

  addNode(node) {
    if (this.root === null) {
      this.root = node
    } else {
      this.root.appendNode(node)
    }
  }

  addValue(val) {
    const newNode = new Node(val)
    this.addNode(newNode)
  }

  search(val) {
    const foundResult = this.root.search(val)
    return foundResult
  }
}

module.exports = Tree
