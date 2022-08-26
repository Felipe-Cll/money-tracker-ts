import styled from 'styled-components';

export const Tableline = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;

    @media (max-width: 690px) {
        padding: 10px 0 0 30px;
    }
    @media (max-width: 540px) {
        padding: 10px 3px;
    }
    @media (max-width: 420px) {
        font-size: 0.7rem;
    }
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    white-space: nowrap;
`;