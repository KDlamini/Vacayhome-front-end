import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Detail from '../Details';
import House from './House';
import { fetchRooms } from '../../redux/rooms/rooms';

function Slider({ isLoggedIn }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 454 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const [selectedHouse, setSelectedHouse] = useState();
  const houses = useSelector((state) => state.roomsReducer);

  const handleSelected = (e) => {
    setSelectedHouse(e);
  };

  return (
    <>
      {
        !selectedHouse ? (
          <Carousel
            arrows
            renderButtonGroupOutside
            swipeable
            draggable={false}
            responsive={responsive}
            infinite
            autoPlaySpeed={8000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {
              houses.reverse().map((house) => (
                <House key={house.id} house={house} handleSelected={handleSelected} />
              ))
            }
          </Carousel>
        ) : (
          <Detail house={selectedHouse} isLoggedIn={isLoggedIn} />
        )
      }
    </>
  );
}

export default Slider;
