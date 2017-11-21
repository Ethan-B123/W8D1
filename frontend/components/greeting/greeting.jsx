import React from "react";
import { Link } from 'react-router-dom';

const greet = (currentUser, logout) => (
  <div className="greeting-div">
    <span className="greeting-text">Hello {currentUser.username}!</span>
    <button onClick={logout}>Logout</button>
  </div>
);

const links = () => (
  <div className="greeting-div">
    <Link className="greeting-span" to="/signup">signup</Link>
    <Link className="greeting-span" to="/login">login</Link>
  </div>
)


const Greeting = ({ currentUser, logout }) => (
  currentUser ? greet(currentUser, logout) : links()
)

export default Greeting;
