import React, { ComponentProps, FC } from "react";
import "styled-components/macro";
import Header from "components/common/Header";
import Container from "components/styled/Container";
import Breadcrumbs from "containers/common/Breadcrumbs";

const GUTTER_BREAKPOINTS = { xs: { t: 0, l: 8 } };

const LayoutContainer: FC<ComponentProps<typeof Container>> = (props) => (
  <Container gutterBreakpoints={GUTTER_BREAKPOINTS} maxWidth="xl" {...props} />
);

const Layout: FC = ({ children }) => (
  <>
    <LayoutContainer lightBg>
      <Header />
    </LayoutContainer>
    <LayoutContainer>
      <Breadcrumbs />
    </LayoutContainer>
    <LayoutContainer>{children}</LayoutContainer>
  </>
);

export default Layout;
