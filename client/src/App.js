import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path='/bubble-page' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
