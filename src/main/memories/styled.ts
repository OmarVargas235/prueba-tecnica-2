import styled from "styled-components";

export const Container = styled.section`
    background-color: #E4E4E4;
`;

export const ContainerImg = styled.div`
    .col {
        padding: 5px;
    }

    .btn {
        color: #07407B;
    }

    img {
        border-radius: 10px;
        width: 100%;
    }

    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .img9 {
            grid-column: 2 / 2;
            grid-row: 1 / 3;
            height: 100%;
        }

        .img5 {
            grid-column: 1 / 3;
            grid-row: 3 / 3;
        }

        .img6 {
            height: 100%;
        }
    }
`;