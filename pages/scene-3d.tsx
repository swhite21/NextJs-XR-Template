import { Button } from '@mui/material';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Layout } from '../components/layout';

interface Scene3dProps {}

const Scene3d: FC<Scene3dProps> = () => {
  return (
    <Layout>
      <Container>3d page</Container>
      <Button>Test</Button>
    </Layout>
  );
};

const Container = styled.div``;

export default Scene3d;
