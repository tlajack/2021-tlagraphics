import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import { StaticImage } from "gatsby-plugin-image";
import logo from "../images/icon-white.png";

const navlinks = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
];

const TheNav = styled.div`
  background-color: var(--primary);
  height: 60px;
  width: 100%;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  border-top: 8px solid var(--primary-dark);
  display: flex;
  flex-direction: row;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  .logo {
    margin: 6px;
    background-color: transparent;
    img {
      height: 40px;
      width: 40px;
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Montserrat";
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }
  .bars {
    display: none;
  }

  ul {
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    list-style: none;
    padding-inline-start: 0;
    li {
      padding: 0 20px 13px;
      position: relative;
      ul {
        background-color: var(--primary);
        margin: 0;
        padding: 0 0 0 1em;
        padding-inline-start: 0;
        display: flex;
        flex-direction: column;
        max-height: 0;
        min-width: 140px;
        /* transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.1s ease-in-out; */
        overflow: hidden;
        transition: max-height 200ms ease-in-out;
        position: absolute;
        top: 100%;
        left: 0;
        li {
          margin: 0;
          padding: 10px 20px;
          width: 100%;
        }
        li:hover {
          background-color: var(--primary-dark);
          a {
            display: block;
            color: white;
            width: 100%;
          }
        }
      }
    }
    li:hover {
      ul {
        max-height: 500px;
        /* transform: scaleY(1); */
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      transition: max-height 300ms ease-in;
      overflow: hidden;
    }
    a:hover {
      /* border-bottom: 2px solid var(--secondary-dark); */
      color: var(--secondary-light);
    }
    ul.inactive {
      max-height: 0;
      * {
        display: none;
      }
    }
    ul.active {
      margin-top: 0 !important;
      display: flex;
      max-height: 800px;
      position: absolute;
      top: 52;
      right: 0;
      flex-direction: column;
      background-color: var(--primary-dark);
      margin: 0;
      padding: 1em;
      z-index: 100;
      li {
        margin-bottom: 1em;
        ul {
          background-color: transparent;
          max-height: initial;
          margin-left: 1em;
          position: relative;
          a:hover {
            color: var(--secondary-light);
          }
        }
      }
    }

    .barContainer {
      margin-left: auto;
      padding: 12px;
      cursor: pointer;
      background-color: var(--primary-light);
      :hover {
        background-color: var(--secondary-light);
      }
    }
    .barContainer:focus {
      outline: none;
    }
    .bars {
      background: var(--primary-dark);
      display: inline-block;
      height: 3px;
      position: relative;
      width: 20px;
      top: 1px;
    }
    .bars:before,
    .bars:after {
      background: var(--primary-dark);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.3s ease-out;
      width: 100%;
    }
    .bars:before {
      top: 7px;
    }
    .bars:after {
      bottom: 7px;
    }
  }
`;

function renderSublinks(x) {
  return (
    <ul>
      {x.map((sublink, j) => (
        <li key={j}>
          <Link to={sublink.slug} title={sublink.name}>
            {sublink.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <TheNav>
      <div className="logo">
        <Link to="/" title="home">
          {/* <StaticImage src="../images/icon-white.png" alt="logo" height={40} /> */}
          <img src={logo} alt="TLA Graphics logo" />
        </Link>
      </div>
      <ul className={menuState ? "active" : "inactive"}>
        {navlinks.map((navlink, i) => (
          <li key={i}>
            <Link to={navlinks[i].slug}>{navlinks[i].name}</Link>
            {navlinks[i].sublink ? renderSublinks(navlinks[i].sublink) : null}
          </li>
        ))}
      </ul>
      <div
        className="barContainer"
        onClick={clickHandler}
        onKeyDown={clickHandler}
        role="button"
        tabIndex={0}
      >
        <span className="bars"></span>
      </div>
    </TheNav>
  );
};

export default Header;
