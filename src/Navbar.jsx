import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed flex justify-between min-h-[60px]  w-full z-50 bg-white rounded rounded-sm shadow-md">
      <div className="flex items-center">
        <a href="#">
          {" "}
          <img
            src="../public/2.png"
            className="ml-9 w-[70px] h-full scale-150"
          />
        </a>
      </div>
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className={`mr-5 ${open ? "hamburger-active" : "md:hidden"}`}
        onClick={handleClick}
      >
        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
      </button>
      <div
        className={`text-dark flex flex-col mr-3 absolute  gap-5 
        top-[50px] right-0 md:shadow-none shadow-slate-400 shadow-lg bg-white rounded rounded-md p-5
        ${open ? " " : "hidden"}
        md:static
      md:flex-row md:gap-9 md:items-center md:flex font-semibold`}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Shopage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          Shop
        </Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
