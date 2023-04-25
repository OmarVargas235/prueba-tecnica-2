import styled from "styled-components";

export const Container = styled.nav`
    background-color: #002D63;

    .logo {
        width: 200px;
        height: 50px;
    }

    .btn {
        color: #002D63;

        @media (max-width: 1100px) {
            font-size: 10px;
            padding: 5px !important;
        }
    }
`;

export const ContainerText = styled.div`
    color: white;

    @media (max-width: 1100px) {
        p {
            font-size: 12px;
        }
    }
`;

export const ContainerIcon = styled.div`
    background-color: #FF7E54;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 20px;
        fill: #002D63;
    }
`;