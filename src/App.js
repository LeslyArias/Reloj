import "./App.css";

import { ReactComponent as ClockIcon } from "./icons/clock.svg";
import { ReactComponent as CalenderIcon } from "./icons/calendar.svg";
import { useState, useEffect } from "react";

function App() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="App">
      <CalenderIcon />
      <p>date</p>{" "}
      {dateState.toLocaleDateString("en-MX", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
      <ClockIcon />
      <br />
      <p>tiempo</p>
      {dateState.toLocaleString("en-MX", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </div>
  );
}

export default App;
