const { Node } = require('./Node');
const { State } = require('./State');
const { Graph } = require('./Graph');

console.log("Lucas's puzzle");

let stateTree = new Graph();

let firstState = new Node( new State([">", ">", ">", ">", " ", "<", "<", "<", "<"]) );
let objetiveState = new Node( new State(["<", "<", "<", "<", " ", ">", ">", ">", ">"]) );

stateTree.start = firstState;
stateTree.addNode(firstState);
	
stateTree.end = objetiveState;

stateTree.bfs();
