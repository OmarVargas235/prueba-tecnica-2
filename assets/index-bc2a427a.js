import{s as r,r as o,j as i,a as t}from"./index-2133b08c.js";import{T as s}from"./Text-d4918cc2.js";import{D as l}from"./Divider-e898cb9b.js";import{u as c}from"./useMediaQuery-b99cb765.js";const d=r.header`
    background-color: lightgray;

    .group971 {
        bottom: 20%;
        left: calc(50% - 24px);
    }
`,m=r.section`
    background-color: black;

    video {
        width: 100%;
    }
`,p=r.div`
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
`,h=r.div`
    bottom: 22%;
    left: ${e=>e.matches?"75%":"calc(50% - 61px)"};
    background-color: white;
    color: #7F7F7F;
    border-radius: 20px;

    p {
        font-size: 18px;
    }
    
    .container-icon {
        background-color: ${e=>e.color};
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
        bottom: ${e=>e.matches?"15%":"22%"};
    }
`,u="/assets/video_banner-19b07615.mp4",g="/assets/video_banner2-4a2d1bea.mp4",x=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:48,height:86,viewBox:"0 0 48 86",...e},o.createElement("g",{id:"Grupo_971","data-name":"Grupo 971",transform:"translate(-936 -894)"},o.createElement("g",{id:"Rect\\xE1ngulo_241","data-name":"Rect\\xE1ngulo 241",transform:"translate(936 894)",fill:"none",stroke:"#ff7e54",strokeWidth:3},o.createElement("rect",{width:48,height:86,rx:24,stroke:"none"}),o.createElement("rect",{x:1.5,y:1.5,width:45,height:83,rx:22.5,fill:"none"})),o.createElement("circle",{id:"Elipse_15","data-name":"Elipse 15",cx:6,cy:6,r:6,transform:"translate(954 918)",fill:"#ff7e54"}))),f=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:49.178,height:49.178,viewBox:"0 0 49.178 49.178",...e},o.createElement("path",{id:"comment_FILL0_wght400_GRAD0_opsz48",d:"M13.836,33.507H43.343V29.819H13.836Zm0-7.991H43.343V21.827H13.836Zm0-7.991H43.343V13.836H13.836ZM53.178,53.178l-9.836-9.836H7.688a3.528,3.528,0,0,1-2.551-1.137A3.528,3.528,0,0,1,4,39.654V7.688A3.528,3.528,0,0,1,5.137,5.137,3.528,3.528,0,0,1,7.688,4h41.8a3.493,3.493,0,0,1,2.582,1.137,3.573,3.573,0,0,1,1.107,2.551ZM7.688,7.688V39.654H44.879l4.61,4.61V7.688H7.688Zm0,0V39.654h0V7.688Z",transform:"translate(-4 -4)",fill:"#fafafa"})),v=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:52.218,height:47.845,viewBox:"0 0 52.218 47.845",...e},o.createElement("path",{id:"favorite_FILL0_wght400_GRAD0_opsz48",d:"M30.109,53.145,27.433,50.73A231.59,231.59,0,0,1,10.4,33.759Q4,26.514,4,19.073A13.491,13.491,0,0,1,17.707,5.3,14.849,14.849,0,0,1,24.3,6.9a15.5,15.5,0,0,1,5.809,5.254A18.933,18.933,0,0,1,36.049,6.9a13.791,13.791,0,0,1,6.462-1.6A13.491,13.491,0,0,1,56.218,19.073q0,7.441-6.4,14.686A231.59,231.59,0,0,1,32.785,50.73Zm0-24.543Zm0,19.386q9.922-9.138,16.057-15.861T52.3,19.073a9.492,9.492,0,0,0-9.791-9.856,10.461,10.461,0,0,0-6.136,2.023,14.745,14.745,0,0,0-4.7,5.809h-3.2A14.145,14.145,0,0,0,23.81,11.24a10.512,10.512,0,0,0-6.1-2.023,9.482,9.482,0,0,0-7.049,2.774,9.653,9.653,0,0,0-2.741,7.082q0,6.331,6.136,13.055T30.109,47.989Z",transform:"translate(-4 -5.3)",fill:"#205a8c"})),w=({changeButton:e,setChangeButton:n})=>{const a=c("(min-width: 575px)");return i(d,{className:"position-relative",children:[i(m,{children:[t("video",{muted:!0,loop:!0,autoPlay:!0,className:"video",style:{display:a?"block":"none"},children:t("source",{src:u,type:"video/mp4"})}),t("video",{muted:!0,loop:!0,autoPlay:!0,className:"video",style:{display:a?"none":"block"},children:t("source",{src:g,type:"video/mp4"})})]}),a?t(x,{className:"position-absolute group971"}):null,t(l,{className:"position-absolute"}),a?t(p,{className:"position-absolute",children:t(f,{})}):null,i(h,{className:"d-flex align-items-center position-absolute pointer",matches:a,onClick:()=>n(!e),color:e?"#FF7E54":"#5AD3DF",children:[t("div",{className:"container-icon mr-2",children:t(v,{})}),t(s,{className:"mr-3",weight:"bold",children:e?"YAY!":"Join us"})]})]})},b=()=>{const[e,n]=o.useState(!1);return t(w,{changeButton:e,setChangeButton:n})},_=()=>t(b,{});export{_ as default};
