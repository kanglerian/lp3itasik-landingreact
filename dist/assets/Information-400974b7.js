import{r as l,j as a,O as n,A as j,a as c}from"./index-7121bea3.js";const b=i=>{const[o,m]=l.useState([]),[u,p]=l.useState([]),[x,h]=l.useState(!1),d={responsive:{0:{items:1},992:{items:3}}},g=async()=>{await c.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/informations").then(e=>{let t=e.data.filter(s=>s.status=="1"&&s.locate==i.locate);m(t),h(!0)}).catch(e=>{console.log(e.message)})},f=async()=>{await c.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/documentations").then(e=>{let t=e.data.filter(s=>s.status=="1");p(t)}).catch(e=>{console.log(e.message)})},r=u.map((e,t)=>a.jsx("div",{className:"item","data-aos":"fade-up","data-aos-delay":t*5,children:a.jsx("img",{src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+e.image,alt:e.title,className:"rounded-lg"})},t)),y=o.map((e,t)=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"w-full md:w-1/2 h-auto","data-aos":"fade-up",children:a.jsx("iframe",{width:"100%",height:"350px",className:"rounded-2xl border-4 border-gray-200",src:"https://www.youtube.com/embed/"+e.youtube,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})},t),a.jsxs("div",{className:"w-full md:w-1/2","data-aos":"fade-up",children:[a.jsx("h5",{className:"font-bold text-2xl md:text-3xl","data-aos":"fade-up","data-aos-delay":"10",children:e.title}),a.jsx("p",{className:"text-sm text-gray-600 mt-3","data-aos":"fade-up","data-aos-delay":"20",children:e.description}),i.doc&&a.jsx("div",{className:"mt-5 flex justify-center",children:a.jsx(n,{className:"owl-theme",...d,loop:!0,margin:10,autoplay:!0,dots:!0,children:r})})]})]}));return l.useEffect(()=>{g(),f(),j.init({duration:800,easing:"ease-in-out",offset:100,once:!0})},[]),a.jsx("section",{className:"my-10",children:a.jsx("div",{className:"container mx-auto px-4",children:x?a.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center gap-4",children:o.length>0?y:a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"w-full md:w-1/2 h-auto","data-aos":"fade-up",children:a.jsx("iframe",{width:"100%",height:"350px",className:"rounded-2xl border-4 border-gray-200",src:"https://www.youtube.com/embed/Vo1R5cElVqQ",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),a.jsxs("div",{className:"w-full md:w-1/2",children:[a.jsx("h1",{className:"font-bold text-2xl md:text-4xl","data-aos":"fade-up","data-aos-delay":"10",children:"LP3I Tasikmalaya – Cover Condong Pada Mimpi"}),a.jsx("p",{className:"text-sm text-gray-600 mt-3","data-aos":"fade-up","data-aos-delay":"20",children:"Video ini berisi tentang pendidikan vokasi di LP3I Tasikmalaya mulai dari kegiatan Pengenalan Lingkungan Kampus, kegiatan praktek akuntansi, praktek otomotif, praktek informatika, praktek manajemen perkantoran, dan proses penempatan kerja yang menjadi salah satu program unggulan di LP3I."}),i.doc&&a.jsx("div",{className:"mt-5 flex justify-center",children:a.jsx(n,{className:"owl-theme",...d,loop:!0,margin:10,autoplay:!0,children:r})})]})]})}):a.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-4","data-aos":"fade-up",children:[a.jsx("div",{className:"w-full md:w-1/2 flex items-center justify-center h-56 md:h-80 bg-gray-200 rounded-lg animate-pulse",children:a.jsx("i",{className:"fa-regular fa-images fa-3x text-gray-300"})}),a.jsxs("div",{className:"w-full md:w-1/2",children:[a.jsx("div",{className:"w-5/6 h-10 rounded-lg bg-gray-200 my-3"}),a.jsx("div",{className:"w-full h-24 rounded-lg bg-gray-200"}),a.jsx("div",{className:"w-3/6 h-10 rounded-lg bg-gray-200 my-3"})]})]})})})};export{b as default};