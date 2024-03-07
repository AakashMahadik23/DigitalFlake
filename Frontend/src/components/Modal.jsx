import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md max-w-900 w-500 text-center z-50">
        <h2 className="font-semibold text-2xl text-purple-800 mb-4">Did you forget your password?</h2>
        <p className="font-medium text-base leading-6 text-center text-gray-600">
          Enter your email address and we'll send you a link to restore password
        </p>
        <div className="mt-6">
          <label className="font-medium text-base text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 font-medium text-base rounded w-full hover:shadow-md transition duration-300"
          >
            Request reset link
          </button>
          <div className="mt-4 text-gray-500">
            <a className="underline cursor-pointer" onClick={closeModal}>
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
