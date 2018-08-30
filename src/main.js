'use strict'

const Graph = require("graph-data-structure")

const initialState = '>>>> <<<<'
const objectiveState = '<<<< >>>>'

function isPossibleMove(state, index){
    let diff = state.indexOf(' ') - index
    if((state[index] === '>') && (diff > 0)){
        if(((diff === 2) && (state[index+1] === '<')) || diff === 1)
            return true
    }
    if((state[index] === '<') && (diff < 0)){
        if( ((diff === -2) && (state[index-1] === '>')) || diff === -1)
            return true
    }
    return false
}

function moveArrow(state, index){
    let auxState = state.split('')
    auxState[auxState.indexOf(' ')] = auxState[index]
    auxState[index] = ' '

    return auxState.join('')
}

function expandGraph(state, graph){
    for(let i=0;i<state.length;i++){
        if(isPossibleMove(state, i)){
            graph.addEdge(state, moveArrow(state, i))
        }
    }
}

function breadthFirstSearch(initial, final){
    let current

    let graph = Graph()
        .addNode(initial)

    let queue = []
    queue.push(initial)

    let cameFrom = {}
    cameFrom[initial] = null

    while(queue.length){
        current = queue.shift()
        if(current === final){
            break
        }
        expandGraph(current, graph)
        let edges = graph.adjacent(current)
        edges.forEach(edge => {
            if(!cameFrom.hasOwnProperty(edge)){
                queue.push(edge)
                cameFrom[edge] = current
            }
        })
    }

    current = final;
    let path = [];
    while ( current != initial ) {
        path.push(current);
        current = cameFrom[current];
    }
    path.push(initial);
    path.reverse();
    return path;
}

console.log('Lucas puzzle')
console.log(initialState + " -> " + objectiveState)
console.log(breadthFirstSearch(initialState, objectiveState))