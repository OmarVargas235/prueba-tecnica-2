import styled from "styled-components";

export const Container = styled.nav`
    background-color: #002D63;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    opacity: .9;

    p {
        color: white;
    }

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
    position: fixed;
    right: 0;
    z-index: 999;
    opacity: .9;
    margin-top: 82px;
    height: calc(100vh - 82px);
    overflow-y: scroll;

    p {
        color: white;
    }

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

export const Option = styled.div`
    cursor: pointer;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 10px 20px;
        text-align: center;
        transition: background-color .2s ease-in-out;
    
        &:hover {
            background-color: rgba(0, 0, 0, .8);
        }
    }
`;