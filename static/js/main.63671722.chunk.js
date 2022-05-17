(this["webpackJsonpfinance-tracker"]=this["webpackJsonpfinance-tracker"]||[]).push([[0],{30:function(t,n,e){"use strict";e.r(n);var a,r,c,o,i=e(1),s=e.n(i),d=e(17),l=e.n(d),u=e(6),b=e(3),j=e(2),m="#BDBDBD",h="#FFFFFF",p="#292C2E",x={text:p,textBg:h,background:"#FBFBFB",themeTogglerBg:m},f={text:h,textBg:p,background:"#2C2D30",themeTogglerBg:p},O="#279EE9",g="#F17148",v=m,y=h,w="rgba(189,189,189,0.7)",T=["#023E8A","#0077B6","#0096C7","#00B4D8","#48CAE4","#82DDED","#ADE8F4","#CAF0F8"],k=["#800F2F","#A4133C","#C9184A","#FF4D6D","#FF758F","#FF8FA3","#FFB3C1","#FFF0F3"],A=function(t){switch(t){case"income":return O;case"expense":case"error":return g;case"transData":return v;default:return!1}},C=function(t){switch(t){case"save":return O;case"delete":return g;default:return!1}},D=j.d.div(a||(a=Object(b.a)(["\n\tposition: fixed;\n\tleft: 0;\n\tbottom: 0;\n\tz-index: 10;\n\twidth: 100%;\n\tborder-top: 0.25px solid ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: block;\n\t\tposition: static;\n\t\tpadding: 0 2vw;\n\t\theight: 100vh;\n\t\tborder-right: 0.1px solid ",";\n\t}\n"])),v,v),S=j.d.div(r||(r=Object(b.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\theight:100%;\n\tpadding: 0.5em 0 0.5em 0;\n\tposition: relative;\n\tbackground: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tflex-flow: column;\n\t\talign-items: flex-start;\n\t\tjustify-content: center;\n\t\tpadding: 10vw 0;\n\t\tmargin: 0 0 0.5em 0;\n\t}\n"])),(function(t){return t.theme.background})),F=j.d.label(c||(c=Object(b.a)(["\n\tcursor: pointer;\n\ttext-align: center;\n\tcolor: ",";\n\n\ti {\n\t\tdisplay: block;\n\t\tfont-size: 18px;\n\t\tmargin-bottom: 0.2em;\n\t}\n\n\t@media screen and (min-width: 1024px) {\n\t\tmargin: 2em 0.75em;\n\t\tfont-size: 20px;\n\t\ti {\n\t\t\tdisplay: inline;\n\t\t\tmargin-right: 0.75em;\n\t\t\tfont-size: 24px;\n\t\t}\n\t}\n"])),v),E=j.d.input(o||(o=Object(b.a)(["\n\tdisplay: none;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t-ms-appearance: none;\n\t-o-appearance: none;\n\tappearance: none;\n\n\t&:checked {\n\t\t& + "," {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"])),F,g),M=e(0);var N,z,B,I,R,Y,L,P,G,H,J,U,V,q,K,W,X,Q,Z,$,_,tt,nt,et,at=function(t){var n=t.option,e=t.handleOptionChange;return Object(M.jsx)(D,{children:Object(M.jsxs)(S,{justifySmall:"space-around",option:n,children:[Object(M.jsx)(E,{type:"radio",name:"sidebarOption",value:"transactions",checked:"transactions"===n,onChange:e,id:"transactions"}),Object(M.jsxs)(F,{htmlFor:"transactions",children:[Object(M.jsx)("i",{className:"fa-solid fa-book"}),"Transactions"]}),Object(M.jsx)(E,{type:"radio",name:"sidebarOption",value:"stats",checked:"stats"===n,onChange:e,id:"stats"}),Object(M.jsxs)(F,{htmlFor:"stats",children:[Object(M.jsx)("i",{className:"fa-solid fa-chart-column"}),"Stats"]}),Object(M.jsx)(E,{type:"radio",name:"sidebarOption",value:"accounts",checked:"accounts"===n,onChange:e,id:"accounts"}),Object(M.jsxs)(F,{htmlFor:"accounts",children:[Object(M.jsx)("i",{className:"fa-solid fa-coins"}),"Accounts"]}),Object(M.jsx)(E,{type:"radio",name:"sidebarOption",value:"settings",checked:"settings"===n,onChange:e,id:"settings"}),Object(M.jsxs)(F,{htmlFor:"settings",children:[Object(M.jsx)("i",{className:"fa-solid fa-gear"}),"Settings"]})]})})},rt=e(4),ct=e(8),ot=e(9),it=e.n(ot),st=e(7),dt=e(5),lt=j.d.p(N||(N=Object(b.a)(["\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tfont-size: 36px;\n\t}\n"])),(function(t){return t.theme.text})),ut=j.d.p(z||(z=Object(b.a)(["\n\tcolor: ",";\n"])),(function(t){var n=t.type,e=t.theme;return A(n)||e.text})),bt=Object(j.d)(ut)(B||(B=Object(b.a)(["\n\tfont-weight: bold;\n"]))),jt=Object(j.d)(ut)(I||(I=Object(b.a)(["\n\tfont-weight: 300;\n"]))),mt=j.d.p(R||(R=Object(b.a)(["\n\tfont-size: 9px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tfont-size: 14px;\n\t}\n"])),(function(t){var n=t.type,e=t.theme;return A(n)||e.text})),ht=Object(j.d)(ut)(Y||(Y=Object(b.a)(["\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"]))),pt=j.d.div(L||(L=Object(b.a)(["\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: grid;\n\t\tgrid-auto-columns: 1fr;\n\t\tgrid-template-columns: 20% 80%;\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tgrid-template-columns: 15% 85%;\n\t}\n"]))),xt=j.d.div(P||(P=Object(b.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: ",";\n\tbackground: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tjustify-content: ",";\n\t}\n"])),(function(t){return t.justifySmall}),(function(t){return t.theme.textBg}),(function(t){return t.justifyLarge})),ft=Object(j.d)(xt)(G||(G=Object(b.a)(["\n \tpadding: 0.5em 1.5em;\n \tborder-top: 0.1px solid ",";\n \tborder-bottom: 0.1px solid ",";\n\tmargin-top: -1px;\n\tmargin-left: -1px;\n "])),v,v),Ot=Object(j.d)(ft)(H||(H=Object(b.a)(["\n\tpadding: 1em 7vw;\n\n\t@media screen and (min-width: 1024px) {\n\t\tpadding: 2em 7vw;\n\t}\n "]))),gt=j.d.div(J||(J=Object(b.a)(["\n\toverflow: auto;\n\tz-index: 1;\n"]))),vt=j.d.div(U||(U=Object(b.a)(["\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tz-index: 2;\n\tbackground-color: ",";\n"])),(function(t){return t.theme.background})),yt=j.d.div(V||(V=Object(b.a)(["\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: ",";\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 25;\n\t\theight: 100vh;\n\t\twidth: 100vw;\n\t\topacity: 0.6;\n\t\tbackground-color: ",";\n\t}\n"])),(function(t){return t.show?"block":"none"}),w),wt=j.d.div(q||(q=Object(b.a)(["\n\tposition: fixed;\n\theight: 100vh;\n\twidth: 100vw;\n\tz-index: 20;\n\ttop: 0;\n\tleft: 0;\n\tbackground: ",";\n\tpadding: 5vw;\n\n\t@media screen and (min-width: 1024px) {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\ttop: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\theight: 60vh;\n\t\twidth: 60vw;\n\t\tmax-width: 825px;\n\t\tz-index: 30;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\tborder-radius: 10px;\n\t};\n"])),(function(t){return t.theme.textBg})),Tt=j.d.div(K||(K=Object(b.a)(["\n\tpadding: 1em;\n"]))),kt=Object(j.d)(xt)(W||(W=Object(b.a)(["\n\tmargin: 1em 0.5em;\n\tbackground-color: ",";\n\n\t& label:nth-child(4) {\n\t\tmargin: 0 0.5em;\n\t}\n"])),(function(t){return t.theme.background})),At=j.d.div(X||(X=Object(b.a)(["\n\tmargin: 2em 1em;\n\n\t& button:nth-child(1) {\n\t\tmargin-right: 0.5em;\n\t}\n\n\t& button:nth-child(2) {\n\t\tmargin: 0 0.25em;\n\t}\n\n\t& button:nth-child(3) {\n\t\tmargin-left: 0.5em;\n\t}\n\n\t& > div {\n\t\tmargin: 1em 0;\n\n\t\t& > input {\n\t\t\tcolor: ","\n\t\t}\n\t}\n"])),(function(t){return t.theme.color})),Ct=j.d.input(Q||(Q=Object(b.a)(["\n\tdisplay: none;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t-ms-appearance: none;\n\t-o-appearance: none;\n\tappearance: none;\n\n\t&:checked + label {\n\t\tbackground-color: ",";\n\t\tborder-color: ",";\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.background}),(function(t){var n=t.value,e=t.theme;return A(n)||e.text}),(function(t){var n=t.value,e=t.theme;return A(n)||e.text})),Dt=j.d.label(Z||(Z=Object(b.a)(["\n\tflex: 1;\n\tcursor: pointer;\n\tpadding: 0.5em 0.5em;\n\tborder: 0.25px solid ",";\n\tborder-radius: 5px;\n\tbackground-color: ",";\n\tfont-size: 12px;\n\ttext-align: center;\n\tcolor: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tfont-size: 18px;\n\t}\n"])),v,(function(t){return t.theme.background}),v),St=j.d.label($||($=Object(b.a)(["\n\tfont-size: 12px;\n\tcolor: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tfont-size: 18px;\n\t}\n"])),v),Ft=Object(j.c)(_||(_=Object(b.a)(['\n\twidth: 70vw;\n\tfont-family: "Roboto", sans-serif;\n\toutline: 0;\n\tborder-width: 0 0 0.5px;\n\tcolor: ',";\n\tbackground-color: ",";\n\tborder-color: ",";\n\t\n\t@media screen and (min-width: 1024px) {\n\t\twidth: 37vw;\n\t\tmax-width: 500px;\n\t\tfont-size: 18px;\n\t}\n"])),(function(t){return t.theme.text}),(function(t){return t.theme.textBg}),v),Et=j.d.input(tt||(tt=Object(b.a)(["\n\t","\n"])),Ft),Mt=j.d.select(nt||(nt=Object(b.a)(["\n\t","\n"])),Ft),Nt=j.d.button(et||(et=Object(b.a)(['\n\tflex: 1;\n\tmargin: 0.5em 0;\n\tpadding: 0.75em 0.5em;\n\tfont: 12px "Roboto", sans-serif;\n\tcolor: ',";\n\tbackground-color: ",";\n\tborder: 0.5px solid ",";\n\tborder-radius: 5px;\n\n\t@media screen and (min-width: 1024px) {\n\t\tfont-size: 18px;\n\t}\n"])),(function(t){return t.value?y:function(t){return t.theme.text}}),(function(t){var n=t.value;return C(n)||"none"}),(function(t){var n=t.value;return C(n)||v}));var zt=function(t){var n=t.accounts,e=t.categories,a=t.errorMsgs,r=t.values,c=t.mode,o=t.handleSubmit,i=t.cancelSubmit,s=t.handleValueChange,d=t.handleDeleteTransaction,l=t.blockInvalidCharacter;return Object(M.jsxs)(wt,{children:[Object(M.jsx)(Tt,{children:Object(M.jsxs)(bt,{children:["add"===c?"Add":"Edit"," Transaction"]})}),Object(M.jsxs)("form",{onSubmit:o,children:[Object(M.jsxs)(kt,{children:[Object(M.jsx)(Ct,{type:"radio",name:"transactionType",value:"income",id:"income",checked:"income"===r.transactionType,onChange:s}),Object(M.jsx)(Dt,{htmlFor:"income",children:"Income"}),Object(M.jsx)(Ct,{type:"radio",name:"transactionType",value:"expense",id:"expense",checked:"expense"===r.transactionType,onChange:s}),Object(M.jsx)(Dt,{htmlFor:"expense",children:"Expense"}),Object(M.jsx)(Ct,{type:"radio",name:"transactionType",value:"transfer",id:"transfer",checked:"transfer"===r.transactionType,onChange:s}),Object(M.jsx)(Dt,{htmlFor:"transfer",children:"Transfer"})]}),Object(M.jsxs)(At,{children:[Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"transactionDate",children:"Date"}),Object(M.jsx)(Et,{type:"date",name:"transactionDate",id:"transactionDate",onChange:s,value:it()(r.transactionDate).format("YYYY-MM-DD")})]}),"transfer"!==r.transactionType&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"fromAccount",children:"Account"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(Mt,{value:r.fromAccount,onChange:s,name:"fromAccount",id:"fromAccount",children:[Object(M.jsx)("option",{value:"",disabled:!0,children:"-- Select one --"}),n.map((function(t,n){return Object(M.jsx)("option",{value:t,children:t},n)}))]}),Object(M.jsx)(mt,{type:"error",children:a.fromAccount})]})]}),Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"transactionCategory",children:"Category"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(Mt,{value:r.transactionCategory,onChange:s,id:"transactionCategory",name:"transactionCategory",children:[Object(M.jsx)("option",{value:"",disabled:!0,children:"-- Select one --"}),e[r.transactionType].map((function(t,n){return Object(M.jsx)("option",{value:t,children:t},n)}))]}),Object(M.jsx)(mt,{type:"error",children:a.transactionCategory})]})]})]}),"transfer"===r.transactionType&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"fromAccount",children:"From"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(Mt,{value:r.fromAccount,onChange:s,name:"fromAccount",id:"fromAccount",children:[Object(M.jsx)("option",{value:"",disabled:!0,children:"-- Select one --"}),n.map((function(t,n){return Object(M.jsx)("option",{value:t,children:t},n)}))]}),Object(M.jsx)(mt,{type:"error",children:a.fromAccount})]})]}),Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"toAccount",children:"To"}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(Mt,{value:r.toAccount,onChange:s,name:"toAccount",id:"toAccount",children:[Object(M.jsx)("option",{value:"",disabled:!0,children:"-- Select one --"}),n.map((function(t,n){return Object(M.jsx)("option",{value:t,children:t},n)}))]}),Object(M.jsx)(mt,{type:"error",children:a.toAccount})]})]})]}),Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"transactionAmount",children:"Amount"}),Object(M.jsxs)("div",{children:[Object(M.jsx)(Et,{type:"number",name:"transactionAmount",id:"transactionAmount",onChange:s,value:r.transactionAmount?Math.abs(r.transactionAmount):"",min:"0",placeholder:"0",onKeyDown:l,step:"0.01"}),Object(M.jsx)(mt,{type:"error",children:a.transactionAmount})]})]}),Object(M.jsxs)(xt,{justifySmall:"space-between",children:[Object(M.jsx)(St,{htmlFor:"transactionNotes",children:"Notes"}),Object(M.jsx)(Et,{type:"text",name:"transactionNotes",id:"transactionNotes",value:r.transactionNotes,onChange:s})]})]}),Object(M.jsx)(At,{children:Object(M.jsxs)(xt,{children:[Object(M.jsx)(Nt,{type:"submit",value:"save",children:"Save"}),"edit"===c&&Object(M.jsx)(Nt,{type:"button",onClick:d,value:"delete",children:"Delete"}),Object(M.jsx)(Nt,{type:"button",onClick:i,children:"Cancel"})]})})]})]})};var Bt,It=function(t){var n=t.accounts,e=t.categories,a=t.handleAddTransaction,r=t.mode,c=t.hideForm,o=t.clickedTransData,s=t.handleEditTransaction,d=t.handleDeleteTransaction,l={id:"",transactionType:"income",transactionDate:new Date,fromAccount:"",toAccount:"",transactionCategory:"",transactionAmount:0,transactionNotes:""},b=Object(i.useState)("add"===r?l:o),j=Object(u.a)(b,2),m=j[0],h=j[1],p=Object(i.useState)({fromAccount:"",toAccount:"",transactionCategory:"",transactionAmount:""}),x=Object(u.a)(p,2),f=x[0],O=x[1],g=Object(i.useRef)(!0);Object(i.useEffect)((function(){g.current?g.current=!1:h((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{transactionCategory:""})}))}),[m.transactionType]);var v=function(){h(l)};return Object(M.jsx)(zt,{accounts:n,categories:e,errorMsgs:f,values:m,mode:r,handleSubmit:function(t){t.preventDefault(),function(){var t=!0,n="Required Field";return""===m.fromAccount?(t=!1,O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{fromAccount:n})}))):O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{fromAccount:""})})),"transfer"===m.transactionType&&""===m.toAccount?(t=!1,O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{toAccount:n})}))):O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{toAccount:""})})),"transfer"!==m.transactionType&&""===m.transactionCategory?(t=!1,O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{transactionCategory:n})}))):O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{transactionCategory:""})})),0===m.transactionAmount?(t=!1,O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{transactionAmount:n})}))):O((function(t){return Object(dt.a)(Object(dt.a)({},t),{},{transactionAmount:""})})),t}()&&("expense"===m.transactionType&&(m.transactionAmount*=-1),m.id=Date.now()+Math.random(),"edit"===r?s(m):a(m),v(),c())},cancelSubmit:function(t){t.preventDefault(),v(),c()},handleValueChange:function(t){var n=t.target,e=n.name,a=n.value;"transactionDate"===e&&(a=new Date(a)),h(Object(dt.a)(Object(dt.a)({},m),{},Object(st.a)({},e,a)))},handleDeleteTransaction:d,blockInvalidCharacter:function(t){["e","E","+","-"].includes(t.key)&&t.preventDefault()}})},Rt=e(10),Yt=e.n(Rt),Lt=function(t,n){return t.filter((function(t){return Object.keys(n).every((function(e){return t[e]===n[e]}))}))},Pt=function(t,n,e,a){return Lt(t,Object(st.a)({},n,e)).reduce((function(t,n){return t+Number(n[a])}),0)},Gt=function(t,n,e,a){var r=Object(ct.a)(t);r=Lt(r,Object(st.a)({},n,e));var c,o=0,i=Object(rt.a)(r);try{for(i.s();!(c=i.n()).done;){var s=c.value;"transfer"===s.transactionType?o-=Number(s[a]):o+=Number(s[a])}}catch(d){i.e(d)}finally{i.f()}return o},Ht=function(t,n){var e=n?t:Math.abs(t);return t?Math.abs(t)>999999?Yt()(e).format("0.0a"):Yt()(e).format("0,0.00"):Yt()(0).format("0,0.00")},Jt=function(t,n){var e=n?t:Math.abs(t);return Yt()(e).format("0,0.00")},Ut=j.d.div(Bt||(Bt=Object(b.a)(["\n\tflex: 1;\n\ttext-align: center;\n\n\tp:nth-child(2) {\n\t\tcolor: ",";\n\t}\n"])),(function(t){var n=t.type,e=t.theme;return A(n)||e.text}));var Vt,qt,Kt=function(t){var n=t.dataAsset,e=t.dataExpense,a=t.dataTotal,r=t.heading;return Object(M.jsxs)(ft,{justify:"space-around",children:[Object(M.jsxs)(Ut,{type:"income",children:[Object(M.jsx)(jt,{children:r[0]}),Object(M.jsx)(ut,{children:Ht(n)})]}),Object(M.jsxs)(Ut,{type:"expense",children:[Object(M.jsx)(jt,{children:"Expense"}),Object(M.jsx)(ut,{children:Ht(e)})]}),Object(M.jsxs)(Ut,{type:"total",amount:a,children:[Object(M.jsx)(jt,{children:"Total"}),Object(M.jsx)(ut,{children:Ht(a,!0)})]})]})},Wt=Object(j.d)(xt)(Vt||(Vt=Object(b.a)(["\n    button:nth-child(1) {\n        margin: 0 1em 0 0;\n    }\n\n    button:nth-child(3) {\n        margin: 0 0 0 1em;\n    }\n\n"]))),Xt=j.d.button(qt||(qt=Object(b.a)(["\n    color: ",";\n\n    &:hover, &:focus, &:active {\n        box-shadow: none;\n    }\n    \n    i {\n        font-size: 14px; \n\n        @media screen and (min-width: 1024px) {\n        font-size: 36px;\n        }\n    }\n"])),(function(t){return t.theme.text}));var Qt,Zt,$t,_t,tn,nn,en,an,rn=function(t){var n=t.moveToNextMonth,e=t.moveToPreviousMonth,a=t.dataToRender;return Object(M.jsxs)(Wt,{children:[Object(M.jsx)(Xt,{type:"button",onClick:e,children:Object(M.jsx)("i",{className:"fa-solid fa-angle-left"})}),Object(M.jsxs)(lt,{children:["string"!==typeof a.month?it.a.monthsShort(a.month):a.month,"  ",a.year]}),Object(M.jsx)(Xt,{type:"button",onClick:n,children:Object(M.jsx)("i",{className:"fa-solid fa-angle-right"})})]})},cn=j.d.div(Qt||(Qt=Object(b.a)(["\n\tpadding-bottom: 5em;\n"]))),on=j.d.div(Zt||(Zt=Object(b.a)(["\n\tmargin: 0 0 1em 0;\n\tborder-top: 0.1px solid ",";\n\tborder-bottom: 0.1px solid ",";\n\tbackground: ",";\n"])),v,v,(function(t){return t.theme.textBg})),sn=j.d.div($t||($t=Object(b.a)(["\n\tdisplay: grid;\n\tgrid-auto-columns: 1fr;\n\tgrid-template-columns: 2fr 1fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-gap: 0.5em;\n\talign-items: center;\n\tpadding: 0.25em 7vw;\n\tborder-bottom: 0.5px solid ",";\n\n\t& p {\n\t\tdisplay: inline;\n\t}\n\n\tp:nth-child(3) {\n\t\ttext-align: right;\n\t}\n\n\t@media screen and (min-width: 1024px) {\n\t\tpadding: 0.5em 7vw;\n\t}\n"])),v),dn=j.d.div(_t||(_t=Object(b.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 50vh;\n"]))),ln=j.d.div(tn||(tn=Object(b.a)(["\n\tdisplay: inline-block;\n\twidth: 2em;\n\tborder-radius: 5px;\n\tmargin-left: 0.5em;\n\tpadding: 0.05em 0.25em 0.25em 0.25em;\n\ttext-align: center;\n\tbackground-color: ",";\n\n\tp {\n\t\tcolor: ",";\n\t}\n\n\t@media screen and (min-width: 1024px) {\n\t\twidth: 2.5em;\n\t\tpadding: 0.4em 0.5em 0.5em 0.5em;\n\t}\t\n"])),(function(t){switch(t.day){case"Sun":return g;case"Sat":return O;default:return v}}),y),un=j.d.button(nn||(nn=Object(b.a)(["\n\tdisplay: none;\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: block;\n\t\tpadding: 0.5em .75em;\n\t\tborder-radius: 5px;\n\t\tbackground-color: ",";\n\t\tfont-size: 12px;\n\t\tcolor: ",";\n\t}\n\n\t@media screen and (min-width: 1024px) {\n\t\tborder-radius: 10px;\n\t\tfont-size: 20px;\n\t}\n\n"])),g,y),bn=j.d.button(en||(en=Object(b.a)(["\n\tposition: fixed;\n\tbottom: 3em;\n\tright: 0.7em;\n\tpadding: 0.5em 0.8em;\n\tborder-radius: 50%;\n\tfont-size: 20px;\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n\tbackground-color: ",";\n\tcolor: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: none;\n\t}\n"])),g,y),jn=j.d.button(an||(an=Object(b.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-gap: 1em;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 0.5em 7vw;\n\t\n\t&:hover, &:focus, &:active {\n\t\tbox-shadow: none;\n\t}\n\n\tp {\n\t\ttext-align: left;\n\t}\n\n\tp:nth-child(3) {\n\t\ttext-align: right;\n\t\tcolor: ",";\n\t}\n"])),(function(t){var n=t.theme,e=t.amount;return e&&e>0?O:e&&e<0?g:n.text}));var mn,hn,pn,xn,fn,On,gn,vn,yn,wn,Tn,kn=function(t){var n=t.getTransactionId,e=t.moveToNextMonth,a=t.moveToPreviousMonth,r=t.dataToRender,c=t.setToAddForm;return Object(M.jsxs)(cn,{children:[Object(M.jsxs)(vt,{children:[Object(M.jsxs)(Ot,{justifySmall:"space-between",children:[Object(M.jsx)(rn,{moveToNextMonth:e,moveToPreviousMonth:a,dataToRender:r}),Object(M.jsx)(un,{type:"button",onClick:c,children:"New | +"})]}),Object(M.jsx)(Kt,{dataAsset:r.monthIncomeTotal,dataExpense:r.monthExpenseTotal,dataTotal:r.monthTotal,heading:["Income","Expense","Total"]})]}),r.hasOwnProperty("dailyTrans")?Object(M.jsx)(gt,{children:r.dailyTrans.map((function(t,e){return Object(M.jsxs)(on,{children:[Object(M.jsxs)(sn,{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)(bt,{children:it()(t.day).format("DD")}),Object(M.jsx)(ln,{day:it()(t.day).format("ddd"),children:Object(M.jsx)(mt,{children:it()(t.day).format("ddd")})})]}),Object(M.jsx)(ut,{type:"income",children:Ht(t.dayIncomeTotal)}),Object(M.jsx)(ut,{type:"expense",children:Ht(t.dayExpenseTotal)})]}),t.transactions.map((function(t,e){return Object(M.jsxs)(jn,{onClick:n,"data-id":t.id,amount:t.transactionAmount,children:["transfer"===t.transactionType?Object(M.jsx)(ut,{type:"transData",children:"Transfer"}):Object(M.jsx)(ht,{type:"transData",children:t.transactionCategory}),Object(M.jsxs)("div",{children:[Object(M.jsx)(ut,{children:t.transactionNotes}),"transfer"===t.transactionType?Object(M.jsxs)(ht,{type:"transData",children:[t.fromAccount," ",Object(M.jsx)(M.Fragment,{children:"\u2192"})," ",t.toAccount," "]}):Object(M.jsx)(ut,{type:"transData",children:t.fromAccount})]}),Object(M.jsx)(ut,{children:Jt(t.transactionAmount)})]},e)}))]},e)}))}):Object(M.jsx)(dn,{children:Object(M.jsx)(ut,{type:"transData",children:"No Data Available"})}),Object(M.jsx)(bn,{onClick:c,children:"+"})]})},An=e(21),Cn=function(t,n){var e=t.map((function(t){return t.value})),a=e.reduce((function(t,n){return t+n})),r=e.map((function(t){return Math.max(t/a*100,1)}));return{labels:t.map((function(t){return t.categoryName})),datasets:[{data:r,backgroundColor:"income"===n?T:k,borderWidth:.5}]}},Dn=function(t){var n=t.map((function(t){return t.value})),e=t.map((function(t){return t.categoryName}));return{plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(t){var a=n[t.dataIndex],r=e[t.dataIndex];return"".concat(r,": ").concat(a)}}}},layout:{padding:50}}},Sn=Object(j.d)(gt)(mn||(mn=Object(b.a)(["\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: none;\n\t}\n"]))),Fn=Object(j.d)(gt)(hn||(hn=Object(b.a)(["\n\tdisplay: none;\n\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: block;\n\t}\n"]))),En=j.d.div(pn||(pn=Object(b.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tgap: 1em;\n"]))),Mn=j.d.div(xn||(xn=Object(b.a)(["\n\tmin-height: 30vh;\n\toverflow: hidden;\n\tbackground: ",";\n\tmargin-bottom: 5em;\n\n\tp {\n\t\tdisplay: inline-block;\n\t}\n\t\n\t& > p {\n\t\tdisplay: block;\n\t\tmargin: 5em;\n\t\ttext-align: center;\n\t\tcolor: ",";\n\t}\n\n\t@media screen and (min-width:1024px) {\n\t\theight: inherit;\n\t\twidth: 100%;\n\t\tmargin: -1px 0 0 -1px;\n\t\tborder: 0.5px solid ",";\n\t}\n"])),(function(t){return t.theme.textBg}),v,v),Nn=j.d.div(fn||(fn=Object(b.a)(["\n\tdisplay: none;\n\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: block;\n\t\tmargin-top: 2em;\n\t\ttext-align: center;\n\t}\n"]))),zn=j.d.div(On||(On=Object(b.a)(["\n\twidth: 100%;\n\tpadding: 4vw 16vw;\n\n\t@media screen and (min-width:1024px) {\n\t\tpadding: 1em 5vw;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tpadding: 1em 10vw;\n\t}\n\n"]))),Bn=Object(j.d)(xt)(gn||(gn=Object(b.a)([" \n\tpadding: 1em 0 0.5em 0;\n\tborder-bottom: 3px solid ",";\n\tposition: relative;\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\t&:after {\n\t\tposition: absolute;\n\t\tbottom: -5px;\n\t\theight: 5.1px;\n\t\twidth: 50%;\n\t\t",';\n\t\tcontent: "";\n\t\tbackground-color: ',";\n\t}\n\n\t@media screen and (min-width: 1024px) {\n\t\tdisplay: none;\n\t}\n"])),g,(function(t){return"income"===t.selection?Object(j.c)(vn||(vn=Object(b.a)(["\n\t\t\t\t\t\tright: 0;\n\t\t\t\t  "]))):Object(j.c)(yn||(yn=Object(b.a)(["\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t  "])))}),(function(t){return t.theme.textBg})),In=Object(j.d)(ln)(wn||(wn=Object(b.a)(["\n\tmargin: 0 1em 0 0;\n\tcolor: ",";\n\tbackground-color: ",";\n\n\t@media screen and (min-width: 1024px) {\n\t\twidth: 3.5em;\n\t}\n"])),y,(function(t){var n=t.index;return"income"===t.type?T[n]:k[n]})),Rn=j.d.input(Tn||(Tn=Object(b.a)(["\n\tdisplay: none;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t-ms-appearance: none;\n\t-o-appearance: none;\n\tappearance: none;\n"])));var Yn=function(t){var n=t.data,e=t.type;return Object(M.jsxs)(Mn,{children:[Object(M.jsx)(Nn,{children:"income"===e?Object(M.jsx)(bt,{children:"Income"}):Object(M.jsx)(bt,{children:"Expense"})}),0===n.length?Object(M.jsx)(ut,{children:"No available data"}):Object(M.jsx)(zn,{children:Object(M.jsx)(An.a,{data:Cn(n,e),options:Dn(n)})}),n.map((function(t,n){return Object(M.jsxs)(ft,{justifySmall:"space-between",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)(In,{index:n,type:e,children:Object(M.jsx)(mt,{children:t.percent})}),Object(M.jsx)(ut,{children:t.categoryName})]}),Object(M.jsx)(ut,{children:Yt()(t.value).format("0,0.00")})]},n)}))]})},Ln=function(t){var n=t;return n=n.sort((function(t,n){return n.transactionDate.getTime()-t.transactionDate.getTime()})),function(t){var n,e=t,a=function(t,n){return t.reduce((function(t,e){return t+e[n]}),0)},r=Object(rt.a)(e);try{for(r.s();!(n=r.n()).done;){var c,o=n.value,i=Object(rt.a)(o.dailyTrans);try{for(i.s();!(c=i.n()).done;){var s=c.value;s.dayIncomeTotal=Pt(s.transactions,"transactionType","income","transactionAmount"),s.dayExpenseTotal=Pt(s.transactions,"transactionType","expense","transactionAmount"),s.dayTotal=s.dayIncomeTotal+s.dayExpenseTotal}}catch(d){i.e(d)}finally{i.f()}o.monthIncomeTotal=a(o.dailyTrans,"dayIncomeTotal"),o.monthExpenseTotal=a(o.dailyTrans,"dayExpenseTotal"),o.monthTotal=o.monthIncomeTotal+o.monthExpenseTotal}}catch(d){r.e(d)}finally{r.f()}return e}(Pn(n))},Pn=function(t){var n=[];return t.forEach((function(t){var e,a=(e=t.transactionDate,it()(e).format("LL")),r=function(t){return it()(t).format("MMM")}(t.transactionDate),c=function(t){return it()(t).format("YYYY")}(t.transactionDate);n.some((function(t){return t.month===r}))&&n.some((function(t){return t.year===c}))||n.push({month:r,year:c,dailyTrans:[],monthIncomeTotal:0,monthExpenseTotal:0});var o=n.findIndex((function(t){return t.month===r&&t.year===c}));n[o].dailyTrans.some((function(t){return t.day===a}))||n[o].dailyTrans.push({day:a,transactions:[],dayIncomeTotal:0,dayExpenseTotal:0});var i=n[o].dailyTrans.findIndex((function(t){return t.day===a}));n[o].dailyTrans[i].transactions.push(t)})),n},Gn=function(t,n,e,a){var r=[],c=t.filter((function(t){var n=it()(t.transactionDate).month(),a=it()(t.transactionDate).year();return e.month===n&&e.year===a}));if(0!==c.length){var o,i=Lt(c,{transactionType:n}).sort((function(t,n){var e=t.transactionCategory.toUpperCase(),a=n.transactionCategory.toUpperCase();return e<a?-1:e>a?1:0})),s=Object(ct.a)(new Set(i.map((function(t){return t.transactionCategory})))),d=Object(rt.a)(s);try{for(d.s();!(o=d.n()).done;){var l=o.value,u={categoryName:l,value:0,percent:0};u.value=Math.abs(Pt(i,"transactionCategory",l,"transactionAmount"));var b="income"===n?a.monthIncomeTotal:a.monthExpenseTotal;u.percent=Yt()(Math.abs(u.value/b)).format("0%"),"0%"===u.percent&&(u.percent="1%"),r.push(u)}}catch(j){d.e(j)}finally{d.f()}}return r=function(t){return t.sort((function(t,n){var e=t.value,a=n.value;return e>a?-1:e>a?1:0}))}(r)};var Hn,Jn=function(t){var n=t.transaction,e=t.dateToRender,a=t.dataToRender,r=t.moveToNextMonth,c=t.moveToPreviousMonth,o=Object(i.useState)([]),s=Object(u.a)(o,2),d=s[0],l=s[1],b=Object(i.useState)([]),j=Object(u.a)(b,2),m=j[0],h=j[1],p=Object(i.useState)("income"),x=Object(u.a)(p,2),f=x[0],O=x[1],g=function(t){var n=t.target.value;O(n)};return Object(i.useEffect)((function(){l(Gn(n,"income",e,a)),h(Gn(n,"expense",e,a))}),[n,e,a]),Object(M.jsxs)("div",{children:[Object(M.jsxs)(vt,{children:[Object(M.jsx)(Ot,{children:Object(M.jsx)(rn,{moveToNextMonth:r,moveToPreviousMonth:c,dataToRender:a})}),Object(M.jsxs)(Bn,{selection:f,justifySmall:"space-around",children:[Object(M.jsx)(Rn,{type:"radio",name:"statsSelection",value:"income",checked:"income"===f,onChange:g,id:"income"}),Object(M.jsx)(bt,{htmlFor:"income",as:"label",children:"Income"}),Object(M.jsx)(Rn,{type:"radio",name:"statsSelection",value:"expense",checked:"expense"===f,onChange:g,id:"expense"}),Object(M.jsx)(bt,{htmlFor:"expense",as:"label",children:"Expense"})]})]}),Object(M.jsxs)(Sn,{children:["income"===f&&Object(M.jsx)(Yn,{data:d,type:"income"}),"expense"===f&&Object(M.jsx)(Yn,{data:m,type:"expense"})]}),Object(M.jsx)(Fn,{children:Object(M.jsxs)(En,{children:[Object(M.jsx)(Yn,{data:d,type:"income"}),Object(M.jsx)(Yn,{data:m,type:"expense"})]})})]})},Un=Object(j.d)(ft)(Hn||(Hn=Object(b.a)(["\n\tjustify-content: space-between;\n\tmargin: 0.5em 0;\n\tpadding: 0.75em 7vw;\n\n\tp:nth-child(2) {\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.value<0?g:O}));var Vn,qn,Kn=function(t){var n=t.accountsInfo,e=t.getAccounts,a=t.initialState;return Object(M.jsxs)("div",{children:[Object(M.jsxs)(vt,{children:[Object(M.jsx)(Ot,{children:Object(M.jsx)(lt,{children:"Accounts"})}),Object(M.jsx)(Kt,{dataAsset:n.totalAssets,dataExpense:n.totalLiabilities,dataTotal:n.totalAssets+n.totalLiabilities,heading:["Assets","Liabilities","Total"]})]}),Object(M.jsx)(gt,{children:(n!==a?n:e()).items.map((function(t,n){return Object(M.jsxs)(Un,{value:t.value,children:[Object(M.jsx)(ut,{children:t.accountName}),Object(M.jsx)("p",{children:Jt(t.value,!1)})]},n)}))})]})},Wn=j.d.span(Vn||(Vn=Object(b.a)(['\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 23px;\n\ttransition: 0.3s;\n\n\t&::before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\ttop: 3px;\n\t\tleft: 5px;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder-radius: 23px;\n\t\tbox-shadow: none;\n\t\tbackground-color: ',";\n\t\ttransition: 0.3s;\n\t}\n"])),y),Xn=j.d.div(qn||(qn=Object(b.a)(["\n\twidth: 50px;\n\theight: 23px;\n\tposition: relative;\n\n\tlabel {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: ",";\n\t\tborder: 1px solid ",";\n\t\tborder-radius: 23px;\n\t\tcursor: pointer;\n\t}\n\n\tinput {\n\t\tdisplay: none;\n\t}\n\n\tinput:checked ~ "," {\n\t\tbackground-color: ",";\n\t}\n\n\tinput:checked ~ ","::before {\n\t\ttransform: translateX(23px);\n\t\tbackground-color: ",";\n\t\tbox-shadow: inset 6px -5px 0px 0px ",";\n\t}\n"])),(function(t){return t.theme.themeTogglerBg}),v,Wn,(function(t){return t.theme.themeTogglerBg}),Wn,(function(t){return t.theme.themeTogglerBg}),y);var Qn,Zn=function(t){var n=t.handleDarkMode;return Object(M.jsx)(Xn,{children:Object(M.jsxs)("label",{children:[Object(M.jsx)("input",{type:"checkbox",onChange:n}),Object(M.jsx)(Wn,{})]})})},$n=Object(j.d)(ft)(Qn||(Qn=Object(b.a)(["\n    padding: 0.75em 7vw;\n\n    @media screen and (min-width: 1024px) {\n        padding: 1em 7vw;\n    }\n"])));var _n=function(t){var n=t.handleDarkMode;return Object(M.jsxs)("div",{children:[Object(M.jsx)(vt,{children:Object(M.jsx)(Ot,{children:Object(M.jsx)(lt,{children:"Settings"})})}),Object(M.jsxs)($n,{justifySmall:"space-between",children:[Object(M.jsx)(ut,{children:"Toggle Dark Mode"}),Object(M.jsx)(Zn,{handleDarkMode:n})]})]})},te=["Cash","Bank 1","Bank 2","Savings","Card","Other"],ne={income:["Salary","Investment","Bonus","Petty Cash","Allowance","Gift","Collected Debt","Commission","Interest","Other"],expense:["Food","Transportation","Apparel","Health","Self-Development","Household","Gift","Social Life","Gifts","Gadgets","Beauty","Education","Other"]};var ee,ae=function(t){var n=t.option,e=t.handleDarkMode,a=Object(i.useState)(te),r=Object(u.a)(a,1)[0],c=Object(i.useState)(ne),o=Object(u.a)(c,1)[0],s=Object(i.useState)([]),d=Object(u.a)(s,2),l=d[0],b=d[1],j=Object(i.useState)([]),m=Object(u.a)(j,2),h=m[0],p=m[1],x=Object(i.useState)(""),f=Object(u.a)(x,2),O=f[0],g=f[1],v=Object(i.useState)({}),y=Object(u.a)(v,2),w=y[0],T=y[1],k=Object(i.useState)({month:it()(new Date).month(),year:it()(new Date).year()}),A=Object(u.a)(k,2),C=A[0],D=A[1],S=Object(i.useState)(C),F=Object(u.a)(S,2),E=F[0],N=F[1],z=Object(i.useState)(!1),B=Object(u.a)(z,2),I=B[0],R=B[1],Y=Object(i.useState)("add"),L=Object(u.a)(Y,2),P=L[0],G=L[1],H=function(t,n){return t.map((function(t){return t.id})).indexOf(Number(n))},J=function(){var t=C;t.month-1<0?(t.year=t.year-1,t.month=11):t.month=t.month-1,D({year:t.year,month:t.month})},U=function(){var t=C;t.month+1>11?(t.year=t.year+1,t.month=0):t.month=t.month+1,D({year:t.year,month:t.month})},V={totalAssets:0,totalLiabilities:0,items:[]},q=Object(i.useState)(V),K=Object(u.a)(q,2),W=K[0],X=K[1],Q=function(){R(!0)},Z=function(){g(""),R(!1)},$=Object(i.useRef)(!0);return Object(i.useEffect)((function(){$.current?$.current=!1:b(Ln(h))}),[h]),Object(i.useEffect)((function(){!function(){var t=l.filter((function(t){var n=t.month,e=t.year;return n===it.a.monthsShort(C.month)&&e===C.year.toString()}));0!==t.length?N(t[0]):N(C)}()}),[l,C]),Object(i.useEffect)((function(){if(""!==O){var t=H(h,O);T(h[t]),G("edit"),Q()}}),[O,h]),Object(i.useEffect)((function(){!function(){var t,n=V,e=Object(rt.a)(r);try{for(e.s();!(t=e.n()).done;){var a=t.value,c={accountName:a,value:0};c.value=Pt(h,"toAccount",a,"transactionAmount")+Gt(h,"fromAccount",a,"transactionAmount"),n.items.push(c)}}catch(o){e.e(o)}finally{e.f()}0!==n.items.length&&(n.totalAssets=n.items.filter((function(t){return t.value>0})).reduce((function(t,n){return t+n.value}),0),n.totalLiabilities=function(t){return t.filter((function(t){return t.value<0})).reduce((function(t,n){return t+n.value}),0)}(n.items)),X(n)}()}),[h,r]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(yt,{show:I}),I&&Object(M.jsx)(It,{accounts:r,categories:o,handleAddTransaction:function(t){p((function(n){return[t].concat(Object(ct.a)(n))}))},clickedTransData:w,mode:P,hideForm:Z,handleEditTransaction:function(t){var n=H(h,O),e=Object(ct.a)(h);e[n]=t,p(e)},handleDeleteTransaction:function(){var t=H(h,O);p((function(n){return n.filter((function(n,e){return e!==t}))})),Z()}}),"transactions"===n&&Object(M.jsx)(kn,{getTransactionId:function(t){t.preventDefault();var n=t.currentTarget.getAttribute("data-id");g(n)},moveToNextMonth:U,moveToPreviousMonth:J,dataToRender:E,setToAddForm:function(){G("add"),Q()}}),"stats"===n&&Object(M.jsx)(Jn,{transaction:h,dateToRender:C,dataToRender:E,moveToNextMonth:U,moveToPreviousMonth:J}),"accounts"===n&&Object(M.jsx)(Kn,{accountsInfo:W,getAccounts:function(){var t,n=V,e=Object(rt.a)(r);try{for(e.s();!(t=e.n()).done;){var a={accountName:t.value,value:0};n.items.push(a)}}catch(c){e.e(c)}finally{e.f()}return n},initialState:V}),"settings"===n&&Object(M.jsx)(_n,{handleDarkMode:e})]})},re=Object(j.b)(ee||(ee=Object(b.a)(["\n    * {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    body {\n        padding: 0;\n        margin: 0;\n        background: ",";\n    }\n\n    p, label {\n        font-size: 12px;\n        font-family: 'Roboto', sans-serif;\n        margin: 0; \n\n        @media screen and (min-width: 1024px) {\n            font-size: 18px;\n        }\n    }\n\n\n\n    button {\n        padding: 0;\n        outline: none;\n        cursor: pointer;\n        background: none;\n        background-clip: padding-box;\n        border: 1px solid transparent;\n        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n        transition: all 250ms;\n        user-select: none;\n        -webkit-user-select: none;\n\n        &:hover, &:focus {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n            transform: translateY(-1px);\n        }\n\n        &:active {\n            box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n            transform: translateY(0);\n        }\n    }\n"])),(function(t){return t.theme.background}));var ce=function(){var t=Object(i.useState)(!1),n=Object(u.a)(t,2),e=n[0],a=n[1],r=Object(i.useState)("transactions"),c=Object(u.a)(r,2),o=c[0],s=c[1];return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(j.a,{theme:e?f:x,children:[Object(M.jsx)(re,{}),Object(M.jsxs)(pt,{children:[Object(M.jsx)(at,{option:o,handleOptionChange:function(t){var n=t.target.value;s(n)}}),Object(M.jsx)(ae,{handleDarkMode:function(){a(!e)},option:o})]})]})})};l.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(ce,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.63671722.chunk.js.map