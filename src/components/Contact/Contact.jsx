import React, { useState } from 'react';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setSuccessMessage('Message sent successfully!');
      e.target.reset();
    } else {
      setErrorMessage('Failed to send the message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-500 dark:text-gray-300">
          <span className="text-primary">Get in </span>Touch
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Add your Access Key */}
          <input type="hidden" name="access_key" value="4b2a87b8-4508-4d2c-af94-d5649fe144e8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
