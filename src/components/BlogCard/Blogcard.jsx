/* eslint-disable react/prop-types */

import BtnNormal from "../btn-normal/BtnNormal"

 

const Blogcard = ({ image, date, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute -bottom-3 left-2 bg-accent px-2 py-1 rounded text-secondary text-sm">
        {date}
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <BtnNormal text="Read More" />
    </div>
  </div>
  )
}

export default Blogcard