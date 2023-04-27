import{s as d,j as b,a as c}from"./index-2133b08c.js";const g=d.button`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: 0;
	box-sizing: border-box;
	cursor: pointer;
	font-weight: 500;
	font-size: ${({edge:t})=>t!==null?"0.675rem":"0.875rem"};
	line-height: 1.75;
	letter-spacing: 0.02857em;
	min-width: 64px;
	padding: 6px 16px;
	border-radius: 20px;
	color: white;
	background-color: ${({color:t,theme:e})=>t===""?"#FF7E54":t};
	box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

	&:hover {
		text-decoration: none;
		background-color: ${({color:t,theme:e})=>t===""?"#FF7E54":t};
		filter: brightness(0.9);
		box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
	}

	&:disabled {
		cursor: default;
		background: rgba(196, 196, 196, 0.5);
		color: #aaaaaa;
	}

	${({fullWidth:t})=>t?"width: 100%":""};

	img {
		width: 20px;
		margin-right: 10px;
	}

	span {
		margin: 0 10px;
	}

	&:focus {
		outline: none;
	}
`,h=({children:t,classes:e="",classessText:x="",color:p="",fullWidth:a=!1,icon:n,edge:r=null,disabled:s=!1,type:i="button",handleClick:l=()=>{},dataClose:o=""})=>b(g,{className:e,color:p,fullWidth:a,edge:r,type:i,onClick:l,disabled:s,"data-close":o,children:[r==="start"&&n,c("span",{"data-close":o,className:x,children:t}),r==="end"&&n]});export{h as B};
