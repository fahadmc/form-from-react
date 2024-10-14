
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formvalues, setFormvalues] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
  });
  
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formvalues);
    console.log(Object.keys(errors).length);
    if(Object.keys(errors).length===0){
      setMessage("form submit success")
      console.log(formvalues);
      setFormErrors({});

      
    }else{
      setFormErrors(errors);
    }

  };
const validate=(value)=>{
  const errors={};
  if(!value.fname){
    errors.fname="this filed cannot be empty"
  }else if(!value){
    errors.fname="enter a name"
  }
  if(!value.lname){
    errors.lname="this filed cannot be empty"
  }else if(!value){
    errors.lname="enter a name"
  }
  if(!value.email){
    errors.email="this filed cannot be empty"
  }else if(!value){
    errors.fname="enter a valid email"
  }
  if(!value.number){
    errors.number="this filed cannot be empty"
  }else if(value.length<=10){
    errors.number="enter a valid number"
  }
  if(!value.address){
    errors.address="this filed cannot be empty"
  }else if(!value){
    errors.address="enter a address"
  }
  return errors;

};



  // const handleFormChange = (e) => {
  //   setFormvalues({ ...formvalues, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formvalues);
  //   setFormvalues({
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     number: "",
  //   });
  //   setMessage("Form submitted successfully!");
  // };

  return (
    <div className="div1">
      <form onSubmit={handleSubmit} className="form">
        <div className="div2">
          <h1>sign in form</h1>
          <div className="divc">

            <label className="lab1" htmlFor="fname">First Name:</label>
            <input className="inp1"
              type="text"
              value={formvalues.fname}
              onChange={handleChange}
              id="fname"
              name="fname"
              placeholder="First Name:"
              
            />
            {formErrors.fname&&<p style={{color:"red",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>{formErrors.fname}</p>}
          </div>
          <div className="divc">
            <label className="lab2" htmlFor="lname">Last Name:</label>
            <input className="inp2"
              type="text"
              value={formvalues.lname}
              onChange={handleChange}
              id="lname"
              name="lname"
              placeholder="Last Name:"
              
            />
             {formErrors.lname&&<p style={{color:"red",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>{formErrors.lname}</p>}
          </div>

          <div className="divc">
            <label className="lab5" htmlFor="address">Address:</label>
            <input className="inp5"
              type="text"
              value={formvalues.address}
              onChange={handleChange}
              id="address"
              name="address"
              placeholder=" Address"
              />
              {formErrors.number&&<p style={{color:"red",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>{formErrors.number}</p>}
           
          </div>










          <div className="divc">
            <label className="lab3" htmlFor="email">Email:</label>
            <input className="inp3"
              type="email"
              value={formvalues.email}
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="E-mail"
              
            />
             {formErrors.email&&<p style={{color:"red",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>{formErrors.email}</p>}

          </div>
          <div className="divc">
            <label className="lab4" htmlFor="number">Phone Number:</label>
            <input className="inp4"
              type="text"
              value={formvalues.number}
              onChange={handleChange}
              id="number"
              name="number"
              placeholder="Phone Number"
              />
              {formErrors.number&&<p style={{color:"red",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center"}}>{formErrors.number}</p>}
           
          </div>


        </div>

        <input className="submit" type="submit" value="Submit" />
      
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Form;





