import React from 'react';

import Logo from "../components/assets/logo.png";
import side from '../components/assets/bg-hero.png'
import Location from '../components/assets/ic_location_gr_2.svg'
import Notify from '../components/assets/ic_contact.svg'
import { Link } from "react-router-dom";
import Alert from '../components/assets/ic_notification.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import Modalpage from "../components/Modal/ModalPage";
import { useState } from "react";


// import two from '../components/assets/assets2/Illustration.png'
 // for modal
 

 
 
const HomePage = () => {
 const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };
  //  to toggle alert
  const [name, setName] = useState(false);
  const handleToggle = () => setName(!name);

  
    return (
      <div className='hmain'>
      <div className='homie'>

<Link to="/Membership" className="noti">
     <img src={Notify} alt="image"  className="notify" />
</Link>

      <nav> 
 <div className="boss">
          <img src={Logo} alt="nav-bar-logo" className="logo" />
        </div>

        <div className="navi" >
        <Link to="/about" className="navo">
        <ul> 
        <button> Learn </button>
         </ul>
         </Link>

              <Link to="/Create" className="navi">
             <ul>
              <button> Create </button>
             </ul>
          </Link>

              <Link to="/Contact" className="nava">
              <ul>
              <button> Connect </button>
            </ul>
          </Link>
    </div>

        <div className="model">
          <div onClick={handleToggle} className="text">
            <h4>
              Ongoing Notification <span></span>
            </h4>
            {name && (
              <div className="texti" onClick={handleModal}>
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
        </nav>

        {/* <div>
      <div className="one_one">
        <div className="size">
         
          <img src={logo} alt="img"   className="image_two"/> 
          
          <img src={four} alt="img"  className="image_2" />
          <img src={five} alt="img"  className="image_1" />
          </div>
        
      </div>
       </div> */}
  {/* <div className="creative">
    <div className="mid">
    <h1>CREATIVITY</h1>
    <h3>IMAGINATION RULES THE WORLD</h3>
    <p>Discovery consist of seeing what everybody has seen and thinking what nobody has thought</p>
    </div>
  </div> */}


   <div className='blu'>
  
   </div>
  
  <div className="habitat">
    <div className="habit">
    <h1>A
  habitat
  for
  Creativity
  </h1>
    
    </div>
    <div>  

</div>
  </div>

<Link to="/Create" className="sideimage">
     <img src={side} alt="image"  />
</Link>

      <div className="tech_creek">
    <div className="boto">
  
          <h1>Welcome <br /> to The {" <Creek />"}  </h1>
         <p>TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.</p>
       </div>
       </div>
     
      
      <footer className="last">
        <div className="las">
              <img src={Location} alt="location"   /> 

      <p>Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng
        O9030003185, 09030003180</p>
        </div>
        </footer>
        
       


  
        </div>

 </div>

        
    )

  
  }
  
  export default HomePage