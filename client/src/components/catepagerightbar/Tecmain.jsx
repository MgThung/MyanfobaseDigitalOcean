import { Link } from "react-router-dom";
import Paginate from "./Paginate";
import Sidebar from "../sidebar/Sidebar";
import "./tecmain.css";
import "../sidebar/sidebar.css";
export default function Tecmain(props) {
  const category = props.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
}
