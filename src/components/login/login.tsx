"use client";
import React, { useContext, useState } from "react";
import "./style.css";
import Loading from "@/app/loading";
import { AuthenticationContext } from "@/context/authenticateWork";
export default function Login() {
  const { loginWork, loading, setClientInput, message }: any = useContext(
    AuthenticationContext
  );

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="content-login">
          <div className="modal-center">
            <div className="top-content">
              <h1>
                Faça a sua conexão no <strong>dashboard</strong>
              </h1>
            </div>
            <div className="title">
              <h1>Soluções 360</h1>
              <h2>Entre com seu código da empresa</h2>
            </div>
            <form>
              <input
                type="text"
                placeholder="Insira seu código"
                onChange={(e: any) => setClientInput(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  loginWork();
                }}
              > 
                Entrar
              </button>
              <a href="/">Voltar para página inicial</a>
          <h3 style={{ color: "#dedede", marginTop: 50 }}> {message}</h3>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
