import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ reduceTop, children }) {
  return (
    <>
      <Header />
      <Navigation />
      <Wrapper reduceTop={reduceTop}>{children}</Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 80px);
  padding-top: ${({ reduceTop }) => (reduceTop ? "5rem" : "7.5rem")};
`;
