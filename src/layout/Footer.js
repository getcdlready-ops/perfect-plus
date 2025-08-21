import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  switch (footer) {
    case 1:
      return <Footer1 scrollTop={scrollTop} />;
    case 3:
      return <Footer3 scrollTop={scrollTop} />;
    case 4:
      return <Footer4 scrollTop={scrollTop} />;
    default:
      return <DefaultFooter scrollTop={scrollTop} />;
  }
};
export default Footer;
const FollowIcon = () => (
    <Fragment>
      <Link
        legacyBehavior
        href="https://www.facebook.com/people/Perfect-Plus-By-Pacific-Truck-School/61573949159593/"
      >
        <a>
          <i className="fab fa-facebook-f" />
        </a>
      </Link>
      <Link
        legacyBehavior
        href="https://www.instagram.com/perfect_plus_cdl_school?igsh=ZXd0dGVjNHlrcmFh"
      >
        <a>
          <i className="fab fa-instagram" />
        </a>
      </Link>
      <Link legacyBehavior href="https://g.co/kgs/ecLPxQ1">
        <a>
          <i className="fab fa-google" />
        </a>
      </Link>
    </Fragment>
  ),
  Courses = () => (
    <Fragment>
      <li>
        <Link legacyBehavior href="/course-details">
          Life Coach
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/course-details">
          Business Coach
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/course-details">
          Health Coach
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/course-details">
          Development
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/course-details">
          Web Design
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/course-details">
          SEO Optimize
        </Link>
      </li>
    </Fragment>
  ),
  Resources = () => (
    <Fragment>
      <li>
        <Link legacyBehavior href="/contact">
          Community
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Support
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Video Guides
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Documentation
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Security
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Template
        </Link>
      </li>
    </Fragment>
  ),
  FooterBottom = () => (
    <Fragment>
      {/* <li>
        <Link legacyBehavior href="/faqs">
          Faqs
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Links
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/about">
          About
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Payments
        </Link>
      </li> */}
    </Fragment>
  ),
  CopyRight = () => (
    <p className="text-sm">
      © {new Date().getFullYear()}.{" "}
      <Link legacyBehavior href="/">
        PACIFIC TRUCK SCHOOL
      </Link>{" "}
      All rights reserved.
    </p>
  ),
  DefaultFooter = ({ scrollTop }) => (
    <footer className="main-footer bg-blue">
      <div className="container">
        <div className="row justify-content-between text-white pt-75">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 532 Houston St,
                      West Sacramento, CA 95691, United States
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+1 916-595-9200</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Saturday,
                      <br /> 08 am - 06 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <Link legacyBehavior href="/about">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-dark-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer1 = ({ scrollTop }) => (
    <footer className="main-footer bg-blue text-white pt-12">
      <div className="px-2">
        <div className="flex flex-col md:flex-row w-full items-start  justify-between">
          {/* View More or Media */}
          <div className="col-lg-4 col-sm-12">
            <div className="footer-widget">
              <h5 className="footer-title">Our Training in Action</h5>
              <p>
                Experience our hands-on training environment — designed to get
                you road-ready and confident.
              </p>
              <div className="h-[100px] w-[150px] mt-4 ml-2">
                <img
                  src="assets/images/logo-white.png"
                  alt="Training"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-sm-6">
            <div className="footer-widget contact-info-widget">
              <h5 className="footer-title">Contact Us</h5>
              <ul className="space-y-3">
                <li>
                  <i className="fas fa-map-marker-alt mr-2" />
                  <a
                    href="https://www.google.com/maps?q=Pacific+Truck+School,+532+Houston+Street,+West+Sacramento,+CA+95691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Pacific Truck School
                    <br />
                    532 Houston Street, West Sacramento, CA 95691
                  </a>
                </li>

                <li>
                  <i className="far fa-clock mr-2" />
                  Office Hours: Monday – Friday, 8 AM – 5 PM PT
                </li>
                <li>
                  <i className="fas fa-phone mr-2" />
                  <a href="tel:+19165959200">Phone: 916-595-9200</a>
                </li>

                <li>
                  <i className="fab fa-whatsapp mr-2" />
                  WhatsApp: 916-595-9200
                </li>

                <li>
                  <i className="far fa-envelope mr-2" />
                  <a href="mailto:contact@getcdlready.com">
                    contact@getcdlready.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* About Us */}
          <div className="col-lg-4 col-sm-6 mt-1">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Pacific Truck School</h5>
              <p>
                Pacific Truck School offers high-quality CDL training programs
                in West Sacramento, CA. Whether you’re just starting your
                trucking journey or need a refresher, we’re here to help every
                step of the way.
              </p>
              <h5 className="pt-5 pb-4">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="copyright-area bg-dark-blue mt-10">
        <div className="container">
          <div className="copyright-inner flex justify-between items-center py-4">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>

        {/* Scroll To Top */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer3 = ({ scrollTop }) => (
    <footer className="main-footer bg-black">
      <div className="container">
        <div className="row justify-content-between text-white pt-65">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h5 className="footer-title">Newsletter</h5>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h6>Every Single Updates and Notifications</h6>
                    <div className="email-input">
                      <label htmlFor="footer-newsletter">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="footer-newsletter"
                        placeholder="Enter Email"
                        required=""
                      />
                    </div>
                    <button className="theme-btn style-two" type="submit">
                      sign up <i className="fas fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-light-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  ),
  Footer4 = ({ scrollTop }) => (
    <footer className="main-footer footer-two bg-blue-two text-white">
      <div className="container">
        <div className="logo-inner style-two pt-85 pb-35">
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two1.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two5.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two3.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two4.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two2.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link legacyBehavior href="/about">
              <img
                src="assets/images/client-logos/client-logo-two6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
        <div className="row large-gap justify-content-between pt-85">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-25">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo-four.png" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp{" "}
              </p>
              <div className="social-style-one pt-10">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget contact-info-widget">
              <h5 className="footer-title">Get In Touch</h5>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, 2nd
                  Block, New York
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone" />{" "}
                  <a href="callto:+0123456789">+012 (345) 67 89</a>
                </li>
                <li>
                  <i className="far fa-clock" /> Sunday - Friday,
                  <br /> 08 am - 05 pm
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget gallery-widget">
              <h5 className="footer-title">Gallery</h5>
              <div className="gallery-widget-wrap">
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery1.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery1.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery2.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery2.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery3.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery3.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery4.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery4.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery5.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery5.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery6.jpg" alt="Gallery" />
                  <a href="assets/images/widgets/gallery6.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  );
