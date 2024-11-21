// import React from "react"
// import "../style/Nav.css"
// import Link from "next/link"
// const Nav = () => {
//   return (
//     <div>
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link className="navbar-logo" href="/">
//           Web-Development
//         </Link>
//         <div className="navbar-links">
//           <Link className="navbar-link" href="/">
//             Home
//           </Link>
//           <Link className="navbar-link" href="/About">
//             About
//           </Link>
//           <Link className="navbar-link" href="/Services">
//             Services
//           </Link>
//           <Link className="navbar-link" href="/Contacts">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   </div>
  
//   )
// }

// export default Nav
// import React, { useState } from "react"
// import "../style/Nav.css"
// import Link from "next/link"

// const Nav = () => {
//   // State for toggle
//   const [click, setClick] = useState(false)

//   // Handle hamburger click
//   const handleClick = () => setClick(!click)

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link className="navbar-logo" href="/">
//             Web-Development
//           </Link>
//           <div className="navbar-menu-icon" onClick={handleClick}>
//             {/* Hamburger Icon */}
//             <div className={click ? "bar toggle" : "bar"}></div>
//             <div className={click ? "bar toggle" : "bar"}></div>
//             <div className={click ? "bar toggle" : "bar"}></div>
//           </div>
//           <div className={`navbar-links ${click ? "active" : ""}`}>
//             <Link className="navbar-link" href="/">
//               Home
//             </Link>
//             <Link className="navbar-link" href="/About">
//               About
//             </Link>
//             <Link className="navbar-link" href="/Services">
//               Services
//             </Link>
//             <Link className="navbar-link" href="/Contacts">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Nav
"use client"
import React, { useState } from "react";
import "../style/Nav.css";
import Link from "next/link";

const Nav = () => {
  const [click, setClick] = useState(false);

  // Toggle the hamburger menu
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" href="/">
            Web-Development
          </Link>
          {/* Hamburger Icon for mobile */}
          <div className="navbar-menu-icon" onClick={handleClick}>
            <div className={click ? "bar toggle" : "bar"}></div>
            <div className={click ? "bar toggle" : "bar"}></div>
            <div className={click ? "bar toggle" : "bar"}></div>
          </div>
          {/* Navbar Links */}
          <div className={`navbar-links ${click ? "active" : ""}`}>
            <Link className="navbar-link" href="/">
              Home
            </Link>
            <Link className="navbar-link" href="/About">
              About
            </Link>
            <Link className="navbar-link" href="/Services">
              Services
            </Link>
            <Link className="navbar-link" href="/Contacts">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
