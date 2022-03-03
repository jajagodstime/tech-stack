import Logo from "../assets/logo2.png";
import Alert from "../assets/notification.svg";
import Menu from "../assets/hamburger.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modalpage from "../Modal/ModalPage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Learn", path: "/learn" },
    { title: "Create", path: "/create" },
    { title: "Connect", path: "/connect" },
  ];
  // for modal
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };
  //  to toggle alert
  const [name, setName] = useState(false);
  const handleToggle = () => setName(!name);

  return (
    <div className="Navbar_container">
      <div className="container">
        <div className="Navbar_logo">
          <img src={Logo} alt="nav-bar-logo" className="logo" />
        </div>
        <div className="Navlist">
          <ul>
            {navItems.map((navItem, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link to={navItem.path}>{navItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="Navbar_Menu">
          <div onClick={handleToggle} className="text">
            <h4>
              Ongoing Notification <span></span>
            </h4>
            {name && (
              <div className="text-float" onClick={handleModal}>
                <p>Ict& Digital Literacy Training</p>
              </div>
            )}
          </div>
          <div className="bell">
            <img src={Alert} alt="" />
          </div>
          {/* <div className="Menu-bar">
            <img src={Menu} alt="Menu-Bar" />
          </div> */}
        </div>
        <Modalpage handleModal={handleModal} show={show} />
      </div>
    </div>
  );
};

export default Navbar;
