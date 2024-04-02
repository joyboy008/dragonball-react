import React from "react";

function Header() {
  return (
    <React.Fragment>
  <header className="header">
    <nav>
      <div className="title">
        <a href="https://dragon-ball-jxjqe.ondigitalocean.app">
          Dragon Ball
          <img src="/src/images/Dragon-Balls-DB.png" alt="balls" /></a>
      </div>
      <div className="menu">
        <a href="#refdbz" className="options">DBZ</a>
        <a href="#refgt" className="options">GT</a>
        <a href="#refsuper" className="options">Super</a>
        <a href="#refdaima" className="options">Daima</a>
      </div>
    </nav>
  </header>
    </React.Fragment>
  );
}

export default Header;
