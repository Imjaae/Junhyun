import Link from "next/link";
import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

export default function Editorial() {
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
            href="Editorial/Industry4036"
            style={{
              color: "black",
            }}
          >
            <TitleWrap>
              <Number>1</Number>
              <Title>Industry 40-36</Title>
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
                    src="/Industry40-36/4.webp"
                    alt="industry40-36"
                    draggable="true"
                  />
                ) : (
                  <Link
                    href="Editorial/Industry4036"
                    passHref
                    style={{
                      WebkitUserDrag: "none",
                      pointerEvents: "auto !important",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <ImageBox
                      src="/Industry40-36/4.webp"
                      alt="industry40-36"
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
        <Project>
          <Link
            href="Editorial/Industry5632"
            style={{
              color: "black",
            }}
          >
            <TitleWrap>
              <Number>2</Number>
              <Title>Industry 56-32</Title>
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
                    src="/Industry56-32/47.webp"
                    alt="industry56-32"
                    draggable="true"
                  />
                ) : (
                  <Link
                    href="Editorial/Industry5632"
                    passHref
                    style={{
                      WebkitUserDrag: "none",
                      pointerEvents: "auto !important",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <ImageBox
                      src="/Industry56-32/47.webp"
                      alt="industry56-32"
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
        <Project>
          <Link
            href="Editorial/Paradox"
            style={{
              color: "black",
            }}
          >
            <TitleWrap>
              <Number>3</Number>
              <Title>Paradox</Title>
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
                    src="/paradox/3.webp"
                    alt="paradox"
                    draggable="true"
                  />
                ) : (
                  <Link
                    href="Editorial/Paradox"
                    passHref
                    style={{
                      WebkitUserDrag: "none",
                      pointerEvents: "auto !important",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <ImageBox
                      src="/paradox/3.webp"
                      alt="paradox"
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
