import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles}  from "./Themes.js";
import { useState } from "react";

const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`;

const Navigation = () => {

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return ( 
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>    
            <GlobalStyles />
            <StyledApp>  
                <div className="nav-page">
                    <div className="dark-mode">
                        <button onClick={() => themeToggler()}>click</button>
                    </div>
                    <h2>Crossline</h2>
                    <li>    
                        <Link to="/">Home</Link>
                        <Link to="/test">Test</Link>
                    </li>
                </div>
            </StyledApp>
        </ThemeProvider>
     );
}
 
export default Navigation;