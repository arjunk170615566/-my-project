import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as H}from"./index-DRjF_FHU.js";const R={sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},_={filled:"bg-gray-100 border border-transparent focus:border-blue-500",outlined:"border border-gray-300 focus:border-blue-500",ghost:"bg-transparent border-b border-gray-300 focus:border-blue-500"},I=({value:i,onChange:a,label:d,placeholder:z,helperText:p,errorMessage:u,disabled:m,invalid:n,variant:S="outlined",size:C="md",type:o="text",loading:c,clearable:D})=>{const[b,P]=H.useState(!1),F=o==="password"&&b?"text":o;return e.jsxs("div",{className:"flex flex-col w-full",children:[d&&e.jsx("label",{className:"mb-1 text-sm font-medium",children:d}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{type:F,value:i,onChange:a,placeholder:z,disabled:m||c,"aria-invalid":n,className:`w-full rounded-lg outline-none transition 
            ${R[C]} ${_[S]}
            ${n?"border-red-500":""} 
            ${m?"bg-gray-200 cursor-not-allowed":""}`}),c&&e.jsx("div",{className:"absolute right-3 h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"}),D&&i&&e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a({target:{value:""}}),className:"absolute right-8 text-gray-500 text-sm",children:"✕"}),o==="password"&&e.jsx("button",{type:"button",onClick:()=>P(M=>!M),className:"absolute right-2 text-gray-500 text-sm",children:b?"Hide":"Show"})]}),n&&u?e.jsx("p",{className:"mt-1 text-sm text-red-500",children:u}):p&&e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:p})]})};I.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "ghost"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outlined"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""}}};const V={title:"Components/InputField",component:I,argTypes:{variant:{control:{type:"radio"},options:["filled","outlined","ghost"]},size:{control:{type:"radio"},options:["sm","md","lg"]},type:{control:{type:"radio"},options:["text","password"]}}},r={args:{label:"Username",placeholder:"Enter your name",helperText:"This is a helper text",variant:"outlined",size:"md"}},t={args:{label:"Email",placeholder:"Enter your email",invalid:!0,errorMessage:"Invalid email format",variant:"outlined",size:"md"}},s={args:{label:"Disabled field",placeholder:"Can't type here",disabled:!0,variant:"outlined"}},l={args:{label:"Password",placeholder:"Enter password",type:"password",variant:"outlined"}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md"
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,h,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email format",
    variant: "outlined",
    size: "md"
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,T,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Disabled field",
    placeholder: "Can't type here",
    disabled: true,
    variant: "outlined"
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var q,j,N;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    variant: "outlined"
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const k=["Default","WithError","Disabled","PasswordField"];export{r as Default,s as Disabled,l as PasswordField,t as WithError,k as __namedExportsOrder,V as default};
