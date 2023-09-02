import styled from '@emotion/styled';
import { FiPlusCircle } from "react-icons/fi";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
@media screen and (min-width: 768px){
  margin-bottom: 28px;
}
`;
export const Title = styled.h2`
color:#111111;
font-size: 18;
line-height: calc(20/18);
font-weight: 700;
@media screen and (min-width: 768px){
  font-size: 20;
line-height: calc(24/20);
}
`;
export const PlusBtn = styled(FiPlusCircle)`
 width: 22px;
  height: 22px;
  color: #111111;
  cursor: pointer;
  transition: color 0.2s;
   &:hover {
    color: #3E85F3;
  }
  @media screen and (min-width: 768px){
  width: 24px;
  height: 24px;
  }
  `;
