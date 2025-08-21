import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const PageBanner = ({ pageTitle, pageName }) => {
  const location = usePathname();

  const getImages = () => {
    if (location === "/about") {
      return "/assets/images/banner09.jpeg";
    } else if (location === "/contact") {
      return "/assets/images/banner06.jpg";
    } else if (location === "/enrollment") {
      return "/assets/images/banner.jpeg";
    } else {
      return "/assets/images/banner04.jpeg";
    }
  };
  return (
    <section className="relative page-banner-area rel z-1 text-white text-center">
      {/* Background Image */}
      <Image
        src={getImages()}
        alt="Page banner"
        fill
        priority
        className="object-cover z-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s uppercase">
            {pageTitle ? pageTitle : pageName}
          </h2>

          {/* {location == "/contact" && (
            <p className="mt-2 text-xl font-semibold">
              <Phone />
              <a href="tel:8184390094" className="">
                818-439-0094
              </a>
            </p>
          )} */}
        </div>
      </div>

      {/* Decorative Circles */}
      <img
        className="circle-one"
        src="assets/images/shapes/circle-one.png"
        alt="Circle"
      />
      <img
        className="circle-two"
        src="assets/images/shapes/circle-two.png"
        alt="Circle"
      />
    </section>
  );
};
export default PageBanner;
