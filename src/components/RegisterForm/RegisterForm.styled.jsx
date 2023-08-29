import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  background: #dcebf7;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormName = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.4px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InputGroupe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  padding: 40px 24px;
  border-radius: 8px;
  background: #fff;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: #fff;
`;

export const InputWrapper = styled.li`
  display: flex;
  flex-direction: column;

  Input::placeholder {
    color: #858688;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: #ffffff;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputWrapperWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  Input::placeholder {
    color: #858688;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background-color: #ffffff;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: auto;
  width: 287px;
  padding: 14px 103px;
  gap: 10px;
  border-radius: 16px;
  background: #3e85f3;
  border: none;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 16px 152px;
  }
`;

export const ButtonText = styled.span`
  white-space: nowrap;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.28px;
`;
export const ItemIcon = styled(FiLogIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #ffffff;
`;

export const ShowHideButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 18px;
  gap: 18px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  &.valid-input {
    color: #3cbc81;
  }

  &.invalid-input {
    color: #ff0000;
  }

  &:hover,
  &:focus,
  &:active {
    color: #111111;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: ${props =>
    props.isPassword || props.isEmail ? '#FFFFFF' : 'none'};
  outline: none;

  &.valid-input {
    border: 1px solid #3cbc81;
  }

  &.invalid-input {
    border: 1px solid #ff0000;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #111111;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 259px;
    height: 18px;
    padding: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 18px;
    padding: 18px;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-left: 18px;

  &.valid {
    color: #3cbc81;
  }

  &.invalid {
    color: #ff0000;
  }
`;

export const LinkTo = styled(Link)`
  color: #3e85f3;
  font-size: 16px;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SuccessIcon = styled(IoCheckmarkDoneCircleOutline)`
  position: absolute;
  right: 12px;
  bottom: 24px;
  width: 18px;
  height: 18px;
  color: #3cbc81;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`;

export const ErrorIcon = styled(MdErrorOutline)`
  position: absolute;
  right: 12px;
  bottom: 37px;
  width: 18px;
  height: 18px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    bottom: 41px;
  }
`;

export const ContainerErrorIcon = styled.div`
  position: relative;
`;

export const PictureWrapper = styled.div`
  display: ${props => (props.hide ? 'block' : 'none')};
  position: absolute;
  bottom: 0;
  left: 49px;

  width: 400px;
  height: 416px;

  @media screen and (min-width: 1440px) {
    display: ${props => (props.hide ? 'none' : 'block')};
  }
`;
