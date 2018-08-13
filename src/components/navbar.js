import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar sticky-top navbar-light bg-light">
//         <div className="">
//           <Link to={'/'} className="navbar-brand">fair</Link>
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
//             <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
//             <li className="nav-item"><Link className="button-main" to="/">Button</Link></li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
        <Link to={'/'} className="navbar-brand" id="fair-logo-text">fair</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="button-main" to="/">Browse Cars</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
