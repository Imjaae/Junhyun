import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <Link href="/">
        <Div>JUNHYUNARCHIVE</Div>
      </Link>
      <Link href="/mypage">
        <AboutBtn>ABOUT</AboutBtn>
      </Link>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  padding: 0.5rem 1.1rem;
  z-index: 1000;
`;

const Div = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: left;
  color: black;
  text-decoration: underline white;
  cursor: pointer;
`;

const AboutBtn = styled.button`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-size: 1.5rem;
  padding-right: 50px;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
