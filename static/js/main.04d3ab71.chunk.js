(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(8),i=n.n(r),s=n(9),o=n(2);var d=function(e){var t=e.date,n=e.description,a=e.category,r=e.amount;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:r})]})};var l=function(e){var t=e.transactions;return Object(c.jsx)("table",{className:"ui celled striped padded table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),t.map((function(e){return Object(c.jsx)(d,{date:e.date,description:e.description,category:e.category,amount:e.amount},e.id)}))]})})};var j=function(e){var t=e.onSearch,n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(c.jsxs)("div",{className:"ui large fluid icon input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search your Recent Transactions",value:i,onChange:function(e){var n=e.target.value;s(n),t(n)}}),Object(c.jsx)("i",{className:"circular search link icon"})]})},u=n(5),h=n(7);var b=function(e){var t=e.onAddTransaction,n=Object(a.useState)({date:"",description:"",category:"",amount:""}),r=Object(o.a)(n,2),i=r[0],s=r[1];function d(e){var t=e.target.id;s(Object(h.a)(Object(h.a)({},i),{},Object(u.a)({},t,e.target.value)))}return Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),fetch("https://bank-of-flatiron-amrl.onrender.com/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.ok||alert("Failed to add transaction"),e.json()})).then((function(e){t(e),alert("Transaction added successfully:",e),s({date:"",description:"",category:"",amount:""})})).catch((function(e){console.error("Error adding transaction:",e)}))},children:[Object(c.jsxs)("div",{className:"inline fields",children:[Object(c.jsx)("input",{id:"date",type:"date",name:"date",value:i.date,onChange:d,required:!0}),Object(c.jsx)("input",{id:"description",type:"text",name:"description",placeholder:"Description",value:i.description,onChange:d,required:!0}),Object(c.jsx)("input",{id:"category",type:"text",name:"category",placeholder:"Category",value:i.category,onChange:d,required:!0}),Object(c.jsx)("input",{id:"amount",type:"number",name:"amount",placeholder:"Amount",step:"0.01",value:i.amount,onChange:d,required:!0})]}),Object(c.jsx)("button",{className:"ui button",type:"submit",children:"Add Transaction"})]})})};var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),d=Object(o.a)(i,2),u=d[0],h=d[1];return Object(a.useEffect)((function(){fetch("https://bank-of-flatiron-amrl.onrender.com/transactions").then((function(e){return e.json()})).then((function(e){r(e),h(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{onSearch:function(e){var t=n.filter((function(t){return t.description.toLowerCase().includes(e.toLowerCase())}));h(t)}}),Object(c.jsx)(b,{onAddTransaction:function(e){r([].concat(Object(s.a)(n),[e]))}}),Object(c.jsx)(l,{transactions:u})]})};var f=function(){return Object(c.jsxs)("div",{className:"ui raised segment",children:[Object(c.jsx)("div",{className:"ui segment violet inverted",children:Object(c.jsx)("h2",{children:"The Royal Bank of Flatiron"})}),Object(c.jsx)(O,{})]})};n(15),n(16),n(17);i.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.04d3ab71.chunk.js.map