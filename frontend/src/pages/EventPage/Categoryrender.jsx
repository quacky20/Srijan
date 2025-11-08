import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ART from "./Images/ART.jpg";
import CINEMA from "./Images/CINEMA.jpg";
import COMEDY from "./Images/COMEDY.jpg";
import DANCE from "./Images/DANCE.jpg";
import DRAMA from "./Images/DRAMA.jpg";
import LITERACY from "./Images/LITERACY.jpg";
import MUSIC from "./Images/MUSIC.jpg";

export default function Display({ category }) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const demoEvents = [
    { name: "REFLECTION", category: "DANCE", image: DANCE },
    { name: "HOONKAR", category: "DRAMA", image: DRAMA },
    { name: "SAAP TANK", category: "COMEDY", image: COMEDY },
    { name: "DOODLE DASH", category: "ART", image: ART },
    { name: "HARMONY", category: "MUSIC", image: MUSIC },
    { name: "PODFEST", category: "LITERACY", image: LITERACY },
    { name: "STORY-TELLER", category: "CINEMA", image: CINEMA },
  ];

  async function getEvents(selectedCategory) {
    if (selectedCategory === "ALL") {
      setEvents(demoEvents);
      return;
    }
    const filtered = demoEvents.filter((ev) => ev.category === selectedCategory);
    setEvents(filtered);
  }

  useEffect(() => {
    getEvents(category);
  }, [category]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-32">

        {events.length === 0 && (
          <motion.p
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[#FED000] font-['Cinzel_Decorative'] text-center col-span-full font-semibold"
          >
            NO EVENTS FOUND FOR {category}
          </motion.p>
        )}

        {events.map((event, index) => (
          <motion.div
            key={event.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(254, 208, 0, 0.5)"
            }}
            onClick={() => setSelectedEvent(event)}
            className="border border-[#FED000] bg-[#802C00] bg-opacity-60 shadow-md rounded-lg pb-5 cursor-pointer backdrop-blur-md overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-72 object-cover rounded-md"
            />

            <h3 className="text-lg font-bold font-['Cinzel_Decorative'] mt-2 text-[#FED000] text-center">
              {event.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* ✅ POPUP MODAL */}
      
        {selectedEvent && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-[200]"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#802C00] text-[#FED000] rounded-xl p-6 shadow-2xl border border-[#FED000] w-[400px] sm:w-[450px]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                className="w-full h-64 object-cover rounded-md"
              />

              <h2 className="text-center text-3xl font-['Cinzel_Decorative'] mt-4 font-bold">
                {selectedEvent.name}
              </h2>
       
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 w-full border border-[#FED000] text-[#FED000] py-2 rounded-lg hover:bg-[#FED000] hover:text-black transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      
    </>
  );
}
