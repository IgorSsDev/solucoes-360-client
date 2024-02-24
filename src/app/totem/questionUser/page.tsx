"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Question from "../questions/page";
import { ContainerTodoClient } from "../style";
export default async function QuestionUser() {
    const [next, setNext] = useState<any>();
    return (
        <>
            {next ? (
                <Question next={{ next }} />
            ) : (
                <ContainerTodoClient>
                    <h1>Quais dessas situações você se encaixa?</h1>
                    <div className="wrap">
                        <button onClick={() => {
                            setNext("company")
                        }}>
                            Sou cliente
                        </button>
                        <button onClick={() => {
                            setNext("dataNotClient")
                        }} style={{ background: "#FF0000", marginLeft: 10, }}>
                            Não sou cliente
                        </button>
                    </div>
                </ContainerTodoClient>
            )}
        </>
    );
}