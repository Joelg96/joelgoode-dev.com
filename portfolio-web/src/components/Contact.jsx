import React from "react";
import Submit from "../assets/icons/submit-button.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your message!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-white">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please feel free to reach out to me
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            className="bg-[#ccd6f6] p-2 w-full"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] w-full"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#ccd6f6] mb-2 p-2 w-full"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="my-4 flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3r"
            >
              Send message
              <img
                src={Submit}
                alt="Contact Icon"
                className=" filter invert mr-2 h-6 w-6"
              />
            </button>
          </div>
        </form>
        <span className="text-gray-300">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
