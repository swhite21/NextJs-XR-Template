import React, { FC } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Container>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/scene-3d'>
        <a>3D Scene</a>
      </Link>
    </Container>
  );
};

const Container = styled.nav``;
