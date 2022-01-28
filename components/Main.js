import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

function Main({ thirdWebTokens, sanityTokens, walletAddress }) {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
}

export default Main;

 
