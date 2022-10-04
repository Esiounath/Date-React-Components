import React,{useState} from 'react';
import './Forms.css';

export function Form(){
    const [contactInfo, setContactInfo] = useState({
        name: "Eden",
        email: "eden.siounath@hotmail.com",
        phonenumber: "+33",
      });
      const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
      };
      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(contactInfo);
      };
    return(
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Formulaire de Contact</h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Submit Contact</button>
          </div>
        </form>
    );
}