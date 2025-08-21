"use client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import { Blog, Courses, Home, Pages } from "./Menu";
import MobileHeader from "./MobileHeader";
import { useRouter } from "next/router";
import { Clock, Phone } from "lucide-react";

const Header = ({ header }) => {
  const router = useRouter();
  useEffect(() => {
    stickyNav();
  }, []);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (router && router.pathname) {
      setPath(router.pathname);
    }
  }, [router]);

  const [navToggle, setNavToggle] = useState(false);
  switch (header) {
    case 1:
      return (
        <Header1
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          router={path}
        />
      );
    case 3:
      return <Header3 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 4:
      return <Header4 navToggle={navToggle} setNavToggle={setNavToggle} />;

    default:
      return (
        <DefaultHeader navToggle={navToggle} setNavToggle={setNavToggle} />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle, router }) => (
    <Fragment>
      <header className="main-header">
        <HeaderTop />
        <div className="header-upper">
          <div className="container-fluid clearfix  ">
            <div className="header-inner   d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      className="py-2"
                      style={{
                        maxWidth: 120,
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo  br-10 p-15">
                      <Link legacyBehavior href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle((prev) => !prev)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse  clearfix ${
                      navToggle ? "visible" : "hidden"
                    }`}
                  >
                    <Menus router={router} />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Header3 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-three">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo">
                      <Link legacyBehavior href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo-two.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    {/* <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button> */}
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>

              <div className="menu-btn-sidebar d-flex align-items-center">
                <div
                  className="menu-sidebar"
                  onClick={() => sidebarOnclick()}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Header4 = ({ navToggle, setNavToggle }) => (
    <header className="main-header header-four">
      {/* Header-Top */}
      <div className="header-top bg-light-blue text-white">
        <div className="container-fluid">
          <div className="top-inner">
            <div className="top-left">
              <p>
                <i className="far fa-clock" /> <b>Working Hours</b> : Monday -
                Friday, 08am - 05pm
              </p>
              <p>
                <i className="fas fa-phone" /> <b>Hotline</b> :{" "}
                <a href="callto:+012(345)6789">+012 (345) 67 89</a>
              </p>
            </div>
            <div className="top-right d-flex align-items-center">
              <div className="social-style-two">
                <Link href="/contact">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </div>
              <ul className="top-menu">
                <li>
                  <Link href="/about">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-three.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo-three.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  {/* <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button> */}
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    navToggle ? "show" : ""
                  }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            {/* <div className="menu-btns d-lg-flex d-none align-items-center">
              <div className="nice-select">
                <span className="">English</span>
                <ul className="list">
                  <li data-value="English" className="option selected focus">
                    English
                  </li>
                  <li data-value="Chinese" className="option">
                    Bangla
                  </li>
                  <li data-value="Arabic" className="option">
                    Arabic
                  </li>
                </ul>
              </div>

              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Register <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two ">
        {/* Header-Top */}
        <HeaderTop />

        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix ">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg ">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-green br-10 p-15">
                      <Link legacyBehavior href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
              </div>

              <div className="menu-btn-sidebar d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Menus = ({ router }) => {
    return (
      <ul className="navigation clearfix d-none d-lg-flex">
        <li className="dropdown">
          <Link legacyBehavior href="/">
            <span
              className={
                router === "/"
                  ? "text-[#DF6B2F] font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
            >
              Home
            </span>
          </Link>
        </li>
        <li className="dropdown">
          <Link legacyBehavior href="/program">
            <span
              className={
                router === "/program"
                  ? "text-[#DF6B2F] font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
            >
              Our Packages
            </span>
          </Link>
        </li>
        <li className="dropdown">
          <Link legacyBehavior href="/contact">
            <span
              className={
                router === "/contact"
                  ? "text-[#DF6B2F] font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
            >
              Contact Us
            </span>
          </Link>
        </li>
        <li className="dropdown">
          <Link legacyBehavior href="/enrollment">
            <span
              className={
                router === "/enrollment"
                  ? "text-[#DF6B2F] font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
            >
              Enroll Now
            </span>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <span
              className={
                router === "/about"
                  ? "text-[#DF6B2F] font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
            >
              About Us
            </span>
          </Link>
        </li>
        {/* <li className="dropdown">
          <span
            className={
              router === "/blog"
                ? "text-[#DF6B2F] font-semibold cursor-pointer"
                : "font-semibold cursor-pointer"
            }
          >
            Blog
          </span>
        </li> */}
      </ul>
    );
  },
  HeaderTop = () => (
    <div className="bg-[#08006a] text-white text-xs">
      <div className="mx-auto px-3 md:px-12 py-2 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left - Timings */}
        <div className="text-center md:text-left flex items-center gap-x-2">
          <div className=" flex items-center gap-x-1">
            <Clock size={16} />
            <span className="text-[#DF6B2F] font-semibold">Mon–Fri</span>{" "}
            8am–5pm PT
          </div>
          <div className="h-4 border-l border-white"></div>
          <div className=" flex items-center gap-x-1">
            <Phone size={16} />
            <a href="tel:9165959200" className="underline" title="Call Us">
              916-595-9200
            </a>
          </div>
        </div>

        {/* Center - Call / Text */}
        {/* <div className="text-center md:text-left space-x-4"></div> */}

        {/* Right - Email + Social */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:contact@getcdlready.com"
            className="flex items-center space-x-1"
          >
            <i className="fas fa-envelope" />
            <span>contact@getcdlready.com</span>
          </a>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/people/Perfect-Plus-By-Pacific-Truck-School/61573949159593/"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://g.co/kgs/ecLPxQ1"
              target="_blank"
              rel="noreferrer"
              title="Google"
            >
              <i className="fab fa-google" />
            </a>
            <a
              href="https://www.instagram.com/perfect_plus_cdl_school?igsh=ZXd0dGVjNHlrcmFh"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="header-top bg-light-blue text-white">
    //   <div className="container-fluid">
    //     <div className="top-inner">
    //       <div className="top-left">
    //         <p>
    //           <i className="far fa-clock" /> <b>Working Hours</b> : Monday -
    //           Friday, 08am - 05pm
    //         </p>
    //       </div>
    //       <div
    //         className="top-center d-flex align-items-center"
    //         style={{ marginRight: 120 }}
    //       >
    //         <div className="social-style-two">
    //           <Link legacyBehavior target="_blank" href="">
    //             <a
    //               href="https://www.instagram.com/perfect_plus_cdl_school?igsh=ZXd0dGVjNHlrcmFh"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               <i className="fab fa-instagram" />
    //             </a>
    //           </Link>
    //           <Link href={""} target="_blank" legacyBehavior>
    //             <a
    //               href="https://www.facebook.com/share/18fv6icuto/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               <i className="fab fa-facebook-f" />
    //             </a>
    //           </Link>
    //           <Link target="_blank" legacyBehavior href="">
    //             <a
    //               href="https://g.co/kgs/ecLPxQ1"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               <i className="fab fa-google" />
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
