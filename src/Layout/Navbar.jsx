import { NavLink } from "react-router-dom";
import "./NavStyle.css"
const Navbar = () => {
    const option = <>
        <li> <NavLink className="pb-4 text-base text-white hover:border-b-4 border-[#15c39a] rounded-[0px] mx-1 px-1" to={"/"}>Home</NavLink> </li>
        <li> <NavLink className="pb-4 text-base text-white hover:border-b-4 border-[#15c39a] rounded-[0px] mx-1 px-1" to={"/about"}>About</NavLink> </li>
    </>
  return (
    <div className="bg-[#0e2e50]">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {option}
            </ul>
          </div>
          <a href="/"><img className="max-w-40" src="https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/2023/02/logo_light.svg" alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {option}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
