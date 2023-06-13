import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "./Header";
import PersonalProject from "../components/PeronalProject";
import Editorial from "../components/Editorial";
import Portrait from "../components/Portrait";
import Video from "../components/Video";

export default function Main() {
  const router = useRouter;

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Header />
      <AllCategory>
        <EachCategory>
          <Title>PersonalProject</Title>
          <PersonalProject />
        </EachCategory>
        <EachCategory>
          <Title>Editorial</Title>
          <Editorial />
        </EachCategory>
        <EachCategory>
          <Title>Portrait</Title>
          <Portrait />
        </EachCategory>
        <EachCategory>
          <Title>Video</Title>
          <Video />
        </EachCategory>
      </AllCategory>
    </div>
  );
}

const AllCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 100px;
  margin: 150px 0px 150px 4rem;
  width: 100vw;
`;

const EachCategory = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 0.9rem;
`;
