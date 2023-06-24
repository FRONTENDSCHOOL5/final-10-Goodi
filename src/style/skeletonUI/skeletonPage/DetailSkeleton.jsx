import React from 'react'
import styled from 'styled-components';
import SkeletonItem from '../SkeletonItem';
import UserSkeleton from './UserSkeleton';

export default function DetailSkeleton() {
  return (
    <DetailWrapSkeleton>
      <DetailImageSkeleton />
      <ProductDetailSkeleton>
        <ProductDetailSection>
          <UserSkeleton />
          <ProductTitle />
          <ProductDescrpition />
          <ProductDescrpitionOther />
        </ProductDetailSection>

        <ProductDetailSection>
          <ProductCountBox />
          <ProductPrice />
          <BtnDiv>
            <PurchaseBtn />
            <PurchaseBtn />
          </BtnDiv>
        </ProductDetailSection>

      </ProductDetailSkeleton>
    </DetailWrapSkeleton>
  )
}

const DetailWrapSkeleton = styled.div`
  margin: 0 60px 120px 80px;
  display: flex;
  justify-content: space-between;
  gap: 5%;
`;

const DetailImageSkeleton = styled(SkeletonItem)`
  width: 40%;
  height: 650px;
`

const ProductDetailSkeleton = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 100px;
`

const ProductDetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
`

const ProductTitle = styled(SkeletonItem)`
  width: 340px;
  height: 40px;
  margin-top: 15px;
`

const ProductDescrpition = styled(SkeletonItem)`
  width: 100%;
  height: 55px;
`

const ProductDescrpitionOther = styled(SkeletonItem)`
  width: 100%;
  height: 150px;
`

const ProductCountBox = styled(SkeletonItem)`
  width: 25%;
  height: 48px;
`

const ProductPrice = styled(SkeletonItem)`
  width: 160px;
  height: 48px;
  align-self: flex-end;
`

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const PurchaseBtn = styled(SkeletonItem)`
  width: 350px;
  height: 56px;
  display: inline-block;
`