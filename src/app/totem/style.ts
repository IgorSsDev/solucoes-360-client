"use client"

import styled from "styled-components"

export const ContainerTodoClient = styled.div`

     height: 100vh;
  width: 100%;

  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 80px;
    font-weight: bold;
    color: #dedede;
  }
  .items {
    max-width: 1000px;
}
button {
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    border-radius: 4px;
    font-size: 20px;
    margin-top: 60px;
    padding: 14px 20px;
    color: white;
    background: blue;
}
`
export const QuestionsContainer = styled.div`


height: 100vh;
    width: 100%;
    background: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  .textTopics {
    font-size: 45px;
    color: #dedede;
}
h1{
    font-size: 40px;
    color: white;
    max-width: 600px;
}
.topics{
    width: 100%;
    display: flex;

    justify-content: center;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
}
.card {
    height: 80px;
    margin-bottom: 40px;
    width: 70px;
    border: 2px solid gray;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
}

#confirm {
    border: none;
    color: white;
    font-size: 16px;
    outline: none;
    background: blue;
    border-radius: 10px;
    padding: 20px 100px;
}

`