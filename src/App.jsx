import React, { useState, useEffect } from "react";
import approvedBags from "./assets/images/approved_bags.png";
import prohibitedItems from "./assets/images/prohibited_bags.png";
import stadiumMap from "./assets/images/bc_map.png";
import parking from "./assets/images/parking.png";
import gettingThere from "./assets/images/TS_Walking-Map.jpg";
import entryGate from "./assets/images/entry_gate.jpg";
import "./App.css";

const bcPlaceInfo = [
  {
    section: "Getting There",
    id: "getting-there",
    link: "https://www.bcplace.com/getting-here",
    details: [
      "Address: 777 Pacific Boulevard, Vancouver, BC",
      "SkyTrain access: Stadium–Chinatown (Expo Line), Yaletown–Roundhouse (Canada Line)",
      // "Nearby bus and rideshare options available; designated rideshare pick-up on Pacific Boulevard",
      "Arrive ~1 hour before event for smoother entry",
      "Enterance: Gate E via Pacific Blvd",
    ],
    img: [gettingThere, entryGate],
  },
  {
    section: "Bag Policy",
    id: "bag-policy",
    link: "https://www.bcplace.com/bag-policy",
    details: [
      "Bags discouraged; all subject to search",
      "Allowed: Clear bags ≤ 12″ × 12″ × 6″ OR small clutch/belt bags ≤ 6.5″ × 8.5″",
      "Exceptions: medically necessary items, diaper bags",
      "Bag check: first-come, first-served (~$10 per bag)",
    ],
    img: [approvedBags, prohibitedItems],
  },
  {
    section: "Wheelchair Accessibility",
    id: "wheelchair-accessibility",
    link: "https://www.bcplace.com/ready-to-return/accessibility",
    details: [
      "Entrances: Gates E via Pacific Blvd",
      "Accessible drop-off/pick-up: Section 147 (Pacific Blvd, no parking)",
      "Elevators from drop-off access all concourse levels",
      "Accessible seating with 1 attendant ticket per accessible seat (groups: contact Ticketmaster)",
      "Accessible, universal, family washrooms on all concourses",
      "Wheelchairs available first-come, first-serve",
      "Certified service animals only",
      "Sensory bags available at Guest Services; sensory rooms near Section 250",
    ],
  },
  {
    section: "Parking",
    id: "parking",
    link: "https://www.bcplace.com/parking",
    details: [
      "Nearby public parking: $10–$30 during events",
      "Limited accessible parking available",
      "Accessible drop-off: Pacific Blvd under Gate F",
    ],
    img: [parking],
  },
  {
    section: "Prohibited Items",
    id: "prohibited-items",
    link: "https://www.bcplace.com/prohibited-items",
    details: [
      "Weapons, fireworks, laser pointers, drones",
      "Large containers (>1 litre), aerosol cans, perfume/cologne",
      "Selfie sticks, poles, skateboards, rollerblades, bicycles",
      "Outside food/drinks (exceptions for medical/dietary needs)",
      "Large cameras/lenses (>150 mm)",
      "Signs, flags, balloons, noise-makers (horns, vuvuzelas, cowbells)",
      "Costume masks, offensive signage",
    ],
  },
  {
    section: "Guest Policies",
    id: "guest-policies",
    link: "https://www.bcplace.com/ready-to-return/guest-policies",
    details: [
      "Box office (Gate E) opens ~6 PM",
      "No re-entry except for emergencies",
      "Children 12 & under must be with guardian (19+)",
      "Digital tickets scanned at entry; resale verification only via scanning",
    ],
  },
  {
    section: "Food & Beverage",
    id: "food-and-beverage",
    link: "https://www.bcplace.com/food-and-beverage",
    details: [
      "No outside food/drinks (medical exceptions apply)",
      "Inside concessions: gluten-free, vegetarian, healthy snacks",
      "Cashless transactions preferred",
    ],
  },
  {
    section: "Stadium Maps",
    id: "stadium-maps",
    link: "https://www.bcplace.com/stadium-maps",
    details: [
      "Seating levels: Field Level, Lower Bowl (100s), Club Seats, Middle Bowl (200s), Upper Bowl (300s), Executive Suites",
      "Wheelchair-accessible seating available throughout",
      "Full maps on BC Place website",
    ],
    img: [stadiumMap],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔹 Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 scroll-smooth">
      {/* Sidebar */}
      <aside
        className={`md:w-64 bg-white shadow-lg md:h-screen md:sticky md:top-0 p-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
        <nav className="space-y-2">
          {bcPlaceInfo.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-blue-600 hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {section.section}
            </a>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 space-y-10">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">
            Inner Freedom Through Spirituality with Sister Shivani
          </h1>
          <p className="text-gray-700">
            August 26, 7–9 PM | Gates open at 6 PM | BC Place
          </p>
        </header>

        {bcPlaceInfo.map((item, index) => (
          <div
            key={index}
            className="mb-6 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
          >
            <h2
              className="text-xl font-semibold text-blue-700 mb-3"
              id={item.id}
            >
              {item.section}
            </h2>
            {item.img && (
              <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {item.img.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      onClick={() => setSelectedImage(image)}
                      className="cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`${item.section} - Image ${imgIndex + 1}`}
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 object-cover aspect-video"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm mt-2">
              To know more please visit the{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                BC Place website
              </a>
            </p>
          </div>
        ))}
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
