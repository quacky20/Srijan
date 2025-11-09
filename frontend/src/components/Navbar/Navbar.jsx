import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center px-6 py-3 font-[Cinzel_Decorative] text-[#FED000] text-xl relative z-50">
        {/* ✅ Left Side Links */}
        <div className="flex gap-16 pl-8 pt-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            EVENTS
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            TEAM
          </NavLink>

          <NavLink
            to="/merchandies"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            MERCHANDIES
          </NavLink>

          <NavLink
            to="/sponsers"
            className={({ isActive }) =>
              isActive ? "line-through decoration-[#FED000]" : ""
            }
          >
            SPONSERS
          </NavLink>
        </div>

        {/* ✅ Right Side Register */}
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `text-[#FED000] px-4 py-1 font-bold ${isActive ? "line-through decoration-[#FED000]" : ""}`
          }
        >
          REGISTER
        </NavLink>
      </div>
    </>
  );
}
