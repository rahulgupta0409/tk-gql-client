import React from 'react'
import './Navigation.css'
import propTypes from 'prop-types'

export default function Navigation(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
        <img src="./image-folder/Tilak-pathology.png" alt="" height= "45px" width="45px"/>
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lab Module
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Patient</a></li>
                  <li><a className="dropdown-item" href="/">Report Entry</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Report</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary" className='bg-light'></div>
      <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary" className='bg-dark'></div> */}

    </>    
  )
}

Navigation.propTypes = {
  title: propTypes.string
}

Navigation.defaultProps = {
  title: 'Set title here'
};
