import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { ChevronLeft, X } from "lucide-react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const openmenu = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <section className="wrapper">
          <div className="header-item-left">
            <Link to="/" className="brand">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="header-item-center">
            <div
              onClick={() => {
                setActive(false);
                setSubActive(false);
              }}
              className={`overlay ${active ? "active" : ""}`}
            ></div>
            <nav className={`menu ${active ? "active" : ""}`} id="menu">
              <div className="menu-mobile-header">
                <button
                  onClick={() => setSubActive(false)}
                  type="button"
                  className="menu-mobile-arrow"
                >
                  <ChevronLeft />
                </button>
                <div className="menu-mobile-title"></div>
                <button
                  onClick={() => setActive(false)}
                  type="button"
                  className="menu-mobile-close"
                >
                  <X />
                </button>
              </div>
              <ul className="menu-section">
                <li
                  className={`menu-item-has-childre`}
                  onClick={() => setSubActive(true)}
                >
                  <Link to="/" className="Categoriessss">
                    Categories{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 19.25C15.1086 19.25 19.25 15.1086 19.25 10C19.25 4.89137 15.1086 0.75 10 0.75C4.89137 0.75 0.75 4.89137 0.75 10C0.75 15.1086 4.89137 19.25 10 19.25Z"
                        stroke="/BCBCBC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.41 9L10 11L7.59 9"
                        stroke="/BCBCBC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                  <div
                    className={`menu-subs menu-column-1  ${
                      subActive ? "active" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="/">Register</a>
                      </li>
                      <li>
                        <a href="/">Questions</a>
                      </li>
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">Term of Cookies</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="menu-item">
                  <a href="/">Schedule</a>
                </li>
                <li className="menu-item">
                  <a href="/">Services</a>
                </li>
                <li className="menu-item">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-item-right">
            <div className="main-icon-form-media">
              <div className="wsdd">
                <ul>
                  <li className="menu-item">
                    <a href="/">
                      Cart <i className="bi bi-bag"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="menu-mobile-toggle"
              onClick={openmenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};
