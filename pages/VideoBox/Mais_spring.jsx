import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Header from "../Header";

export default function Mais_spring() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌 dd
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignContent: "space-between",
        }}
      >
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/1.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/2.webp" />
            </h2>
          </Div>
        </Draggable>
        {/* <Link href="/">
          <button>back</button>
        </Link>
        <Link href="/Header">
          <button>go</button>
        </Link> */}
      </div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignContent: "space-between",
        }}
      >
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/3.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/4.webp" />
            </h2>
          </Div>
        </Draggable>
        {/* <Link href="/">
          <button>back</button>
        </Link>
        <Link href="/Header">
          <button>go</button>
        </Link> */}
      </div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignContent: "space-between",
        }}
      >
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/5.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/6.webp" />
            </h2>
          </Div>
        </Draggable>
        {/* <Link href="/">
          <button>back</button>
        </Link>
        <Link href="/Header">
          <button>go</button>
        </Link> */}
      </div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignContent: "space-between",
        }}
      >
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/7.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/8.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/hailmacuf/9.webp" />
            </h2>
          </Div>
        </Draggable>
      </div>
    </>
  );
}

const Div = styled.div`
  width: 37.5%;
  top: 87.5%;
  left: 60%;
  z-index: 39;
  cursor: move;
  transform: translate(-122.7%, 82.4046%) rotate(0deg) translateZ(39px);
  pointer-events: auto !important;
  backface-visibility: hidden;
`;

const ImageBox = styled.img`
  width: 40vw;
  height: 500px;
  object-fit: contain;
  margin-top: 50px;
  -webkit-user-drag: none;
  float: none;
  vertical-align: bottom;
`;
