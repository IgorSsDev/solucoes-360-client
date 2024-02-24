"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import "./style.css";
import { AuthenticationContext } from "@/context/authenticateWork";
export default function Finish() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/totem")
  }, 2500);

  const {  infoUser }: any = useContext(AuthenticationContext)

  return (
    <div className="ultima">
      <div className="content">
        <img src={infoUser?.dataClient?.workLogo} alt="" style={{width: "79%"}} />
        <h1>Obrigado por nos escolher, até logo 👋</h1>
      </div>
    </div>
  );
}
