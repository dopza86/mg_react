import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const PhotosContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const Photo = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const PostPhotos = ({ photos }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const slide = () => {
    const totalPhotos = photos.length;
    if (currentItem === totalPhotos - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <PhotosContainer>
      {photos.map((photo, index) => (
        <Photo
          key={photo.id}
          src={photo.file}
          showing={index === currentItem}
        />
      ))}
    </PhotosContainer>
  );
};

export default PostPhotos;
