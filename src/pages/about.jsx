
import React from 'react';
import One from '../components/assets/bg-create-1.png'
import Two from '../components/assets/abone.png'
import Three from '../components/assets/bg-create-4.png'
import Four from '../components/assets/bg-create-6.png'
import Five from '../components/assets/abtwo.png'
import Location from '../components/assets/ic_location_gr_2.svg'
import Notify from '../components/assets/ic_contact.svg'
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about">
           
          
   <div className="roundom" >
      <div className="dom" >

     <img src={One} alt="image"  className="one" />
     <img src={Two} alt="image"  className="two" />
     <img src={Three} alt="image"  className="three" />
     <img src={Four} alt="image"  className="four" />
     <img src={Five} alt="image"  className="five" />
        </div >

</div>

<div className="para" >
 <h1>About the {" <Creek />"}</h1>
<p>
Tech Creek is a habitat for the teeming population of youths making sense out of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State. <br/> <br/>
Our culture is at the heart of everything we do. It reinforces our core values which create the perfect picture of our existence as the melting pot for the development of tech capacities and opportunities in the region.
“Tech Creek is the pilot for a new set of creeks that would house creativity in design and system development in the Niger Delta.”
 We are a Team skilled in different crafts, but having a common interest of making the world a better place through this medium. <br/> <br/>
In our own little way, we try to make this dream a reality, by making the effort to first better ourselves daily and then, share from our wealth of knowledge, experience, network and audience views through Writing, Media Coverage and Organizing Events that have such impacts on individuals that creates the desire to better themselves and put their beautiful works in the spotlight.
Have a story, an event or want to collaborate? You might just be the next project we are excited to work on! Explore our partnerships and shoot us an Email and you will be glad you did!

 </p>
 </div>
<Link to="/Membership" className="mem">
     <img src={Notify} alt="image"  className="memi" />
</Link>
            <footer className="lati">
        <div className="loi">
              <img src={Location} alt="location"   /> 

      <p>Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng
        O9030003185, 09030003180</p>
        </div>
        </footer>
    </div>
  );
}

export default AboutPage;
