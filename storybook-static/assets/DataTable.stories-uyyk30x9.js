import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r as x,R as v}from"./index-DRjF_FHU.js";function q({data:n,columns:u,loading:E,selectable:p,onRowSelect:i}){const[g,_]=x.useState(new Set),[t,L]=x.useState(),R=v.useMemo(()=>t?[...n].sort((e,a)=>{const r=e[t.key],y=a[t.key];return r<y?t.asc?-1:1:r>y?t.asc?1:-1:0}):n,[n,t]),V=e=>{const a=new Set(g);a.has(e)?a.delete(e):a.add(e),_(a),i==null||i(n.filter(r=>a.has(r.id)))},$=e=>{e.sortable&&L(a=>(a==null?void 0:a.key)===e.dataIndex?{key:e.dataIndex,asc:!a.asc}:{key:e.dataIndex,asc:!0})};return E?s.jsx("p",{className:"p-4",children:"Loading..."}):n.length?s.jsxs("table",{className:"min-w-full border border-gray-200 rounded-lg overflow-hidden",children:[s.jsx("thead",{className:"bg-gray-100",children:s.jsxs("tr",{children:[p&&s.jsx("th",{className:"px-3 py-2"}),u.map(e=>s.jsxs("th",{onClick:()=>$(e),className:`px-3 py-2 text-left cursor-pointer select-none ${e.sortable?"hover:bg-gray-200":""}`,children:[e.title,(t==null?void 0:t.key)===e.dataIndex&&s.jsx("span",{className:"ml-1",children:t.asc?"▲":"▼"})]},e.key))]})}),s.jsx("tbody",{children:R.map((e,a)=>s.jsxs("tr",{className:`border-t ${a%2===0?"bg-gray-50":"bg-white"} hover:bg-blue-50`,children:[p&&s.jsx("td",{className:"px-3 py-2",children:s.jsx("input",{type:"checkbox",checked:g.has(e.id),onChange:()=>V(e.id)})}),u.map(r=>s.jsx("td",{className:"px-3 py-2",children:String(e[r.dataIndex])},r.key))]},e.id))})]}):s.jsx("p",{className:"p-4 text-gray-500",children:"No data available"})}q.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:""},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:""}}};const m=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"age",title:"Age",dataIndex:"age",sortable:!0}],A=[{id:1,name:"Aman",age:24},{id:2,name:"ram",age:30},{id:3,name:"rahul",age:28}],z={title:"Components/DataTable",component:q},o={args:{data:A,columns:m}},d={args:{data:A,columns:m,selectable:!0}},c={args:{data:[],columns:m,loading:!0}},l={args:{data:[],columns:m}};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,j,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    selectable: true
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,S,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: [],
    columns,
    loading: true
  }
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,w,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: [],
    columns
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const B=["Default","Selectable","Loading","Empty"];export{o as Default,l as Empty,c as Loading,d as Selectable,B as __namedExportsOrder,z as default};
