import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./Avatar.css";

function Avatar() {
  // const [aDropDownState, setADropDownState] = useState(false);
  const { getLoggedIn } = useContext(AuthContext);

  async function Logout() {
    await axios.get("/login/logout");
    getLoggedIn();
  }

  return (
    <div className="avatar-button-container">
      <a
        href="/#"
        onClick={() => {
          Logout();
        }}
      >
        Logout
      </a>
      {/* <a
        onClick={() => {
          setADropDownState(!aDropDownState);
        }}
      >
        Dropdown
      </a>
      {aDropDownState && <div>hello</div>} */}
    </div>
  );
}

export default Avatar;
