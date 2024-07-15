import { FC, useContext } from "react";
import { GameContext } from "../context/GameProvider";

interface MineSweeperProps {}

const MineSweeper: FC<MineSweeperProps> = () => {

    const mineSweeper = useContext(GameContext)



    return <main>
        <div className="game" style={{
            width: `${1.5 * mineSweeper.size}rem`,
            height: `${1.5 * mineSweeper.size}rem`,
            gridTemplateColumns: `repeat(${mineSweeper.size}, ${1.5}rem)`,
            gridTemplateRows: `repeat(${mineSweeper.size}, ${1.5}rem)`}}>
            {mineSweeper.board.map((number, index) =>
                <button key={index} className="tile" onClick={() => mineSweeper.playIndex(index)}>{number}</button>
            )}
        </div>
    </main>
}

export default MineSweeper