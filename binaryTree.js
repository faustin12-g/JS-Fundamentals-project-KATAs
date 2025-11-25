class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

function treeByLevels(rootNode) {
    if(rootNode===null) return [];
    let queue = [rootNode]
    let result = []

    while(queue.length>0)
    {
        let current = queue.shift()
        result.push(current.value)

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right
        )
    }
    return result;
}