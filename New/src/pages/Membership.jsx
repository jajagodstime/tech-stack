import React from 'react'
import Texti from "../pages/Sign-in/Sign";
import { Link } from "react-router-dom";

import Register from "../pages/Register/Register";
import { useState } from "react";
import Notify from '../components/assets/logo2.png'
// import Bag from '../components/assets/Illustration.png'

// import Text from "../pages/Sign-in/edit.scss";

function Membership() {
const [form, setForm] = useState(true);

  return (
      <div className="memberii" > 
                {/* <img src={Bag} alt="image"  className="notify" /> */}

     <div className="form_container">
            <div className="sign_in">
              <button onClick={() => setForm(true)} id="sign_in">
                Sign-in
              </button>
              <button onClick={() => setForm(false)} id="reg">
                Register
              </button>
            </div>
            <div className="form-Content">
              {form ? <Texti /> : <Register />}
            </div>
          </div>

<div  className="loga">
<Link to="/">
     <img src={Notify} alt="image"  className="notify" />
</Link>
 </div>

          
</div>
  )
}

export default Membership
//  <Link to="/Home" className="loga">
//      <img src={Notify} alt="image"  className="notify" />
// </Link>