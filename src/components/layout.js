import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "./globalStyles";

const Container = styled.div`
  /* max-width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  main {
    flex: 1 0 auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
