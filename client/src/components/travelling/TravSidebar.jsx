import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./travside.css";
import "../sidebar/sidebar.css";
const TravSidebar = (props) => {
  const category = props.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
};

export default TravSidebar;
