"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["106"],{4138(e,i,r){r.d(i,{A:()=>s});var t=r(1684),a=r(2888);let l=a.createContext(!1);function n({children:e,className:i,columns:r=1,columnsSmall:d,columnsLarge:o}){let s=a.Children.toArray(e),c=r||s.length,m=a.useId();return(0,t.jsxs)("div",{style:{marginBottom:"var(--ifm-leading)"},children:[(0,t.jsx)("style",{children:`
          .grid-${m} {
            display: grid;
            grid-template-columns: repeat(${o??c}, 1fr);
            gap: var(--ifm-leading);
            align-items: start;
          }
          
          @media (max-width: 1634px) {
            .grid-${m} {
              grid-template-columns: repeat(${c}, 1fr);
            }
          }
          
          @media (max-width: 996px) {
            .grid-${m} {
              grid-template-columns: repeat(${d??c}, 1fr);
            }
          }
        `}),(0,t.jsx)(l.Provider,{value:!0,children:(0,t.jsx)("div",{className:`grid-${m} ${i||""}`,children:e})})]})}var d=r(2403);let o=(0,a.createContext)(!1),s={...r(1616).A,Grid:n,Image:function({src:e,srcset:i,alt:r,width:n,height:s,className:c}){let m=(0,d.Ay)(e),g=a.useContext(l),u=a.useContext(o),f=i?i.split(",").map(e=>{let[i,r]=e.trim().split(/\s+/);return`${(0,d.Ay)(i)} ${r||""}`.trim()}).join(", "):void 0,h=(0,t.jsx)("img",{src:m,srcSet:f,alt:r,width:n,height:s,className:c,decoding:"async",loading:"lazy",style:{height:"auto"}});return g||u?h:(0,t.jsx)("p",{children:h})},MobileGrid:function({children:e,className:i}){return(0,t.jsx)(n,{columns:3,columnsSmall:2,columnsLarge:4,className:i,children:e})},WhiteBox:function({children:e}){return(0,t.jsx)(o.Provider,{value:!0,children:(0,t.jsx)("div",{style:{backgroundColor:"#ffffff",borderRadius:"var(--ifm-global-radius)",boxShadow:"var(--ifm-global-shadow-lw)",display:"inline-block",marginBottom:"var(--ifm-leading)",padding:"var(--ifm-pre-padding)"},children:e})})},WhiteBoxCaption:function({children:e}){return(0,t.jsx)("p",{style:{color:"var(--ifm-color-gray-900)",display:"block",fontSize:"var(--ifm-code-font-size)",marginBottom:"0",marginTop:"var(--ifm-leading)"},children:e})}}}}]);