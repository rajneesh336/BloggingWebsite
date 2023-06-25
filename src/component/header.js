import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [items, setItems] = useState([]);
  
  const handleButtonClick1 = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    const storedIds = JSON.parse(localStorage.getItem("ids"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-sm">
        <nav className="navbar navbar-expand-lg navbar-dark cyan fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <img src="images/nav-logo.png" alt="nav-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-4"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={handleButtonClick1}>
                    About
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Favourites
                  </a>


                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ minWidth: "300px", marginTop: "15%" }}
                  >
                    {items &&
                      items.map((item) => (
                        <>
                          <Link className="dropdown-item" to={`blog-detail?postId=${item.id}&userId=${item.userId}`}>
                            <div>
                              <h6 className="dropdown-header"><b>{item.title}</b></h6>
                              <p className="dropdown-item-text">
                                {item.body}
                              </p>
                            </div>
                          </Link>
                        </>
                      ))}
                  </div>
                  
                </li>


                <li className="nav-item">
                  <a className="nav-link" onClick={handleButtonClick1}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
