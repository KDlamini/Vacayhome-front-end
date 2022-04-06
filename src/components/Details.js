/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

const Detail = (props) => {
  const {
    image_url, name, description, price, location,
  } = props.props;
  return (
    <>
      <div>
        <img src={image_url} alt="Tropical houses" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>
          This vacation home is located in
          {' '}
          {location}
        </p>
        <p>
          For the price of
          {' '}
          $
          {price}
        </p>
      </div>
      <div>
        <button type="button">Reserve</button>
      </div>
      <div>
        <a href="/">
          <BiArrowBack />
        </a>
      </div>
    </>
  );
};

export default Detail;