import{s as m,j as o,a as t,r as c,b as d}from"./index-2133b08c.js";import{T as i}from"./Text-d4918cc2.js";import{D as p}from"./Divider-e898cb9b.js";import{B as h}from"./Button-2af1cf71.js";import{S as x}from"./logo_orange-8d1d52df.js";import{i as u,a as g}from"./img2-311f80ec.js";import{i as f,a as b}from"./img4-8b0d6820.js";import{u as n}from"./useMediaQuery-b99cb765.js";import{u as v,a as w}from"./useScrollTo-1fa37090.js";const F=m.section`
    .divider {
        bottom: -90px;
        height: 12%;
    }

    @media (max-width: 576px) {
        background-color: #F2F2F2;
    }
`,N=m.div`
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
`,y=m.div`
    background-color: #F1F1F1;
    width: 50%;
    height: 350px;
    border-top-left-radius: 160px;
    border-bottom-left-radius: 160px;
    right: 0;
    top: calc(50% - 150px);
`,E=({sectionRef:a})=>{const s=n("(max-width: 576px)"),r=n("(max-width: 992px)");return o(F,{className:"pt-5 px-5 position-relative",ref:a,children:[s?null:t(y,{className:"position-absolute"}),o("div",{className:"w-100 text-center mb-5",children:[t(x,{}),t(i,{color:"#204D83",weight:"bold",size:"40px",children:"Events"})]}),t("div",{className:"row",children:[{img:u,alt:"img1",title:"event 1",day:"12",month:"jun"},{img:g,alt:"img2",title:"event 2",day:"13",month:"dic"},{img:f,alt:"img3",title:"event 3",day:"16",month:"dic"},{img:b,alt:"img4",title:"event 4",day:"24",month:"dic"}].map((e,l)=>o(N,{className:"col-12 col-sm-4 col-lg-3 d-flex justify-content-center pb-4",children:[t("img",{src:e.img,alt:e.alt}),t(i,{className:"text1 position-absolute text-uppercase",weight:"bold",size:"25px",color:"white",children:e.title}),t(i,{className:"text2 position-absolute text-uppercase",weight:"bold",size:"40px",color:"#FF7E54",children:e.day}),t(i,{className:"text3 position-absolute text-uppercase",weight:"bold",size:"40px",color:"#FF7E54",children:e.month})]},l))}),o("div",{className:"w-100 d-flex flex-column jsutify-cotent-center align-items-center mt-2 mt-sm-2",children:[t("div",{className:"my-3 order-1 order-sm-0",children:t(h,{color:"#FF7E54",children:"more events"})}),t(i,{className:"text-center",children:"Let's have fun, join us in our events. Find out more here"})]}),r?null:t(p,{className:"position-absolute divider"})]})},j=()=>{const a=v(),{n:s,sectionRef:r}=w();return c.useEffect(()=>{a(d(s))},[s]),t(E,{sectionRef:r})},O=()=>t(j,{});export{O as default};
