import styled from "styled-components";

export const Container = styled.section`
    background: rgba(35,83,135,1);
    background: -moz-linear-gradient(top, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(39,134,156,1) 53%, rgba(41,162,168,1) 82%, rgba(41,162,168,1) 86%, rgba(41,162,168,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(35,83,135,1)), color-stop(0%, rgba(35,83,135,1)), color-stop(0%, rgba(35,83,135,1)), color-stop(53%, rgba(39,134,156,1)), color-stop(82%, rgba(41,162,168,1)), color-stop(86%, rgba(41,162,168,1)), color-stop(100%, rgba(41,162,168,1)));
    background: -webkit-linear-gradient(top, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(39,134,156,1) 53%, rgba(41,162,168,1) 82%, rgba(41,162,168,1) 86%, rgba(41,162,168,1) 100%);
    background: -o-linear-gradient(top, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(39,134,156,1) 53%, rgba(41,162,168,1) 82%, rgba(41,162,168,1) 86%, rgba(41,162,168,1) 100%);
    background: -ms-linear-gradient(top, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(39,134,156,1) 53%, rgba(41,162,168,1) 82%, rgba(41,162,168,1) 86%, rgba(41,162,168,1) 100%);
    background: linear-gradient(to bottom, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(35,83,135,1) 0%, rgba(39,134,156,1) 53%, rgba(41,162,168,1) 82%, rgba(41,162,168,1) 86%, rgba(41,162,168,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#235387', endColorstr='#29a2a8', GradientType=0 );

    img {
        width: 100%;
        border-radius: 20px;
        filter: brightness(0.6);
    }

    .text-uppercase {
        left: 15%;
    }

    .text1 {
        top: 40%;
    }

    .text2 {
        top: 46%;
    }

    .text3 {
        left: 15%;
        top: 60%;
    }

    .btn {
        color: #07407B;
        top: 85%;
    }

    .divider {
        bottom: -110px;
        height: 15%;

        @media (max-width: 768px) {
            height: 13%;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }
`;

export const Date = styled.div`
    background-color: #FF7E54;
    width: 70px;
    line-height: 1.1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    top: 0;
    left: 15%;
`;