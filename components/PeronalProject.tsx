import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function PersonalProject() {
  return (
    <div>
      <ProjectWrap>
        <Project>
          <Link
            href="PersonalProject/Hailmacuf"
            style={{
              color: "black",
            }}
          >
            <TitleWrap>
              <Number>1</Number>
              <Title>Hailmacuf</Title>
            </TitleWrap>
            <ImageBox src="/hailmacuf/6.webp" />
          </Link>
        </Project>
      </ProjectWrap>
    </div>
  );
}

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
  padding-bottom: 9px;
`;
