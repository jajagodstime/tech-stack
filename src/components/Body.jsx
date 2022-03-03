// // import logo from "./assets/2.jpg";
// // import one from "./assets/download.jpg" ;
// // // import two from "./assets/4.jpg";
// // // import three from "./assets/3.jpg";
// // import  four  from "./assets/onclick.jpg";
// // import five from "./assets/onhover.jpg";

// import Logo from "../assets/logo2.png";
// import Alert from "../assets/notification.svg";
// import Menu from "../assets/hamburger.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import Modalpage from "../Modal/ModalPage";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const navItems = [
//     { title: "Home", path: "/" },
//     { title: "Learn", path: "/learn" },
//     { title: "Create", path: "/create" },
//     { title: "Connect", path: "/connect" },
//   ];
//   // for modal
//   const [show, setShow] = useState(false);

//   const handleModal = () => {
//     setShow(!show);
//   };
//   //  to toggle alert
//   const [name, setName] = useState(false);
//   const handleToggle = () => setName(!name);

//   return (
//     <div className="Navbar_container">
//       <div className="container">
//         <div className="Navbar_logo">
//           <img src={Logo} alt="nav-bar-logo" className="logo" />
//         </div>
//         <div className="Navlist">
//           <ul>
//             {navItems.map((navItem, index) => {
//               return (
//                 <li className="nav__item" key={index}>
//                   <Link to={navItem.path}>{navItem.title}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="Navbar_Menu">
//           <div onClick={handleToggle} className="text">
//             <h4>
//               Ongoing Notification <span></span>
//             </h4>
//             {name && (
//               <div className="text-float" onClick={handleModal}>
//                 <p>Ict& Digital Literacy Training</p>
//               </div>
//             )}
//           </div>
//           <div className="bell">
//             <img src={Alert} alt="" />
//           </div>
//           {/* <div className="Menu-bar">
//             <img src={Menu} alt="Menu-Bar" />
//           </div> */}
//         </div>
//         <Modalpage handleModal={handleModal} show={show} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Get = () => {
//     const [modal, setModal] = useState(false);
  
//     const handleModal = () => {
//       setModal(!modal);
//     };
  
//     return (
//       <div  className="geti">
//       <ul>

//             <div className="btndiv"><button onClick={handleModal}>Apply now</button></div>

//             <Modal className='Modal' show={modal}>
//               <Modal.Header className='modal_header'>
//                 <h4>ICT & Digital Literacy Training</h4>  <br /> <span onClick={handleModal}>x</span>
//               </Modal.Header>
//               <form action="method={post} ">

//                 <div className="pay_info">
//                   <h6> Training fee is N20,000(Twenty Thousand Naira only). <br />

//                     ** Make payment to RSG Information & Comm. Dept(ICT)
//                     1011616837   Zenith Bank <br />
//                     Submit Teller or payment receipt at Riv-TechCreek, River State ICT Dept, Aba Road, PH **</h6>
//                 </div>
//                 <div className="modal_form">
//                   <div className="pers_info">
//                     <h3>Personal Information</h3>

//                     <div className='pers_form'>
//                       <input type="text" placeholder='Firstname' required /> 
//                       <input type="text" placeholder='Middlename' />
//                       <input type="text" placeholder='Lastname' required/>
//                       <input type="date" placeholder='D.O.B' required/>
//                     </div>
//                     <div className="select_div">
//                     <select name="Select Education" id="sed">
//                       <option value="">Education</option>
//                       <option value="">Olevel</option>
//                       <option value="">Olevel</option>
//                       <option value="">Olevel</option>
//                       <option value="">Olevel</option>
//                     </select>

//                     <select name="Gender" id="">
//                       <option value="male">Gender</option>
//                       <option value="male">Male</option>
//                       <option value="male">Female</option>

//                     </select>

//                     <select name="Select state of origin" id="ssos" placeholder='Select State'>
//                       <option value="tt">State</option>

//                     </select>

//                     <input type="text" placeholder='LGA' required />

//                     </div>



//                   </div>

//                   <div className="contact_form">
//                     <form action="">
//                       <h3>Contact Information</h3>
//                       <input type="mail" placeholder='Email' required />
//                       <input type="number" placeholder='Phonenumber' required />
//                       <label htmlFor="">Ressidential Address</label>
//                       <textarea placeholder='Ressidential Address' name="Ressidential Address" id="" cols="50" rows="3"> </textarea >

//                     </form>



//                   </div>

//                 </div>




//               </form>

//               <Modal.Footer  className='modal_footer'> 
//                 <input  onClick={handleModal} type="submit" />
//               </Modal.Footer>
//             </Modal>
//           </ul>

//         </div>
//     );
//   };
  
//   export default Get;