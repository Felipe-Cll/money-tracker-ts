import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;

    @media (max-width: 540px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    color: #00bdae;
    transition: 0.3s ease;

    &:hover {
        color: #00a396;
    }

    @media (max-width: 690px) {
        font-size: 25px;
    }
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;

    @media (max-width: 540px) {
        gap: 2rem;
        white-space: nowrap
    }
`;