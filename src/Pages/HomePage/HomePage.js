// rafce tao const nhanh
import React from "react";
import "./HomePage.css";
import anh2 from "../../ImgSrc/anh2.jpg"
import anh3 from "../../ImgSrc/anh3.jpg"
import anh4 from "../../ImgSrc/anh4.jpg"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const HomePage = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="">
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
            <Link to="/"class="pd28">Home</Link>
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
      <div id="slider-container">
        <div class="text-content">
          <span class="text-description">
     Tấm hình nói lên tất cả :33
          </span>
        </div>
      </div>
      <div id="about-section">
        <div class="about-section-content" id="about">
          <h2 class="section-heading">Minh Thành</h2>
          <p class="section-sub-heading">Thành phố Hồ Chí Minh</p>
          <p class="about-text">
       Sinh ra và lớn lên ở TP.HCM . Hiện đang theo ngành HTTT của trường ĐH CNTT ĐHQG và là sinh viên nàm 4.       Sinh ra và lớn lên ở TP.HCM . Hiện đang theo ngành HTTT của trường ĐH CNTT ĐHQG và là sinh viên nàm 4.
       Sinh ra và lớn lên ở TP.HCM . Hiện đang theo ngành HTTT của trường ĐH CNTT ĐHQG và là sinh viên nàm 4.
       Sinh ra và lớn lên ở TP.HCM . Hiện đang theo ngành HTTT của trường ĐH CNTT ĐHQG và là sinh viên nàm 4.
          </p>
          <div class="member-list row">
            <div class="member-item text-align col col3">
              <p class="member-name t-a-c">Random</p>
              <img
                src={anh2}
                alt=""
                class="member-avt"
              />
            </div>
            <div class="member-item text-align col col3">
              <p class="member-name t-a-c">Random</p>
              <img
                src={anh3}
                alt=""
                class="member-avt"
              />
            </div>
            <div class="member-item text-align col col3">
              <p class="member-name t-a-c">Random</p>
              <img
                src={anh4}
                alt=""
                class="member-avt"
              />
            </div>
          </div>
        </div>
        <div class="tour-section" id="tour">
          <div class="about-section-content">
            <h2 class="section-heading text-white">ProductsS</h2>
            <div class="places-list row">
              <div class="place-item col col3 mt-16 ">
                <img
                  src={anh2}
                  alt=""
                  class="place-avt"
                />
                <div class="place-body">
                  <h3 class="place-heading">Nam 2</h3>
                  <p class="place-time ">Sep 2022</p>
                  <p class="place-description">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <a href="#" class="btn place-buy-btn js-buy-ticket">
                    View
                  </a>
                </div>
              </div>
              <div class="place-item col col3 mt-16 ">
                <img
                  src={anh2}
                  alt=""
                  class="place-avt"
                />
                <div class="place-body">
                  <h3 class="place-heading">Nam 3</h3>
                  <p class="place-time ">Sep 2023</p>
                  <p class="place-description">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <a href="#" class="btn place-buy-btn js-buy-ticket">
                    View
                  </a>
                </div>
              </div>
              <div class="place-item col col3 mt-16 ">
                <img
                  src={anh2}
                  alt=""
                  class="place-avt"
                />
                <div class="place-body">
                  <h3 class="place-heading">Nam 4</h3>
                  <p class="place-time ">Sep 2022</p>
                  <p class="place-description">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <a href="#" class="btn place-buy-btn js-buy-ticket">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-section-content" id="contact">
          <h2 class="section-heading">CONTACT</h2>
          <p class="section-sub-heading">Contact info!!!</p>
          <div class=" contact-content row">
            <div class="col col-half contact-info">
              <p class="form-text">
                <i class="fa-solid fa-address-book"></i> Tp.HCM
              </p>
              <p class="form-text">
                <i class="fa-solid fa-address-book"></i>Phone :{" "}
                <a href="#">0084024</a>
              </p>
              <p class="form-text">
                <i class="fa-solid fa-address-book"></i>Email :{" "}
                <a href="#"> minhthanh5346@gmail.com</a>
              </p>
            </div>
            <div class="col col-half contact-form s-col-full">
              <form action="">
                <div class="row">
                  <div class="col col-half pd8 s-col-full">
                    <input
                      type="text"
                      id=""
                      placeholder="Name"
                      required
                      class="form-control"
                    />
                  </div>
                  <div class="col col-half pd8 s-col-full">
                    <input
                      type="email"
                      id=""
                      placeholder="Email"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row mt-8 ">
                  <div class="col col-full pd8 s-col-full">
                    <input
                      type="text"
                      id=""
                      placeholder="Message"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="SEND"
                  class=" btn m-btn place-buy-btn pull-right mt-16 s-col-full "
                />
              </form>
            </div>
          </div>
        </div>
        <div class="map-section">
          <img src="/src/ImgSrc/60294816e5abae001c5260be.jpg" alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
