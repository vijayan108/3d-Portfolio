import React from 'react';
import { SectionWrapper } from '../hoc';
import { client } from '../constants';
import "./css/client.css";

function Client() {
  return (
    <div className="slider">
      <div className="slide-track">
        {client.map((clientItem, index) => (
          <div key={index} className="slide">
            <img className='client-img' src={clientItem.image} alt={clientItem.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Client);
