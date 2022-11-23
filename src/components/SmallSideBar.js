import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import { toggleSidebar } from "../features/user/userSlice";
import { FaTimes } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className={user?.isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
