import{s as c,j as i,a as s,r as a,e as t}from"./index-2133b08c.js";import{T as r}from"./Text-d4918cc2.js";import{B as g}from"./Button-2af1cf71.js";import{S as l}from"./logo_orange-8d1d52df.js";import{u as n,a as d}from"./useScrollTo-1fa37090.js";const p=c.section`
    background-color: #E4E4E4;
`,f=c.div`
    .col {
        padding: 5px;
    }

    .btn {
        color: #07407B;
    }

    img {
        border-radius: 10px;
        width: 100%;
    }

    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .img9 {
            grid-column: 2 / 2;
            grid-row: 1 / 3;
            height: 100%;
        }

        .img5 {
            grid-column: 1 / 3;
            grid-row: 3 / 3;
        }

        .img6 {
            height: 100%;
        }
    }
`,u="/assets/img5-173b3bae.png",h="/assets/img6-342f7469.png",x="/assets/img7-c09067c5.png",N="/assets/img8-028424fd.png",b="/assets/img9-197a2442.png",w="/assets/img10-24a64af1.png",v=()=>i(f,{className:"row",children:[s("img",{src:N,alt:"img8",className:"col col-sm-3"}),s("img",{src:x,alt:"img7",className:"col col-sm-4"}),s("img",{src:b,alt:"img9",className:"col img9 col-sm-5"}),s("img",{src:h,alt:"img6",className:"col img6 col-sm-4"}),s("img",{src:u,alt:"img5",className:"col img5 col-sm-4"}),s("img",{src:w,alt:"img10",className:"col col-sm-4"})]}),y=({sectionRef:e})=>i(p,{className:"pt-5 pb-2 px-5",ref:e,children:[s("div",{className:"py-5"}),i("div",{className:"w-100 text-center mb-5",children:[s(l,{}),s(r,{color:"#204D83",weight:"bold",size:"40px",children:"Memories"})]}),s(v,{}),s("div",{className:"w-100 d-flex justify-content-center my-4",children:s(g,{color:"#5AD3DF",classes:"btn",children:"more events"})})]}),E=()=>{const e=n(),{n:m,sectionRef:o}=d();return a.useEffect(()=>{e(t(m))},[m]),s(y,{sectionRef:o})},T=()=>s(E,{});export{T as default};
