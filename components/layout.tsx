import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Navigation } from './navigation';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

const Container = styled.div``;
