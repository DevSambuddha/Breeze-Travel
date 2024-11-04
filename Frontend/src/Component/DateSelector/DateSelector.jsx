import DatePicker from "react-datepicker";
const DateSelector = () => {
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      placeholderText="Checkin"
      closeOnScroll={true}
    />
  );
};
export default DateSelector;
