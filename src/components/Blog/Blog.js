import React from 'react';
import { WrapperContent, SubTitle, GlobalLink } from '../../styles/Shared';
import { BlogWrapper } from './Blog.style';
import blogImg1 from '../../assets/photo-1459664018906-085c36f472af.png';
import blogImg2 from '../../assets/photo-1498842812179-c81beecf902c.png';
import blogImg3 from '../../assets/photo-1501644898242-cfea317d7faf.png';
import blogImg4 from '../../assets/photo-1515377905703-c4788e51af15.png';
import BlogCard from './BlogCard/BlogCard';

const blogs = [
  {
    img: blogImg1,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    date: '12-09-2019',
    name: 'Nombre de producto',
  },
  {
    img: blogImg2,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    date: '12-09-2019',
    name: 'Nombre de producto',
  },
  {
    img: blogImg3,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    date: '12-09-2019',
    name: 'Nombre de producto',
  },
  {
    img: blogImg4,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.  ',
    date: '12-09-2019',
    name: 'Nombre de producto',
  },
];

const Blog = () => (
  <BlogWrapper>
    <SubTitle>Blog</SubTitle>
    <WrapperContent>
      {blogs.map((blog, i) => (
        <BlogCard
          key={i}
          img={blog.img}
          name={blog.name}
          text={blog.text}
          date={blog.date}
        />
      ))}
    </WrapperContent>
    <GlobalLink>ver mas</GlobalLink>
  </BlogWrapper>
);

export default Blog;
