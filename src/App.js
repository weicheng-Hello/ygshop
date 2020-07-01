import React from 'react';

import './App.scss';
import Home from "./component/home/Home"
import Community from "./component/community/Community"
import Cart from './component/cart/Cart'
import My from './component/my/My'
import Login from "./component/login/Login"
import TabBar from './component/tabbar/TabBar'
import Register from './component/register/Register'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact render={() => <TabBar><Home></Home></TabBar>}></Route>
          <Route path='/Community' exact render={() => <TabBar><Community></Community></TabBar>}></Route>
          <Route path='/Cart' exact render={() => <TabBar><Cart></Cart></TabBar>}></Route>
          <Route path='/My' exact render={() => <TabBar><My></My></TabBar>}></Route>
          <Route path='/Login' exact render={() => <Login></Login>}></Route>
          <Route path='/Register' exact render={() => <Register></Register>}></Route>
          <Redirect to='/'></Redirect>
        </Switch>
        
        {/* <TabBar></TabBar> */}
      </Router>
    </div>
  );
}

export default App;
