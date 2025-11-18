"use client";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="navbar">
      <div className="logo">SignStix</div>

      <nav className="navbar-nav">
        <div className="nav-item">
          <a href="#">How it works</a>
        </div>

        <div
          className="nav-item dropdown"
          onMouseEnter={() => setOpenDropdown("products")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#">Products & CMS</a>
          {openDropdown === "products" && (
            <div className="dropdown-menu">
              <a href="#">CMS Dashboard</a>
              <a href="#">Integrations</a>
              <a href="#">APIs</a>
            </div>
          )}
        </div>

        <div
          className="nav-item dropdown"
          onMouseEnter={() => setOpenDropdown("solutions")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="#">Solutions</a>
          {openDropdown === "solutions" && (
            <div className="dropdown-menu">
              <a href="#">Retail</a>
              <a href="#">Education</a>
              <a href="#">Healthcare</a>
              <a href="#">Hospitality</a>
            </div>
          )}
        </div>

        <div className="nav-item"><a href="#">Resources</a></div>
        <div className="nav-item"><a href="#">Company</a></div>
      </nav>

      <div className="navbar-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Free Trial</button>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .navbar {
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
          z-index: 1000;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          position: relative;
        }

        .nav-item > a {
          padding: 8px 0;
          font-size: 1rem;
          color: #111;
          transition: color 0.2s;
        }

        .nav-item > a:hover {
          color: #0066ff;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          background: white;
          border-radius: 6px;
          min-width: 180px;
          padding: 8px 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dropdown-menu a {
          display: block;
          padding: 8px 20px;
          font-size: 0.95rem;
          color: #111;
        }

        .dropdown-menu a:hover {
          background: #f5f5f5;
        }

        .navbar-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 500;
          transition: 0.2s;
          border: 1px solid transparent;
        }

        .btn-outline {
          border-color: #0066ff;
          color: #0066ff;
        }

        .btn-outline:hover {
          background: #0066ff;
          color: white;
        }

        .btn-primary {
          background: #0066ff;
          color: white;
        }

        .btn-primary:hover {
          background: #0052cc;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-wrap: wrap;
            padding: 12px 20px;
          }
          .navbar-nav {
            width: 100%;
            justify-content: space-around;
            margin-top: 12px;
          }
          .navbar-buttons {
            width: 100%;
            justify-content: space-around;
            margin-top: 12px;
          }
        }
      `}</style>
    </header>
  );
}
