(this["webpackJsonptictactoe-app"]=this["webpackJsonptictactoe-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(12),n(4)),o=n(1);var i=function(e){var t=e.value,n=e.onClick,a=t?"squares ".concat(t):"squares";return r.a.createElement("button",{className:a,required:!0,onClick:n},t)},s=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(i,{key:t,value:e,onClick:function(){return n(t)}})})))},m=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),i=Object(o.a)(l,2),m=i[0],v=i[1],f=Object(a.useState)(!0),E=Object(o.a)(f,2),b=E[0],p=E[1],h=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}(n[m]),k=b?"X":"O";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"TicTacToe with hooks"),r.a.createElement(s,{squares:n[m],onClick:function(e){var t=n.slice(0,m+1),a=t[m],r=Object(u.a)(a);h||r[e]||(r[e]=k,c([].concat(Object(u.a)(t),[r])),v(t.length),p(!b))}}),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",null,r.a.createElement("h3",null,"History"),n.map((function(e,t){var n=t?"Go to move #".concat(t):"Go to Start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return v(e=t),void p(e%2===0);var e}},n))}))),r.a.createElement("h3",null,"Next Player: "+k),r.a.createElement("h3",null,h?"Winner is: "+h:"Winner is...")))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.eb759d07.chunk.js.map