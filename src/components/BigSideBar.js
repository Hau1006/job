import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";
const BigSideBar = () => {
  const { user } = useSelector((store) => store);
  return (
    <Wrapper>
      <div className={user?.isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
