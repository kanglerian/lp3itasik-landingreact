import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Benefit = () => {
  const [benefits, setBenefit] = useState([]);

  const getBenefits = async () => {
    await axios.get(`https://dashboard.politekniklp3i-tasikmalaya.ac.id/api/benefits`)
      .then((response) => {
        let benefits = response.data.filter(benefit => benefit.status == '1')
        setBenefit(benefits)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getBenefits();
  }, []);

  const listBenefit = benefits.map((benefit,i) =>
    <div className="text-center w-[400px]" key={i}>
      <div className="bg-white shadow-sm text-center p-4 rounded-lg transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
        <img src={`https://dashboard.politekniklp3i-tasikmalaya.ac.id/` + benefit.image} alt={benefit.title} className="inline w-20 rounded-full" />
        <div className="mt-3 bg-gray-50 p-2 rounded">
          <h5 className="font-bold text-cyan-700 text-base mb-1">{benefit.title}</h5>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="my-10">
      <div className="container mx-auto text-sm px-4">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {benefits.length > 0 &&
            listBenefit
          }
        </div>
      </div>
    </section>
  )
}

export default Benefit