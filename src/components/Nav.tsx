import { FC } from "react";
import ToggleColorScheme from "./ToggleColorScheme";

interface NavProps {}

const Nav: FC<NavProps> = () => {
    return <nav>
        <div className="nav">
            <select>
                <option value="10">EASY</option>
                <option value="25">MEDIUM</option>
                <option value="50">HARD</option>
            </select>
            <ToggleColorScheme/>
        </div>
    </nav>
}

export default Nav