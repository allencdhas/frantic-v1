import React from 'react'
import "./service-card.css";

const ServiceCard = (props) => {

  
  return (
      <div
        className="w-[300px] h-[250px] border-2 border-gray-500 px-7 py-5 service-card"
        style={{ boxShadow: "3px 3px 0px 1px rgb(168, 85, 247)" }}
      >
        <img src="#" alt="" width={40} height={40} className='border'/>
        <p className="text-3xl font-bold w-[90%]">{props.title}</p>
        <p className="text-md font-light mt-3">
          {props.desc}
        </p>
      </div>

  );
}

export default ServiceCard