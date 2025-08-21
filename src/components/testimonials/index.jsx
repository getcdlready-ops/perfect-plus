import Slider from "react-slick";
import React from "react";
import { index1Testimonial } from "../../sliderProps";
import { reviews } from "../../../pages";

const Testimonial = () => {
  return (
    <section className="features-section rel z-1 py-16 rpt-100  bg-blue text-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="section-title">
                <span className="sub-title mb-15">Testimonials</span>
                <h2>What Our Students Say</h2>
              </div>
              <p>
                We take pride in helping our students achieve their goals. Hear
                from real graduates who trained with us and now thrive in the
                trucking industry.
              </p>
              <h4 className="partner-title mt-25 mb-15">
                We’ve Helped Over <span className="text-white">1,00+</span>{" "}
                Students Get CDL Certified in last 6 months
              </h4>
              <div className="partner-iamges-wrap">
                <img
                  src="assets/images/testimonials/partner1.jpg"
                  alt="Partner"
                />
                <img
                  src="assets/images/testimonials/partner2.jpg"
                  alt="Partner"
                />
                <img
                  src="assets/images/testimonials/partner3.jpg"
                  alt="Partner"
                />
                <img
                  src="assets/images/testimonials/partner4.jpg"
                  alt="Partner"
                />
                <img
                  src="assets/images/testimonials/partner5.jpg"
                  alt="Partner"
                />
                <img
                  src="assets/images/testimonials/partner6.jpg"
                  alt="Partner"
                />
                <span className="plus">+</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 px-20 md:px-0 mt-10 md:mt-0">
            <Slider
              {...index1Testimonial}
              className="testimonial-wrap wow fadeInRight delay-0-2s text-white"
            >
              {reviews?.map((t, idx) => (
                <div className="testimonial-item" key={idx}>
                  <div className="testimonial-content">
                    <div className=" flex items-center justify-start! gap-4 md:gap-9 mb-4">
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-200 text-gray-800 font-semibold flex items-center justify-center text-sm">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                      <h4>{t.name}</h4>
                    </div>
                    <p>{t.content}</p>
                    <div className="ratting">
                      {[...Array(5)].map((_, i) => (
                        <i className="fas fa-star" key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <img
        className="rectangle-dots"
        src="assets/images/shapes/rectangle-dots.png"
        alt="Shape"
      />
      <img
        className="circle-dots"
        src="assets/images/shapes/circle-dots.png"
        alt="Shape"
      />
    </section>
  );
};

export default Testimonial;
