import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainHeader } from "../MainHeader";
import { LoginBox } from "../Signup/LoginBox";
import { Signupbox } from "../Signup/Signupbox";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/search" element={<MainHeader />} />
      <Route path="/signup" element={<Signupbox />} />
      <Route path="/" element={<LoginBox/>} />
    </Routes>
  );
};
