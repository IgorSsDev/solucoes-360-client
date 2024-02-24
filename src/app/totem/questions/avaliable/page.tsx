"use client"
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
import Image from "next/image";
import feliz from "@/assets/feliz.png"
import triste from "@/assets/rosto-triste2.png"
import neutro from "@/assets/neutro.png"
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { AuthenticationContext } from "@/context/authenticateWork";
import Login from "@/components/login/login";

export default function Avaliable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | undefined>();
  const name: any = typeof window !== 'undefined' ? localStorage.getItem("@work") : null;
  
  const {user}:any = useContext(AuthenticationContext);
  const router  = useRouter()
  useEffect(() => {
    async function fetchDataApi() {
      setLoading(true)
        try {
          const response = await axios.post(
            "https://servidor-solucoes360.onrender.com/get",
            {
              codeWork: JSON.parse(name),
            }
          );
          setData(response?.data);
        } catch (error) {
        }
      setLoading(false);
    }
    fetchDataApi();
  }, []);
  useEffect(() => {
    const enterFullscreen = () => {
      document.documentElement.requestFullscreen()
    };

    document.addEventListener('click', enterFullscreen);

    return () => {
      // Remover o ouvinte de evento quando o componente for desmontado
      document.removeEventListener('click', enterFullscreen);
    };
  }, []);

  const updateValues = async (pergunta: any) => {
    try {
      if (pergunta) {
        await axios.post(
          "https://servidor-solucoes360.onrender.com/satisfied",
          {
            codeWork: JSON.parse(name),
            pergunta: pergunta,
          }
        );
          router.push("/totem/finish-form")
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <>
      {loading ? (
         <Loading/>
      ): (
        <>
        {user ? (
              <div className="container-avaliable">
                <h1>Qual foi sua experiência ?</h1>
             <div className="group-content-topic">
              <div className="topics" onClick={() => updateValues(data?.satisfied[0].pergunta)}>
                <div className="card" style={{ backgroundColor: "green" }}>
                  <Image alt="img" src={feliz}></Image>
                </div>
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[0].pergunta}
                </h2>
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[0].notas}
                </h2>
              </div>
        
              <div className="topics" onClick={() => updateValues(data?.satisfied[1].pergunta)}>
                <div className="card" style={{ backgroundColor: "yellow" }}>
                  <Image alt="img" src={neutro}></Image>
                </div>
        
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[1].pergunta}
                </h2>
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[1].notas}
                </h2>
              </div>
        
              <div className="topics" onClick={() => updateValues(data?.satisfied[2].pergunta)}>
                <div className="card" style={{ backgroundColor: "red" }}>
                  <Image alt="img" src={triste}></Image>
                </div>
        
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[2].pergunta}
                </h2>
                <h2 style={{ fontSize: 20, color: "white" }}>
                  {data?.satisfied[2].notas}
                </h2>
              </div>
             </div>

            </div>
        ): (
          <Login/>
        )}
        </>
    
      )}
    </>
  );
}
