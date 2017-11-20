import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from "./util/session_api_util";
import configureStore from './store/store';
import * as SessionActions from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.SessionActions = SessionActions;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
