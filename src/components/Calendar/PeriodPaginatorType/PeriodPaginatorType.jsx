import { useNavigate } from 'react-router';
// import css from './PeriodPaginatorType.module.css';
import {
  CalendarRange,
  Buttons,
  MonthButton,
  DayButton,
} from './PeriodPaginatorType.styled';

import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';

const PeriodPaginatorType = ({ isMonthPage, changeType }) => {
  const navigate = useNavigate();

  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'yyyy-MM-dd', new Date());

  // return (
  //   <div className={css.toolbar__calendarRange}>
  //     <button
  //       className={`${css.toolbar__buttons} ${css.toolbar__monthButton} ${
  //         isMonthPage ? css.toolbar__ActiveButton : ''
  //       }`}
  //       onClick={() => {
  //         navigate(`month/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
  //         changeType(true);
  //       }}
  //     >
  //       Month
  //     </button>
  //     <button
  //       className={`${css.toolbar__buttons} ${css.toolbar__dayButton} ${
  //         !isMonthPage ? css.toolbar__ActiveButton : ''
  //       }`}
  //       onClick={() => {
  //         navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
  //         changeType(false);
  //       }}
  //     >
  //       Day
  //     </button>
  //   </div>
  // );

  return (
    <CalendarRange>
      <Buttons
        className={`onMonth ${isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`month/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
          changeType(true);
        }}
        isMonthPage
      >
        Month
      </Buttons>
      <Buttons
        className={`onDay ${!isMonthPage ? 'isActive' : ''}`}
        onClick={() => {
          navigate(`day/${format(parsedCurrentDate, 'yyyy-MM-dd')}`);
          changeType(false);
        }}
        isMonthPage
      >
        Day
      </Buttons>
    </CalendarRange>
  );
};

export default PeriodPaginatorType;
