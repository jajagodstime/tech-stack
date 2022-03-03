import React from 'react';
import Cards from "../components/Cards/Cards";
import students from "../Stclass";
import "../pages/pages.scss";
import { Link } from "react-router-dom";
import Arrow from '../components/assets/arrow.svg'
import Lago from "../components/assets/w3logo.png";

const ContactPage = () => {
  return (
    <div className="Conna">
    
    <div className="Connecti"> 
  <img src={Lago} alt="image" />
</div>
     <div className="Conne">
             <h1>Connect</h1>
                 <h3>IMAGINATION RULES THE WORLD</h3>

        <p> Discovery consist of seeing what everybody has seen and thinking what nobody has thought.  <br/>
          We serve as a nursery providing the right Eco-System for Start-Ups and #individuals in Port Harcourt and it’s evirons, actively developing solutions to meet local needs.
</p>
</div>
<Link to="/create" className="bac">
     <button>Back </button>
</Link>
     <div className="Connect_main_container">
     
      {students.map((student, index) => {
        return <Cards student={student} key={index} />;
      })}


    </div>
  
        </div>
  );
}

export default ContactPage;
