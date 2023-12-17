import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

const HeaderOption = ({ title, Icon, avatar }) => {
  return (
    <div className="headerOption">
      {/* Check if there a icon passed, then convert it to a component */}
      {Icon && <Icon className="headerOption__icon" />}

      {/* check if passed atar src,then make component */}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}

      <div className="headerOption__title">{title}</div>
    </div>
  );
};

export default HeaderOption;
