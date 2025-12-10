import { useEffect, useState } from "react";
import "./WorldClock.css";

export function WorldClock({
  options,
  onDelete,
}: {
  options: { name: string; timeZone: number };
  onDelete: () => void;
}) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cityTime = new Date(utc + options.timeZone * 3600000);
      setTime(cityTime);
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [options.timeZone]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="world-clock">
      <div className="clock-name">{options.name}</div>
      <div className="clock-container">
        <div className="clock">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourAngle}deg)` }}
          ></div>
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
          ></div>
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondAngle}deg)` }}
          ></div>
        </div>
      </div>
      <button className="clock-delete-btn" onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
}
