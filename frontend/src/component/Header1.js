import React from 'react'

function Header1() {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
 

  <div className="collapse navbar-collapse bg-secondary" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link mx-5 text-white" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mx-5" >
        <a className="nav-link text-white" href="#">About</a>
      </li>
	  <li className="nav-item mx-5">
        <a className="nav-link text-white" href="#">Contact</a>
      </li>
	  <li className="nav-itemmx-5">
        <a className="nav-link text-white" href="#">Register</a>
      </li>
	  <li className="nav-item mx-5">
        <a className="nav-link text-white" href="#">Login</a>
      </li>
	 
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
  )
}

export default Header1
