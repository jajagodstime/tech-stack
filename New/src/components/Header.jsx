
import Logo from "./assets/logo.png";
import Alert from '../components/assets/ic_notification.svg'
import Menu from "../components/assets/hamburger.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modalpage from "../components/Modal/ModalPage";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Learn", path: "/about" },
    { title: "Create", path: "/create" },
    { title: "Connect", path: "/contact" },

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
    <div>
      <div >
    

        
      </div>
    </div>
  );
};

export default Header;


// import logo from "./assets/logo.png";
// import { Link } from "react-router-dom";
// const Header = () => {
 
//   const navItems =[
//     {title: "Home", path: "/" },
//     {title: "Learn", path: "/about" },
//     {title: "Create", path: "/contact" },
//     {title: "Connect", path: "/" },

//     // {title: "Ongoing Applications", path: "/get" }


//   ];
//      return (
//        <nav>
//     <div className="boss" >
//       <img src={logo} alt="logo" />
      
//     </div>
//         <div className="navii">
//        <ul >
//          {navItems.map((navItems, index)=>{
//            return(
//              <li className="one" key={index} >
//                <Link to={navItems.path} >{navItems.title} </Link>
//              </li>
//            );
//          })}
//            </ul>
//         </div>
//      </nav>

//      );
// }

// export default Header