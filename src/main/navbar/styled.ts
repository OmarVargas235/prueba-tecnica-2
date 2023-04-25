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

    .icon {
        width: 40px;
        fill: white;
        transform: rotateZ(150deg);
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

export const Menu = styled.div`
    background-color: #204D83;
    width: 30%;
    min-height: 100vh;
    position: fixed;
    right: 0;

    .btn {
        @media (max-width: 500px) {
            font-size: 13px;
            padding: 4px !important;
        }
    }

    @media (max-width: 600px) {
        width: 37%;
    }

    @media (max-width: 425px) {
        width: 45%;
    }

    @media (max-width: 340px) {
        width: 55%;
    }
`;