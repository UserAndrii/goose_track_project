import { useNavigate } from 'react-router-dom';
import { format, isSameMonth } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

import {
  DataGrid,
  Cell,
  CurrentDate,
  RowNumber,
  Tasks,
  TaskItem,
  TaskContainer,
  TaskTitle,
  ThreeDots,
} from './CalendarTable.styled';

export const CalendarTable = ({
  monthDays,
  setIsMonthPage,
  currentDay,
  allTasks,
  setCurrentDay,
}) => {
  const navigate = useNavigate();
  const today = new Date().getDate();

  const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  const whichPriority = priority => {
    let bgColor;
    let color;

    switch (priority) {
      case 'LOW':
        bgColor = 'rgba(206, 238, 253, 1)';
        color = '#3E85F3';
        break;
      case 'MEDIUM':
        bgColor = 'rgba(252, 240, 212, 1)';
        color = '#F3B249';

        break;
      case 'HIGH':
        bgColor = 'rgba(255, 210, 221, 1)';
        color = '#EA3D65';
        break;
      default:
        bgColor = 'transparent';
        color = 'black';
    }

    const style = {
      bgColor,
      color,
    };

    return style;
  };

  const calculateTaskQuantity = data => {
    let lowTaskCounter = 0;
    let mediumTaskCounter = 0;
    let highTaskCounter = 0;

    data.forEach(task => {
      switch (task.priority) {
        case 'LOW':
          lowTaskCounter++;
          break;
        case 'MEDIUM':
          mediumTaskCounter++;
          break;
        case 'HIGH':
          highTaskCounter++;
          break;
        default:
          lowTaskCounter = 0;
          mediumTaskCounter = 0;
          highTaskCounter = 0;
          break;
      }
    });

    const taskCounter = {
      lowTaskCounter,
      mediumTaskCounter,
      highTaskCounter,
    };

    return taskCounter;
  };

  return (
    <DataGrid>
      {monthDays.map(day => {
        const dayOfWeek = day.getDay();
        const colStart = dayOfWeek + 1;
        const formattedDay = format(day, 'yyyy-MM-dd');
        const filteredTasksByDay = allTasks
          ? allTasks.data.filter(task => task.date === formattedDay)
          : [];

        return (
          <Cell
            key={day.toString()}
            className={`gridСol`}
            style={{ '--col': colStart }}
            onClick={() => {
              if (isSameMonth(currentDay, day)) {
                setCurrentDay(day);
                navigate(`day/${formattedDay}`);
              }
            }}
          >
            <CurrentDate
              className={`rowCurrentDate ${
                today === day.getDate() &&
                isSameMonth(currentDay, day) &&
                'row__currentDateActive'
              }`}
            >
              <RowNumber
                className={`${
                  today === day.getDate() &&
                  isSameMonth(currentDay, day) &&
                  'row__ActiveNumber'
                }`}
                dateTime={format(day, 'yyyy-MM-dd')}
                style={{
                  display: isSameMonth(currentDay, day) ? 'block' : 'none',
                }}
              >
                {format(day, 'd')}
              </RowNumber>
            </CurrentDate>

            {allTasks && isSameMonth(currentDay, day) ? (
              <Tasks>
                {isTabletScreen ? (
                  <ul>
                    {filteredTasksByDay.map(
                      ({ title, _id, priority }, index) => {
                        if (index === 2) {
                          return (
                            <TaskItem className={`tasks__item`} key={_id}>
                              <ThreeDots
                                onClick={() => {
                                  setCurrentDay(day);
                                  navigate(`day/${formattedDay}`);
                                }}
                              >
                                <TaskTitle>...</TaskTitle>
                              </ThreeDots>
                            </TaskItem>
                          );
                        }
                        if (index > 2) {
                          return null;
                        }
                        return (
                          <TaskItem className={`tasks__item`} key={_id}>
                            <TaskContainer
                              style={{
                                backgroundColor:
                                  whichPriority(priority).bgColor,
                                color: whichPriority(priority).color,
                              }}
                            >
                              <TaskTitle>
                                {isDesktopScreen && isTabletScreen
                                  ? title.length >= 13
                                    ? title.slice(0, 13) + '...'
                                    : title
                                  : title.length >= 8
                                  ? title.slice(0, 8) + '...'
                                  : title}
                              </TaskTitle>
                            </TaskContainer>
                          </TaskItem>
                        );
                      }
                    )}
                  </ul>
                ) : (
                  <ul>
                    {calculateTaskQuantity(filteredTasksByDay).lowTaskCounter >
                      0 && (
                      <TaskItem className={`tasks__item`}>
                        <TaskContainer
                          style={{
                            backgroundColor: 'rgba(206, 238, 253, 1)',
                            color: '#3E85F3',
                          }}
                        >
                          <TaskTitle>
                            Tasks:{' '}
                            {
                              calculateTaskQuantity(filteredTasksByDay)
                                .lowTaskCounter
                            }
                          </TaskTitle>
                        </TaskContainer>
                      </TaskItem>
                    )}
                    {calculateTaskQuantity(filteredTasksByDay)
                      .mediumTaskCounter > 0 && (
                      <TaskItem className={`tasks__item`}>
                        <TaskContainer
                          style={{
                            backgroundColor: 'rgba(252, 240, 212, 1)',
                            color: '#F3B249',
                          }}
                        >
                          <TaskTitle>
                            Tasks:{' '}
                            {
                              calculateTaskQuantity(filteredTasksByDay)
                                .mediumTaskCounter
                            }
                          </TaskTitle>
                        </TaskContainer>
                      </TaskItem>
                    )}
                    {calculateTaskQuantity(filteredTasksByDay).highTaskCounter >
                      0 && (
                      <TaskItem className={`tasks__item`}>
                        <TaskContainer
                          style={{
                            backgroundColor: 'rgba(255, 210, 221, 1)',
                            color: '#EA3D65',
                          }}
                        >
                          <TaskTitle>
                            Tasks:{' '}
                            {
                              calculateTaskQuantity(filteredTasksByDay)
                                .highTaskCounter
                            }
                          </TaskTitle>
                        </TaskContainer>
                      </TaskItem>
                    )}
                  </ul>
                )}
              </Tasks>
            ) : (
              <></>
            )}
          </Cell>
        );
      })}
    </DataGrid>
  );
};
