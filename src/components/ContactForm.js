 
import React, { useState } from "react";
import styles from '@site/src/pages/styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';



const FORM_ENDPOINT = "https://public.herotofu.com/v1/8395ef00-1fbf-11ee-b0a7-9f000c4c1540"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We intent to get back to you within three days.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div >
        <input
          type="text"
	      className="email-input"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          type="email"
	  	  className="email-input"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          required
        />
      </div>
       <div>
        <button
          className="button button--primary"
          type="submit"
        >
          Send us a message
        </button>
      </div>

    </form>
  );
};

// import logo from "./logo.svg";
// import "./App.css";
import { useEffect } from "react";
// import ContactForm from "./ContactForm";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation


  return (

    <div className="Appp">
      <header className="Appp-header">
        <div className="piy-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default App;

// export default ContactForm;
