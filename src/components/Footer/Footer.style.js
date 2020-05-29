import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #333;
  min-height: 50vh;
  padding: 7rem 0;
`;

export const FooterItem = styled.div`
  width: 240px;
  min-height: 200px;
  text-align: start;
`;

export const FooterItemTitle = styled.div`
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: lighter;
  color: #fff;
`;
export const FooterListItems = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

export const FooterListItem = styled.li`
  padding: 1rem 0;
  text-align: start;
  font-size: 1.3rem;
  color: #fff;
`;

export const AppImg = styled.img`
  width: 200px;
`;

export const SocialNetowrkContainer = styled.div`
  display: flex;
`;

export const SocialNetworkItem = styled.img`
  width: 30px;
  height: 30px;
  object-position: center;
  object-fit: cover;
  margin-right: 1rem;
`;

export const FooterSection = styled.div`
  border-top: 1px solid #ab9abc;
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
`;

export const WrapperFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.right && 'flex-end') || 'unset'};
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #fff;
  background: transparent;
  width: 250px;
  margin-left: 2rem;
  ::placeholder {
    color: #fff;
  }
`;

export const InputButton = styled.button`
  width: 50px;
  height: 38px;
  background: #ab9abc;
  color: #fff;
  text-align: center;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export const CreditCardImg = styled.img`
  object-fit: cover;
  width: 50px;
  height: 40px;
  margin-right: 1rem;
  border-radius: 5px;
`;
