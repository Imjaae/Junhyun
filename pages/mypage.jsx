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
          marginLeft: "10px",
        }}
      >
        <Wrap>
          <Icon src="/icons/arrow.png" />
          <Icon src="/icons/phone.png" />
          {/* <Link href="https://www.instagram.com/0.ldskool/"> */}
          <Instagram>(+82)10 5390 0392</Instagram>
          {/* </Link> */}
        </Wrap>
        <Wrap>
          <Icon src="/icons/arrow.png" />
          <Icon src="/icons/instagram.png" />
          <Link href="https://www.instagram.com/junhyunarchive/">
            <Instagram>junhyunarchive</Instagram>
          </Link>
        </Wrap>
        <Wrap>
          <Icon src="/icons/arrow.png" />
          <Icon src="/icons/MessageFull.png" />
          {/* <Link href="https://www.instagram.com/0.ldskool/"> */}
          <Instagram>dlawodud96@naver.com</Instagram>
          {/* </Link> */}
        </Wrap>
      </div>
      <div></div>
    </Background>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  margin-left: 10px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 5px 0px 5px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Div = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 55px;
  margin: 20px 0px 50px 30px;
  padding-top: 80px;
  font-family: "Garamond-Serial-Light";
  font-style: normal;
  font-weight: 300;
`;

const Instagram = styled.div`
  margin-left: 10px;
  color: black;
  font-size: 20px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  text-decoration: underline white;
  &:hover {
    cursor: pointer;
    /* color: tomato; */
  }
`;
