function bfs(rootNode, vertices, edges){

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
    foundVertex.distance !== 0 ? adjacent.push(foundVertex) : null
  })
  return adjacent
}


// edges = [
//   ['14th&6th', '23rd&6th'],
//   ['23rd&6th', '34th&6th'],
//   ['34th&6th', '28th&Bwy'],
//   ['28th&Bwy', '23rd&Bwy'],
//   ['23rd&Bwy', '14th&Lex'],
//   ['14th&Lex', '23rd&Lex']
// ]
//
// vertices = [
//   {name: '34th&6th', distance: null, predecessor: null},
//   {name: '23rd&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null},
//
//   {name: '14th&6th', distance: null, predecessor: null},
//   {name: '23rd&Bwy', distance: null, predecessor: null},
//   {name: '14th&Lex', distance: null, predecessor: null},
//   {name: '23rd&Lex', distance: null, predecessor: null}
// ]
