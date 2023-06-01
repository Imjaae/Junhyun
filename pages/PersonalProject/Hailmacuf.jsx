import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Header from "../Header";

export default function Hailmacuf() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌 dd
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const HailImg = [
    "/hailmacuf/1.webp",
    "/hailmacuf/2.webp",
    "/hailmacuf/3.webp",
    "/hailmacuf/4.webp",
    "/hailmacuf/5.webp",
    "/hailmacuf/6.webp",
    "/hailmacuf/7.webp",
    "/hailmacuf/8.webp",
    "/hailmacuf/9.webp",
  ];

  const HailImgs = [{ 1: "/hailmacuf/1.webp" }, { 2: "/hailmacuf/2.webp" }];
  console.log("HailImgs", HailImgs);
  const dd = HailImg?.map((item) => {
    return item;
  });
  console.log("dd", dd);
  const [isModal, setIsModal] = useState(false);
  const showModal = (e) => {
    setIsModal(!isModal);
  };

  const SrcImg = HailImg?.map((item) => console.log("eee", item));

  return (
    <>
      <Header />
      {isModal ? (
        <div>
          <ImgModal onClick={showModal} />
          <ModalImgBox src={HailImg[0]} />
        </div>
      ) : null}
      {HailImgs &&
        HailImgs.map((item) => {
          <img src={item[0]} alt="dd" />;
        })}
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
              <ImageBox src={HailImg[0]} onClick={showModal} alt="hailImg1" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src={HailImg[1]} onClick={showModal} alt="hailImg2" />
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
              <ImageBox src={HailImg[2]} alt="hailImg3" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src={HailImg[3]} alt="hailImg4" />
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
              <ImageBox src={HailImg[4]} alt="hailImg5" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src={HailImg[5]} alt="hailImg6" />
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
              <ImageBox src={HailImg[6]} alt="hailImg7" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src={HailImg[7]} alt="hailImg8" />
            </h2>
          </Div>
        </Draggable>
        <Draggable onDrag={(data) => trackPos(data)}>
          <Div className="box">
            <h2>
              <ImageBox src={HailImg[8]} alt="hailImg9" />
            </h2>
          </Div>
        </Draggable>
      </div>
    </>
  );
}

const ImgModal = styled.div`
  width: 110%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 1000;
`;

const ModalImgBox = styled.img`
  height: 90%;
  object-fit: contain;
  position: fixed;
  z-index: 1001;
  overflow: hidden;
  left: 35vw;
  top: 6vh;
`;

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
