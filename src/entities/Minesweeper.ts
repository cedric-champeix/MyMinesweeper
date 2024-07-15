export enum Size {
    SMALL = 9,
    MEDIUM = 15,
    LARGE = 25
}

export class Minesweeper {
    
    private _board: Array<number>;
    private _size: number;

    constructor(size: number = Size.MEDIUM) {
        this._size = size
        this._board = new Array<number>(size)

        this.generateBoard()
    }

    private getIndex(x: number, y: number): number {
        return x + this._size * y
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

    private generateBoard() {
        for (let y = 0; y < this._size; y++) {
            for (let x = 0; x < this._size; x++) {
                if (this.isBomb())
                    this.board[this.getIndex(x, y)] = -1
            }
        }

        for (let y = 0; y < this._size; y++) {
            for (let x = 0; x < this._size; x++) {
                const index = this.getIndex(x, y)
                if (this.board[index] !== -1)
                    this.board[index] = this.calcNbBomb(x, y)
            }
        }
    }

    public playIndex(x: number): boolean {
        console.log("INDEX: ", x);

        if (this._board[x] === -1)
            return false

        return true
    }

    public get board(): Array<number> {
        return this._board;
    }

    public get size(): number {
        return this._size;
    }

    public set size(size: Size) {
        this._size = size;
    }
    
}