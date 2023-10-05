import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const AboutPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <header id="header" class="main-header">
        <ul class="main-header-links ">
          <li class="main-header-link">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              class="pd28-subMenu"
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="https://github.com/MinhTh2nh">Profile</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
              <a href="https://github.com/MinhTh2nh">Social Media</a>
              </MenuItem>
            </Menu>
          </li>
          <li class="main-header-link">
            <Link to="/" class="pd28">
              Home
            </Link>
            <ul className="menu-sub">
              <li className="menu-sub-li">Site 1</li>
              <li className="menu-sub-li">Site 2</li>
            </ul>
          </li>
          <li class="main-header-link">
            <Link to="/about" class="pd28">
              About
            </Link>
          </li>
          <li class="main-header-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div class="main-header-bell">
          <i class="far pd28 fa-bell"></i>
        </div>
        <div id="mobileMenu" class="mobile-menu">
          <i class="pd28 fa-solid fa-bars menu-icon"></i>
        </div>
      </header>
      <h2> Đây là page About</h2>
    </div>
  );
};

export default AboutPage;
