import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Flyer = () => {
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");

  const [headline, setHeadline] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");

  const handleWhatsapp = async (target, status, data) => {
    if (phone.length < 10) {
      alert("Nomor telpon tidak benar!");
    } else {
      let message;
      let feedback;
      if(status){
        message = `*Data calon mahasiswa baru dari Website LP3I!*\nKami dengan senang hati menginformasikan bahwa data calon mahasiswa telah menghubungi di website kami:\n\n*Nama lengkap:* ${data.name}\n*Asal sekolah:* ${data.school_applicant ? data.school_applicant.name : 'Tidak diketahui'}\n*Kelas / Jurusan:* ${data.major ? data.major : 'Tidak diketahui'}\n*Tahun lulus:* ${data.year ? data.year : 'Tidak diketahui'}\n*Whatsapp:* ${data.phone}\n*Presenter:* ${data.presenter.name}\n\nMohon maaf jika pesan ini terkesan otomatis, namun kami ingin memastikan informasi ini tersampaikan dengan tepat dan cepat kepada Anda.\nTerima kasih.`;
        feedback = `Halo ${data.name}!\nTerima kasih telah mengisi data, kami senang bisa berkomunikasi dengan Anda. Kami adalah Panitia PMB Politeknik LP3I Kampus Tasikmalaya. Ada yang bisa kami bantu?`;
      } else {
        message = `*Data terbaru dari Website LP3I!*\nKami dengan senang hati menginformasikan bahwa data terbaru telah tersedia di website kami:\n\n*Nama lengkap:* ${data.name}\n*Whatsapp:* ${data.whatsapp}\n\nMohon maaf jika pesan ini terkesan otomatis, namun kami ingin memastikan informasi ini tersampaikan dengan tepat dan cepat kepada Anda.\nTerima kasih.`;
        feedback = `Halo ${data.name}!\nTerima kasih telah mengisi data, kami senang bisa berkomunikasi dengan Anda. Kami adalah Panitia PMB Politeknik LP3I Kampus Tasikmalaya. Ada yang bisa kami bantu?`;
      }

      await axios
        .post(`https://api.politekniklp3i-tasikmalaya.ac.id/whatsappbot/send`, {
          target: target,
          name: name,
          whatsapp: phone,
          message: message,
          feedback: feedback
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSend = async () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const startYear = currentMonth >= 9 ? currentYear + 1 : currentYear;
    let data = {
      name: name,
      phone: phone,
    }
    await axios
      .post(
        `https://database.politekniklp3i-tasikmalaya.ac.id/api/storewebsite`,
        {
          name: name,
          phone: phone,
          pmb: startYear,
        }
      )
      .then((res) => {
        setName("");
        setPhone("");
        setSuccess(true);
        setSuccessMessage(res.data.message);
        setFailed(false);
        setFailedMessage(res.data.message);
        if (res.data.status) {
          handleWhatsapp('6281220662033-1586400908@g.us', res.data.status, res.data.data);
        } else {
          handleWhatsapp("120363146792473866@g.us", res.data.status, data);
        }
      })
      .catch((err) => {
        setFailed(true);
        setSuccess(false);
      });
  };

  const getFlyer = async () => {
    await axios
      .get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/flyers`)
      .then((res) => {
        let flyers = res.data.filter(
          (flyer) => flyer.status == "1" && flyer.location == "R"
        );
        setHeadline(flyers[0].headline);
        setParagraph(flyers[0].paragraph);
        setImage(flyers[0].image);
        loadingModal();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleVisible = () => {
    setVisible(!isVisible);
  };

  const loadingModal = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
    AOS.refresh();
    getFlyer();
  }, []);

  return (
    <>
      {isVisible && (
        <div
          id="myModal"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-gray-900 bg-opacity-75 flex items-center justify-center h-screen w-full px-5">
            <div
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="w-full md:w-2/3 lg:w-1/3 bg-slate-100 rounded-xl p-5 max-h-screen overflow-y-auto"
            >
              <div className="relative flex justify-center items-center flex-col gap-5">
                <button
                  onClick={handleVisible}
                  className="absolute top-0 right-0 text-white"
                >
                  <i className="fa-solid fa-circle-xmark fa-1x"></i>
                </button>
                <div
                  className="w-full bg-cover bg-center h-[200px] rounded-xl"
                  style={{
                    backgroundImage: `url('https://dashboard.politekniklp3i-tasikmalaya.ac.id/${image}')`,
                  }}
                ></div>
                <div className="w-full space-y-2">
                  <h1 className="text-2xl font-bold" data-aos-delay="1200">
                    {headline}
                  </h1>
                  <p data-aos-delay="1300">{paragraph}</p>
                  {success && (
                    <div className="bg-emerald-500 py-1 px-3 text-white rounded-lg">
                      <h2 className="text-sm">
                        <i className="fa-solid fa-circle-check"></i>{" "}
                        {successMessage}
                      </h2>
                    </div>
                  )}
                  {failed && (
                    <div className="bg-red-500 py-1 px-3 text-white rounded-lg">
                      <h2 className="text-sm">
                        <i className="fa-solid fa-circle-xmark"></i>{" "}
                        {failedMessage}
                      </h2>
                    </div>
                  )}
                  <input
                    data-aos-delay="1400"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap kamu"
                    className="w-full border text-sm border-gray-200 rounded-lg"
                  />
                  <input
                    data-aos-delay="1500"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="No whatsapp"
                    className="w-full border text-sm border-gray-200 rounded-lg"
                  />
                  <button
                    data-aos-delay="1700"
                    onClick={handleSend}
                    className="w-full text-sm bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Dapatkan Beasiswa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Flyer;
