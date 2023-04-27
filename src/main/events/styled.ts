import styled from "styled-components";

export const Container = styled.section`
    .divider {
        bottom: -90px;
        height: 12%;
    }

    @media (max-width: 576px) {
        background-color: #F2F2F2;
    }
`;

export const Card = styled.div`
    img {
        width: 100%;
        border-radius: 20px;
        filter: brightness(0.5);

        @media (max-width: 576px) {
            width: 60%;
        }

        @media (max-width: 375px) {
            width: 100%;
        }
    }

    .text1 {
        top: 10%;
    }

    .text2 {
        top: 25%;
    }

    .text3 {
        top: 40%;
    }
`;

export const Mask = styled.div`
    background-color: #F1F1F1;
    width: 50%;
    height: 350px;
    border-top-left-radius: 160px;
    border-bottom-left-radius: 160px;
    right: 0;
    top: calc(50% - 150px);
`;