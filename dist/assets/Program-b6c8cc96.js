import{r as l,A as f,j as e,a as j}from"./index-4cfae79b.js";const b=()=>{const[d,o]=l.useState([]),[n,c]=l.useState(!1),[r,m]=l.useState([]),[i,u]=l.useState([]),x=async()=>{await j.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/programs").then(a=>{let s=a.data,h=s.filter(t=>t.campus=="Kampus Utama"&&t.status=="1"),p=s.filter(t=>t.campus=="Politeknik LP3I Kampus Tasikmalaya"&&t.status=="1"),g=s.filter(t=>t.campus=="LP3I Tasikmalaya"&&t.status=="1");o(h),m(p),u(g),c(!0)}).catch(a=>{console.log(a.message)})};return l.useEffect(()=>{x(),f.init({duration:800,easing:"ease-in-out",offset:100,once:!0})},[]),e.jsx("section",{className:"bg-lp3i-500 py-8",children:n?e.jsxs("div",{className:"container mx-auto text-center text-white px-4",children:[r.length>0&&i.length>0&&e.jsx("div",{className:"bg-lp3i-100 py-3 mb-8 rounded-lg",children:e.jsx("h5",{className:"font-bold text-xl","data-aos":"fade-up",children:"Kampus Tasikmalaya"})}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h5",{className:"font-bold text-2xl my-3",children:["Program ",e.jsx("span",{className:"text-merah-100",children:"Pendidikan Diploma 3"})]}),e.jsx("p",{children:"Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I Kampus Tasikmalaya"}),e.jsx("div",{className:"flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8",children:r.map((a,s)=>e.jsxs("div",{className:"group relative w-1/1 md:w-1/3","data-aos":"fade-up","data-aos-delay":s*5,children:[e.jsx("img",{className:"w-full object-cover rounded-lg",alt:a.title,src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+a.image}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500",children:[e.jsx("h1",{className:"text-lg text-white",children:a.title}),e.jsx("a",{href:"/programs/"+a.uuid,role:"button",className:"mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300",children:"Lihat selengkapnya"})]})]},s))})]}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h5",{className:"font-bold text-2xl my-3",children:["Program Pendidikan ",e.jsx("span",{className:"text-merah-100",children:"Vokasi 2 Tahun"})]}),e.jsx("p",{children:"Berikut adalah daftar program studi jenjang Vokasi 2 Tahun di LP3I Tasikmalaya"}),e.jsx("div",{className:"flex flex-col md:flex-row justify-center gap-5 my-8",children:i.map((a,s)=>e.jsxs("div",{className:"group relative w-1/1 md:w-1/3","data-aos":"fade-up","data-aos-delay":s*5,children:[e.jsx("img",{className:"w-full object-cover rounded-lg",alt:a.title,src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+a.image}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500",children:[e.jsxs("h1",{className:"text-lg text-white",children:[a.level," ",a.title]}),e.jsx("a",{href:"/programs/"+a.uuid,role:"button",className:"mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300",children:"Selengkapnya"})]})]},s))})]}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-lp3i-200 py-3 mb-8 rounded-lg",children:e.jsx("h5",{className:"font-bold text-xl",children:"Kampus Utama"})}),e.jsxs("h5",{className:"font-bold text-2xl my-3",children:["Program Pendidikan ",e.jsx("span",{className:"text-merah-100",children:"Diploma 3"})]}),e.jsx("p",{children:"Berikut adalah daftar program studi jenjang D3 di Politeknik LP3I"}),e.jsx("div",{className:"flex flex-wrap flex-col md:flex-row justify-center gap-5 my-8",children:d.map((a,s)=>e.jsxs("div",{className:"group relative w-1/1 md:w-1/3","data-aos":"fade-up","data-aos-delay":s*5,children:[e.jsx("img",{className:"w-full object-cover rounded-lg",alt:a.title,src:"https://dashboard.politekniklp3i-tasikmalaya.ac.id/"+a.image}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-lp3i-200 rounded-lg opacity-0 group-hover:h-full group-hover:opacity-95 duration-500",children:[e.jsx("h1",{className:"text-lg text-white",children:a.title}),e.jsx("a",{href:"/programs/"+a.uuid,role:"button",className:"mt-5 px-8 py-2 text-sm rounded-full bg-amber-400 hover:bg-amber-600 duration-300",children:"Lihat selengkapnya"})]})]},s))})]})]}):e.jsx("div",{className:"container mx-auto text-center text-white px-4",children:e.jsx("div",{role:"status",className:"flex items-center justify-center h-56 md:h-58 bg-lp3i-100 rounded-lg animate-pulse",children:e.jsx("i",{className:"fa-regular fa-images fa-3x text-gray-200"})})})})};export{b as default};