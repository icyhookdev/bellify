import React from 'react';
import {
  IconItem,
  BookBarberItemWrapper,
  IconCarret,
} from './BookBarItem.style';

const BookBarItem = ({ icon, text }) => (
  <BookBarberItemWrapper>
    <IconItem icon={icon} />
    <span>{text}</span>
    <IconCarret />
  </BookBarberItemWrapper>
);

export default BookBarItem;
