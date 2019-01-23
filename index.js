function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let discovered = [rootNode]
  let discoverOrder = [rootNode]

  while(discovered.length != 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    adjacentNodes
    discoverOrder = discoverOrder.concat(adjacentNodes)

    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}

function findAdjacent(nodeName, vertices, edges) {
  let sharedEdges = edges.filter(edge => edge.includes(nodeName))
  let adjacent = []

  sharedEdges.forEach(edge => {
    let foundVertex

    if (edge[0] === nodeName) {
      foundVertex = vertices.find(vertex => vertex.name === edge[1])
    } else if (edge[1] === nodeName) {
      foundVertex = vertices.find(vertex => vertex.name === edge[0])
    }
    foundVertex.distance === null ? adjacent.push(foundVertex) : null
  })
  return adjacent
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(node => {
    node.distance = predecessor.distance + 1
    node.predecessor = predecessor
  })
}
