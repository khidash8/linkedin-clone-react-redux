import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <header className="header">
      {/* Left side */}
      <div className="header__left">
        <img src="linkedin_icon.png" alt="profile pic" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* Right side */}
      <div className="header__right">
        <HeaderOption title={"Home"} Icon={HomeIcon} />
        <HeaderOption title={"My Network"} Icon={PeopleAltIcon} />
        <HeaderOption title={"Jobs"} Icon={BusinessCenterIcon} />
        <HeaderOption title={"Messages"} Icon={ChatIcon} />
        <HeaderOption title={"Notifications"} Icon={NotificationsIcon} />
        <HeaderOption title={"Me"} avatar={"./me.png"} />
      </div>
    </header>
  );
};

export default Header;
