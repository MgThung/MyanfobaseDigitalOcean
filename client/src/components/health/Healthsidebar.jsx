import "../catepagerightbar/tecmain.css";
import Sidebar from "../sidebar/Sidebar";
import "../sidebar/sidebar.css";
export default function HealthSidebar(porps) {
  const category = porps.category;
  return (
    <div className="">
      <Sidebar category={category} />
    </div>
  );
}
