import React from "react";

function Nav() {
  return (
    <div className="topnav">
      <a href="/" className="active">
        Recent Questions
      </a>
      <a href="/">Most Answered</a>
      <a href="/">Most Viewed</a>
      <a href="/">Most Voted</a>
    </div>
  );
}

export default Nav;
