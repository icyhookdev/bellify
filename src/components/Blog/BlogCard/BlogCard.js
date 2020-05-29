import React from 'react';
import {
  BlogCardWrapper,
  BlogCardImgWrapper,
  BlogCardImg,
  BlogOverlay,
  BlogCardBody,
  BlogCardBodyhead,
  BlogCardBodybody,
} from './BlogCard.style';

const BlogCard = ({ img, date, name, text }) => (
  <BlogCardWrapper>
    <BlogCardImgWrapper>
      <BlogCardImg src={img} />
      <BlogOverlay className="overlay">
        <a>Leer mas</a>
      </BlogOverlay>
    </BlogCardImgWrapper>
    <BlogCardBody className="blog-body">
      <BlogCardBodyhead>
        <span>{date}</span>
        <span>{name}</span>
      </BlogCardBodyhead>
      <BlogCardBodybody>{text}</BlogCardBodybody>
    </BlogCardBody>
  </BlogCardWrapper>
);

export default BlogCard;
