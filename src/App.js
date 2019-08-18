import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from "./components/Menu/Menu"

import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Universities from './pages/Universities/Universities';
import University from './pages/University/University';
import Test from './pages/Test/Test';





import  AppStyle from './AppStyle.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {
  return (
    <>          
      <AppStyle>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/universities" component={Universities} />
          <Route path="/university" component={University} />
          <Route path="/test" component={Test} />
        </Router>
      </AppStyle>

    </>
  );

}

export default App;
