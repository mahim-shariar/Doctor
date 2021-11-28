import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthProvider from './components/context/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import Doctors from './components/Our Doctor/Doctors';
import TopNews from './components/Top news/TopNews';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/serviceDetails/ServiceDetails';
import NotFount from './components/notFount/NotFount'

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/' >
              <Home></Home>
            </Route>
            <Route path='/login' >
              <Login></Login>
            </Route>
            <Route path='/signUp' >
              <SignUp></SignUp>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path='/ourDoctor'>
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path='/servicedetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/topNews'>
              <TopNews></TopNews>
            </Route>
            <Route exact path='*'>
              <NotFount></NotFount>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
