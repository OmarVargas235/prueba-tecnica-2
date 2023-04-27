import{s as n,j as r,a as t,r as l,d as c}from"./index-2133b08c.js";import{T as o}from"./Text-d4918cc2.js";import{D as d}from"./Divider-e898cb9b.js";import{B as s}from"./Button-2af1cf71.js";import{S as g}from"./logo_orange-8d1d52df.js";import{i as m,a as p}from"./img2-311f80ec.js";import{i as b,a as u}from"./img4-8b0d6820.js";import{u as h,a as x}from"./useScrollTo-1fa37090.js";const f=n.section`
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
`,w=n.div`
    background-color: #FF7E54;
    width: 70px;
    line-height: 1.1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    top: 0;
    left: 15%;

    @media (max-width: 375px) {
        p {
            font-size: 16px;
        }

        &.py-3 {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
        }
    }
`,N=[{img:m,alt:"img1",title:"Blog 1",day:"12",month:"jun",year:"2016",name:"Jone doe",text:"Aliquip consectetur sint qui tempor qui non duis Lorem nisi mollit proident eu."},{img:p,alt:"img2",title:"Blog 2",day:"13",month:"Aug",year:"2017",name:"Jone doe",text:"Aliquip consectetur sint qui tempor qui non duis Lorem nisi mollit proident eu."},{img:b,alt:"img3",title:"Blog 3",day:"16",month:"Aug",year:"2018",name:"Jone doe",text:"Aliquip consectetur sint qui tempor qui non duis Lorem nisi mollit proident eu."},{img:u,alt:"img4",title:"Blog 4",day:"24",month:"dic",year:"2019",name:"Jone doe",text:"Aliquip consectetur sint qui tempor qui non duis Lorem nisi mollit proident eu."}],y=({sectionRef:i})=>r(f,{className:"p-5 position-relative",ref:i,children:[r("div",{className:"w-100 text-center mb-5",children:[t(g,{}),r("div",{className:"d-flex justify-content-center",children:[t(o,{color:"#FF7E54",weight:"600",size:"45px",children:"What's"}),t(o,{className:"ml-2",color:"white",weight:"600",size:"45px",children:"new"})]}),t(o,{color:"white",children:"Find out about latest about our club"})]}),t("div",{className:"row",children:N.map((e,a)=>r("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3",children:[t("img",{src:e.img,alt:e.alt}),r(w,{className:"text-center py-3 px-2 position-absolute",children:[t(o,{className:"text-uppercase",weight:"bold",size:"24px",color:"white",children:e.day}),t(o,{className:"text-uppercase",weight:"bold",size:"22px",color:"white",children:e.year}),t(o,{className:"text-uppercase",weight:"bold",size:"20px",color:"white",children:e.month})]}),t(o,{className:"text1 text-uppercase position-absolute",size:"15px",color:"white",children:e.name}),t(o,{className:"text2 text-uppercase position-absolute",size:"25px",color:"white",weight:"bold",children:e.title}),t(o,{className:"text3 position-absolute",size:"13px",color:"white",children:e.text}),t(s,{color:"#5AD3DF",classes:"btn position-absolute",children:"See more"})]},a))}),t("div",{className:"w-100 d-flex justify-content-center",children:t(s,{children:"Find out more"})}),t(d,{className:"position-absolute divider"})]}),q=()=>{const i=h(),{n:e,sectionRef:a}=x();return l.useEffect(()=>{i(c(e))},[e]),t(y,{sectionRef:a})},T=()=>t(q,{});export{T as default};
