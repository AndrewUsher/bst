const Node = require('./Node')
const Tree = require('./Tree')

const setup = () => {
  const tree = new Tree()
  tree.addValue(40)
  for (let i = 0; i < 10; i++) {
    tree.addValue(Math.floor(Math.random() * 100))
  }
  console.log(tree.search(10))
}

setup()
