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
    // <div className="max-w-[700px] mx-auto my-16 p-4">
    //   <div>
    //     <h1 className="text-2xl font-bold py-2">Inscreva-se para obter um conta grátis</h1>
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
    //     Inscrever-se
    //     </button>
    //   </form>
    //   <p className="py-2">
    //   Já tem uma conta?{" "}
    //     <Link to="/" className="underline">
    //     Entrar.
    //     </Link>
    //   </p>
    // </div>

    <div class="flex h-screen justify-center items-center">
      <div className="w-1/3">
        <img className="" src={image002} />
      </div>
      <div className="w-1/3 bg-white p-10">
        <div className="p-10 text-7xl font-bold ">
          <h1>Read More</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-medium mb-4">
            {" "}
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
            Sign In
          </button>
        </form>
        <p className="py-2">
          Já tem uma conta?{" "}
          <Link to="/" className="underline">
            Entrar.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
