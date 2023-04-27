import styled from 'styled-components';

export const Divider = styled.div`
    background-color: #FF7E54;
    width: 5px;
    height: 18%;
    bottom: 0;
    left: calc(50% - 2.5px);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 1;

    @media (max-width: 576px) {
        bottom: -20px;
    }
`;