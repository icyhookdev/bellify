import styled from 'styled-components';

export const BlogCardWrapper = styled.div`
  border: 1px solid #ddd;
  width: 280px;
  margin-right: 20px;
  :hover .overlay {
    opacity: 1;
  }
  :hover .blog-body {
    background: #333;
    color: #fff;
  }
`;

export const BlogCardImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;
export const BlogCardImg = styled.img`
  width: 100%;
  height: 250px;
  object-position: center;
  object-fit: cover;
`;

export const BlogOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: ease all 0.3s;
  > a {
    width: 150px;
    padding: 1rem 4rem;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 90px;
    cursor: pointer;
  }
`;

export const BlogCardBody = styled.div`
  width: 100%;
  height: 150px;
  padding: 1.5rem;
`;

export const BlogCardBodybody = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 1.4rem;
  transition: ease all 0.3s;
  text-align: start;
`;

export const BlogCardBodyhead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  > span {
    color: #ab9abc;
    font-size: 1.3rem;
  }
`;
