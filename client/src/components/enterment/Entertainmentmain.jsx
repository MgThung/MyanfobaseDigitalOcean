import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
export default function Entertainmentmain(props) {
  const category = props.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
}
