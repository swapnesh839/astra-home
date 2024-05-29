"use Client"
import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const [isDropOpen, setisDropOpen] = useState(false);

  const toggleMenu = () => {
    setisDropOpen(!isDropOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        toggle();
      }
    }
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, toggle]);

  const Menu = [
    { id: 0, name: "Features", url: "#Features" },
    { id: 1, name: "Usecases", url: "#Usecases" },
    { id: 2, name: "Pricing", url: "#Pricing" },
    {
      id: 3, name: "Solutions", url: "", innersection: [
        { id: 0, name: " Workflow Management For Machines", url: "/Workflow" },
        { id: 1, name: "Preventive info/Virtual Bots", url: "/VirtualBots" },
      ]
    },
  ]
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-30"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>
        <ul className="md:flex sm:flex flex-col gap-y-2">
          {Menu.map((i) => {
            if (!i?.innersection) {
              return (
                <li key={i.id} className="my-3">
                  <Link className="hover:text-purple-700 group" href={i.url}>
                    <p>{i.name}</p>
                  </Link>
                </li>
              );
            } else {
              return (
                <div key={i.id} className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex w-full justify-between items-center"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <p className="hover:text-purple-700">{i.name}</p>
                      <svg
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 transform ${isDropOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {isDropOpen ? (
                          <path
                            fillRule="evenodd"
                            d="M5.23 12.79a.75.75 0 011.06-.02L10 8.832l3.71 3.938a.75.75 0 001.08-1.04l-4.25-4.5a.75.75 0 00-1.08 0l-4.25 4.5a.75.75 0 00.02 1.06z"
                            clipRule="evenodd"
                          />
                        ) : (
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                  {isDropOpen && (
                    <div
                      className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200 ${isDropOpen ? "opacity-100" : "opacity-0"
                        }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {i.innersection.map((d) => (
                          <Link
                            key={d.id}
                            className="hover:text-purple-700 block px-4 py-2 text-sm group"
                            href={d.url}
                          >
                            <p>{d.name}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </ul>

      </div>
    </>
  );
};

export default Sidebar;
