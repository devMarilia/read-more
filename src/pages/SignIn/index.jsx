import Container from "./styles";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Button from "../../components/Button";
import image002 from "../../assets/images/image02.gif";
import Input from "../../components/Input";
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
    <div class="flex h-screen justify-center items-center">
      <div className="w-1/3">
        <img className="" src={image002} />
      </div>
      <div className="w-1/3 bg-white p-10">
        <div className="p-10 text-7xl font-bold ">
          <h1>Read More</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <Input
            type="text"
            name="username"
            text={"Usuário"}
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
          <Button text={"Login"} type={"submit"} />
          <p className="py-2 text-center">
            Não tem uma conta ainda?
            <Link to="/cadastro" className="no-underline">
              {" "}
              Inscrever-se.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
