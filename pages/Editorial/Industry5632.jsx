import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Header from "../Header";

export default function Industry5632() {
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
              <ImageBox src="/industry56-32/3.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/industry56-32/25.webp" />
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
              <ImageBox src="/industry56-32/26.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/industry56-32/28.webp" />
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
              <ImageBox src="/industry56-32/30.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/industry56-32/35.webp" />
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
              <ImageBox src="/industry56-32/46.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/industry56-32/47.webp" />
            </h2>
          </Div>
        </Draggable>
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
              <ImageBox src="/industry56-32/40.webp" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src="/industry56-32/44.webp" />
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
