import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section className="blog-section py-8 rpy-100 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="section-title text-center mb-55">
              <span className="sub-title mb-25">News &amp; Blog</span>
              <h2>Read Latest Insights From the Trucking World</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Blog 1 */}
          <div className="col-lg-6">
            <div className="blog-item big-item wow fadeInUp delay-0-2s">
              <div className="blog-image">
                <img
                  src="/assets/images/male-worker-with-bulldozer-sand-quarry_1303-28112.jpeg"
                  alt="Blog"
                />
              </div>
              <div className="blog-content">
                <span className="date">
                  <span>10</span> July
                </span>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      How to Pass Your CDL Test the First Time: Top Tips from
                      Instructors
                    </Link>
                  </h4>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user" />
                      <Link legacyBehavior href="#">
                        By Admin
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <Link legacyBehavior href="#">
                        Comments (12)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
              <div className="blog-image">
                <img src="/assets/images/1308.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <span className="date">
                  <span>28</span> June
                </span>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user" />
                      <Link legacyBehavior href="/blog">
                        By PCDL Team
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <Link legacyBehavior href="/blog">
                        Comments (8)
                      </Link>
                    </li>
                  </ul>
                  <h5>
                    <Link legacyBehavior href="/blog-details">
                      What To Expect During Your First Week of CDL Training
                    </Link>
                  </h5>
                  <p>
                    Learn the daily routine, truck simulator, and safety
                    training timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="blog-item wow fadeInUp delay-0-6s">
              <div className="blog-image">
                <img src="/assets/images/1286.jpg" alt="Blog" />
              </div>
              <div className="blog-content">
                <span className="date">
                  <span>15</span> July
                </span>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user" />
                      <Link legacyBehavior href="/blog">
                        By Pacific Truck School
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      <Link legacyBehavior href="/blog">
                        Comments (3)
                      </Link>
                    </li>
                  </ul>
                  <h5>
                    <Link legacyBehavior href="/blog-details">
                      Top 5 Safety Tips Every New Truck Driver Should Know
                    </Link>
                  </h5>
                  <p>
                    Stay compliant and confident on the road with these
                    essential habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="blog-more-btn pt-30 pb-36 text-center">
          <Link legacyBehavior href="/blog">
            <a className="theme-btn style-three">
              View More News <i className="fas fa-arrow-right" />
            </a>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
