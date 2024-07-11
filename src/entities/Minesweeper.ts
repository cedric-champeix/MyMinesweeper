export class Minesweeper {
    private board: Array<number>;
    private size: number;

    constructor(size: number = 10) {
        this.size = size
        this.board = new Array<number>(size)
    }

    private getIndex(x: number, y: number): number {
        return x + this.size * y
    }

    private isBomb(): boolean {
        return Math.random() < 0.4 ? true : false
    }

    private calcNbBomb(x: number, y: number): number {
        let nb: number = 0

        if (this.board[this.getIndex(x - 1, y - 1)] === -1)
            nb++
        if (this.board[this.getIndex(x, y - 1)] === -1)
            nb++
        if (this.board[this.getIndex(x + 1, y - 1)] === -1)
            nb++
        if (this.board[this.getIndex(x - 1, y)] === -1)
            nb++
        if (this.board[this.getIndex(x + 1, y)] === -1)
            nb++
        if (this.board[this.getIndex(x - 1, y + 1)] === -1)
            nb++
        if (this.board[this.getIndex(x, y + 1)] === -1)
            nb++
        if (this.board[this.getIndex(x + 1, y + 1)] === -1)
            nb++

        return nb;
    }

    generateBoard() {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.isBomb()) {
                    this.board[this.getIndex(x, y)] = -1
                }
            }
        }

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                const index = this.getIndex(x, y)
                if (this.board[index] !== -1)
                    this.board[index] = this.calcNbBomb(x, y)
            }
        }
        
    }

    displayBoard() {
        for (let y = 0; y < this.size; y++) {
            let line = ""
            for (let x = 0; x < this.size; x++) {
                line += this.board[this.getIndex(x, y)] + " "
            }
            console.log(line);
        }
    }
}