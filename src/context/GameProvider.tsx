import { createContext, FC, ReactNode } from "react";
import { Minesweeper } from "../entities/Minesweeper";

const mineSweeper = new Minesweeper()

export const GameContext = createContext(mineSweeper)

interface GameProviderProps {
    children: ReactNode
}

const GameProvider: FC<GameProviderProps> = ({children}) => {

    return <GameContext.Provider value={mineSweeper}>
        {children}
    </GameContext.Provider>
}

export default GameProvider