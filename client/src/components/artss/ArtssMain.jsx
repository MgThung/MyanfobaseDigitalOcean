import React from "react";
import Paginate from "../catepagerightbar/Paginate";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
export default function ArtssMain(props) {
  const category = props.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
}
