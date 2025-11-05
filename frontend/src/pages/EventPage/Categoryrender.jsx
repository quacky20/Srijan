import { useEffect, useState } from "react";
import ART from "./Images/ART.jpg";
import CINEMA from "./Images/CINEMA.jpg";
import COMEDY from "./Images/COMEDY.jpg";
import DANCE from "./Images/DANCE.jpg";
import DRAMA from "./Images/DRAMA.jpg";
import LITERACY from "./Images/LITERACY.jpg";
import MUSIC from "./Images/MUSIC.jpg";

export default function Display({ category }) {
  const [events, setEvents] = useState([]);

  // ✅ DEMO DATA (Replace with real API later)
  const demoEvents = [
    { name: "REFLECTION", category: "DANCE", image: DANCE },
    { name: "HOONKAR", category: "DRAMA", image: DRAMA },
    { name: "SAAP TANK", category: "COMEDY", image: COMEDY},
    { name: "DOODLE DASH", category: "ART", image: ART },
    { name: "HARMONY", category: "MUSIC", image: MUSIC },
    { name: "PODFEST", category: "LITERACY", image: LITERACY },
    { name: "STORY-TELLER", category: "CINEMA", image: CINEMA },
    
  ];

  async function getEvents(selectedCategory) {
    // ✅ If ALL → show everything
    if (selectedCategory === "ALL") {
      setEvents(demoEvents);
      return;
    }

    // ✅ Filter by category
    const filtered = demoEvents.filter(
      (ev) => ev.category === selectedCategory
    );
    setEvents(filtered);
  }

  useEffect(() => {
    getEvents(category);
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-32">

      {events.length === 0 && (
        <p className="text-[#FED000]  font-['Cinzel_Decorative'] text-center col-span-full font-semibold">
          No events found for {category}
        </p>
      )}

      {events.map((event, index) => (
        <div
          key={index}
          className=" border border-[#FED000] bg-[#802C00] bg-opacity-60 shadow-md hover:shadow-xl transition rounded-lg pb-5 cursor-pointer backdrop-blur-md"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-72 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold  font-['Cinzel_Decorative'] mt-2 text-[#FED000] text-center">
            {event.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
