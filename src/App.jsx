
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/Profile/Profile";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route exact path ="/login"><Login/></Route>
          <Route path="/register"><Register/></Route>
          <Route path="/profile/:username"><Profile/></Route>
        </Switch>
      </Router>
      <Login/>
      
    </>
  );
}

export default App;
