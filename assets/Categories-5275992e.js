import{j as s}from"./index-045101a6.js";const a=["All","Frontend","OpenSource","DevOps","Other"],l=({value:i,onClickCategory:t})=>s("div",{children:s("ul",{className:"categories",children:a.map((e,r)=>s("li",{className:`item ${i===e&&"active"}`,onClick:()=>t(e),children:e},r))})});export{l as default};