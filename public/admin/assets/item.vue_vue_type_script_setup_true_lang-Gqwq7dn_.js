
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as A}from"./HTooltip.vue_vue_type_script_setup_true_lang-C9_oOtnv.js";import{d as R,$ as V,r as D,p as r,n as H,g as o,c as l,b as C,w as i,i as a,z as x,e as X,A as u,Q as s,t as E,R as Q,X as T,bX as F,ae as G,j as J}from"./index-DEc4xym2.js";const L="rootMenu",Y=R({__name:"item",props:{uniqueKey:{},item:{},level:{default:0},subMenu:{type:Boolean,default:!1},expand:{type:Boolean,default:!1}},setup(N,{expose:j}){const n=N,t=V(L),p=D(),B=r(()=>n.subMenu?t.subMenus[n.uniqueKey.at(-1)].active:t.activeIndex===n.uniqueKey.at(-1)),m=r(()=>B.value&&(!n.subMenu||t.isMenuPopup)),K=r(()=>t.isMenuPopup?"":`padding-left: ${20*(n.level??0)}px`);return j({ref:p}),(e,O)=>{const I=J,q=A,z=H("router-link");return o(),l("div",{ref_key:"itemRef",ref:p,class:s(["menu-item relative transition-all",{active:a(m)}])},[C(z,{custom:"",to:e.uniqueKey.at(-1)??""},{default:i(({href:S,navigate:$})=>{var f,c,b;return[C(q,{enable:a(t).isMenuPopup&&e.level===0&&!e.subMenu,text:typeof((f=e.item.meta)==null?void 0:f.title)=="function"?(c=e.item.meta)==null?void 0:c.title():(b=e.item.meta)==null?void 0:b.title,placement:"right",class:"h-full w-full"},{default:i(()=>{var v,d,y,M,g;return[(o(),x(G(e.subMenu?"div":"a"),T({...!e.subMenu&&{href:(v=e.item.meta)!=null&&v.link?e.item.meta.link:S,target:(d=e.item.meta)!=null&&d.link?"_blank":"_self",class:"no-underline"}},{class:["group menu-item-container h-full w-full flex cursor-pointer items-center justify-between gap-1 px-5 py-4 text-[var(--g-sub-sidebar-menu-color)] transition-all hover-bg-[var(--g-sub-sidebar-menu-hover-bg)] hover-text-[var(--g-sub-sidebar-menu-hover-color)]",{"text-[var(--g-sub-sidebar-menu-active-color)]! bg-[var(--g-sub-sidebar-menu-active-bg)]!":a(m),"px-3!":a(t).isMenuPopup&&e.level===0}],title:typeof((y=e.item.meta)==null?void 0:y.title)=="function"?(M=e.item.meta)==null?void 0:M.title():(g=e.item.meta)==null?void 0:g.title},F({...!e.subMenu&&{click:$}})),{default:i(()=>{var h,w,k,P;return[X("div",{class:s(["inline-flex flex-1 items-center justify-center gap-[12px]",{"flex-col":a(t).isMenuPopup&&e.level===0&&a(t).props.mode==="vertical","gap-1!":a(t).isMenuPopup&&e.level===0&&a(t).props.showCollapseName,"w-full":a(t).isMenuPopup&&e.level===0&&a(t).props.showCollapseName&&a(t).props.mode==="vertical"}]),style:Q(a(K))},[(h=n.item.meta)!=null&&h.icon?(o(),x(I,{key:0,name:n.item.meta.icon,size:20,class:"menu-item-container-icon transition-transform group-hover-scale-120",async:""},null,8,["name"])):u("",!0),a(t).isMenuPopup&&e.level===0&&!a(t).props.showCollapseName?u("",!0):(o(),l("span",{key:1,class:s(["w-0 flex-1 truncate text-sm transition-height transition-opacity transition-width",{"opacity-0 w-0 h-0":a(t).isMenuPopup&&e.level===0&&!a(t).props.showCollapseName,"w-full text-center":a(t).isMenuPopup&&e.level===0&&a(t).props.showCollapseName}])},E(typeof((w=e.item.meta)==null?void 0:w.title)=="function"?(k=e.item.meta)==null?void 0:k.title():(P=e.item.meta)==null?void 0:P.title),3))],6),e.subMenu&&!(a(t).isMenuPopup&&e.level===0)?(o(),l("i",{key:0,class:s(["relative ml-1 w-[10px] after:absolute after:h-[1.5px] after:w-[6px] after:bg-current after:transition-transform-200 after:content-empty after:-translate-y-[1px] before:absolute before:h-[1.5px] before:w-[6px] before:bg-current before:transition-transform-200 before:content-empty before:-translate-y-[1px]",[e.expand?"before:-rotate-45 before:-translate-x-[2px] after:rotate-45 after:translate-x-[2px]":"before:rotate-45 before:-translate-x-[2px] after:-rotate-45 after:translate-x-[2px]",a(t).isMenuPopup&&e.level===0&&"opacity-0",a(t).isMenuPopup&&e.level!==0&&"-rotate-90 -top-[1.5px]"]])},null,2)):u("",!0)]}),_:2},1040,["class","title"]))]}),_:2},1032,["enable","text"])]}),_:1},8,["to"])],2)}}});export{Y as _,L as r};