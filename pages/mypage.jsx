import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function mypage() {
  return (
    <Background>
      <Header />
      <Div>
        <Title>Photographer .Seoul</Title>
      </Div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Link href="https://www.instagram.com/0.ldskool/">
          <Instagram>010.1234.5678</Instagram>
        </Link>
        <Link href="https://www.instagram.com/0.ldskool/">
          <Instagram>0.ldskool</Instagram>
        </Link>
        <Link href="https://www.instagram.com/0.ldskool/">
          <Instagram>dlawodud96@naver.com</Instagram>
        </Link>
      </div>
      <div></div>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url("https://ifh.cc/g/f8nrVY.jpg"); */
`;

const Div = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-top: 20px;
  padding-top: 100px;
`;

const Instagram = styled.div`
  margin-left: 30px;
  color: black;
  font-size: 30px;
  text-decoration: underline white;
  &:hover {
    cursor: pointer;
    color: tomato;
  }
`;
