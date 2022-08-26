import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 690px) {
        padding: 20px;
    }
    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;

    @media (max-width: 540px) {
        width: 250px;
    }
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5 px;

    
`;

export const Input = styled.input`
    width: 100%;
    height: 26px;
    padding: 0 5px;
    border: 1px solid #888888;
    border-radius: 5px;
    outline: none;
    transition: 0.5s ease;

    &:hover {
        border: 1px solid #00bdae;
    }

    @media (max-width: 690px) {
        padding: 5px;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 28px;
    padding: 0 5px;
    border: 1px solid #888888;
    border-radius: 5px;
    outline: none;
    transition: 0.5s ease;

    &:hover {
        border: 1px solid #00bdae;
    }

    @media (max-width: 690px) {
        padding: 17.5px;
    }
    @media (max-width: 540px) {
        width: 150px;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #888888;
    border-radius: 5px;
    background-color: #00bdae;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: #00a396;
        color: #fff;
    }

    @media (max-width: 690px) {
        height: 40px;
    }
`;