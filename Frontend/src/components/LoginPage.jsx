
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/login", { email, password })
      .then((response) => {
        console.log(response);
        navigate('/home')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForgotPassword = () => {
    // Show the modal when "Forgot Password?" is clicked
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-indigo-300 ">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 "
          src="https://s3-alpha-sig.figma.com/img/4f8b/6e9d/609c7731d037f1b65d00906a7bc1e241?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hu79xMKiK26XWkeNx1PCKo33w73kJDpoyedtz2Av8s2aQUSTxnbge-pFR8YEh7JszZC4QJTZLiZV3XgR-n-1BXRMcFDqkm8IRl7YmkIGiW5pucRGSSbwBGpcM5FFNUaXBKW9VYz6beChtR3zLgiDt-SIoVQTrfJ7Ksc2Z3Nsyc2u0O4nYUN4By3bzAKGZ3L4l4wA~MgUWszt6JVPOhGWICgrpp82ql9kTwOL6j9g2eqdl2qSjfqilxjO1nL1R-Dr2pG7mKz3xZPaWDlBssQQpoRU3d6Y0E~vsyKLB1PPDff1cMB7EuY6-CAjeJA0ontmPom3NqckvH39wiIikrWhJg__"
          alt="Background Image"
        />

        <div className="relative z-10 p-8 bg-white rounded-md ">
          <img
            alt="LogoImage"
            className="mx-auto mb-8 w-64 h-32"
            src="https://s3-alpha-sig.figma.com/img/9e94/6a94/4ef20bfd62fdde437d3084005e68980d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMUjUjw8eSWGv89a2GuW0qq0LtejZAB4IulJs0tKg5TY3zV0h-aug7H3ob5ShlvbAwWtmctoMqynFIMRX9Ncacf7WhcAo5ZvwkCUTEkK6MVSJW-kU0s2gnYEWIxVNq-RySduhzVuW2EgswLmRoN~DnonyojE7dZL2XZRFFne~6kMYRYX2ueYQxerduuMEACyV~KwXnkCqDKzioes69rhACmLv8KOTpt5dMxu1MtKNhRATG~HYU2djfQSyTSBaMS6xsqZ8XvpVi5ABG7qbq~2Zqa2yvwxIOWG~5Nv~mQYGfeetnHCcQuGkAhTDeZQgeqBjDFUKKg3ILhvwMnlYLu3LA__"
          />
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Welcome to Digitalflake Admin
          </p>
          <form className="space-y-4" >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="py-2 px-4 border border-gray-300 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg text-gray-600">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="py-2 px-4 border border-gray-300 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-purple-600 cursor-pointer" onClick={handleForgotPassword}>
              <a>Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-md hover:shadow-md transition duration-300"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </>
  );
};

export default LoginPage;

