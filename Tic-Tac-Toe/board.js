const MoveError = require("./moveError");

class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    isEmptyPos(pos) {
        if (!Board.isValidPos(pos)) {
            throw new MoveError('Is not valid position!');
        }

        return (this.grid[pos[0]][pos[1]] === null);
    }

    isOver() {
        if (this.winner() != null) {
            return true;
        }

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            for (let colIdx = 0; colIdx < 3; colIdx++) {
                if (this.isEmptyPos([rowIdx, colIdx])) {
                    return false;
                }
            }
        }

        return true;
    }

    placeMark(pos, mark) {
        if (!this.isEmptyPos(pos)) {
            throw new MoveError('Is not an empty position!');
        }

        this.grid[pos[0]][pos[1]] = mark;
    }

    print() {
        const strs = [];
        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            const marks = [];
            for (let colIdx = 0; colIdx < 3; colIdx++) {
                marks.push(
                    this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : " "
                );
            }
            strs.push(`${marks.join('|')}\n`);
        }

        console.log(strs.join('-----\n'));
    }

    winner() {
        const posSeqs = [
            // horizontals
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // verticals
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]]
        ];

        for (let i = 0; i < posSeqs.length; i++) {
            const winner = this.winnerHelper(posSeqs[i]);
            if (winner != null) {
                return winner;
            }
        }

        return null;
    }

}


module.exports = Board;
