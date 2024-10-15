import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminTurf from './Components/AdminTurf';
import Profile from './Components/Profile';
import Booking from './Components/Booking';
import Register from './Components/Register';
import Login from './Components/Login';
import TurfList from './Components/TurfList';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Switch>
          <Route path="/" exact component={TurfList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/book" component={Booking} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin/turfs" component={AdminTurf} />
        </Switch>
      </div>
    </Router>
   
  );
};

export default App;
