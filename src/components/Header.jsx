import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center mt-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid flex-column" style={{fontSize: "24px"}}>
            {props.name}
              <Link to='/'>
                <button className="btn tbn-primary" style={{fontSize: "18px"}}>
                  {props.home}
                </button>
              </Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;
