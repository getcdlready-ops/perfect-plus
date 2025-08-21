import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import {
  Truck,
  ClipboardList,
  Eye,
  ShieldCheck,
  Handshake,
  Star,
  Flag,
  Sparkles,
  BookOpenText,
  CheckCircle,
  Users,
  MapPin,
} from "lucide-react";
import TrainingPackage from "../src/components/trainingPackage";
import Testimonial from "../src/components/testimonials";
import Gallery from "../src/components/gallerySection";
const About = () => {
  return (
    <Layout header={1} footer={1}>
      <PageBanner pageName={"About us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <div className="flex flex-col min-h-[100dvh] bg-white">
        <main className="flex-1">
          {/* About Us Section */}
          <section className="w-full pt-16 rpt-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Text Content */}
                <div className="space-y-1">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-4">About Us</span>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Driven by Excellence. Committed to Your Success.
                    </h2>
                  </div>
                  <p className="mb-2">
                    Founded in January 2025, our Pacific Truck School was
                    created with a clear purpose: to train and prepare
                    professional drivers who are ready to hit the road and help
                    drive America&apos;s economy forward.
                  </p>
                  <p className="mb-2">
                    With over 25 years of experience in the trucking industry,
                    our founder brings deep industry knowledge, real-world
                    insight, and a passion for excellence to every aspect of our
                    training program.
                  </p>
                  <p className="mb-2">
                    At our school, we’re not just teaching people how to
                    drive—we’re building careers, strengthening communities, and
                    fueling progress across the nation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="text-[#DF6B2F] text-2xl">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Experienced Instructors
                        </h4>
                        <p className="text-sm text-gray-600">
                          Learn from professionals with 25+ years of experience
                          in the trucking industry.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#DF6B2F] text-2xl">
                        <i className="fas fa-truck-moving"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Modern Fleet
                        </h4>
                        <p className="text-sm text-gray-600">
                          Hands-on training with well-maintained, modern
                          commercial trucks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#DF6B2F] text-2xl">
                        <i className="fas fa-book-open"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Road-Ready Training
                        </h4>
                        <p className="text-sm text-gray-600">
                          Master essential driving theory and road safety
                          through structured, hands-on CDL training.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#DF6B2F] text-2xl">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Easy to Locate
                        </h4>
                        <p className="text-sm text-gray-600">
                          Conveniently located near major freeways and public
                          transport — making your commute hassle-free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="h-full w-full">
                    <img
                      src="/assets/images/truckimage2.jpg"
                      alt="Hero"
                      className="w-full md:w-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section
            className="relative h-[300px] md:h-[400px] my-16 bg-cover bg-center text-white flex items-center"
            style={{ backgroundImage: "url('/assets/images/banner07.jpg')" }} 
          >
            <div className="absolute inset-0 bg-black/70 z-0" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch With Us
              </h2>
              <div className="space-y-2 text-base md:text-lg">
                <p>
                  📞{" "}
                  <a href="tel:9165959200" className="hover:underline">
                    916-595-9200
                  </a>
                </p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:info@pcdlschool.com"
                    className="hover:underline"
                  >
                    contact@getcdlready.com
                  </a>
                </p>
                <p>📍 532 Houston Street, West Sacramento, CA 95691</p>
              </div>
            </div>
          </section> */}

          {/* Mission, Vision, and Core Values Section */}
          <section className="w-full pt-2 rpt-100 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Mission and Vision (Left Column) */}
                <div className="space-y-10">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#df6b2f] px-4 py-2 text-sm font-semibold uppercase text-white mb-4">
                      <ClipboardList className="h-5 w-5" />
                      Our Mission
                    </div>
                    <p>
                      To empower aspiring drivers with the skills, confidence,
                      and professionalism needed to succeed in the trucking
                      industry—while upholding the highest standards of safety,
                      integrity, and service.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#df6b2f] px-4 py-2 text-sm font-semibold uppercase text-white mb-4">
                      <Eye className="h-5 w-5" />
                      Our Vision
                    </div>
                    <p>
                      To become a leading force in commercial driver
                      education—shaping a future where every road is driven by
                      skilled, responsible, and empowered professionals who keep
                      America moving.
                    </p>
                  </div>
                  <div className="h-[400px] w-full space-y-1">
                    <img
                      src="/assets/images/truckimage1.jpg"
                      alt="Hero"
                      className=" w-full h-[100%] md:w-full md:h-[80%] object-cover rounded"
                    />
                  </div>
                </div>

                {/* Core Values (Right Column) */}
                <div className="space-y-8">
                  {/* Section Badge */}
                  <div className="inline-block rounded-md bg-[#df6b2f] px-5 py-2 text-sm font-semibold uppercase text-white shadow-md">
                    Our Core Values
                  </div>

                  {/* Core Values List */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Truck className="h-6 w-6 text-[#4CAF50]" />,
                        title: "Excellence in Training",
                        desc: "We are committed to delivering top-quality education that equips our students with the skills and confidence to succeed on the road.",
                      },
                      {
                        icon: (
                          <ShieldCheck className="h-6 w-6 text-[#F44336]" />
                        ),
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
                        key={index}
                        className="flex items-start gap-4 bg-white rounded-xl p-1 hover:shadow-md transition-shadow"
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
          </section>
        </main>
      </div>

      <Testimonial />
      <section className="why-learn-area pb-12 pt-4 rpb-100">
        <div className="container">
          <div className="row align-items-center large-gap wow fadeInLeft delay-0-2s">
            <div className="col-lg-6">
              <div className="why-learn-content rmb-35">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Why Train With Us</span>
                  <h2>Career-Focused CDL Programs Designed for Your Success</h2>
                </div>
                <p>
                  At Pacific Truck School, we go beyond theory. Our goal is to
                  prepare you for real-world trucking with hands-on training,
                  expert guidance, and flexible learning options designed for
                  your success.
                </p>

                <div className="why-learn-feature pt-30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="">
                      <div className="feature-three-item">
                        <div className="icon">
                          <Sparkles color="#DF6B2F" size={40} />
                        </div>
                        <h4>Real-World Driving Experts</h4>
                        <p>
                          Our instructors bring years of on-the-road expertise
                          to help you build confidence and master CDL skills.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="feature-three-item">
                        <div className="icon">
                          <BookOpenText color="#DF6B2F" size={40} />
                        </div>
                        <h4>CDL Courses Tailored to You</h4>
                        <p>
                          From Refresher to Fast Track Courses, we offer
                          flexible programs for every experience level and
                          schedule
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="feature-three-item">
                        <div className="icon">
                          <CheckCircle color="#DF6B2F" size={40} />
                        </div>
                        <h4>Learn on Your Time</h4>
                        <p>
                          Whether you&apos;re working, parenting, or
                          transitioning careers — our flexible schedules make
                          CDL training accessible.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="feature-three-item">
                        <div className="icon">
                          <MapPin color="#DF6B2F" size={40} />
                        </div>
                        <h4>Prime Location</h4>
                        <p>
                          Conveniently situated in West Sacramento, our campus
                          offers easy access to major highways and trucking
                          hubs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-learn-image wow fadeInRight delay-0-2s">
                <img src="assets/images/image5.jpg" alt="Why Learn" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      {/* <Testimonial /> */}

      {/* <BlogSection /> */}
    </Layout>
  );
};
export default About;
