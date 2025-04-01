var F=Object.defineProperty;var q=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var w=(e,t,r)=>q(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const L=()=>{const e=new Set;return{subscribe:s=>e.add(s),notify:()=>e.forEach(s=>s())}},H=(e,t)=>{const{subscribe:r,notify:s}=L();let a={...e};const o=u=>{a={...a,...u},s()},l=()=>({...a}),c=Object.fromEntries(Object.entries(t).map(([u,O])=>[u,(...$)=>o(O(l(),...$))]));return{getState:l,setState:o,subscribe:r,actions:c}},G=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:o=>t.setItem(e,JSON.stringify(o)),reset:()=>t.removeItem(e)}),B=e=>{const t="/front_5th_chapter1-2",{subscribe:r,notify:s}=L(),a=()=>window.location.pathname.replace(new RegExp(`^${t}`),""),o=()=>e[a()],l=c=>{const u=`${t}${c}`;window.history.pushState(null,null,u),s()};return window.addEventListener("popstate",()=>s()),{get path(){return a()},push:l,subscribe:r,getTarget:o}};function V(e){return!(typeof e=="boolean"&&e===!1||e==null)}function n(e,t,...r){return{type:e,props:t,children:r.flat(1/0).filter(V)}}const f=new Map,S=new WeakMap;function J(e){S.has(e)||S.set(e,new Map);const t=S.get(e);f.forEach((r,s)=>{if(!t.has(s)){const a=o=>{r.has(o.target)&&r.get(o.target).forEach(c=>c(o))};e.addEventListener(s,a),t.set(s,a)}})}function P(e,t,r){f.has(t)||f.set(t,new Map);const s=f.get(t);s.has(e)||s.set(e,new Set),s.get(e).add(r)}function R(e,t,r){if(!f.has(t))return;const s=f.get(t);s.has(e)&&s.get(e).delete(r)}function m(e){if(e==null||typeof e=="boolean")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){const r=document.createDocumentFragment();return e.map(m).forEach(a=>r.appendChild(a)),r}const t=document.createElement(e.type);return e.props&&T(t,e.props),e.children&&Array.isArray(e.children)&&e.children.map(m).forEach(s=>t.appendChild(s)),t}function T(e,t){Object.keys(t).forEach(r=>{if(typeof t[r]=="function"){const s=r.replace(/^on/i,"").toLowerCase();P(e,s,t[r]);return}if(r==="className"){e.setAttribute("class",t[r]);return}e.setAttribute(r,t[r])})}function U(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="string"||typeof e=="number")return String(e);if(e.children&&(e.children=e.children.map(U).filter(Boolean)),typeof e.type=="function"){const t=U(e.type(e.props??{}));return{...t,children:[...t.children??[],...e.children]}}return e}function W(e,t,r){for(const[s,a]of Object.entries(t??{}))if(r[s]!==t[s]){if(typeof t[s]=="function"){P(e,s,t[s]);continue}if(s==="className"){e.setAttribute("class",a);return}e.setAttribute(s,a)}for(const s of Object.keys(r??{}))if(t[s]===void 0){if(typeof r[s]=="function"){const a=s.replace(/^on/i,"").toLowerCase();R(e,a,r[s]);continue}if(s==="class"){e.removeAttribute("className");return}e.removeAttribute(s)}}function D(e,t,r,s=0){if(!t&&r)return e.removeChild(e.childNodes[s]);if(t&&!r)return e.appendChild(m(t));if(typeof t=="string"&&typeof r=="string")return t===r?void 0:e.replaceChild(m(t),e.childNodes[s]);if(t.type!==r.type)return e.replaceChild(m(t),e.childNodes[s]);W(e.childNodes[s],t.props??{},r.props??{});const a=Math.max((t.children||[]).length,(r.children||[]).length);for(let o=0;o<a;o++)D(e.childNodes[s],(t.children||[])[o],(r.children||[])[o],o)}const I=new WeakMap;function z(e,t){const r=U(e),s=I.get(t);s?D(t,r,s):t.appendChild(m(r)),I.set(t,r),J(t)}const K=1e3,A=K*60,k=A*60,Y=k*24,Q=e=>{const t=Date.now()-e;return t<A?"방금 전":t<k?`${Math.floor(t/A)}분 전`:t<Y?`${Math.floor(t/k)}시간 전`:new Date(e).toLocaleString()},h=G("user"),X=1e3,g=X*60,Z=g*60,i=H({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*g,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*g,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*g,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*g,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*Z,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}}});function _(e,t){const{posts:r}=i.getState(),s=r.map(a=>{if(a.id!==e)return a;if(a.likeUsers.includes(t.username)){const o=a.likeUsers.filter(l=>l!==t.username);return{...a,likeUsers:o}}return{...a,likeUsers:[...a.likeUsers,t.username]}});i.setState({posts:[...s]})}const ee=({id:e,author:t,time:r,content:s,likeUsers:a,activationLike:o=!1})=>{const{loggedIn:l,currentUser:c}=i.getState(),u=()=>{if(!l){alert("로그인 후 이용해주세요");return}_(e,c)};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},Q(r)))),n("p",null,s),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{className:`like-button cursor-pointer${o?" text-blue-500":""}`,onClick:u},"좋아요 ",a.length),n("span",null,"댓글"),n("span",null,"공유")))};function te(e){const{posts:t}=i.getState();i.setState({posts:[e,...t]})}const ne=()=>{const{loggedIn:e,currentUser:t}=i.getState();return e&&n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:s=>{const o=s.target.previousSibling.value.trim();if(!o)return;const l={id:Math.random(),author:t.username,time:Date.now(),content:o,likeUsers:[]};te(l)}},"게시"))},M=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),C=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),d={value:null,get(){return this.value},set(e){this.value=e}},N=e=>window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function v({onClick:e,children:t,...r}){return n("a",{onClick:a=>{a.preventDefault(),e==null||e(),d.get().push(a.target.href.replace(window.location.origin,""))},...r},t)}const j=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(v,{href:"/",className:N("/")},"홈")),!e&&n("li",null,n(v,{href:"/login",className:N("/login")},"로그인")),e&&n("li",null,n(v,{href:"/profile",className:N("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),t()}},"로그아웃"))))},re=()=>{const{posts:e,loggedIn:t,currentUser:r}=i.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(M,null),n(j,null),n("main",{className:"p-4"},n(ne,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((s,a)=>a.time-s.time).map(s=>n(ee,{...s,activationLike:t&&s.likeUsers.includes(r==null?void 0:r.username)})))),n(C,null)))};function se(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),h.set(t)}const ae=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const r=document.getElementById("username").value;se(r)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),oe=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function le(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),h.set(t),alert("프로필이 업데이트되었습니다.")}const ie=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:r="",email:s="",bio:a=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(M,null),n(j,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const c=new FormData(l.target),u=Object.fromEntries(c);le(u)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:s,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},a)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(C,null)))},x=class x extends Error{constructor(){super(x.MESSAGE)}};w(x,"MESSAGE","ForbiddenError");let p=x;const y=class y extends Error{constructor(){super(y.MESSAGE)}};w(y,"MESSAGE","UnauthorizedError");let b=y;function E(){const e=d.get().getTarget()??oe,t=document.querySelector("#root");try{z(n(e,null),t)}catch(r){if(r instanceof p){d.get().push("/");return}if(r instanceof b){d.get().push("/login");return}console.error(r)}}d.set(B({"/":re,"/login":()=>{const{loggedIn:e}=i.getState();if(e)throw new p;return n(ae,null)},"/profile":()=>{const{loggedIn:e}=i.getState();if(!e)throw new b;return n(ie,null)}}));function ce(){d.get().subscribe(E),i.subscribe(E),E()}ce();
