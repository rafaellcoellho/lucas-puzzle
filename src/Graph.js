const { Node } = require('./Node');

class Graph {
    constructor() {
        this.nodes = [];
        this.start = null;
        this.end = null;
    }
    addNode(node) {
        this.nodes.push(node);
    }
    reset() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].searched = false;
            this.nodes[i].parent = null;
        }
    }
    generateChilds(currentNode) {
        let auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        for (let i=0;i<auxState.arrowPositions.length;i++) {
            if (auxState.isPossibleMove(i)) {
                let n = new Node(auxState.moveArrow(i));
                this.addNode(n);
                currentNode.addEdge(n);
            }
        }
    }
    bfs() {
        this.reset();
        let queue = [];
        let nodeIsFound = false;
        this.start.searched = true;
        queue.push(this.start);
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.state.isEqual(this.end.state)) {
                this.end = Object.assign(Object.create(current), current);
                nodeIsFound = true;
                break;
            }
            this.generateChilds(current);
            let edges = current.edges;
            for (let i = 0; i < edges.length; i++) {
                let neighbor = edges[i];
                if (!neighbor.searched) {
                    neighbor.searched = true;
                    neighbor.parent = current;
                    queue.push(neighbor);
                }
            }
        }
        if (nodeIsFound) {
            let path = [];
            path.push(this.end);
            let next = this.end.parent;
            do {
                path.push(next);
                next = next.parent;
            } while (next != null);

            for(let i=(path.length-1), j=0;i>=0;i--,j++) {
                console.log("State " + j + " " + path[i].state.arrowPositions);
            }
            // console.log(path);
        }
        else {
            console.log("Solution not found");
        }
    }
}

exports.Graph = Graph;