import{s as o,r as T,j as $,a as l}from"./index-2133b08c.js";const t=()=>`
    padding: 12px;
    display: inline-block;
    border: 1px solid #EDECEC;
    border-radius: 30px;
    box-sizing: border-box;
    outline: none;
    transition: border .1s ease-in-out;
    font-size: 14px;
    color: gray;
    background-color: white;

    &:focus {
        border: 1px solid #5C4D9C;
    }
    
    &:disabled{
        color:#AAAAAA;
    }
    
    &.error {
        border-color: #E80B0B;
    }
`;o.input`
	${t()}
`;o.textarea`
	${t()}
`;const k=o.div`
	span {
		margin-bottom: 5px;
		display: block;
		font-size: 14px;
		font-weight: bold;
		color: ${e=>e.theme.label};
	}
`,B=o.input`
	${t()}
	border: none;

	&:focus {
		border: none;
	}
`,I=o.textarea`
	${t()}
	border: none;

	&:focus {
		border: none;
	}
`,H=o.div`
	${t()}
	
    overflow: hidden;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: ${({isFull:e})=>e?"100%":"25ch"};
	${({edge:e})=>e!==null&&(e==="start"?"padding-left: 12px":"padding-right: 12px")};

	border: 2px solid
		${({isFocus:e,isError:r})=>e?r?"#D32F2F":"gray":r?"#D32F2F":"#C4C4C4"};

	svg {
		cursor: pointer;
	}

	input {
		width: 100%;
		color: ${({isError:e})=>e?"#D32F2F":"gray"};
	}
`,O=o.p`
	color: ${e=>e.color??"gray"};
	font-weight: ${e=>e.weight??"normal"};
	font-size: ${e=>e.size??"14px"};
	margin: 0;
`,q=({classes:e="",classesInput:r="",classesContainerInput:h="",icon:s=null,icon2:i=null,edge:a=null,edge2:d=null,placeholder:c="",label:u="",type:n="text",name:x,handleChange:m,handleChangeTextarea:C,value:p,isReadOnly:b=!1,isError:w=!1,isFull:F=!1,helperText:f="",colorHelperText:y="",weightHelperText:z="",sizeHelperText:A="",autocomplete:D="on",refInput:N={current:null},id:j="",maxLength:v=void 0})=>{const[E,g]=T.useState(!1);return $(k,{className:e,onFocus:()=>g(!0),onBlur:()=>g(!1),children:[u!==""?l("span",{className:"label",children:u}):null,$(H,{isFocus:E,edge:a,isError:w,isFull:F,className:`w-100 ${h}`,children:[a==="start"&&n!=="textarea"?s:null,d==="start"&&n!=="textarea"?i:null,n==="textarea"?l(I,{placeholder:c,name:x,onChange:C,value:p,readOnly:b,rows:4,className:`w-100 ${r}`,autoComplete:D,maxLength:v}):l(B,{placeholder:c,type:n,name:x,onChange:m,value:p,readOnly:b,className:`${j} ${r}`,autoComplete:"off",ref:N}),a==="end"&&n!=="textarea"?s:null,d==="end"&&n!=="textarea"?i:null]}),f.length===0?null:l(O,{color:y,weight:z,size:A,children:f})]})};export{q as T};
