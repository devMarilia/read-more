import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import image001 from "../../assets/images/image01.avif";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (

    <div className="flex h-screen bg-gray-200">
      <div className="w-1/2 bg-white p-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              for="username"
            >
              Usuário
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              id="username"
              name="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              for="password"
            >
              Senha
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Sign In
          </button>
          <p className="py-2"/>
          Não tem uma conta ainda?{" "}
          <Link to="/signup" className="underline">
            Inscrever-se.
          </Link>
        </form>
      </div>
      <div className="w-1/2 bg-cover">
        <img src={image001} />
      </div>
    </div>
  );
};

export default Signin;
