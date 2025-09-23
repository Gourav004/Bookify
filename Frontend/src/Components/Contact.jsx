import React, { useState } from "react";

// The main App component
const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-5 rounded-2xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row">
        {/* Contact Information and Social Media Section */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            We would love to hear from you! Please feel free to reach out to us
            with any questions or feedback.
          </p>
          <div className="space-y-4">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Email</h3>
              <p className="text-gray-400">bookify@enquiry.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Phone</h3>
              <p className="text-gray-400">+91 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Address</h3>
              <p className="text-gray-400">
                123 Dark Street, Opposite Ambience Mall , New Delhi , 122109
              </p>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1DA1F2"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.585 0-6.49 2.906-6.49 6.49 0 .509.058 1.009.169 1.491-5.399-.272-10.169-2.863-13.388-6.839-.564.957-.88 2.071-.88 3.256 0 2.247 1.144 4.241 2.887 5.419-.844-.029-1.631-.26-2.324-.641v.08c0 3.15 2.246 5.786 5.215 6.398-.546.154-1.139.227-1.747.227-.407 0-.806-.041-1.195-.114.832 2.577 3.243 4.45 6.115 4.5-2.23 1.751-5.045 2.809-8.083 2.809-.526 0-1.045-.031-1.556-.091 2.924 1.861 6.36 2.946 10.038 2.946 12.046 0 18.679-9.944 18.679-18.68 0-.285-.008-.568-.02-.85z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1877F2"
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.996c0-.902.043-1.309 1.25-1.309h2.75v-5h-4.5c-3.524 0-5.5 1.731-5.5 4.549v2.451z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <linearGradient
                    id="instagramGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#833ab4" />
                    <stop offset="35%" stopColor="#fd1d1d" />
                    <stop offset="70%" stopColor="#fcb045" />
                  </linearGradient>
                  <path
                    fill="url(#instagramGradient)"
                    d="M12 2c2.716 0 3.056.01 4.122.062 1.056.052 1.73.204 2.394.469.7.288 1.293.754 1.884 1.345.592.592 1.057 1.185 1.345 1.884.265.664.417 1.338.469 2.394.052 1.066.062 1.406.062 4.122 0 2.716-.01 3.056-.062 4.122-.052 1.056-.204 1.73-.469 2.394-.288.7-.754 1.293-1.345 1.884-.592.592-1.185 1.057-1.884 1.345-.664.265-1.338.417-2.394.469-1.066.052-1.406.062-4.122.062-2.716 0-3.056-.01-4.122-.062-1.056-.052-1.73-.204-2.394-.469-.7-.288-1.293-.754-1.884-1.345-.592-.592-1.057-1.185-1.345-1.884-.265-.664-.417-1.338-.469-2.394-.052-1.066-.062-1.406-.062-4.122 0-2.716.01-3.056.062-4.122.052-1.056.204-1.73.469-2.394.288-.7.754-1.293 1.345-1.884.592-.592 1.185-1.057 1.884-1.345.664-.265 1.338-.417 2.394-.469 1.066-.052 1.406-.062 4.122-.062zm0 1.637c-2.65 0-2.979.009-4.041.062-1.025.05-1.428.198-1.745.321-.42.164-.72.386-.967.633-.247.247-.469.547-.633.967-.123.317-.271.72-.321 1.745-.053 1.062-.062 1.391-.062 4.041 0 2.65.009 2.979.062 4.041.05 1.025.198 1.428.321 1.745.164.42.386.72.633.967.247.247.547.469.967.633.317.123.72.271 1.745.321 1.062.053 1.391.062 4.041.062 2.65 0 2.979-.009 4.041-.062 1.025-.05 1.428-.198 1.745-.321.42-.164.72-.386.967-.633.247-.247.547-.469.633-.967.123-.317.271-.72.321-1.745.053-1.062.062-1.391.062-4.041 0-2.65-.009-2.979-.062-4.041-.05-1.025-.198-1.428-.321-1.745-.164-.42-.386-.72-.633-.967-.247-.247-.547-.469-.967-.633-.317-.123-.72-.271-1.745-.321-1.062-.053-1.391-.062-4.041-.062zm0 4.144c-1.606 0-2.903 1.297-2.903 2.903s1.297 2.903 2.903 2.903c1.606 0 2.903-1.297 2.903-2.903s-1.297-2.903-2.903-2.903zm0 4.673c-1.082 0-1.961-.879-1.961-1.961s.879-1.961 1.961-1.961 1.961.879 1.961 1.961-.879 1.961-1.961 1.961zm6.98-6.179c0 .548-.445.993-.993.993-.549 0-.993-.445-.993-.993s.444-.993.993-.993c.548 0 .993.445.993.993z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#0A66C2"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#333"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.309 3.492.997.107-.775.418-1.309.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here, e.g., send data to a server.
    // console.log('Form data submitted:', formData);
    // You would replace this alert with a custom UI message box.
    // For this demonstration, we'll use a simple alert.
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-3xl font-bold mb-4">Send a Message</h3>
      <div>
        <label htmlFor="name" className="block text-gray-400 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-400 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="john.doe@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6} // makes it taller
          className="w-full max-w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default App;
