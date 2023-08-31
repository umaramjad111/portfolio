import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  main_nav">
    <div class="container-fluid">
      <a class="navbar-brand mainHeading" href="#"> <span>U</span>MAR</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT ME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SERVICES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
          <button className='contact_btn'>GET INTOUCH ME</button>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}
