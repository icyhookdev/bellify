import React from 'react';
import BookBarItem from './BookBarItem/BookBarItem';
import { BookbarList, BookBarButton } from './BookBar.style';
import locationIcon from '../../assets/Group 69.svg';
import hairIcon from '../../assets/Path 124.svg';
import dateIcon from '../../assets/Group 76.svg';
import HourIcon from '../../assets/Group 95.svg';
import { Postion } from '../../styles/Shared';

const BookBar = () => (
  <Postion>
    <BookbarList>
      <BookBarItem icon={locationIcon} text="Localidad" />
      <BookBarItem icon={hairIcon} text="Tratamiento" />
      <BookBarItem icon={dateIcon} text="Fecha" />
      <BookBarItem icon={HourIcon} text="Hora" />
      <BookBarButton>Reservar</BookBarButton>
    </BookbarList>
  </Postion>
);

export default BookBar;
