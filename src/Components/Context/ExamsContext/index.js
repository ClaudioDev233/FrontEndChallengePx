import { useEffect, useState, createContext } from "react";
import moment from "moment";
import axios from "axios";
export const ExamsContext = createContext([]);

export function ExamsProvider({ children }) {
  const myDate = moment(new Date()).format("DD");
  const [day, setDay] = useState(myDate);

  return (
    <ExamsContext.Provider
      value={{
        setDay: setDay,
        day: day,
      }}
    >
      {children}
    </ExamsContext.Provider>
  );
}
