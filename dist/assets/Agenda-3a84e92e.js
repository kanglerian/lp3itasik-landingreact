import{r as l,A as u,j as a,O as x,a as g}from"./index-83297504.js";const p=()=>{const t=localStorage.getItem("language")||"id",[d,i]=l.useState([]),[n,r]=l.useState(!1),o={responsive:{0:{items:1},992:{items:3}}},c=async()=>{await g.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/agendas").then(e=>{let s=e.data.filter(m=>m.status=="1");i(s),r(!0)}).catch(e=>{console.log(e.message)})};return l.useEffect(()=>{c(),u.init({duration:800,easing:"ease-in-out",offset:100,once:!0})},[]),a.jsx("section",{className:"my-10",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"py-3 mb-8 text-center rounded-lg",children:[t=="en"?a.jsxs("h5",{className:"font-bold text-3xl",children:[a.jsx("span",{className:"text-merah-300","data-aos":"fade-up",children:"Campus"})," Agenda"]}):a.jsxs("h5",{className:"font-bold text-3xl",children:[a.jsx("span",{className:"text-merah-300","data-aos":"fade-up",children:"Agenda"})," Kampus"]}),a.jsx("p",{className:"text-gray-600 text-sm md:text-base mt-2","data-aos":"fade-up","data-aos-delay":"100",children:t=="en"?"The following is a list of activities carried out at the LP3I Polytechnic, Tasikmalaya Campus":"Berikut ini adalah daftar kegiatan yang dilakukan di Politeknik LP3I Kampus Tasikmalaya"})]}),n?a.jsx(a.Fragment,{children:d.length>0?a.jsx("div",{className:"flex justify-center",children:a.jsx(x,{className:"owl-theme",...o,loop:!0,margin:10,autoplay:!0,dots:!0,children:d.map((e,s)=>a.jsx("div",{className:"item","data-aos":"fade-up","data-aos-delay":s*50,children:a.jsx("img",{src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+e.image,alt:e.title,className:"rounded-lg shadow-lg"})},s))})}):a.jsx("p",{className:"bg-red-500 text-white text-center text-sm py-2 rounded-lg","data-aos":"fade-up",children:t=="en"?"There are no agendas yet":"Belum ada agenda"})}):a.jsx("div",{className:"flex items-center justify-center","data-aos":"fade-up",children:a.jsx("div",{className:"w-full md:w-1/3 flex items-center justify-center h-56 md:h-72 bg-gray-100 rounded-lg animate-pulse",children:a.jsx("i",{className:"fa-regular fa-images fa-3x text-gray-200 animate-pulse"})})})]})})};export{p as default};