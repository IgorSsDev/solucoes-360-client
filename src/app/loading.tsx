"use client";
import React from "react";
import "./globals.css";
export default function Loading() {
  return (
    <div className="content-anime">
      <div className="animate-1">
        <h1>
          Estamos carregando suas <strong>informações</strong>
        </h1>
      </div>
      <div className="animate-2">
        <h1>  
        É muito rápido e  <strong>Prático</strong>

        </h1>
      </div>
      <div className="animate-3">
        <h1>
        Já estamos coletando seus <strong>Dados</strong>
        </h1>
      </div>
      <div className="circle"></div>
    </div>
  );
}
