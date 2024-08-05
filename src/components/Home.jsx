import React from 'react'

const Home = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center mt-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid flex-column">
          <a className="navbar-brand mr-0" href="#">
            {props.name}
          </a>
          
        </div>
      </nav>
    </div>
  )
}

export default Home;