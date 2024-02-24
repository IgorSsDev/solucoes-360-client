"use client"

import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthenticationContext } from '@/context/authenticateWork'
import Login from '@/components/login/login'
import { ContainerTodoClient } from './style'
export default function Totem() {
  const router = useRouter();
  const { user }: any = useContext(AuthenticationContext)
  useEffect(() => {

    const enterFullscreen = () => {
      document.documentElement.requestFullscreen()
    };
    document.addEventListener('click', enterFullscreen);
    return () => {
      document.removeEventListener('click', enterFullscreen);
    };
  }, []);
  return (
    <>
      {user ? (
        <>
          <ContainerTodoClient>
            <div className="items">
              <h1>Bem vindo, desejar nos ajudar com seu feedback?</h1>
            </div>
            <button onClick={() => router.push("/totem/questionUser")}>Começar feedback</button>
          </ContainerTodoClient>
        </>
      ) : (
        <Login />
      )}
    </>
  )
}
