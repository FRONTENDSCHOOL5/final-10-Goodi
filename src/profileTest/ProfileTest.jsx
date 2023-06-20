import React from 'react'
import Layout from '../layout/Layout'
import styled from 'styled-components';
import ProfileRightUI from './ProfileRightUI';
import ProfileLeftUI from './ProfileLeftUI';

export default function ProfileTest() {
  return (
    <Layout reduceTop="true">
      <ProfileWrap>
        <ProfileLeftUI />
        <ProfileRightUI />
      </ProfileWrap>
    </Layout>
  )
}

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.4fr auto;
  grid-template-rows: auto;
  gap: 30px;

  padding: 90px 60px 0 80px;
  box-sizing: border-box;
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