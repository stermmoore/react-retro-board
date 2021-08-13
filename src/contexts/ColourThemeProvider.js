import { createContext } from "react";

const ColourThemeContext = createContext();

function ColourThemeProvider({children, setTheme, theme}) {
    return(
        <ColourThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ColourThemeContext.Provider>
    )
}

export { ColourThemeContext, ColourThemeProvider };