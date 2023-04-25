import styled from "styled-components";

export const Container = styled.header`
    background-color: lightgray;

    .group971 {
        bottom: 20%;
        left: calc(50% - 24px);
    }
`;

export const ContainerVideo = styled.section`
    background-color: black;

    video {
        width: 100%;
    }
`;

export const DividerVertical = styled.div`
    background-color: #FF7E54;
    width: 5px;
    height: 18%;
    bottom: 0;
    left: calc(50% - 2.5px);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const ContainerMessage = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    bottom: 30%;
    left: 80%;
    background-color: #FF7E54;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        left: 1.7px;
        top: 70%;
        z-index: 1;
        background-color: red;
        background-color: #FF7E54;
    }

    svg {
        width: 30px;
        z-index: 2;
    }
`;

export const ButtonIcon = styled.div<{ matches: boolean; }>`
    bottom: 22%;
    left: ${props => props.matches ? '75%' : 'calc(50% - 61px)'};
    background-color: white;
    color: #7F7F7F;
    border-radius: 20px;

    p {
        font-size: 18px;
    }
    
    .container-icon {
        background-color: #5AD3DF;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 991px) {
        bottom: 18%;
    }

    @media (max-width: 660px) {
        bottom: ${props => props.matches ? '15%' : '22%'};
    }
`;