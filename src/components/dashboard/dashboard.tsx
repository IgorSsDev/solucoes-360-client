"use client";
import "./style.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASEAPI } from "../../services/api";
import Header from "./header/header";
import Main from "./main/main";
import ComponentGraphs from "./main/page-graphs";
import Loading from "@/app/loading";
import { AuthenticationContext } from "@/context/authenticateWork";

export default function Dashboard() {
  const [isData, setIsData] = useState<any | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPage, setIsPage] = useState<boolean>(true);
  const [client, setClient] = useState<boolean>(true);

  const {infoUser}:any = useContext(AuthenticationContext);
  const socket = io(`${BASEAPI}`, {
    transports: ["websocket"],
  });

  useEffect(() => {
    const name:any = localStorage.getItem("@work")

    async function GetDataDashboard() {
      try {
        const { data } = await axios.get(`${BASEAPI}/dashboard/${JSON.parse(name)}`);
        setIsData(data);
        setIsLoading(false);
      } catch (err) {
      }
    }

    GetDataDashboard();
    socket.emit("joinRoom", { room: `dashboard-${JSON.parse(name)}` });
    socket.on("dashboard", (data) => {
      setIsData(data);
    });
  }, [socket]);

  return (
    <div className="PageDashboard">
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          <Header isData={isData} setIsPage={setIsPage} isPage={isPage} />
          {isPage ? (
            <Main isData={isData} infoUser={infoUser}setIsPage={setIsPage} setClient={setClient} client={client}  />
          ) : (
            <ComponentGraphs isData={isData}  />
          )}
        </>
      )}
    </div>
  );
}
