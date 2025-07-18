import{r as o}from"./index.CVf8TyFT.js";var f={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=o,E=Symbol.for("react.element"),R=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,h=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,n){var t,u={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(t in e)j.call(e,t)&&!O.hasOwnProperty(t)&&(u[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)u[t]===void 0&&(u[t]=e[t]);return{$$typeof:E,type:r,key:a,ref:s,props:u,_owner:h.current}}l.Fragment=R;l.jsx=p;l.jsxs=p;f.exports=l;var i=f.exports;const g=({videoUrl:r,checkInterval:e=3e4})=>{const[n,t]=o.useState(r),[u,a]=o.useState(null),[s,c]=o.useState(!1),d=o.useRef(null);return o.useEffect(()=>{const m=()=>{c(!0);const v=new Date().getTime(),x=`${r}?t=${v}`;setTimeout(()=>{t(x),c(!1)},500)};t(r);const _=setInterval(m,e);return()=>clearInterval(_)},[r,e]),o.useEffect(()=>{d.current&&!s&&d.current.load()},[n,s]),i.jsxs("div",{className:"video-container",children:[s&&i.jsx("div",{className:"update-notification",children:i.jsx("span",{children:"New video detected! Loading..."})}),i.jsx("video",{ref:d,src:n,controls:!0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:`mosaic-video ${s?"updating":""}`,children:"Your browser does not support the video tag."})]})};export{g as default};
