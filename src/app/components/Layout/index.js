import React from "react";
import styled from "styled-components";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
