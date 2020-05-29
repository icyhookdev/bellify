import styled from 'styled-components';

export const ServiceCardWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column-reverse;
`;

export const ServiceCardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  transition: ease all 0.3s;
`;

export const ServiceCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  align-items: center;
  height: 100px;
  transition: ease all 0.3s;
  cursor: pointer;
  :hover {
    height: 210px;
  }
  :hover + .card-img {
    height: 190px;
  }
  :hover .card-text,
  :hover .card-link {
    opacity: 1;
    visibility: visible;

    transform: translateY(0);
    transition-delay: 0.3s;
  }
  :hover .card-link {
    transition-delay: 0.6s;
  }
  :hover .card-title {
    transform: translateY(0);
  }

  .card-title {
    transition: 0.3s;
    transform: translateY(60px);
  }

  .card-link,
  .card-text {
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
  }
`;

export const ServiceCardDescription = styled.p`
  font-size: 1.3rem;
  color: #444;
  padding: 2rem 0;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

export const ServiceLink = styled.a`
  background: #ab9abc;
  font-size: 1.4rem;
  color: #fff;
  width: 40%;
  text-align: center;
  border-radius: 90px;
  padding: 1rem;
  cursor: pointer;
`;
