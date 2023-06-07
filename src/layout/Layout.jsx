import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 80px);
  padding-top: 5rem;
`;
