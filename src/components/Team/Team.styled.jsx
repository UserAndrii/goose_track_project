import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #3E85F3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;

    @media screen and (max-width: 767px) {
        min-width: 375px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 768px;
    }

    @media screen and (min-width: 1440px) {
        width: 1440px;
    }
`;

export const Title = styled.h2`
    margin-top: 14px;
    margin-bottom: 10px;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.25;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 1440px) {
        margin-bottom: 20px;
    }
`;

export const Button = styled(Link)`
    background: #FFFFFF;
    color: #3E85F3;
    display: flex;
    border: none;
    border-radius: 16px;
    // margin-left: auto;
    // margin-right: 20px;
    padding: 8px 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.29;
   
    &:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 768px) {
        // margin-right: 40px;
        padding: 10px 20px;
        margin-bottom: 0;
        font-size: 20px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        justify-content: flex-start;
        align-items: flex-start;
    }

    @media screen and (min-width: 1440px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 30px;
    }
}
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: calc(50% - 20px);
        justify-content: space-between;
        align-items: center;
        margin-top: 0;
        padding: 0;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        gap: 150px; 
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 40px;
    background: #E3F3FF;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        min-width: 200px;
        min-height: 200px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: top center;
`;

export const ItemSpan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TextSpan = styled.a`
    width: 335px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.29;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;
