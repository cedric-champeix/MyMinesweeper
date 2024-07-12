import { createContext, FC, ReactNode } from "react";
import useLocalStorage from "use-local-storage";

console.log("hey");


type ThemeContextType = "light" | "dark";

interface ThemeContextProps {
    theme: ThemeContextType,
    toggleTheme: Function
}

export const ThemeContext = createContext<ThemeContextProps>({theme: 'light', toggleTheme: () => {}})


interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage<ThemeContextType>('app-theme', defaultDark ? 'dark' : 'light')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'

        setTheme(newTheme)
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider