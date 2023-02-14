import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Tab from "../../components/Tab";

const Account = () => {
  return (
    <>
      <Navbar />
      <div class="flex justify-center items-center flex-col font-bold py-4">
        <h1 className="text-2xl font-bold py-4">Read More</h1>
        <Tab />
      </div>
    </>
  );
};

export default Account;
