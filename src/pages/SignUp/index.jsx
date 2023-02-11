import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import image002 from "../../assets/images/image02.gif";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div class="bg-white flex h-screen justify-center items-center">
      <div className="w-1/3">
        <img className="" src={image002} />
      </div>
      <div className="bg-white p-10">
        <div className="p-10 text-7xl font-bold ">
          <h1>Read More</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-medium mb-4">
            Inscreva-se para obter um conta grátis
          </h2>
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
          <button className="border bg-black w-full p-4 my-2 text-white">
          <Link to="/account" className="underline">
            Entrar.
          </Link>
          </button>
        </form>
        <p className="py-2">
          Já tem uma conta?{" "}
          <Link to="/account" className="underline">
            Entrar.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
