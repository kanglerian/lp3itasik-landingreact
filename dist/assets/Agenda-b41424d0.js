import{r as l,A as x,j as e,O as g,a as u}from"./index-939f4037.js";const p=()=>{const t=localStorage.getItem("language")||"id",[i,n]=l.useState([]),[d,r]=l.useState(!1),c={responsive:{0:{items:1},992:{items:3}}},o=async()=>{await u.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/agendas").then(a=>{let s=a.data.filter(m=>m.status=="1");n(s),r(!0)}).catch(a=>{console.log(a.message)})};return l.useEffect(()=>{o(),x.init({duration:800,easing:"ease-in-out",offset:100,once:!0})},[]),e.jsx("section",{className:"my-10",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"py-3 mb-8 text-center rounded-lg",children:[t=="en"?e.jsxs("h5",{className:"font-bold text-3xl",children:[e.jsx("span",{className:"text-merah-300",children:"Campus"})," Agenda"]}):e.jsxs("h5",{className:"font-bold text-3xl",children:[e.jsx("span",{className:"text-merah-300",children:"Agenda"})," Kampus"]}),e.jsx("p",{className:"text-gray-600 text-sm md:text-base mt-2","data-aos-delay":"100",children:t=="en"?"The following is a list of activities carried out at the LP3I Polytechnic, Tasikmalaya Campus":"Berikut ini adalah daftar kegiatan yang dilakukan di Politeknik LP3I Kampus Tasikmalaya"})]}),d?e.jsx(e.Fragment,{children:i.length>0?e.jsx("div",{className:"flex justify-center",children:e.jsx(g,{className:"owl-theme",...c,loop:!0,margin:10,autoplay:!0,dots:!0,children:i.map((a,s)=>e.jsx("div",{className:"item","data-aos-delay":s*50,children:e.jsx("img",{loading:"lazy",src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+a.image,alt:a.title,className:"rounded-lg shadow-lg"})},s))})}):e.jsx("p",{className:"bg-red-500 text-white text-center text-sm py-2 rounded-lg",children:t=="en"?"There are no agendas yet":"Belum ada agenda"})}):e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"w-full md:w-1/3 flex items-center justify-center h-56 md:h-72 bg-gray-100 rounded-lg animate-pulse",children:e.jsx("i",{className:"fa-regular fa-images fa-3x text-gray-200 animate-pulse"})})})]})})};export{p as default};