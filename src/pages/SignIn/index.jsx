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
    // <div className="max-w-[700px] mx-auto my-16 p-4">
    //   <div>
    //     <h1 className="text-2xl font-bold py-2">Faça login em sua conta</h1>
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <div className="flex flex-col py-2">
    //       <label className="py-2 font-medium">Email</label>
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="border p-3"
    //         type="email"
    //       />
    //     </div>
    //     <div className="flex flex-col py-2">
    //       <label className="py-2 font-medium">Senha</label>
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="border p-3"
    //         type="password"
    //       />
    //     </div>
    //     <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
    //       Sign In
    //     </button>
    //   </form>
    //   <p className="py-2">
    //   Não tem uma conta ainda?{" "}
    //     <Link to="/signup" className="underline">
    //     Inscrever-se.
    //     </Link>
    //   </p>
    // </div>
 <div className="flex h-screen bg-gray-200">
      <div className="w-1/2 bg-white p-10">

        <form>
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
            />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Login
          </button>
        </form>
      </div>
      <div
        className="w-1/2 bg-cover"

      ><img src={image001} /></div>
    </div>
  );
};

export default Signin;
