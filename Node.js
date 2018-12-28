class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  appendNode(node) {
    if (node.value < this.value) {
      if (this.left !== null) {
        this.left.appendNode(node)
      } else {
        this.left = node
      }
    } else if (node.value > this.value) {
      if (this.right !== null) {
        this.right.appendNode(node)
      } else {
        this.right = node
      }
    }
  }

  search(val) {
    if (this.value === val) {
      return this
      console.log(`found ${val}`)
    } else if (val < this.value && this.left !== null) {
      return this.left.search(val)
    } else if (val > this.value && this.right !== null) {
      return this.right.search(val)
    }
    return null
  }
}

module.exports = Node
