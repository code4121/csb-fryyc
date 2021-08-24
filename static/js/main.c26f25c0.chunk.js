(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{28:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(4),l=o.n(a),r=(o(28),o(66)),i=[{component:"field_group",label:"Contact",uid:Object(r.a)(),fields:[{component:"text",label:"First Name",uid:Object(r.a)(),type:"text"},{component:"text",label:"Last Name",uid:Object(r.a)(),type:"text"},{component:"text",label:"Business Name",uid:Object(r.a)(),type:"text"}]}],s=(Object(r.a)(),Object(r.a)(),o(16),o(6)),c=o(1),p=o(7),d=o(5),u=o(17),m=o(18),b=o.n(m),v=o(8),h=o(65),x=function(e){return b()(null===e||void 0===e?void 0:e.path.split("/"))},j=function e(t){var o=t.node,n=t.getChildNodes,a=t.level,l=void 0===a?0:a,r=t.onToggle,i=t.onNodeSelect,s=t.onChange;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{style:{display:"flex"},level:l,type:null===o||void 0===o?void 0:o.type,children:[Object(c.jsx)("div",{onClick:function(){return r(o)},children:"container"===(null===o||void 0===o?void 0:o.type)&&((null===o||void 0===o?void 0:o.isOpen)?Object(c.jsx)(v.a,{}):Object(c.jsx)(v.b,{}))}),Object(c.jsxs)("div",{marginright:10*l,children:["text"===(null===o||void 0===o?void 0:o.type)&&Object(c.jsx)(h.a,{required:!0,label:null===o||void 0===o?void 0:o.label,onChange:function(e){return s(o,e.target.value)}}),"container"===(null===o||void 0===o?void 0:o.type)&&!0===(null===o||void 0===o?void 0:o.isOpen)&&Object(c.jsx)(v.d,{}),"container"===(null===o||void 0===o?void 0:o.type)&&!(null===o||void 0===o?void 0:o.isOpen)&&Object(c.jsx)(v.c,{})]}),Object(c.jsx)("span",{role:"button",onClick:function(){return i(o)},children:x(o)})]}),(null===o||void 0===o?void 0:o.isOpen)&&n(o).map((function(o){return Object(c.jsx)(e,Object(d.a)(Object(d.a)({},t),{},{node:o,level:l+1,onToggle:r,onNodeSelect:i,onChange:s}),null===o||void 0===o?void 0:o.path)}))]})},y=function(e){var t=e.data,o=Object(n.useState)({}),a=Object(s.a)(o,2),l=a[0],r=a[1];Object(n.useEffect)((function(){r((function(e){return Object(d.a)(Object(d.a)({},e),t)}))}),[t]);var i=function(e){return console.log("Get Child Nodes : ",JSON.stringify(null===e||void 0===e?void 0:e.children,null,2)),(null===e||void 0===e?void 0:e.children)?null===e||void 0===e?void 0:e.children.map((function(e){return l[e]})):[]},m=function(e,t){console.log("Changed Node Value: "+e.value,t),r((function(o){return Object(d.a)(Object(d.a)({},o),{},Object(p.a)({},e.path,Object(d.a)(Object(d.a)({},o[e.path]),{},{value:t})))}))},b=function(e){console.log("Toggling Node: ",JSON.stringify(e,null,2)),r((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(p.a)({},e.path,Object(d.a)(Object(d.a)({},t[e.path]),{},{isOpen:!(null===e||void 0===e?void 0:e.isOpen)})))})),console.log("Toggled Node: ",JSON.stringify(l[e.path],null,2))};return Object(c.jsxs)("div",{children:[Object(u.values)(l).filter((function(e){return!0===e.isRoot})).map((function(e){return Object(c.jsx)(j,{node:e,getChildNodes:i,onToggle:b,onChange:m,onNodeSelect:function(){return console.log("Selected : ",JSON.stringify(e,null,2))}},null===e||void 0===e?void 0:e.path)})),Object(c.jsxs)("button",{onClick:function(e){console.log(JSON.stringify(l,null,2))},children:["Dump Data"," "]})]})},O={"/root":{path:"/root",type:"container",isRoot:!0,children:["/root/customer","/root/equipment","/root/loans","/root/lease"]},"/root/customer":{path:"/root/customer",type:"container",children:["/root/customer/firstname","/root/customer/lastname"]},"/root/customer/firstname":{path:"/root/customer/firstname",type:"text",component:"TextField",label:"First Name",value:""},"/root/customer/lastname":{path:"/root/customer/lastname",type:"text",component:"TextField",label:"Last Name",value:""},"/root/equipment":{path:"/root/equipment",type:"container",children:["/root/equipment/0"]},"/root/equipment/0":{path:"/root/equipment/0",type:"container",children:["/root/equipment/0/vin","/root/equipment/0/year","/root/equipment/0/make","/root/equipment/0/model"]},"/root/equipment/0/vin":{path:"/root/equipment/0/vin",type:"text",component:"TextField",label:"VIN",value:""},"/root/equipment/0/year":{path:"/root/equipment/0/year",type:"text",component:"TextField",label:"Year",value:""},"/root/equipment/0/make":{path:"/root/equipment/0/make",type:"text",component:"TextField",label:"Make",value:""},"/root/equipment/0/model":{path:"/root/equipment/0/model",type:"text",component:"TextField",label:"Model",value:""},"/root/loans":{path:"/root/loans",type:"container",children:["/root/loans/0"]},"/root/loans/0":{path:"/root/loans/0",type:"container",children:["/root/loans/0/amount","/root/loans/0/rate","/root/loans/0/first_payment_date","/root/loans/0/residual","/root/loans/0/down_payment","/root/loans/0/period"]},"/root/loans/0/amount":{path:"/root/loans/0/amount",type:"text",component:"TextField",label:"Amount",value:""},"/root/loans/0/rate":{path:"/root/loans/0/rate",type:"text",component:"TextField",label:"Interest Rate",value:""},"/root/loans/0/period":{path:"/root/loans/0/period",type:"text",component:"TextField",label:"Period (in months)",value:""},"/root/loans/0/down_payment":{path:"/root/loans/0/down_payment",type:"text",component:"TextField",label:"Down Payment",value:""},"/root/loans/0/first_payment_date":{path:"/root/loans/0/first_payment_date",type:"text",component:"TextField",label:"Date of First Payment",value:""},"/root/loans/0/residual":{path:"/root/loans/0/residual",type:"text",component:"TextField",label:"Remaining Funds",value:""},"/root/lease":{path:"/root/lease",type:"container",children:["/root/lease/0"]},"/root/lease/0":{path:"/root/lease/0",type:"container",children:["/root/lease/0/amount","/root/lease/0/rate","/root/lease/0/first_payment_date","/root/lease/0/residual","/root/lease/0/down_payment","/root/lease/0/period","/root/lease/0/termination_date"]},"/root/lease/0/amount":{path:"/root/lease/0/amount",type:"text",component:"TextField",label:"Amount",value:""},"/root/lease/0/rate":{path:"/root/lease/0/rate",type:"text",component:"TextField",label:"Interest Rate",value:""},"/root/lease/0/down_payment":{path:"/root/lease/0/down_payment",type:"text",component:"TextField",label:"Down Payment",value:""},"/root/lease/0/period":{path:"/root/lease/0/period",type:"text",component:"TextField",label:"Period",value:""},"/root/lease/0/residual":{path:"/root/lease/0/residual",type:"text",component:"TextField",label:"Residual",value:""},"/root/lease/0/first_payment_date":{path:"/root/lease/0/first_payment_date",type:"text",component:"TextField",label:"Date of First Payment",value:""},"/root/lease/0/termination_date":{path:"/root/lease/0/termination_date",type:"text",component:"TextField",label:"Termination Date",value:""}};function f(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Hello CodeSandbox"}),Object(c.jsx)("h2",{children:"Start editing to see some magic happen!"}),Object(c.jsx)(y,{data:O})]})}var g=document.getElementById("root");l.a.render(Object(c.jsx)(n.StrictMode,{children:Object(c.jsx)(f,{})}),g)}},[[37,1,2]]]);
//# sourceMappingURL=main.c26f25c0.chunk.js.map