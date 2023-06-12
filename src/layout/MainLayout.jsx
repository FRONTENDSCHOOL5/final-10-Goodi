import React from 'react'
import Layout from './Layout'
import styled, { css } from 'styled-components';

export default function MainLayout({ reduceTop, children }) {
  return (
    <Layout reduceTop={reduceTop}>
      <LayoutWrap reduceTop={reduceTop}>
        {children}
      </LayoutWrap>
    </Layout>
  )
}

const LayoutWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.1fr 1fr;
  grid-template-rows: auto;

  ${({ reduceTop }) => reduceTop &&
    css`
      padding: 90px 60px 120px 80px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 330px;
        background: #000;
      }
    `
  }
`;