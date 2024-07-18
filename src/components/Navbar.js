import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  React.useEffect(() => {
    const myDiv = document.querySelector(".navbar-expand-lg");
    const labelText = document.querySelector(".form-check-label");
    if (props?.mode) {
      myDiv.setAttribute("data-bs-theme", "dark");
      labelText.style.color = "white";
      document.body.style.backgroundColor = "#042743";
    } else {
      myDiv.removeAttribute("data-bs-theme");
      labelText.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }, [props?.mode]);

  const handleDarkMode = () => {
    !props?.mode && props?.showAlert("Dark mode has been enabled", "success");
    props?.mode && props?.showAlert("Dark mode has been disabled", "success");
    props?.setDarkMode(!props?.mode);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary m-5"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props?.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {props?.aboutText}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input me-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleDarkMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
