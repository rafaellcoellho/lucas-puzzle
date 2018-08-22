class State {
    constructor(arrowPositions) {
        this.arrowPositions = arrowPositions;
    }
    isPossibleMove(index) {
        if(this.arrowPositions[index] == ">") {
            if (index == (this.arrowPositions.length - 1) ) {
                return false;
            } else if (index == (this.arrowPositions.length - 2)) {
                return (this.arrowPositions[index + 1] == " ");
            } else {
                return (this.arrowPositions[index + 1] == " ") || 
                    ( (this.arrowPositions[index + 1] == "<") && (this.arrowPositions[index + 2] == " ") ); 
            }
        } else if (this.arrowPositions[index] == "<") {
            if (index == 0 ) {
                return false;
            } else if (index == 1) {
                return (this.arrowPositions[index - 1] == " ");
            } else {
                return (this.arrowPositions[index - 1] == " ") || 
                    ( (this.arrowPositions[index - 1] == ">") && (this.arrowPositions[index - 2] == " ") ); 
            }
        } else {
            return false;
        }
    }
    moveArrow(index) {
        let arrayAux = [];
        for(let i=0;i<this.arrowPositions.length;i++) {
            arrayAux.push(this.arrowPositions[i]);
        }

        if (arrayAux[index] == ">") {
            if (arrayAux[index + 1] == " ") {
                arrayAux[index] = " ";
                arrayAux[index + 1] = ">";
            } else {
                arrayAux[index] = " ";
                arrayAux[index + 2] = ">"
            }
        } else {
            if (arrayAux[index - 1] == " ") {
                arrayAux[index] = " ";
                arrayAux[index - 1] = "<";
            } else {
                arrayAux[index] = " ";
                arrayAux[index - 2] = "<"
            }
        }

        return new State(arrayAux);
    }
    isEqual(anotherState) {
        for (let i=0;i<this.arrowPositions.length;i++) {
            if (this.arrowPositions[i] != anotherState.arrowPositions[i]) {
                return false;
            }
        }
        return true;
    }
}

exports.State = State;