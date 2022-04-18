import React, { useState, useRef } from "react";
import { send } from "emailjs-com";

function Contact() {
  
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    send(
      'service_78i03qh',
      'template_mcbw1ye',
      data,
      'user_lkbG2582yvwX2KUsaPw0U'
    )
      .then((response) => {
        if (response.status === 200) {
          send(
            'service_78i03qh',
            'template_tvk7oxe',
            data,
           'user_lkbG2582yvwX2KUsaPw0U'
          );
        } else {
          setError(true);
        }
      })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
    setData(initialState);
  };
  return (
    <div id="contact">
      <section className="w-full max-w-2xl px-6 py-4 mx-auto my-12 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Get in touch
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          You can reach me through this
        </p>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="#"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200  dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mt-2">Newlayout Enugu Nigeria</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200  dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span className="mt-2">+234-9052650619 </span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200  dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span className="mt-2">ifennamonanu70@gmail.com</span>
          </a>
        </div>

        <div className="mt-6 ">
          <form onSubmit={handleSubmit}>
          {error && (
                <div
                  id="alert-2"
                  className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillrule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      cliprule="evenodd"
                    ></path>
                  </svg>
                  <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                    Error Occured While
                  </div>
                  <button
                    onClick={() => setError(false)}
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
                    data-collapse-toggle="alert-2"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillrule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
              {success && (
                <div
                  id="alert-3"
                  className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillrule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      cliprule="evenodd"
                    ></path>
                  </svg>
                  <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                    Your Message was delivered successfully
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
                    data-collapse-toggle="alert-3"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-ule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Name
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="name"
                  required
                  value={data.name}
                  onChange={onChange}
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  E-mail
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  required
                  name="email"
                  value={data.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Message
              </label>

              <textarea
                value={data.message}
                name='message'
                required
                onChange={onChange}
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
               {loading ? 'Sending' : ' Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
