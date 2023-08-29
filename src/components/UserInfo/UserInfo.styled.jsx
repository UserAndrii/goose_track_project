import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Name = styled.p`
  color: #343434;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;

export const Letter = styled.p`
  color: #3e85f3;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
