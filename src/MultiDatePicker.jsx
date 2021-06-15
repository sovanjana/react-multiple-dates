import React, { useState } from "react";
import { DayPickerSingleDateController } from "react-dates";
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";

export default function MultiDatePicker({ onChange }) {
  const [dates, setDates] = useState([]);

  function handleDateChange(date) {
    const wasPreviouslyPicked = dates.some((d) => d.isSame(date));
    if (wasPreviouslyPicked) {
      setDates((previousDates) => previousDates.filter((d) => !d.isSame(date)));
    } else {
      setDates((previousDates) => [...previousDates, date]);
    }
  }

  // useEffect(() => onChange(dates), [dates]);

  return (
    <DayPickerSingleDateController
      numberOfMonths={2}
      onDateChange={handleDateChange}
      focused={true}
      onFocusChange={console.log}
      date={null}
      isDayHighlighted={(day) => dates.some((d) => d.isSame(day, "day"))}
      keepOpenOnDateSelect
    />
  );
}
