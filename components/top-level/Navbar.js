import React, { useRef, useState, useEffect, useContext } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { BsMoonStarsFill, BsFillSunFill, BsXLg } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

import AllContent from "../../contexts/AllContext";
const Navbar = () => {
  let ref = useRef();
  const [showToggleMode, setShowToggleMode] = useState(true);
  const [dropdownMenuIcon, setDropdownMenuIcon] = useState(true);
  const [inputData, setInputData] = useState({
    q: "",
  });
  const { darkMode, colorMode, setColorMode, enableDarkMode, disableDarkMode } =
    useContext(AllContent);
  const router = useRouter();
  let { q } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    if (darkMode === "enabled") {
      enableDarkMode(); // set state of darkMode on page load
      setColorMode("dark");
      setShowToggleMode(false);
    }
  }, [
    enableDarkMode,
    setColorMode,
    darkMode,
    router.isReady,
    dropdownMenuIcon,
    showToggleMode,
  ]);

  const closeDropDown = () => {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("collapse")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const toggleMainDropDown = () => {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("collapse")) {
      navbarCollapse.classList.toggle("show");
    }
  };

  let toggleIcon = () => {
    if (showToggleMode && darkMode === "disabled") {
      enableDarkMode();
      setColorMode("dark");
      setShowToggleMode(true);
    } else {
      disableDarkMode();
      setColorMode("#F7F7F7");
      setShowToggleMode(true);
    }
  };

  const handleSearchInput = (e) => {
    let d = e.target.value;
    if ((d === q) !== "") {
      setInputData({ ...inputData, [e.target.name]: d });
    }
  };

  const searchButton = (e) => {
    setInputData({});
  };

  let lastScrollTop = 0;
  let currentTop = 114;

  function scrollFunc() {
    var ypos = window.pageYOffset.toFixed();
    if (ypos >= (lastScrollTop && currentTop)) {
      if (ref.current?.classList.contains("navbar")) {
        ref.current?.classList.add("navbar-expand-pc");
        ref.current?.classList.remove("navbar-shrink-pc");
      }
    } else {
      ref.current?.classList.remove("navbar-expand-pc");
      ref.current?.classList.add("navbar-shrink-pc");
    }
    lastScrollTop = ypos;
  }

  process.browser && window.addEventListener("scroll", scrollFunc);

  let dropDownMenu =
    process.browser && document.querySelector(".drop-down-menu");

  const dropMenuClose = () => {
    if (dropDownMenu.classList.contains("dropdown-menu")) {
      dropDownMenu.classList.remove("show");
      dropDownMenu.classList.add("dropdown-menu-hidden");
    } else {
      dropDownMenu.classList.add("show");
      dropDownMenu.classList.remove("dropdown-menu-hidden");
    }
    setDropdownMenuIcon(true);
  };

  const dropMenuOpen = () => {
    if (dropDownMenu.classList.contains("dropdown-menu")) {
      dropDownMenu.classList.add("show");
      dropDownMenu.classList.remove("dropdown-menu-hidden");
    } else {
      dropDownMenu.classList.remove("show");
      dropDownMenu.classList.add("dropdown-menu-hidden");
    }
    setDropdownMenuIcon(false);
  };

  return (
    <>
      <nav
        onMouseLeave={dropMenuClose}
        ref={ref}
        className={`navbar navbar-expand-lg text-${
          colorMode === "#F7F7F7" ? "#38444d" : "white"
        } bg-${colorMode === "#F7F7F7" ? "light" : "black"}`}
      >
        <div className="container-fluid">
          <Link href="/">
            <a
              className={`select-none navbar-brand font-bold text-${
                colorMode === "#F7F7F7" ? "black" : "white"
              }`}
              onClick={closeDropDown}
            >
              <h1> CodesPick</h1>
            </a>
          </Link>
          <div className="flex mobile-items">
            <span className="toggle-icon-mobile">
              {showToggleMode ? (
                <BsMoonStarsFill
                  className="cursor-pointer moon-star"
                  onClick={toggleIcon}
                />
              ) : (
                <BsFillSunFill
                  className={`cursor-pointer sun-ico`}
                  onClick={toggleIcon}
                />
              )}
            </span>
            <form
              action="/search"
              className="search-form-mobile flex form-1-mobile"
              role="search"
              // name="q"
              method="GET"
            >
              <input
                ref={ref}
                className={`search-bar border-${
                  colorMode === "#F7F7F7" ? "black" : "white"
                }`}
                type="text"
                name="q"
                id="inputSearch"
                onChange={handleSearchInput}
                defaultValue={inputData.q && ""}
                autoComplete="off"
              />
              <button
                type="submit"
                onClick={searchButton}
                className="text-2xl cursor-pointer"
                htmlFor="inputSearch"
              >
                <FcSearch />
              </button>
            </form>
          </div>
          <button
            className={`navbar-toggler bg-${
              colorMode === "#F7F7F7" ? "white" : "black"
            } text-${colorMode === "#F7F7F7" ? "black" : "white"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMainDropDown}
          >
            <RiMenu3Line className="font-bold" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li onClick={closeDropDown} className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    }  select-none`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/c">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    C
                  </a>
                </Link>
              </li>
              <li
                onClick={dropMenuOpen}
                onBlur={dropMenuClose}
                onMouseOver={dropMenuOpen}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link active-path dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="flex justify-center select-none">
                    {" "}
                    Dropdown{" "}
                    {dropdownMenuIcon ? (
                      <BsFillCaretDownFill className="drop-icon-arrow" />
                    ) : (
                      <BsFillCaretUpFill className="drop-icon-arrow" />
                    )}
                  </span>
                </a>
                <ul
                  onMouseLeave={dropMenuClose}
                  onMouseOut={dropMenuClose}
                  className="dropdown-menu drop-down-menu select-none"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/cplusplus">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    C++
                  </a>
                </Link>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/java">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    Java
                  </a>
                </Link>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/python">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    Python
                  </a>
                </Link>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/javascript">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    JavaScript
                  </a>
                </Link>
              </li>
              <li
                onMouseEnter={dropMenuClose}
                onClick={closeDropDown}
                className="nav-item"
              >
                <Link href="/tutorial/php">
                  <a
                    className={`nav-link active-path text-${
                      colorMode === "#F7F7F7" ? "black" : "white"
                    } select-none`}
                  >
                    Php
                  </a>
                </Link>
              </li>

              <form
                action="/search"
                className="search-form-mobile flex form-2-mobile"
                role="search"
                method="GET"
              >
                <input
                  ref={ref}
                  className={`search-bar border-${
                    colorMode === "#F7F7F7" ? "black" : "white"
                  }`}
                  type="text"
                  id="inputSearch"
                  name="q"
                  onChange={handleSearchInput}
                  defaultValue={inputData.q && ""}
                  autoComplete="off"
                />
                <button
                  onClick={searchButton}
                  className="text-2xl cursor-pointer"
                  htmlFor="inputSearch"
                >
                  <FcSearch />
                </button>
              </form>
            </ul>
            {/* <BsMoonStarsFill className="cursor-pointer" onClick={toggleIcon} /> */}
            <span className="toggle-icon">
              {showToggleMode ? (
                <BsMoonStarsFill
                  className="cursor-pointer moon-star"
                  onClick={toggleIcon}
                />
              ) : (
                <BsFillSunFill
                  className="cursor-pointer sun-ico"
                  onClick={toggleIcon}
                />
              )}
            </span>

            <form
              action="/search"
              method="GET"
              className="search-form-2 lg:flex"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="inputSearch"
                name="q"
                onChange={handleSearchInput}
                defaultValue={inputData.q && ""}
                autoComplete="off"
              />
              <button
                onClick={searchButton}
                className={`custom-btn btn btn-outline-${
                  colorMode === "#F7F7F7" ? "success" : "primary"
                } text-${colorMode === "#F7F7F7" ? "dark" : "light"}`}
                type="submit"
                htmlFor="inputSearch"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
