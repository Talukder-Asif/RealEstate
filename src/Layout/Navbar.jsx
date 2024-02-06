import { NavLink } from "react-router-dom";
import "./NavStyle.css"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const {user, loading} = useContext(AuthContext);
  console.log(user, loading)


    const option = <>
        <li> <NavLink className="py-2 text-base text-white border-b-4 hover:border-[#15c39a] border-transparent rounded-[0px] mx-1 px-1" to={"/"}>Home</NavLink> </li>
        <li> <NavLink className="py-2 text-base text-white border-b-4 hover:border-[#15c39a] border-transparent rounded-[0px] mx-1 px-1" to={"/about"}>About</NavLink> </li>
    </>
  if(loading){
    return <div className="skeleton rounded-none bg-[#0e2e50] w-full h-16"></div>
  }
  return (
    <div className="bg-[#0e2e50] ">
      <div className="navbar max-w-7xl m-auto bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0e2e50] rounded-box w-52"
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
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
          <a className="text-white font-semibold underline mr-2 text-lg" href="/signin" >Sing in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
