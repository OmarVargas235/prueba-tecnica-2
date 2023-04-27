import styled from "styled-components";

export const Container = styled.section`
    background: rgba(8,36,33,1);
    background: -moz-linear-gradient(left, rgba(8,36,33,1) 0%, rgba(8,36,33,1) 1%, rgba(20,92,85,1) 35%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 57%, rgba(33,152,141,1) 95%, rgba(33,152,141,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(8,36,33,1)), color-stop(1%, rgba(8,36,33,1)), color-stop(35%, rgba(20,92,85,1)), color-stop(36%, rgba(20,92,85,1)), color-stop(36%, rgba(20,92,85,1)), color-stop(57%, rgba(20,92,85,1)), color-stop(95%, rgba(33,152,141,1)), color-stop(100%, rgba(33,152,141,1)));
    background: -webkit-linear-gradient(left, rgba(8,36,33,1) 0%, rgba(8,36,33,1) 1%, rgba(20,92,85,1) 35%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 57%, rgba(33,152,141,1) 95%, rgba(33,152,141,1) 100%);
    background: -o-linear-gradient(left, rgba(8,36,33,1) 0%, rgba(8,36,33,1) 1%, rgba(20,92,85,1) 35%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 57%, rgba(33,152,141,1) 95%, rgba(33,152,141,1) 100%);
    background: -ms-linear-gradient(left, rgba(8,36,33,1) 0%, rgba(8,36,33,1) 1%, rgba(20,92,85,1) 35%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 57%, rgba(33,152,141,1) 95%, rgba(33,152,141,1) 100%);
    background: linear-gradient(to right, rgba(8,36,33,1) 0%, rgba(8,36,33,1) 1%, rgba(20,92,85,1) 35%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 36%, rgba(20,92,85,1) 57%, rgba(33,152,141,1) 95%, rgba(33,152,141,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#082421', endColorstr='#21988d', GradientType=1 );
    
    .img {
        width: 100%;
        z-index: 1;
        position: relative;
    }

    .text1 {
        top: 70%;
        left: 30%;
    }

    .text2 {
        top: 80%;
        left: 30%;
    }

    .text1, .text2 {
        z-index: 1;
        position: relative;
        
        @media (max-width: 568px) {
            font-size: 20px;
        }
    }

    .bg {
        background-color: #E4E4E4;
        width: 100%;
        height: 80px;
        position: absolute;
        z-index: 0;
        top: 0;
    }
`;

export const ContainerPlayer = styled.div`
    max-width: 327px;

    .header {
        background-color: #7D3047;

        .col {
            padding: 0;
        }

        .playbutton {
            left: calc(50% - 25px);
        }

        .arrow-right {
            transform: rotateZ(180deg);
        }

        .bar {
            background-color: rgba(254, 254, 254, .4);
            width: 100%;
            height: 3px;
        }

        .icon {
            fill: white;
        }
    }

    .body {
        background: rgba(25,10,14,1);
        background: -moz-linear-gradient(top, rgba(25,10,14,1) 0%, rgba(43,16,25,1) 13%, rgba(67,25,38,1) 59%, rgba(67,25,38,1) 78%, rgba(67,25,38,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(25,10,14,1)), color-stop(13%, rgba(43,16,25,1)), color-stop(59%, rgba(67,25,38,1)), color-stop(78%, rgba(67,25,38,1)), color-stop(100%, rgba(67,25,38,1)));
        background: -webkit-linear-gradient(top, rgba(25,10,14,1) 0%, rgba(43,16,25,1) 13%, rgba(67,25,38,1) 59%, rgba(67,25,38,1) 78%, rgba(67,25,38,1) 100%);
        background: -o-linear-gradient(top, rgba(25,10,14,1) 0%, rgba(43,16,25,1) 13%, rgba(67,25,38,1) 59%, rgba(67,25,38,1) 78%, rgba(67,25,38,1) 100%);
        background: -ms-linear-gradient(top, rgba(25,10,14,1) 0%, rgba(43,16,25,1) 13%, rgba(67,25,38,1) 59%, rgba(67,25,38,1) 78%, rgba(67,25,38,1) 100%);
        background: linear-gradient(to bottom, rgba(25,10,14,1) 0%, rgba(43,16,25,1) 13%, rgba(67,25,38,1) 59%, rgba(67,25,38,1) 78%, rgba(67,25,38,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#190a0e', endColorstr='#431926', GradientType=0 );

        .container-music {
            &:hover {
                background-color: rgba(254, 254, 254, .4);
                transition: background-color .2s ease-in-out;
                
                p {
                    color: white;
                }
            }
        }
    }

    @media (max-width: 350px) {
        max-width: 290px;
    }
`;

export const ImgPlayer = styled.img`
    width: 100px;
`;