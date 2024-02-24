"use client"
import Image from "next/image";
import triangulo from "../../../assets/triangulo.png";
import "../../lading-page/header/style.css";
import menu from "../../../../public/menus.png"
import fechar from "../../../../public/fechar.png"
import { useState } from "react";

export default function HeaderPage() {
    const [isMenu, setIsMenu] = useState(false);
  return (
    <header>
      <div className="components">
        <div className="triangle">
          <Image src={triangulo} alt="" />
        </div>
        <div className="links">
          <a href="">Início</a>
          <a href="/totem">Toten</a>
          <a href="/dashboard">dashboard</a>
          <a href="https://api.whatsapp.com/send?phone=5575982538000&text=Ol%C3%A1,%20quero%20entrar%20em%20contato%20com%20a%20sua%20empresa.">Contato</a>
        </div>
        <div className="btn">
          <a href="/dashboard">Login</a>
        </div>
      </div>
      <div className="components-responsive">
        <div className="triangle">
          <Image src={triangulo} alt="" />
        </div>  
        <div className="btn">
          <a href="/dashboard">Login</a>
          <button onClick={() => setIsMenu(!isMenu)}>
            <Image alt="menu" src={isMenu ? fechar : menu}/>
          </button>
        </div>
      
      </div>
   {isMenu ? (
    <>
  <div className="container-links">
        <a href="">Início</a>
          <a href="/totem">Toten</a>
          <a href="/dashboard">dashboard</a>
          <a href="https://api.whatsapp.com/send?phone=5575982538000&text=Ol%C3%A1,%20quero%20entrar%20em%20contato%20com%20a%20sua%20empresa.">Contato</a>
        </div>
      </>
   ): (
    <></>
   )}
    </header>
  );
}
