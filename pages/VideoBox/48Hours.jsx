import React from "react";
import styled from "styled-components";

import Header from "../Header";

export default function Hours() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignContent: "space-between",
        }}
      ></div>
      <VidoeBox>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/830500707?h=9388ed313b"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </VidoeBox>
    </>
  );
}

const VidoeBox = styled.div`
  width: 75vw;
  height: 75vh;
  margin: 0 auto;
  margin-top: 100px;
  object-fit: contain;
`;
