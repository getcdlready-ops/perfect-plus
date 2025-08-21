import Link from "next/link";

const MobileHeader = ({ setNavToggle }) => {
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/program">Our Packages</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      <li>
        <Link href="/enrollment">Enroll Now</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      {/* <li>
        <Link href="">Blog</Link>
      </li> */}
    </ul>
  );
};

export default MobileHeader;
