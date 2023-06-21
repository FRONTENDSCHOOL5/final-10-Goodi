import styled from 'styled-components';

const SkeletonItem = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: var(--gray100-color);
    }
    50% {
      background-color: var(--gray200-color);
    }
    100% {
      background-color: var(--gray100-color);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

export default SkeletonItem;