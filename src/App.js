import "./GuessGameStyle.css";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {GuessApp} from "./GuessApp.js";

function App() {
    
return (
    <Router>
      <GuessApp />
    </Router>
  );
}

export default App;
