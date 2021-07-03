import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/AboutMe/AboutMe'
import Projects from './pages/Projects/projects';
import Education from './pages/Education/education'
import WorkExperience from './pages/WorkExperience/WorkExperience'
import WorkSection from './pages/WorkExperience/WorkSection'
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />
      <Switch>
        <Route exact path="/aboutme" component={AboutMe}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/work" component={WorkSection}></Route>
        <Route path="/" component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
