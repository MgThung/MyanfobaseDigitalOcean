import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

const Dropdown = memo((props) => {
  const { user, categories } = props;

  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "categoriessub clicked" : "categoriessub"}
      onClick={() => setDropdown(!dropdown)}
    >
      {categories && categories.length !== 0 ? (
        categories.map((item, index) => {
          return (
            <li key={item._id} className="catgitems">
              <Link
                to={item.catename}
                className="nav-item"
                onClick={() => setDropdown(false)}
              >
                <h5>{item.catename}</h5>
              </Link>
            </li>
          );
        })
      ) : (
        <div>
          <h5>Loading...</h5>
        </div>
      )}
      {user !== null && user.isAdmin === true ? (
        <li className="catgitems">
          <Link
            to={"/addcate"}
            className="nav-item"
            onClick={() => setDropdown(false)}
          >
            <h5 className="colorRed">Add Categories</h5>
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
});

export default Dropdown;
