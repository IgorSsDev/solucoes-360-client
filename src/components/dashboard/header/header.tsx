"use client";
import house from "../../../assets/house.png";
import graphic from "../../../assets/graphic.png";
import "./style.css";
import Image from "next/image";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/authenticateWork";
import { BsGraphUp, BsHouse } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
export default function Header({ isData ,isPage, setIsPage }: any) {
  const { SingOut, infoUser }: any = useContext(AuthenticationContext)

  return (
    <>
      <header>
        <aside>
          <div className="not-responsive">
            <div className="modal-top">
              <h1>{isData?.dataClient?.nameWork}
                </h1>
                <br />
                <br />
                <img src={infoUser?.dataClient?.workLogo} alt="" style={{width: "90%"}} />

                <br />

              <a href="#" onClick={() => setIsPage(true)} style={{ background: isPage ? "#160030" : "none" }}>
                {" "}
                <BsHouse/>Dashboard
              </a>

              <a href="#" onClick={() => setIsPage(false)} style={{ background: isPage ? "none" : "#160030" }}>
                <BsGraphUp/>
                Gráficos
              </a>
            </div>

            <div className="bottom-container">
              <button onClick={SingOut}> <BiLogOut/> Sair da Conta</button>
            </div>
          </div>
          <div className="responsive">
            <a href="#" onClick={() => setIsPage(true)} style={{ background: isPage ? "green" : "none", color: isPage ? "#000" : "#fff" }}>
              {" "}
             <BsHouse/> Dashboard
            </a>
            <a href="#" onClick={() => setIsPage(false)} style={{ background: isPage ? "none" : "green", color: isPage ? "#fff" : "#000" }} >
              <BsGraphUp/>
              Gráficos
            </a>
            <button onClick={SingOut}>  Sair da Conta</button>
          </div>
        </aside>
      </header>
    </>
  );
}
