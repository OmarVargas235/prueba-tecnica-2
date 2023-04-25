import styled from "styled-components";

export const Container = styled.section`
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