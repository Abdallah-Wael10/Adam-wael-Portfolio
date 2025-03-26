"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import beha from "./image/beha.svg"; 
import linkedin from "./image/linked.svg"; 
import Image from "next/image";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tzvpvkw", 
        "template_tbz9cbb", 
        formData, 
        "zo_jBaTlQ0J_n7V47" 
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send the message. Please try again later.");
      });
  };

  return (
    <div  className="w-full h-auto pt-5 pb-10 py-10 flex flex-col items-center max-[600px]:p-0 max-[600px]:pt-2.5 bg-blue-50">
  
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8  pb-10 flex flex-col gap-6 w-3/4 sm:w-1/2"
      >
        <h2 className="text-2xl font-bold text-[#90D9EF] text-center">
          Let's Get In Touch
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
        <textarea
          name="message"
          placeholder="How can I help you?"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200 h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center w-20 h-10 bg-[#90D9EF] rounded-lg text-white hover:bg-blue-600 transition duration-200 self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 12H2M16 6l6 6-6 6"
            />
          </svg>
          Send
        </button>
      </form>
      {/* Social Icons Section */}
      <div className="mt-8 flex gap-6">
        <a
          href="https://github.com/Abdallah-Wael10"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center bg-black items-center  rounded-full shadow-md hover:bg-slate-400 transition"
        >
          <Image src={beha} alt="GitHub" className="w-6 h-6 " />
        </a>
        <a
          href="https://www.linkedin.com/in/abdallah-wael-01a443301/?trk=public-profile-join-page"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-[dodgerblue] rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <Image src={linkedin} alt="LinkedIn" className="w-6 h-6 " />
        </a>
      </div>
    </div>
  );
};

export default Contact;
