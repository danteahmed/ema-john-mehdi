import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
   const [user] = useAuthState(auth)
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [error, setError] = useState("");

   const handleNameBlur = (event) => {
     setName(event.target.value);
   };

   const handleAddressBlur = (event) => {
     setAddress(event.target.value);
   };

   const handlePhoneBlur = (event) => {
     setPhone(event.target.value);
   };

   const handleShipping = (event) => {
     event.preventDefault();
     const shipping = {name, email, address, phone}
   };
   return (
     <div className="form-container">
       <div>
         <h2 className="form-title">Your Shipping Info</h2>
         <form onSubmit={handleShipping}>
           <div className="input-group">
             <label htmlFor="name">Name</label>
             <input onBlur={handleNameBlur} type="text" name="name" required />
           </div>
           <div className="input-group">
             <label htmlFor="email">Email</label>
             <input
               value={user?.email}
               readOnly
               type="email"
               name="email"
               required
             />
           </div>
           <div className="input-group">
             <label htmlFor="address">Address</label>
             <input onBlur={handleAddressBlur} type="text" name="" required />
           </div>
           <div className="input-group">
             <label htmlFor="phone">Phone</label>
             <input onBlur={handlePhoneBlur} type="number" name="" required />
           </div>
           <p style={{ color: "red" }}>{error}</p>
           <input className="form-submit" type="submit" value="Add Shipping" />
         </form>
       </div>
     </div>
   );
};

export default Shipment;