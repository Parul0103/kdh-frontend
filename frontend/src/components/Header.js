
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex justify-content-between">

          <div class="logo">
            <h1><a href="/">Kapoor Di Hatti</a></h1>

          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
              <li><Link class="nav-link scrollto" to="/cart">Cart</Link></li>
              <li><Link class="nav-link scrollto" to="/login">Login</Link></li>
              <li><Link class="nav-link scrollto" to="/register">Register</Link></li>
              {/* <li><a class="nav-link scrollto" href="/adminlogin">Admin</a></li> */}
              <li><Link class="nav-link scrollto" to="/adminlogin">Admin</Link></li>
              <li class="dropdown"><a href="#"><span>All Products</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Vegetables and Fruits</a></li>
                  <li class="dropdown"><a href="#"><span>Self care</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                  <li><a href="#">Baby Care</a></li>
                  <li><a href="#">Cleaning Essentials</a></li>
                  <li><a href="#">Sweet Tooth</a></li>
                    </ul>
                  </li>
                      <li><a href="#">Vegetables and Fruits</a></li>
                      <li><a href="#">Organic and Gourmet</a></li>
                      <li><a href="#">Bakery and Biscuits</a></li>
                      <li><a href="#">Atta, Rice & Daal</a></li>
              
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact"></a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

    </div>
  )
}
