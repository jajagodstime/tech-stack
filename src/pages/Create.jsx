import React from 'react';
import Learn from "../components/assets/cg_junior_main.png";
// import Click from "../components/assets/download.jpg";
import Creat from "../components/assets/abone.png";
import Crea from "../components/assets/abtwo.png";
import Cret from "../components/assets/bg-create-1.png";
import Connect from "../components/assets/bg-create-6.png";
import { Link } from "react-router-dom";
import Location from '../components/assets/ic_location_gr_2.svg'

const Create = () => {
  return (
    <div className="create" >
      <div  className='top' ></div>
        

      <h1> CREATE </h1>
      <div className="creative" >
 <br/>
 <div className='flex'>
 <div className="notwo" >
       <img src={Creat} alt="image"   />

     <p>
Tech Creek is a habitat for the teeming population of youths making sense out of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State. <br/>
Our culture is at the heart of everything we do. <br/>

 </p>

 </div>
 <div className="nothree">
     <img src={Connect} alt="image"   />

     <p>
Tech Creek is a habitat for the teeming population of youths making sense out of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State. <br/>
Our culture is at the heart of everything we do. <br/>

 </p>
 </div>
 </div>


 <div className='flax'>
 <div className="notwo" >
       <img src={Crea} alt="image"   />

     <p>
Tech Creek is a habitat for the teeming population of youths making sense out of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State. <br/>
Our culture is at the heart of everything we do. <br/>

 </p>

 </div>
 <div className="nothree">
     <img src={Cret} alt="image"   />

     <p>
Tech Creek is a habitat for the teeming population of youths making sense out of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State. <br/>
Our culture is at the heart of everything we do. <br/>

 </p>
 </div>
 </div>
      </div>

  


 <footer className='footers'>
 
 <div className="none" > 

      <img src={Learn} alt="image"   />
      <h1>Message Us </h1>
      <div className='emal' >
      <input type="email"required placeholder="Full Name" className='imp'  action="" method="get"/> 
        <input type="email" required placeholder="Enter email"className='im' /> <br />
         <textarea name="" id="" cols="40" rows="3" placeholder='Message Us'></textarea>
        <a href="#"> 
         <button  >Submit</button>
      </a>
       </div>
      </div> 
        
        <div className="footer_btn" >
       <Link to="/" >
         <button>Home</button>
       </Link>
       <Link to="/about" >
         <button>About</button>
       </Link>
       <Link to="/Membership" >
         <button>Membership</button>
       </Link>
       </div>
       <div className="lasa">
       <div className="las">
              <img src={Location} alt="location"   /> 

      <p>Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng
        O9030003185, 09030003180</p>
        </div>
        </div>
       
 </footer>
    </div>
  );
}

export default Create;
