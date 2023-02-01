import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

const Account = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold py-4">Account</h1>
    </>
  );
};

export default Account;
