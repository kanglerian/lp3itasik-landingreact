import{r as d,I as E,R as z,g as P,c as $}from"./index-d8077f09.js";function A(){if(console&&console.warn){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function x(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),A(...e))}const v=(r,e)=>()=>{if(r.isInitialized)e();else{const t=()=>{setTimeout(()=>{r.off("initialized",t)},0),e()};r.on("initialized",t)}};function R(r,e,t){r.loadNamespaces(e,v(r,t))}function T(r,e,t,f){typeof t=="string"&&(t=[t]),t.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,v(r,f))}function F(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const f=e.languages[0],o=e.options?e.options.fallbackLng:!1,n=e.languages[e.languages.length-1];if(f.toLowerCase()==="cimode")return!0;const g=(y,w)=>{const s=e.services.backendConnector.state[`${y}|${w}`];return s===-1||s===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!g(e.isLanguageChangingTo,r)?!1:!!(e.hasResourceBundle(f,r)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||g(f,r)&&(!o||g(n,r)))}function j(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(x("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(r,{lng:t.lng,precheck:(o,n)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!n(o.isLanguageChangingTo,r))return!1}}):F(r,e,t)}const k=(r,e)=>{const t=d.useRef();return d.useEffect(()=>{t.current=e?t.current:r},[r,e]),t.current};function J(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:f,defaultNS:o}=d.useContext(E)||{},n=t||f||$();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new z),!n){x("You will need to pass in an i18next instance by using initReactI18next");const a=(c,i)=>typeof i=="string"?i:i&&typeof i=="object"&&typeof i.defaultValue=="string"?i.defaultValue:Array.isArray(c)?c[c.length-1]:c,u=[a,{},!1];return u.t=a,u.i18n={},u.ready=!1,u}n.options.react&&n.options.react.wait!==void 0&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const g={...P(),...n.options.react,...e},{useSuspense:y,keyPrefix:w}=g;let s=r||o||n.options&&n.options.defaultNS;s=typeof s=="string"?[s]:s||["translation"],n.reportNamespaces.addUsedNamespaces&&n.reportNamespaces.addUsedNamespaces(s);const p=(n.isInitialized||n.initializedStoreOnce)&&s.every(a=>j(a,n,g));function m(){return n.getFixedT(e.lng||null,g.nsMode==="fallback"?s:s[0],w)}const[C,h]=d.useState(m);let N=s.join();e.lng&&(N=`${e.lng}${N}`);const I=k(N),l=d.useRef(!0);d.useEffect(()=>{const{bindI18n:a,bindI18nStore:u}=g;l.current=!0,!p&&!y&&(e.lng?T(n,e.lng,s,()=>{l.current&&h(m)}):R(n,s,()=>{l.current&&h(m)})),p&&I&&I!==N&&l.current&&h(m);function c(){l.current&&h(m)}return a&&n&&n.on(a,c),u&&n&&n.store.on(u,c),()=>{l.current=!1,a&&n&&a.split(" ").forEach(i=>n.off(i,c)),u&&n&&u.split(" ").forEach(i=>n.store.off(i,c))}},[n,N]);const L=d.useRef(!0);d.useEffect(()=>{l.current&&!L.current&&h(m),L.current=!1},[n,w]);const b=[C,n,p];if(b.t=C,b.i18n=n,b.ready=p,p||!p&&!y)return b;throw new Promise(a=>{e.lng?T(n,e.lng,s,()=>a()):R(n,s,()=>a())})}export{J as u};