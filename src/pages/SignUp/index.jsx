import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import image002 from "../../assets/images/image02.gif";
import Button from "../../components/Button";
import Input from "../../components/Input";
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
          <Input
            type="text"
            name="username"
            text={"E-mail"}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            text={"Senha"}
            placeholder="Digite sua senha..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text={"Cadastrar"} type={"submit"} />
        </form>
        <p className="py-2 text-center">
          Já tem uma conta?
          <Link to="/" className="no-underline">
            {" "}
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
