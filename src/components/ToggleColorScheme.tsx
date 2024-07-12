import { FC, useContext } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from "../context/ThemeProvider";

interface ToggleColorSchemeProps {}

const ToggleColorScheme: FC<ToggleColorSchemeProps> = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return <div style={{width: 100}}>
        <DarkModeSwitch checked={theme === 'dark'}
                        onChange={() => toggleTheme()}
                        size={40}/>
    </div>
}

export default ToggleColorScheme