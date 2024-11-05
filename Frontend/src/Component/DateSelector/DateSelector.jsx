import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css";
import { useDate } from "../../context/date-context";

const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();
  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  console.log({ checkInDate, checkOutDate });

  return (
    <DatePicker
      selected={checkInType === "in" ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      className="search-dest input"
      dateFormat="dd/MM/YYYY"
      placeholderText="Add Dates"
      closeOnScroll={true}
    />
  );
};
export default DateSelector;
