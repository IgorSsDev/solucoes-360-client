"use client";
import React, { useContext, useState } from "react";
import "./style.css";
import Loading from "@/app/loading";
import { AuthenticationContext } from "@/context/authenticateWork";
export default function Share() {
  const {Shareinvit,  loading, setClientInput, message }: any = useContext(
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
                A quem você deseja compartilhar o nosso  <strong>Sistema</strong>
              </h1>
            </div>
            <div className="title">
              <h1>Soluções 360</h1>
              <h2>Insira o Email, a quem deseja convidar.</h2>
            </div>
            <form>
              <input
                type="email"
                required
                placeholder="Insira o email do seu convidado"
                onChange={(e: any) => setClientInput(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  Shareinvit();
                }}
              >
                Entrar
              </button>
          <a href="/dashboard">Voltar para o dashboard</a>
            </form>
            <h3 style={{ color: "#dedede", marginTop: 50 }}> {message}</h3>
          </div>
        </div>
      )}
    </>
  );
}
