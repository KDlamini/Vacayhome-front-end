import React from 'react';
import shortenDescription from '../utils/shortenDescription';

function House({ house, handleSelected }) {
  return (
    <div
      className="carousel-img-container"
      key={house.id}
      role="link"
      tabIndex="0"
      onKeyDown={() => null}
      onClick={() => handleSelected(house)}
    >
      <img
        src={house.image_url}
        className="carousel-img"
        alt="travel vacation"
      />

      <div className="carousel-description">
        <span className="house-details">
          {house.guests}
          {' '}
          Guests&nbsp;
          {' '}
          {house.bedrooms}
          {' '}
          Bedrooms&nbsp;
          {' '}
          {house.beds}
          {' '}
          Beds&nbsp;
          {' '}
          {house.bath}
          {' '}
          Baths
        </span>
        <p>
          <strong>{house.name}</strong>
          {' '}
          <span className="house-description">{shortenDescription(house.description)}</span>
        </p>
      </div>
    </div>
  );
}

export default House;
