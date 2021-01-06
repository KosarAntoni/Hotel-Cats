import styled from 'styled-components';
import DatePicker from 'react-date-picker';

const StyledDatePicker = styled(DatePicker)`
  padding: 1rem;
  display: flex;
  justify-content: center;

  button{
    :focus {
      outline: none;
      background: transparent;
    }
  }

  .react-date-picker__calendar {
    width: 240px;
  }
  
  .react-calendar {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.background};
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
    border: 1px solid ${({ theme }) => theme.grey};
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ::after {
      display: block;
      content: " ";
      position: absolute;
      bottom: 0;
      border-width: 1rem;
      border-style: solid;
      border-color: ${({ theme }) => theme.grey} transparent transparent transparent;
    }
    
    * {
      text-decoration: none;
    }
    
    button {
      color: ${({ theme }) => theme.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      box-shadow: inset 0 0 0 2px transparent;
      

      :hover,
      :focus {
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: transparent;
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.grey};
      }
      
      :disabled {
        background-color: transparent;
        opacity: 0.3;
      }
    }

    .react-calendar__viewContainer {
      width: 100%;
    }
    
    .react-calendar__navigation {
      margin: 0;
      order: 10;
      border-top: 1px solid ${({ theme }) => theme.grey};
      }
    }
    
    .react-calendar__month-view__weekdays {
      border-bottom: 1px solid ${({ theme }) => theme.grey};
    }
    
    .react-calendar__tile:disabled {
      background-color: transparent;
      opacity: 0.3;
    }

    .react-calendar__tile--now {
      background-color: transparent;
      border-radius: ${({ theme }) => theme.borderRadius};
	    
      ::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
        position: absolute;
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.yellow}
      }    }

      .react-calendar__month-view__days__day--weekend {
      color: ${({ theme }) => theme.red};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${({ theme }) => theme.secondary};
    }

    .react-calendar__tile--active {
      background-color: transparent;
	    
      ::before {
	      content: '';
	      display: block;
	      width: 100%;
	      height: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
				position: absolute;
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.orange}
      }
    }
  }
  
  .react-date-picker__wrapper {
    border: none;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    
    * {
      stroke: ${({ theme }) => theme.grey};
    }
  }

  .react-date-picker__inputGroup * {
    color: ${({ theme }) => theme.primary};
  }
`;

export default StyledDatePicker;
