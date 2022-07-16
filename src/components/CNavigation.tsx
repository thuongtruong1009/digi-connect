import React, { useState } from 'react';

const CNavigation: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const styles = {
    popIn: {
      display: 'flex',
    },
    popOut: {
      display: 'none',
    },
    toggleIn: {
      display: 'block',
    },
    toggleOut: {
      display: 'none',
    },
  };
  const openNavigation = () => setToggle(!toggle);

  return (
    <header>
      <div>
        <img src="/logo_dark.png" alt="logo" />
      </div>
      <nav className="navigation">
        <div className="active">
          <a href="#Homepage">Homepage</a>
        </div>
        <div>
          <a href="#Candidate">Candidate</a>
        </div>
        <div>
          <a href="#Enterprise">Enterprise</a>
        </div>
        <div>
          <a href="#Job">Job</a>
        </div>
        <div>
          <a href="#News">News</a>
        </div>
        <div>
          <a href="#Notification">Notification</a>
        </div>
        <div>
          <a href="#Login">Login</a>
          <a href="/signup">Signup</a>
        </div>
        <div>
          <a href="#Language">
            <span>Vi</span>En
          </a>
        </div>
      </nav>
      <nav className="mobile_navigation">
        <div className="navigation_toggle">
          <img
            id="navigation_toggle_close"
            src="/home/header/mobile_toggle_close.svg"
            alt="toogle_close"
            onClick={openNavigation}
            style={toggle ? styles.toggleIn : styles.toggleOut}
          />
          <img
            id="navigation_toggle_open"
            src="/home/header/mobile_toggle_light.svg"
            alt="toogle_open"
            onClick={openNavigation}
            style={toggle ? styles.toggleOut : styles.toggleIn}
          />

          <div
            className="mobile_navigation_list"
            style={toggle ? styles.popIn : styles.popOut}
          >
            <ul>
              <li className="active">Homepage</li>
              <li>Candidate</li>
              <li>Enterprise</li>
              <li>Job</li>
              <li>News</li>
              <li>Notification</li>
              <li>
                <span>Login</span>
                <span>Signup</span>
              </li>
              <li>En</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CNavigation;
