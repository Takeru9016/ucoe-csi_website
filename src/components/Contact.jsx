import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { client } from "../client";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, number, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      number: number,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setisFormSubmitted(true);
    });
  };

  return (
    <div className="flex w-full flex-col min-h-screen items-center bg-contact bg-repeat">
      <div className=" flex flex-col relative justify-evenly my-8 mt-10">
        <h1 className="font-bold text-4xl text-center">Contact Us</h1>
        <p className="text-md mt-4 text-center">
          Any questions or remark? <br />
        </p>
      </div>
      <div className="flex flex-col drop-shadow-lg md:flex-row md:space-x-20 space-y-6 md:space-y-0 bg-gradient-to-tl from-sky-400 to-indigo-400 w-full max-w-4xl p-8 rounded-xl shadow-lg sm:p-12 text-white">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Get in touch</h1>
            <p className="pt-2 text-cyan-100 text-sm mt-1">
              Fill up the form and our team will get back to you within 24
              hours!
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <CallIcon className="" />
              <span>+91 8378996992</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <div className="inline-flex space-x-2 items-center">
                <EmailIcon />
                <a href="mailto:csi.ucoe.management@gmail.com">
                  <span>csi.ucoe.management@gmail.com</span>
                </a>
              </div>
            </div>
            <div>
              <div className="inline-flex space-x-2 items-center">
                <MapIcon />
                <a href="https://goo.gl/maps/LktJC3pyrGdHvXkV7">
                  <span>Kaman</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 text-2xl md:justify-start">
            <a
              href="https://www.instagram.com/csi_ucoe/"
              className="hover:translate-y-0.5"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/csi-ucoe/about/"
              className="hover:translate-y-0.5"
            >
              <LinkedInIcon />{" "}
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-96">
            <form
              action="https://formspree.io/f/xoqbyygw"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <div>
                <label className="text-sm">Full name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                  className="mt-2 border-b w-full rounded-md px-4 py-2 outline-none focus:border-b focus:border-blue-600"
                />
              </div>
              <div>
                <label className="text-sm">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  className="mt-2 border-b w-full rounded-md px-4 py-2 outline-none focus:border-b focus:border-blue-600"
                />
              </div>
              <div>
                <label className="text-sm">Phone no</label>
                <input
                  required
                  type="number"
                  placeholder="Your Number"
                  name="number"
                  value={number}
                  onChange={handleChangeInput}
                  className="mt-2 border-b w-full rounded-md px-4 py-2 outline-none focus:border-b focus:border-blue-600"
                />
              </div>
              <div>
                Reason to contact
                <div className="flex flex-row flex-wrap mt-3 justify-start md:justify-start">
                  <div>
                    <label className="inline-flex items-center mr-2 md:mr-0">
                      <input
                        type="radio"
                        className="form-radio"
                        name="reason"
                        value="Grievance"
                      />
                      <span className="ml-2">Grievance</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center md:ml-10 ">
                      <input
                        type="radio"
                        className="form-radio"
                        name="reason"
                        value="Review"
                      />
                      <span className="ml-2">Review</span>
                    </label>
                  </div>

                  <div>
                    <label className="inline-flex items-center ml-2 md:ml-0 ">
                      <input
                        type="radio"
                        className="form-radio"
                        name="reason"
                        value="Collaboration"
                      />
                      <span className="ml-2">Collaboration</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center ml-2 md:ml-4 ">
                      <input
                        type="radio"
                        className="form-radio"
                        name="reason"
                        value="Others"
                      />
                      <span className="ml-2">Others</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  required
                  type="text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                  className="mt-2 border-b w-full rounded-md px-4 py-2 outline-none focus:border-b focus:border-blue-600"
                ></textarea>
              </div>
              <button
                className="inline-block self-center text-white bg-blue-700 font-bold rounded-lg px-6 py-2 uppercase hover:translate-y-0.5 text-sm"
                type="submit"
              >
                {loading ? "Sending" : "Send Message"}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="flex justify-center items-center w-96 h-96 m-10 font-bold text-4xl">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
