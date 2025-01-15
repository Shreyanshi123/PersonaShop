import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to backend)
    console.log("Form submitted:", formData);
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (
      name.trim() !== "" &&
      emailRegex.test(email) &&
      message.trim() !== ""
    );
  };

  React.useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-light-lavender via-muted-purple to-deep-plum text-light-lavender">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center text-deep-purple">
        <h2 className="mt-6 text-3xl font-extrabold">Contact Us</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-90 py-8 px-6 shadow-lg rounded-lg sm:px-10 border border-soft-purple-shadow">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-deep-plum">
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 bg-light-purple bg-opacity-10 border border-muted-purple rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-deep-plum focus:border-deep-plum sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-deep-plum">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 bg-light-purple bg-opacity-10 border border-muted-purple rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-deep-plum focus:border-deep-plum sm:text-sm"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-deep-plum">
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 bg-light-purple bg-opacity-10 border border-muted-purple rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-deep-plum focus:border-deep-plum sm:text-sm"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-plum hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-plum transition duration-150 ease-in-out"
                disabled={!isFormValid}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
