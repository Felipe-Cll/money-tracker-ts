import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    background-color: #00bdae;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;

    @media (max-width: 1000px) {
        width: 850px;   
    }
    @media (max-width: 880px) {
        width: 650px;   
    }
    @media (max-width: 690px) {
        width: 500px;   
    }
    @media (max-width: 540px) {
        width: 400px;   
    }
    @media (max-width: 420px) {
        width: 310px;   
    }
`;