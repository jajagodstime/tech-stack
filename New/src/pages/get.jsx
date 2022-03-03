import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Get = () => {
    const [modal, setModal] = useState(false);
  
    const handleModal = () => {
      setModal(!modal);
    };
  
    return (
      <div  className="geti">
      <ul>

            <div className="btndiv"><button onClick={handleModal}>Apply now</button></div>

            <Modal className='Modal' show={modal}>
              <Modal.Header className='modal_header'>
                <h4>ICT & Digital Literacy Training</h4>  <br /> <span onClick={handleModal}>x</span>
              </Modal.Header>
              <form action="method={post} ">

                <div className="pay_info">
                  <h6> Training fee is N20,000(Twenty Thousand Naira only). <br />

                    ** Make payment to RSG Information & Comm. Dept(ICT)
                    1011616837   Zenith Bank <br />
                    Submit Teller or payment receipt at Riv-TechCreek, River State ICT Dept, Aba Road, PH **</h6>
                </div>
                <div className="modal_form">
                  <div className="pers_info">
                    <h3>Personal Information</h3>

                    <div className='pers_form'>
                      <input type="text" placeholder='Firstname' required /> 
                      <input type="text" placeholder='Middlename' />
                      <input type="text" placeholder='Lastname' required/>
                      <input type="date" placeholder='D.O.B' required/>
                    </div>
                    <div className="select_div">
                    <select name="Select Education" id="sed">
                      <option value="">Education</option>
                      <option value="">Olevel</option>
                      <option value="">Olevel</option>
                      <option value="">Olevel</option>
                      <option value="">Olevel</option>
                    </select>

                    <select name="Gender" id="">
                      <option value="male">Gender</option>
                      <option value="male">Male</option>
                      <option value="male">Female</option>

                    </select>

                    <select name="Select state of origin" id="ssos" placeholder='Select State'>
                      <option value="tt">State</option>

                    </select>

                    <input type="text" placeholder='LGA' required />

                    </div>



                  </div>

                  <div className="contact_form">
                    <form action="">
                      <h3>Contact Information</h3>
                      <input type="mail" placeholder='Email' required />
                      <input type="number" placeholder='Phonenumber' required />
                      <label htmlFor="">Ressidential Address</label>
                      <textarea placeholder='Ressidential Address' name="Ressidential Address" id="" cols="50" rows="3"> </textarea >

                    </form>



                  </div>

                </div>




              </form>

              <Modal.Footer  className='modal_footer'> 
                <input  onClick={handleModal} type="submit" />
              </Modal.Footer>
            </Modal>
          </ul>

        </div>
    );
  };
  
  export default Get;