import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { reviews } from ".";
import { useState } from "react";
import { Flag, Handshake, ShieldCheck, Star, Truck } from "lucide-react";
import Slider from "react-slick";
import { index1Testimonial } from "../src/sliderProps";
import TrainingPackage from "../src/components/trainingPackage";
import BlogSection from "../src/components/blogSection";
import { useRouter } from "next/router";
import Gallery from "../src/components/gallerySection";
const Program = () => {
  const [hoverId, setHoverId] = useState();
  const router = useRouter();

  return (
    <Layout header={1} footer={1}>
      {/* <PageBanner pageName={"Training Program"} /> */}

      <section className="core-values-section py-12 md:pt-24 rpy-100 wow fadeInUp delay-0-2s">
        <TrainingPackage router={router} />
      </section>
      <section className="core-values-section py-8 rpy-100 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="core-values-image overlay">
                <img
                  src="/assets/images/2151846035.jpg"
                  alt="Core Values"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="core-values-content  p-4 bg-gray-50">
                <div className="section-title mb-6">
                  <span className="sub-title ">Our Core Values</span>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Truck className="h-6 w-6 text-[#4CAF50]" />,
                      title: "Excellence in Training",
                      desc: "We are committed to delivering top-quality education that equips our students with the skills and confidence to succeed on the road.",
                    },
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-[#F44336]" />,
                      title: "Safety First",
                      desc: "Safety is at the heart of everything we do—from our curriculum to our driving practices—ensuring our graduates are responsible and road-ready.",
                    },
                    {
                      icon: <Handshake className="h-6 w-6 text-[#FFC107]" />,
                      title: "Integrity and Respect",
                      desc: "We foster a culture of honesty, respect, and professionalism on the road.",
                    },
                    {
                      icon: <Star className="h-6 w-6 text-[#FFEB3B]" />,
                      title: "Empowerment Through Opportunity",
                      desc: "We believe in opening doors to meaningful careers by providing accessible, supportive, and career-focused training.",
                    },
                    {
                      icon: <Flag className="h-6 w-6 text-[#2196F3]" />,
                      title: "Driving America Forward",
                      desc: "Our mission goes beyond training drivers—we’re helping power the economy by preparing the workforce that keeps America moving.",
                    },
                  ].map((value, index) => (
                    <div
                      onClick={() => {}}
                      key={index}
                      className="flex items-start gap-4 bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F256E]">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 mt-1">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section rel z-1 py-130 rpy-100  bg-blue text-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title">
                  <span className="sub-title mb-15">Testimonials</span>
                  <h2>What Our Students Say</h2>
                </div>
                <p>
                  We take pride in helping our students achieve their goals.
                  Hear from real graduates who trained with us and now thrive in
                  the trucking industry.
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

            <div className="col-lg-6">
              <Slider
                {...index1Testimonial}
                className="testimonial-wrap wow fadeInRight delay-0-2s text-white"
              >
                {reviews?.map((t, idx) => (
                  <div className="testimonial-item" key={idx}>
                    <div className="testimonial-content">
                      <div className=" flex items-center justify-start! gap-9 mb-4">
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
                        {/* <span>{t.content}</span> */}
                      </div>
                      <p className="max-w-screen-sm">{t.content}</p>
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

      {/* <BlogSection /> */}
      <Gallery />
    </Layout>
  );
};
export default Program;
