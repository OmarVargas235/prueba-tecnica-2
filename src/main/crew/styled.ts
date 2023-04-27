import styled from "styled-components";

export const Container = styled.section`
    background-color: #F5F5F5;
    position: relative;

    .divider {
        bottom: -80px;
        height: 10%;

        @media (max-width: 576px) {
            height: 7%;
        }
    }

    .container-card {
        background-color: white;
        border-radius: 30px;
        -webkit-box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);
        -moz-box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);
        box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);
        position: absolute;
        bottom: 0px;
        
        @media (max-width: 992px) {
            position: relative;
        }
    }

    .card {
        border: none;
        border-radius: 20px;

        .divider {
            position: absolute;
            width: 1px;
            height: 60%;
            background-color: #204D83;

            @media (min-width: 575px) {
                right: 0;
                top: 20%;
            }

            @media (max-width: 575px) {
                width: 60%;
                height: 1px;
                bottom: 0;
            }
        }
    }

    img {
        border-radius: 20px;

        @media (max-width: 575px) {
            width: 100%;
        }
    }

    @media (max-width: 992px) {
        background-color: #EDEDED;
    }
`;

export const Card = styled.div`
    background-color: white;
    position: relative;
    border-radius: 20px;
    -webkit-box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);
    -moz-box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);
    box-shadow: -1px -4px 15px -1px rgba(191,178,191,1);

    img {
        width: 100%;
        border-radius: 20px;
    }

    .text {
        @media (max-width: 1145px) {
            font-size: 14px;
        }

        @media (max-width: 1062px) {
            font-size: 11px;
        }
    }

    .divider2 {
        position: absolute;
        width: 3px;
        height: 90%;
        background-color: #FF7E54;
        left: 0;
        top: 5%;
    }

    @media (max-width: 992px) {
        box-shadow: none;
        border-radius: 0;
        background-color: transparent;
    }
`;