import Logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import loginIcon from "../assets/login.svg";
import logoutIcon from "../assets/logout.png";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-primary fixed w-full top-0 right-0">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-background">
        <Link to="/">
          <img className=" w-24 md:w-36" src={Logo} alt="VanLife logo" />
        </Link>
        <ul className="flex items-center gap-4 md:gap-10 font-semibold">
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/host"
            >
              Host
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to={token ? "" : "/login"}
              end
            >
              {token ? (
                <button onClick={handleLogout}>
                  <img
                    className="w-4 md:w-5"
                    src={logoutIcon}
                    alt="Logout icon"
                  />
                </button>
              ) : (
                <img src={loginIcon} alt="Login icon" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
