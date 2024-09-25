//Graph popularly used in
//Google map(city and route)
//facebook(friends and Friends of friends)

// Graph can be visualised in two ways:
// 1. Adjacency matrix (2D array) --> linear time compelxity: O(n) for insertion and search
// 2. Adjacency list (map) --> constant time complecity: O(1) for insertion and search

const AdjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(AdjacencyMatrix[0][0]); //0 A is not connected to A
console.log(AdjacencyMatrix[1][0]); //1 B is connected to A
console.log(AdjacencyMatrix[2][1]); //1 C is connected to B

//consider it as below diagram
//     A   B   C                                     B
// A   0   1   0              Translates to        /   \
// B   1   0   1              ------------->      A     C
// C   0   1   0

const AdjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(AdjacencyList["A"]);
console.log(AdjacencyList["B"]);
console.log(AdjacencyList["C"]);

// Adjacency list allows to store additional details like weight of the edge,
// but matrix doesnt support additoinal information, and have to be stored externally
