"use client";
import { BASEAPI } from "@/services/api";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IProps {
  children: ReactNode;
}
export const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }: IProps) {

  const [user, setUser] = useState(false);
  const [infoUser, setInfoUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [clientInput, setClientInput] = useState("");
  const [message, setMessage] = useState<any | undefined>();

  async function loginWork() {
    setLoading(true);
    await axios
      .post(`${BASEAPI}/get`, {
        codeWork: clientInput,
      })
      .then((data) => {
        localStorage.setItem("@work", JSON.stringify(data?.data.codeWork));
        setUser(true);
        
        setMessage(null)
        location.reload();

      })
      .catch((err) => {
        setMessage(err?.response?.data?.msg);
      });
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    async function GetDataDashboard() {
      const name: any = localStorage.getItem("@work");
      await axios
        .get(`${BASEAPI}/dashboard/${JSON.parse(name)}`)
        .then((data) => {
          setUser(true);
          
          setInfoUser(data.data);
        })
        .catch((err) => {
          
          setUser(false);
        });
    }
    GetDataDashboard();
    setLoading(false);
  }, []);

  async function Shareinvit() {
    setLoading(true)
    const name: any = localStorage.getItem("@work");
    try {
      const data = await axios.post(`${BASEAPI}/share`, {
        codeWork: JSON.parse(name),
        emailSend: clientInput
      })

      setMessage("Email enviado com sucesso!")
    } catch (error: any) {
      setMessage(error?.response?.data.msg)

    }
    setLoading(false)

  }

  function SingOut() {
    localStorage.removeItem("@work");
    location.reload();
  }

  return (
    <AuthenticationContext.Provider
      value={{ Shareinvit, loginWork, infoUser, loading, setClientInput, message, user, SingOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
