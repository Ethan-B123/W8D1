import React from 'react';
import Greeting from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SessionForm from "./session/session_form_container";



const App = () => (
  <div>
    <Greeting />
    <AuthRoute path="/login" component={SessionForm} />
    <AuthRoute path="/signup" component={SessionForm} />
    <h1>Bench BnB</h1>
  </div>
);

export default App;
