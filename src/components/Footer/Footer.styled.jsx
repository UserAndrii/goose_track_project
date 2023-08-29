import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #DCEBF7;
    text-align: center;
  
    @media screen and (max-width: 767px) {
        min-width: 375px;
        padding-top: 28px;
        padding-bottom: 28px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 768px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    @media screen and (min-width: 1440px) {
        width: 1440px;
    }
`;

export const Text = styled.h3`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #3E85F3;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.14;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);

    @media screen and (max-width: 767px) {
       
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        line-height: 1.187;
    }
`;

export const TextSpan = styled.span`
    color: #3E85F3;
    font-size: 16px;
    line-height: 1.14;
    margin-bottom: 5px;

    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-size: 18px;
        line-height: 1.187;
    }  
`;

export const Button = styled(Link)`
    color: #3E85F3;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    text-decoration: underline;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;
