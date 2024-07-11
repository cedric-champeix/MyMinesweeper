import { FC } from "react";

interface NavProps {}

const Nav: FC<NavProps> = () => {
    return <nav>
        <select>
            <option value="10">EASY</option>
            <option value="25">MEDIUM</option>
            <option value="50">HARD</option>
        </select>
    </nav>
}

export default Nav