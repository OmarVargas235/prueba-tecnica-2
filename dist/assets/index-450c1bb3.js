import{s as o,r as e,j as a,a as r}from"./index-2133b08c.js";import{T as t}from"./Text-d4918cc2.js";import{u as g}from"./useMediaQuery-b99cb765.js";const s=o.section`
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
`,d=o.div`
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
`,b=o.img`
    width: 100px;
`,m="/assets/newman_sountrack-71058e2c.png",p="/assets/album-8ab01eb4.jpg",h=l=>e.createElement("svg",{fill:"white",height:"40px",width:"40px",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64",xmlSpace:"preserve",...l},e.createElement("g",{id:"Play"},e.createElement("path",{d:"M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995 C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012 C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993 c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993z  M25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z"}),e.createElement("path",{d:"M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62 C15.4579,62,2,48.542099,2,32C2,15.4580002,15.4579,2,32,2c16.5419998,0,30,13.4580002,30,30C62,48.542099,48.5419998,62,32,62z"}))),i=l=>e.createElement("svg",{fill:"white",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...l},e.createElement("path",{d:"m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"})),u=l=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1333.33 1333.3",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",...l},e.createElement("path",{d:"M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z",fill:"white",fillRule:"nonzero"})),x=l=>e.createElement("svg",{id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 88.1 88.1",style:{enableBackground:"new 0 0 88.1 88.1"},xmlSpace:"preserve",...l},e.createElement("g",{id:"_x37_7_Essential_Icons_58_"},e.createElement("path",{id:"Share",d:"M69.05,58.1c-4.8,0-9.1,2.3-11.8,5.8l-24.3-14.1c1.5-3.7,1.5-7.8,0-11.5l24.3-14.1c2.7,3.5,7,5.8,11.8,5.8 c8.3,0,15-6.7,15-15s-6.7-15-15-15s-15,6.7-15,15c0,2,0.4,4,1.1,5.7l-24.3,14.2c-2.8-3.5-7-5.8-11.8-5.8c-8.3,0-15,6.7-15,15 s6.7,15,15,15c4.8,0,9.1-2.3,11.8-5.8l24.3,14.1c-0.7,1.7-1.1,3.7-1.1,5.7c0,8.3,6.7,15,15,15s15-6.7,15-15S77.35,58.1,69.05,58.1z  M69.05,4.1c6.1,0,11,4.9,11,11s-4.9,11-11,11c-6.1,0-11-4.9-11-11S62.95,4.1,69.05,4.1z M19.05,55.1c-6.1,0-11-4.9-11-11 s4.9-11,11-11s11,4.9,11,11S25.15,55.1,19.05,55.1z M69.05,84.1c-6.1,0-11-4.9-11-11s4.9-11,11-11c6.1,0,11,4.9,11,11 S75.15,84.1,69.05,84.1z"})),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null),e.createElement("g",null)),w=()=>{const l=g("(min-width: 991px)");return a(s,{className:"pt-5 pt-lg-0 pr-2 pr-lg-5 d-flex flex-column flex-lg-row align-items-center position-relative",children:[l?r("div",{className:"bg"}):null,a("div",{className:"position-relative col-12 col-lg-8 order-1 order-lg-0",children:[r("img",{src:m,alt:"newmanSountrack",className:"img"}),r(t,{className:"position-absolute text1 text-center",color:"white",size:"40px",weight:"bold",children:"Newman"}),r(t,{className:"position-absolute text2 text-center ml-5",color:"white",size:"40px",weight:"bold",children:"Sountrack"})]}),a(d,{className:"p-0 col-12 col-lg-4 d-flex flex-column justify-content-center mt-5",children:[a("div",{className:"header row",children:[a("div",{className:"col col-4 position-relative d-flex align-items-center",children:[r(b,{src:p,alt:"album"}),r(h,{className:"position-absolute playbutton"})]}),a("div",{className:"col col-6 pl-2 d-flex flex-column justify-content-center",children:[a("div",{children:[r(t,{color:"white",weight:"bold",size:"14px",children:"Newman Sountrack"}),r(t,{color:"#ABA7C3",size:"14px",children:"Newman Cathol..."})]}),a("div",{className:"d-flex align-items-center",children:[r(i,{}),r("div",{className:"bar mx-1"}),r(i,{className:"arrow-right"})]})]}),a("div",{className:"col-2 d-flex flex-column justify-content-center",children:[r(u,{className:"mb-4 icon"}),r(x,{className:"icon"})]})]}),r("div",{className:"body",children:[{n:3,title:"This is Amazing grace",subtitle:"Phil Wickman",min:"4",second:"39"},{n:5,title:"This is Amazing grace",subtitle:"Phil Wickman",min:"4",second:"39"},{n:6,title:"This is Amazing grace",subtitle:"Phil Wickman",min:"4",second:"39"},{n:6,title:"This is Amazing grace",subtitle:"Phil Wickman",min:"4",second:"39"}].map((n,c)=>a("div",{className:"row container-music pointer py-1",children:[r("div",{className:"col-2",children:r(t,{children:n.n})}),a("div",{className:"col-7",children:[r(t,{color:"white",children:n.title}),r(t,{children:n.subtitle})]}),a("div",{className:"col-3 d-flex",children:[r(t,{children:n.min}),r(t,{children:":"}),r(t,{children:n.second})]})]},c))})]})]})},f=()=>r(w,{}),z=()=>r(f,{});export{z as default};
