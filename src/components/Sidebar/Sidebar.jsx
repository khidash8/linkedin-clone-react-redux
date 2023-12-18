import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentPosts = (post) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{post}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {/* TOP SECTION */}
      <div className="sidebar__top">
        <img src="./BG.jpg" alt="bg" />
        <Avatar className="sidebar__avatar" src="./me.png" />
        <h2>Mr Bean</h2>
        <h3>Web Developer</h3>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,013</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">300</p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentPosts("reactjs")}
        {recentPosts("Javascript")}
        {recentPosts("Html")}
        {recentPosts("css")}
        {recentPosts("Hello Assholes")}
        {recentPosts("Just Fucking around")}
        {recentPosts("Bumbara Booooo")}
      </div>
    </div>
  );
};

export default Sidebar;
