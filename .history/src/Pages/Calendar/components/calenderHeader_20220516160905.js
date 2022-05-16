import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import {
  CalenderHeaderContainer,
  DropdownContainer,
  AppointmentButton,
} from "../style";

import { yearOptions, monthOptions } from "../constants";

function CalenderHeader(props) {
  const onYearSelect = (date) => {
    props.onYearSelect(date);
  };

  const onMonthSelect = (date) => {
    props.onMonthSelect(date);
  };

  const openModal = () => {
    props.openModal();
  };

  return (
    <CalenderHeaderContainer>
      <DropdownContainer>
        <Dropdown
          options={yearOptions}
          onChange={onYearSelect}
          value={props.defaultYear}
        />
        <Dropdown
          options={monthOptions}
          onChange={onMonthSelect}
          value={props.defaultMonth}
        />
      </DropdownContainer>
      <AppointmentButton onClick={openModal}>
        Plan When You Want To Read
      </AppointmentButton>
    </CalenderHeaderContainer>
  );
}

export default CalenderHeader;
