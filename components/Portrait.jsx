import Link from "next/link";
import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

export default function Portrait() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌 dd
  const [isDropped, setIsDropped] = useState(false); // Link테그와 Draggable 테그의 충돌을 방지하게 만든 state

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
    setIsDropped(true);
    setTimeout(() => {
      setIsDropped(false);
    }, 1000); // 1초 딜레이 후 리셋, 두 테그 충돌 방지
  };
  return (
    <div>
      <ProjectWrap>
        <Project>
          <Link
            href="Portrait/YeeunHan"
            style={{
              color: "black",
            }}
          >
            <TitleWrap>
              <Number>1</Number>
              <Title>Yeeun Han</Title>
            </TitleWrap>
          </Link>
          <Draggable
            onDrag={(data) => trackPos(data)}
            onDragOver={(e) => e.prevednDefault()}
          >
            <Div className="box">
              <h2>
                {isDropped ? (
                  <ImageBox
                    src="/Yeeunhan/2.webp"
                    alt="YeeunHan"
                    draggable="true"
                  />
                ) : (
                  <Link
                    href="Portrait/YeeunHan"
                    passHref
                    style={{
                      WebkitUserDrag: "none",
                      pointerEvents: "auto !important",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <ImageBox
                      src="/Yeeunhan/2.webp"
                      alt="YeeunHan"
                      draggable="true"
                      style={{
                        WebkitUserDrag: "none",
                        float: "none",
                        pointerEvents: "auto !important",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </Link>
                )}
              </h2>
            </Div>
          </Draggable>
        </Project>
      </ProjectWrap>
    </div>
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
  -webkit-user-drag: none;
  float: none;
`;

const ProjectWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
`;

const Project = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0px 20px 3px 0px;
`;

const TitleWrap = styled.div`
  display: inline-flex;
  vertical-align: bottom;
`;

const Number = styled.div`
  font-size: 1.5rem;
  margin-right: 2px;
  font-weight: 400;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 3vw;
  font-weight: 400;
  white-space: nowrap;
  margin-right: 6px;
  word-break: break-all;
  &:hover {
    font-style: italic;
    font-weight: 600;
    text-decoration: tomato wavy underline;
  }
`;

const ImageBox = styled.img`
  height: 4.3rem;
  object-fit: contain;
  -webkit-user-drag: none;
  float: none;
  vertical-align: bottom;
  pointer-events: auto !important;
  margin-bottom: -10px;
`;
