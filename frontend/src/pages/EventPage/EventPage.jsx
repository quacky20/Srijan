import Display from "./Categoryrender";
import ALL from "./EventIcons/ALL.png";
import ART from "./EventIcons/ART.png";
import CINEMA from "./EventIcons/CINEMA.png";
import COMEDY from "./EventIcons/COMEDY.png";
import DANCE from "./EventIcons/DANCE.png";
import DRAMA from "./EventIcons/DRAMA.png";
import FASHION from "./EventIcons/FASHION.png";
import LITERACY from "./EventIcons/LITERACY.png";
import MUSIC from "./EventIcons/MUSIC.png";
import { useState } from "react";
import Bg from "./Images/EventPageBg.jpg";

const categories = [
  { icon: ALL, categoryname: "ALL" },
  { icon: DANCE, categoryname: "DANCE" },
  { icon: ART, categoryname: "ART" },
  { icon: MUSIC, categoryname: "MUSIC" },
  { icon: LITERACY, categoryname: "LITERACY" },
  { icon: DRAMA, categoryname: "DRAMA" },
  { icon: CINEMA, categoryname: "CINEMA" },
  { icon: FASHION, categoryname: "FASHION" },
  { icon: COMEDY, categoryname: "COMEDY" }
];

export default function EventPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden"
  
    >
        <img src={Bg} className="absolute top-0 left-0 w-full h-full object-cover z-0"></img>
      <nav className="w-full py-4 pt-20 relative z-10">
        <div className="max-w-screen-2xl mx-auto flex justify-center gap-10 flex-wrap">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(cat.categoryname)}
              className={`flex font-['Cinzel_Decorative'] flex-col items-center cursor-pointer transition ${
                activeCategory === cat.categoryname ? "text-[#FED001]" : "text-[#FED000]"
              }`}
            >
             <img
  src={cat.icon}
  alt={cat.categoryname}
  className={`w-18 h-18 rounded-full border-1 border-[#FED000] mb-1 
    transition-all duration-200 
    hover:shadow-[0_0_10px_#FED000]
    ${activeCategory === cat.categoryname ? "scale-110" : ""}
  `}
/>

              <p className="text-sm font-semibold tracking-wide">
                {cat.categoryname}
              </p>

              {activeCategory === cat.categoryname && (
                <div className="w-8 h-1 bg-[#FED000] mt-1 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="px-4 mt-6 relative z-10">
        <Display category={activeCategory} />
      </div>
    </div>
  );
}
