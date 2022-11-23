import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { debounce } from "../utils/helper";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((store) => store.user);
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={debounce(() => setShowLogout(!showLogout), 500)}>
            <FaUserCircle />
            {user?.user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={() => dispatch(logoutUser())}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
