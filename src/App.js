import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import Home from "./Home";
import Test from "./Test";

function App() {

  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/test" element={ <Test /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
