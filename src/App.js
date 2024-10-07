import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import Home from './paginas/home';
import PrivateRoute from './components/privateRoute';
import About from './paginas/about';

function App() {
    return (
        <h1>Olá</h1>
    //   <Router>
    //     <Header/>
    //     <Switch>
    //       <Route path="/login" component={Login} />
    //       <Route path="/register" component={Register} />
    //       <Route path="/sobre" component={About} />
    //       <PrivateRoute path="/" component={Home} exact />
    //     </Switch>
    //     <Footer />
    //   </Router>
    );
  }
export default App;