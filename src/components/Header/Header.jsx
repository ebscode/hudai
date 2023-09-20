import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="text-center font-medium space-x-3 text-blue-600">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-700" : isPending ? "pending" : ""
          }
          to={"/"}
        >
          {" "}
          home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-700" : isPending ? "pending" : ""
          }
          to={"/us"}
        >
          us
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-700" : isPending ? "pending" : ""
          }
          to={"/contact"}
        >
          contact
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-700" : isPending ? "pending" : ""
          }
          to={"/users"}
        >
          users
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-red-700" : isPending ? "pending" : ""
          }
          to={"/posts"}
        >
          post
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
