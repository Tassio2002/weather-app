import React from 'react';
import {
  HeaderContainer,
  DateContainer,
  CurrentMonth,
  FullDate,
} from './styles';

const Header = () => {
  let currentMonth = '';
  let fullDate = '';
  function getMonth() {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    const year = date.getFullYear();
    currentMonth = `${month[date.getMonth()]} ${year}`;
    return currentMonth;
  }
  getMonth();

  function getFullDate() {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date();
    const currentDay = date.getDay();
    const currentDayFormated = weekday[date.getDay()];
    const monthFormated = month[date.getMonth()];
    const currentYear = date.getFullYear();
    fullDate = `${currentDayFormated}, ${monthFormated} ${currentDay}, ${currentYear}`;
    return fullDate;
  }
  getFullDate();
  return (
    <HeaderContainer>
      <DateContainer>
        <CurrentMonth>{currentMonth}</CurrentMonth>
        <FullDate>{fullDate}</FullDate>
      </DateContainer>
    </HeaderContainer>
  );
};
export { Header };
