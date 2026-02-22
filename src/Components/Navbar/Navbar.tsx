import { useRef, useState, useEffect } from "react";
import Logo from "../../assets/img/Navbar-Hero/logo.png";
// import menu from "../../assets/img/Navbar-Hero/menu.png";
import arrow from "../../assets/img/Navbar-Hero/arrow-left.png";
import dropdown from "../../assets/img/Navbar-Hero/dropdown.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // sidebar hide when click outside
  const sidebar = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebar.current && !sidebar.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar start */}
      <nav className="w-full flex justify-between items-center py-2 px-3 md:px-12 bg-white z-50">
        {/* logo start */}
        <img src={Logo} alt="Logo" className="w-[40px] md:w-[50px]" />
        {/* logo end */}
        {/* menu list start */}
        <ul className="hidden md:flex space-x-8 font-sans">
          <li className="cursor-pointer hover:text-sky-700 duration-300 font-medium flex items-center">
            Home
            <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
          </li>
          <li className="cursor-pointer hover:text-sky-700 duration-300 font-medium flex items-center">
            Services
            <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
          </li>
          <li className="cursor-pointer hover:text-sky-700 duration-300 font-medium flex items-center">
            Testimonials
            <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
          </li>
          <li className="cursor-pointer hover:text-sky-700 duration-300 font-medium flex items-center">
            Resource
            <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
          </li>
          <li className="cursor-pointer hover:text-sky-700 duration-300 font-medium">
            About
          </li>
        </ul>
        {/* menu list end */}

        {/* contact button start */}
        <button className="bg-black group cursor-pointer hover:bg-gray-800 duration-600 px-6 py-[8px] rounded-full text-white md:flex items-center gap-x-1 hidden">
          Contact
          <img
            src={arrow}
            alt="arrow"
            className="group-hover:translate-x-1.5 duration-500"
          />
        </button>
        {/* contact button end */}

        {/* menu icon start */}
        <div className="relative md:hidden">
          <FaBars
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />

          {/* menu collapse div start */}
          {showMenu && (
            <div
              // ref={sidebar}
              className="w-56 h-56 z-50 flex items-center bg-white shadow absolute top-10 right-0 md:hidden"
            >
              {/* menu list start */}
              <ul className="text-gray-500 font-sans flex flex-col space-y-3 px-10">
                <li className="cursor-pointer hover:text-sky-700 font-medium flex items-center hover:translate-x-1.5 duration-300">
                  Home
                  <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
                </li>
                <li className="cursor-pointer hover:text-sky-700 font-medium flex items-center hover:translate-x-1.5 duration-300">
                  Services
                  <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
                </li>
                <li className="cursor-pointer hover:text-sky-700 font-medium flex items-center hover:translate-x-1.5 duration-300">
                  Testimonials
                  <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
                </li>
                <li className="cursor-pointer hover:text-sky-700 font-medium flex items-center hover:translate-x-1.5 duration-300">
                  Resource
                  <img src={dropdown} alt="dropdown" className="mt-1 ms-2" />
                </li>
                <li className="cursor-pointer hover:text-sky-700 font-medium hover:translate-x-1.5 duration-300">
                  About
                </li>
              </ul>
              {/* menu list end */}
            </div>
          )}
          {/* menu collapse div end */}
        </div>
        {/* menu icon end */}
      </nav>
      {/* Navbar end */}
    </>
  );
}

export default Navbar;
