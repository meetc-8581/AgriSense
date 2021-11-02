import React from "react";
import "./FarmTab.css";
function FarmTab(props) {
  // props.setSelected(props.tabs[0]);
  return (
    <div className="sub-header">
      <nav className="nav--horizontal .nav">
        <ul className="farm-tab-list">
          {props.tabs.map((tab) => {
            return (
              <li
                className={
                  props.selected === tab
                    ? "farm-tab-links-isactive farm-tab-links"
                    : "farm-tab-links"
                }
                key={tab}
              >
                <a href="#/" onClick={() => props.setSelected(tab)}>
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default FarmTab;
