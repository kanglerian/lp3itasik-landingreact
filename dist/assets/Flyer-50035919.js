import{r as i,A as f,j as a,a as m}from"./index-8fe49842.js";const C=()=>{const[c,h]=i.useState(!1),[d,p]=i.useState(""),[l,u]=i.useState(""),[b,g]=i.useState(!1),[y,k]=i.useState(!1),[w,j]=i.useState(""),[N,v]=i.useState(""),[S,P]=i.useState(""),[M,$]=i.useState(""),[T,A]=i.useState(""),x=async(s,n,e)=>{if(l.length<10)alert("Nomor telpon tidak benar!");else{let o,r;n?(o=`*Data calon mahasiswa baru dari Website LP3I!*
Kami dengan senang hati menginformasikan bahwa data calon mahasiswa telah menghubungi di website kami:

*Nama lengkap:* ${e.name}
*Asal sekolah:* ${e.school_applicant?e.school_applicant.name:"Tidak diketahui"}
*Kelas / Jurusan:* ${e.major?e.major:"Tidak diketahui"}
*Tahun lulus:* ${e.year?e.year:"Tidak diketahui"}
*Whatsapp:* ${e.phone}
*Presenter:* ${e.presenter.name}

Mohon maaf jika pesan ini terkesan otomatis, namun kami ingin memastikan informasi ini tersampaikan dengan tepat dan cepat kepada Anda.
Terima kasih.`,r=`Halo ${e.name}!
Terima kasih telah mengisi data, kami senang bisa berkomunikasi dengan Anda. Kami adalah Panitia PMB Politeknik LP3I Kampus Tasikmalaya. Ada yang bisa kami bantu?`):(o=`*Data terbaru dari Website LP3I!*
Kami dengan senang hati menginformasikan bahwa data terbaru telah tersedia di website kami:

*Nama lengkap:* ${e.name}
*Whatsapp:* ${e.whatsapp}

Mohon maaf jika pesan ini terkesan otomatis, namun kami ingin memastikan informasi ini tersampaikan dengan tepat dan cepat kepada Anda.
Terima kasih.`,r=`Halo ${e.name}!
Terima kasih telah mengisi data, kami senang bisa berkomunikasi dengan Anda. Kami adalah Panitia PMB Politeknik LP3I Kampus Tasikmalaya. Ada yang bisa kami bantu?`),await m.post("https://api.politekniklp3i-tasikmalaya.ac.id/whatsappbot/send",{target:s,name:d,whatsapp:l,message:o,feedback:r}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}},K=async()=>{const s=new Date,n=s.getMonth(),e=s.getFullYear(),o=n>=9?e+1:e;let r={name:d,phone:l};await m.post("https://database.politekniklp3i-tasikmalaya.ac.id/api/storewebsite",{name:d,phone:l,pmb:o}).then(t=>{console.log(t),p(""),u(""),g(!0),j(t.data.message),k(!1),v(t.data.message),t.data.status?x("6281286501015@c.us",t.data.status,t.data.data):x("120363146792473866@g.us",t.data.status,r)}).catch(t=>{k(!0),g(!1)})},F=async()=>{await m.get("https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/flyers").then(s=>{let n=s.data.filter(e=>e.status=="1"&&e.location=="R");P(n[0].headline),$(n[0].paragraph),A(n[0].image),D()}).catch(s=>{console.log(s.message)})},I=()=>{h(!c)},D=()=>{h(!c)};return i.useEffect(()=>{f.init({duration:1e3,easing:"ease-in-out",offset:100,once:!0}),f.refresh(),F()},[]),a.jsx(a.Fragment,{children:c&&a.jsx("div",{id:"myModal",className:"fixed inset-0 flex items-center justify-center z-50",children:a.jsx("div",{className:"bg-gray-900 bg-opacity-75 flex items-center justify-center h-screen w-full px-5",children:a.jsx("div",{"data-aos-duration":"1000","data-aos-delay":"1000",className:"w-full md:w-2/3 lg:w-1/3 bg-slate-100 rounded-xl p-5 max-h-screen overflow-y-auto",children:a.jsxs("div",{className:"relative flex justify-center items-center flex-col gap-5",children:[a.jsx("button",{onClick:I,className:"absolute top-0 right-0 text-white",children:a.jsx("i",{className:"fa-solid fa-circle-xmark fa-1x"})}),a.jsx("div",{className:"w-full bg-cover bg-center h-[200px] rounded-xl",style:{backgroundImage:`url('https://dashboard.politekniklp3i-tasikmalaya.ac.id/${T}')`}}),a.jsxs("div",{className:"w-full space-y-2",children:[a.jsx("h1",{className:"text-2xl font-bold","data-aos-delay":"1200",children:S}),a.jsx("p",{"data-aos-delay":"1300",children:M}),b&&a.jsx("div",{className:"bg-emerald-500 py-1 px-3 text-white rounded-lg",children:a.jsxs("h2",{className:"text-sm",children:[a.jsx("i",{className:"fa-solid fa-circle-check"})," ",w]})}),y&&a.jsx("div",{className:"bg-red-500 py-1 px-3 text-white rounded-lg",children:a.jsxs("h2",{className:"text-sm",children:[a.jsx("i",{className:"fa-solid fa-circle-xmark"})," ",N]})}),a.jsx("input",{"data-aos-delay":"1400",type:"text",value:d,onChange:s=>p(s.target.value),placeholder:"Nama lengkap kamu",className:"w-full border text-sm border-gray-200 rounded-lg"}),a.jsx("input",{"data-aos-delay":"1500",type:"text",value:l,onChange:s=>u(s.target.value),placeholder:"No whatsapp",className:"w-full border text-sm border-gray-200 rounded-lg"}),a.jsx("button",{"data-aos-delay":"1700",onClick:K,className:"w-full text-sm bg-red-500 text-white px-4 py-2 rounded-lg",children:"Dapatkan Beasiswa"})]})]})})})})})};export{C as default};