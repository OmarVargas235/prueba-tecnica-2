import{s,u as w,j as o,F as h,a as t,r as e}from"./index-2133b08c.js";import{T as a}from"./Text-d4918cc2.js";import{B as p}from"./Button-2af1cf71.js";import{S as f,a as u,b as d}from"./logo-225fa6c9.js";import{u as m}from"./useMediaQuery-b99cb765.js";const E=s.nav`
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
`,v=s.div`
    color: white;

    @media (max-width: 1100px) {
        p {
            font-size: 12px;
        }
    }
`,g=s.div`
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
`,y=s.div`
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
`,c=s.div`
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
`,x=()=>{const l=w(n=>n.scrollTo),r=m("(min-width: 992px)"),i=n=>{n==="home"&&window.scrollTo(0,0),n==="events"&&window.scrollTo(0,l.scrollToEvent-80),n==="crew"&&window.scrollTo(0,l.scrollToCrew-80),n==="whatsnew"&&window.scrollTo(0,l.scrollToWhatsNew-80),n==="virtualOffice"&&window.scrollTo(0,l.scrollToVirtualOffice-80),n==="contact"&&window.scrollTo(0,l.scrollToContact-80)};return o(h,{children:[o(v,{className:`d-flex flex-column flex-lg-row justify-content-center align-items-center ml-lg-5 ${r?"":"w-100"}`,children:[t(c,{className:"my-2 mt-lg-0 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("home"),children:t(a,{children:"Home"})}),t(c,{className:"my-2 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("events"),children:t(a,{children:"Events"})}),t(c,{className:"my-2 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("crew"),children:t(a,{children:"The crew"})}),t(c,{className:"my-2 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("whatsnew"),children:t(a,{children:"What's new"})}),t(c,{className:"my-2 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("virtualOffice"),children:t(a,{children:"Virtual office"})}),t(c,{className:"my-2 my-lg-0 mr-0 mr-lg-4",onClick:()=>i("contact"),children:t(a,{children:"Contact"})})]}),t("div",{className:"d-flex justify-content-center align-items-center my-4 my-lg-0",children:t(p,{color:"#5AD3DF",classes:"btn",children:"Maria Reina Parish"})}),t(g,{className:"ml-0 ml-lg-4 mb-3 mb-lg-0",children:t(f,{})}),t(g,{className:"ml-0 ml-lg-2 mr-0 mr-lg-4",children:t(u,{})})]})},b=()=>t(y,{className:"d-flex flex-column align-items-center",children:t(x,{})}),k=l=>e.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...l},e.createElement("g",{transform:"matrix(1,0,0,1,-1088,-192)"},e.createElement("rect",{id:"Icons",x:0,y:0,width:1280,height:800,style:{fill:"none"}}),e.createElement("g",{id:"Icons1","serif:id":"Icons"},e.createElement("g",{id:"Strike"}),e.createElement("g",{id:"H1"}),e.createElement("g",{id:"H2"}),e.createElement("g",{id:"H3"}),e.createElement("g",{id:"list-ul"}),e.createElement("g",{id:"hamburger-1"}),e.createElement("g",{id:"hamburger-2",transform:"matrix(1.50868,0,0,1.01217,70.647,191.772)"},e.createElement("g",{transform:"matrix(0.149202,0,0,0.173437,664.206,42.142)"},e.createElement("rect",{x:103.288,y:8.535,width:71.218,height:34.133,style:{fillRule:"nonzero"}})),e.createElement("g",{transform:"matrix(0.149202,0,0,0.173437,664.345,27.4)"},e.createElement("rect",{x:103.288,y:8.535,width:141.366,height:34.133,style:{fillRule:"nonzero"}})),e.createElement("g",{transform:"matrix(0.149202,0,0,0.173437,664.345,12.658)"},e.createElement("rect",{x:103.288,y:8.535,width:212.447,height:34.133,style:{fillRule:"nonzero"}}))),e.createElement("g",{id:"list-ol"}),e.createElement("g",{id:"list-task"}),e.createElement("g",{id:"trash"}),e.createElement("g",{id:"vertical-menu"}),e.createElement("g",{id:"horizontal-menu"}),e.createElement("g",{id:"sidebar-2"}),e.createElement("g",{id:"Pen"}),e.createElement("g",{id:"Pen1","serif:id":"Pen"}),e.createElement("g",{id:"clock"}),e.createElement("g",{id:"external-link"}),e.createElement("g",{id:"hr"}),e.createElement("g",{id:"info"}),e.createElement("g",{id:"warning"}),e.createElement("g",{id:"plus-circle"}),e.createElement("g",{id:"minus-circle"}),e.createElement("g",{id:"vue"}),e.createElement("g",{id:"cog"}),e.createElement("g",{id:"logo"}),e.createElement("g",{id:"eye-slash"}),e.createElement("g",{id:"eye"}),e.createElement("g",{id:"toggle-off"}),e.createElement("g",{id:"shredder"}),e.createElement("g",{id:"spinner--loading--dots-","serif:id":"spinner [loading, dots]"}),e.createElement("g",{id:"react"})))),N=({setIsOpen:l})=>{const r=m("(min-width: 991px)");return o(E,{className:`py-3 d-flex justify-content-${r?"center":"between"}`,children:[r?null:t(d,{className:"logo"}),t("div",{className:"d-flex justify-content-center align-items-center",children:r?o(h,{children:[t(d,{className:"logo mr-0 mr-xl-5"}),t(x,{})]}):null}),r?null:t(k,{className:"icon mr-3 pointer",onClick:()=>l(i=>!i)})]})},T=({setIsOpen:l})=>t(N,{setIsOpen:l}),P=()=>{const l=m("(max-width: 991px)"),[r,i]=e.useState(!1);return o("div",{className:"position-relative",children:[t(T,{setIsOpen:i}),r&&l?t(b,{}):null]})};export{P as default};
