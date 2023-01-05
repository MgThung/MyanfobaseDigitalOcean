import "../catepagerightbar/tecmain.css";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
export default function BeautySidebar(props) {
  const category = props.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
}
