import React from "react";
import Routes from "routes/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { TopBar } from "components/topBar";
function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
