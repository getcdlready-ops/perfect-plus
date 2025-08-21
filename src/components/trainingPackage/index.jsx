import React, { useState } from "react";
import {
  CalendarClock,
  Check,
  CheckCheck,
  GraduationCap,
  Laptop,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";

export const trainingPackages = [
  {
    id: 1,
    tag: "Top Choice",
    image: "/assets/images/2151846035.jpg",
    title: "Perfect Plus Training Program",
    icon: <Star className="w-6 h-6 text-[#FF6B00]" />,
    shortDesc:
      "A complete CDL Class A training program with real-world driving practice.",
    fullDesc:
      "The Perfect Plus Training Program offers a balanced approach to CDL Class A preparation with behind-the-wheel training. Over 4–6 weeks, students gain the knowledge and hands-on experience required to pass the CDL Class A road test with confidence. From pre-trip inspections to real traffic driving, our instructors guide you every step of the way to help you launch a successful career in trucking.",
    features: [
      { label: "4–6 Weeks Duration" },
      { label: "Behind-the-Wheel Training" },
      { label: "Pre-Trip Inspection & Road Test Prep" },
      { label: "CDL Class A License" },
    ],
    roles: [
      {
        id: 1,
        label: "Over-the-Road (OTR) Truck Driver",
      },
      {
        id: 2,
        label: "Regional Truck Driver",
      },
      {
        id: 3,
        label: "Local Delivery Driver",
      },
      {
        id: 4,
        label: "Specialized Freight Operator",
      },
    ],
    extras: [
      {
        label: "Jobs in Trucking:",
        value: "500k+ openings nationwide",
      },
      {
        label: "Takes:",
        value: "4–6 Weeks",
      },
      {
        label: "Cost:",
        value: "From $2,500",
      },
    ],
    details: [
      {
        icon: CheckCheck,
        label: "Type:",
        value: "Short-term CDL training (0–2 months)",
      },
      {
        icon: Laptop,
        label: "Format:",
        value: "In-person",
      },
      {
        icon: CalendarClock,
        label: "Hours:",
        value: "Full-time or Part-time options",
      },
      {
        icon: UsersRound,
        label: "Age:",
        value: "18 and older",
      },
      {
        icon: GraduationCap,
        label: "Requirements:",
        value:
          "Valid driver’s license, DOT medical card, and ability to pass a drug test",
      },
    ],
  },
  {
    id: 2,
    tag: "Accelerated Option",
    image: "/assets/images/image3.jpeg",
    title: "CDL Class A – Fast Track Package",
    icon: null,

    shortDesc:
      "Accelerated training designed to get you licensed and on the road in record time.",
    fullDesc:
      "Our CDL Class A Fast Track Package is built for motivated students who want to enter the trucking industry quickly without sacrificing quality training. This program condenses behind-the-wheel practice into an intensive schedule, so you can pass your CDL Class A road test in just a few weeks and start earning faster. Perfect for career changers and those ready to hit the road with confidence.",
    features: [
      { label: "3 Weeks Intensive Training" },
      { label: "Extended Daily Training Hours" },
      { label: "Weekend & Evening Classes Available" },
      { label: "Includes All Perfect Plus Features" },
    ],
    roles: [
      {
        id: 1,
        label: "Over-the-Road (OTR) Truck Driver",
      },
      {
        id: 2,
        label: "Regional Truck Driver",
      },
      {
        id: 3,
        label: "Local Delivery Driver",
      },
      {
        id: 4,
        label: "Specialized Freight Operator",
      },
    ],
    extras: [
      {
        label: "Jobs in Trucking:",
        value: "500k+ openings nationwide",
      },
      {
        label: "Takes:",
        value: "3–4 Weeks",
      },
      {
        label: "Cost:",
        value: "From $3,200",
      },
    ],
    details: [
      {
        icon: CheckCheck,
        label: "Type:",
        value: "Accelerated CDL training (Under 1 month)",
      },
      {
        icon: Laptop,
        label: "Format:",
        value: "In-person",
      },
      {
        icon: CalendarClock,
        label: "Hours:",
        value: "Intensive full-time schedule",
      },
      {
        icon: UsersRound,
        label: "Age:",
        value: "18 and older",
      },
      {
        icon: GraduationCap,
        label: "Requirements:",
        value:
          "Valid driver’s license, DOT medical card, and ability to pass a drug test",
      },
    ],
  },
  {
    id: 3,
    tag: "For Returning Drivers",
    title: "CDL Refresher Course",
    image: "/assets/images/image6.jpeg",
    icon: null,
    shortDesc: "Sharpen your skills and get back on the road with confidence.",
    fullDesc:
      "The CDL Class A Refresher Course is designed for licensed drivers who have been out of the industry for a while or want to brush up on their skills before returning to work. This short, focused program refreshes your knowledge of safety regulations, pre-trip inspections, and on-road driving techniques so you’re fully prepared for any trucking job opportunity.",
    features: [
      { label: "1–2 Weeks Duration" },
      { label: "Skills Assessment + Safety Updates" },
      { label: "Road Training Included" },
      { label: "24/7 Premium Support" },
    ],
    roles: [
      {
        id: 1,
        label: "Over-the-Road (OTR) Truck Driver",
      },
      {
        id: 2,
        label: "Regional Truck Driver",
      },
      {
        id: 3,
        label: "Local Delivery Driver",
      },
      {
        id: 4,
        label: "Specialized Freight Operator",
      },
    ],
    extras: [
      {
        label: "Jobs in Trucking:",
        value: "500k+ openings nationwide",
      },
      {
        label: "Takes:",
        value: "1–2 Weeks",
      },
      {
        label: "Cost:",
        value: "From $1,800",
      },
    ],
    details: [
      {
        icon: CheckCheck,
        label: "Type:",
        value: "Short-term refresher training",
      },
      {
        icon: Laptop,
        label: "Format:",
        value: "In-person",
      },
      {
        icon: CalendarClock,
        label: "Hours:",
        value: "Flexible scheduling available",
      },
      {
        icon: UsersRound,
        label: "Age:",
        value: "18 and older",
      },
      {
        icon: GraduationCap,
        label: "Requirements:",
        value:
          "Valid driver’s license, DOT medical card, and ability to pass a drug test",
      },
    ],
  },
  {
    id: 4,
    tag: "Bus & Delivery Focused",
    title: "CDL Class A – Road Test Only Package",
    icon: null,
    image: "/assets/images/vehicle-move_23-2151846038.jpeg",

    shortDesc: "Skip the full training — just take the test and get licensed.",
    fullDesc:
      "The CDL Class A Road Test Only Package is perfect for experienced drivers who already have the necessary skills but need to complete their official road test to earn their license. We provide the truck, schedule your test, and guide you through the process so you can focus on passing and getting certified quickly.",
    features: [
      { label: "2–4 Weeks Duration" },
      { label: "Straight Truck & Bus Training" },
      { label: "Hands-On Instruction" },
      { label: "Ideal for School Bus & Delivery Jobs" },
    ],
    roles: [
      {
        id: 1,
        label: "Over-the-Road (OTR) Truck Driver",
      },
      {
        id: 2,
        label: "Regional Truck Driver",
      },
      {
        id: 3,
        label: "Local Delivery Driver",
      },
      {
        id: 4,
        label: "Specialized Freight Operator",
      },
    ],
    extras: [
      {
        label: "Jobs in Trucking:",
        value: "500k+ openings nationwide",
      },
      {
        label: "Takes:",
        value: "1-3 Days",
      },
      {
        label: "Cost:",
        value: "From $700",
      },
    ],
    details: [
      {
        icon: CheckCheck,
        label: "Type:",
        value: "CDL road test package",
      },
      {
        icon: Laptop,
        label: "Format:",
        value: "In-person (Testing only)",
      },
      {
        icon: CalendarClock,
        label: "Hours:",
        value: "Based on test appointment",
      },
      {
        icon: UsersRound,
        label: "Age:",
        value: "18 and older",
      },
      {
        icon: GraduationCap,
        label: "Requirements:",
        value:
          "Valid driver’s license, CDL learner’s permit, DOT medical card, and ability to pass a drug test",
      },
    ],
  },
];

const TrainingPackage = ({ router }) => {
  const [hoverId, setHoverId] = useState();

  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-0 md:px-4 bg-[#0F256E] text-white font-inter">
      <div className="container mx-auto max-w-max">
        <div className="text-center mb-16">
          <span className="sub-title mb-25">Pacific Truck School Programs</span>
          {/* <span className="text-[#FF6B00] text-lg sm:text-xl font-semibold mb-4 block animate-fade-in-down">
            Perfect Plus Training Program
          </span> */}
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Best Value Program
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Transform your career with our comprehensive training packages
            designed for every skill level.
          </p>
        </div>

        {/* Training Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-10 justify-items-center">
          {trainingPackages?.map((pkg, index) => (
            <div
              onClick={() => {
                router.push({
                  pathname: "/program-details/",
                  query: {
                    title: pkg.title,
                    id: pkg?.id,
                  },
                });
              }}
              key={pkg.id}
              className={`relative w-full max-w-sm bg-white text-[#0F256E] p-4 md:p-8 rounded-2xl shadow-xl border border-transparent
        transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-[#FF6B00]
        group flex flex-col justify-between
        ${index === 0 ? "outline outline-2 outline-[#FF6B00]" : ""}`}
            >
              <div className="flex justify-center mt-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#08006a] to-[#0a0080] rounded-xl flex items-center justify-center shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 min-w-[220px] text-center rounded-full text-sm font-bold
    ${
      pkg.tag === "Top Choice"
        ? "bg-[#FF6B00] text-white shadow-md flex items-center justify-center gap-2"
        : "bg-gray-200 text-gray-700"
    }`}
              >
                {pkg.tag === "Top Choice" && pkg.icon}
                {pkg.tag}
              </div>

              <h4 className="text-xl md:text-2xl font-bold mt-4 md:t-8 mb-4 !text-[#0F256E] group-hover:text-[#FF6B00] transition-colors duration-300">
                {pkg.title}
              </h4>

              <ul className="space-y-3 mb-6 md:mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      color="#0F256E"
                      className="w-5 h-5 flex-shrink-0 text-[#0F256E] group-hover:text-[#FF6B00] transition-colors duration-300"
                    />
                    <span className="text-gray-700 group-hover:text-[#0F256E] transition-colors duration-300">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  router.push({
                    pathname: "/program-details/",
                    query: {
                      title: pkg.title,
                      id: pkg?.id,
                    },
                  });
                }}
                className="w-full py-3 mt-auto rounded-lg font-semibold text-white bg-[#0F256E] border border-[#0F256E]
                           transition-all duration-300 ease-in-out
                           hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPackage;
