import React from 'react';
import Learn from "../components/assets/ic_learn.svg";
import Creat from "../components/assets/ic_create.svg";
import Connect from "../components/assets/ic_connect.svg";
const Create = () => {
  return (
    <div className="dfi" >
      <h1> welcome </h1>
      <div >
         <img src={Learn} alt="image"  className="notif" />
     <img src={Creat} alt="image"  className="notif" />
     <img src={Connect} alt="image"  className="notif" />
      </div>
    </div>
  );
}

export default Create;
