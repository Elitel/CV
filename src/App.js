import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navigation from './components/Navigation/Navigation';


import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navigation />

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <React.Fragment>
    //     <AuthContext.Provider value={{
    //       token: this.state.token,
    //       userId: this.state.userId,
    //       signin: this.signin,
    //       logout: this.logout
    //     }}>
    //       <Switch>
    //         <Redirect from="/" to="/main" exact />
    //         {this.state.token && <Redirect from="/sign_in" to="/events" exact />}
    //         {!this.state.token && <Route path="/sign_up" component={SignUpPage} />}
    //         {!this.state.token && <Route path="/sign_in" component={SignInPage} />}
    //         <Route path="/main" component={MainPage} />
    //         <Route path="/events" component={EventsPage} />
    //         <Route path="/services" component={ServicesPage} />
    //         <Route path="/contacts" component={ContactsPage} />
    //         {this.state.token && <Route path="/bookings" component={BookingsPage} />}
    //         {!this.state.token && <Redirect to="/sign_in" exact />}
    //       </Switch>
    //     </AuthContext.Provider>
    //   </React.Fragment>
    // </BrowserRouter>

    // <div className="App">
    //   <header>
    //     <Navigation />
    //   </header>
    // </div>
  );
}

export default App;
