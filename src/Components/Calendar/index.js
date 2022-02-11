import { CalendarContent, CalendarHeader, CalendarBody } from "./styles";
import Moment from "react-moment";
import moment from "moment";
import { useState, useEffect } from "react";
export default function Calendar() {
  const [month, setMonth] = useState(2);
  const [dia, setDia] = useState(
    Array.from(Array(moment(`2022-01`).daysInMonth()).keys())
  );

  function handleMonth() {
    let mes = month;
    mes++;
    setMonth(mes);

    let newDays = Array.from(
      Array(moment(`2022-0${month}`).daysInMonth()).keys()
    );
    console.log(newDays);
    setDia(newDays);
  }

  const localShort = moment.weekdaysShort();

  return (
    <>
      <CalendarContent>
        <CalendarHeader>
          <input type="button" value="<" />
          <p>Fevereiro</p>
          <input
            type="button"
            value=">"
            onClick={() => {
              handleMonth();
            }}
          />
        </CalendarHeader>
        <CalendarBody>
          {localShort.map((day) => (
            <p>{day}</p>
          ))}
          {dia.map((dias) => {
            return (
              <>
                <p>{dias + 1}</p>
              </>
            );
          })}
        </CalendarBody>
      </CalendarContent>
    </>
  );
}
