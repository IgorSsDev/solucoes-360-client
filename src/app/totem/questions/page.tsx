"use client"
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthenticationContext } from "@/context/authenticateWork";
import Login from "@/components/login/login";
import { QuestionsContainer } from "../style";

export default function Question({ next }: any) {

    const [questions, setQuestions] = useState<any>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [ratings, setRatings] = useState(new Array(10).fill(null));
    const [cardClicked, setCardClicked] = useState(null);
    const router = useRouter();
    const { user, infoUser }: any = useContext(AuthenticationContext)
    const name: any = typeof window !== 'undefined' ? localStorage.getItem("@work") : null;

  // pegar o backend do dashboard, passar para ele um resultado da minha imagem de usuario;

  useEffect(() => {
    async function fetchDataApi() {
      try {
        const response = await axios.post(
          "https://servidor-solucoes360.onrender.com/get",
          {
            codeWork: JSON.parse(name),
          }
        );
        setQuestions(response.data.company);
        setRatings(new Array(response.data.company.length).fill(null));

      } catch (error) {
      }
    }
    fetchDataApi();
  }, []);

  const handleRating = (index: any) => {
    setCardClicked(index);
    const newRatings = [...ratings];
    newRatings[currentQuestionIndex] = index + 1;
    setRatings(newRatings);
  };

  useEffect(() => {
    const enterFullscreen = () => {
      document.documentElement.requestFullscreen()
    };

    document.addEventListener('click', enterFullscreen);

    return () => {
      document.removeEventListener('click', enterFullscreen);
    };
  }, []);
  const handleNextQuestion = async () => {

    try {
      const updateResponse = await axios.post(
        "https://servidor-solucoes360.onrender.com/update",
        {
          range: ratings[currentQuestionIndex],
          pergunta: questions[currentQuestionIndex]?.pergunta,
          codeWork: JSON.parse(name),
          typeClient: next.next,
        }
      );

      if (updateResponse.data.msg === "Obrigado pelo seu feedback") {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCardClicked(null);
        } else {
          router.push("/totem/questions/avaliable")
        }
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <>

      {user ? (
        <QuestionsContainer>
          <img src={infoUser?.dataClient?.workLogo} alt="" style={{width: "79%"}} />
          <div className="textTopics">{questions[currentQuestionIndex]?.pergunta}</div>
          <div className="topics" >
            {[...Array(10)].map((_, index) => (
              <div className="card"
                onClick={() => handleRating(index)}
                key={index + 1}
                style={{
                  cursor: "pointer",
                  backgroundColor: cardClicked === index ? "blue" : `rgb(${255 - index * 25.5}, ${index * 25.5}, 0)`,
                }}
              >
                <h1 style={{ cursor: "pointer" }} >{index + 1}</h1>
              </div>

            ))}

          </div>
          {ratings[currentQuestionIndex] !== null && (
            <button id="confirm" onClick={handleNextQuestion} >
              Confirmar
            </button>

          )}
        </QuestionsContainer>

      ) : (
        <Login />
      )}


    </>


  );
}
