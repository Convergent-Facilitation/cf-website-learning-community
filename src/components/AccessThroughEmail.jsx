import React, { useState } from 'react';
import axios from 'axios';

function AccessThroughEmail({ scriptUrl, buttonText, spreadsheetId, sheetName }) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.get(scriptUrl, { params: { email, spreadsheetId, sheetName } });
      console.log(response.data)
      alert(response.data.message);
	  //alert('Email sent 📨');
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
	    className="email-input"
	    placeholder="Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required />
      
      <button className="button button--primary" type="submit">{buttonText}</button>
    </form>
  );
}

export default AccessThroughEmail;
