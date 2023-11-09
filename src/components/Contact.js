import React, { useState } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { validateEmail } from "../utils/checkemail";

const Contact = () => {
  const [firsLastName, setFirsLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputchange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setFirsLastName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    } else {
      alert(
        `Thanks for reaching out ${firsLastName}! I will get back to you as soon as possible.`
      );
      setFirsLastName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!{" "}
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <form
            onSubmit={handleFormSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex-1 border rounded-2xl flex flex-col gay-y-6 pb-24 p-6 items-start"
          >
            <input type="hidden" name="form-name" value="contact v1" />

            <input
              value={firsLastName}
              onChange={handleInputchange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              value={email}
              onChange={handleInputchange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
            />
            <textarea
              value={message}
              onChange={handleInputchange}
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
