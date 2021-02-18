import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from "./Components/Posts";
const App = () => {
  return (
    <Router>
      <div className="app">
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
            textTransform: "uppercase",
          }}
        >
          Blog Posts
        </h1>
        <Link to="/"></Link>
        <Route path="/" component={Posts} exact={true} />
      </div>
    </Router>
  );
};

export default App;
