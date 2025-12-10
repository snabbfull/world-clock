import { useState } from "react";
import './WorldClockForm.css'

interface Props {
  onClick: (name: string, timeZone: number) => void;
}

export function WorldClockForm({ onClick }: Props) {
  const [inputName, setInputName] = useState("");
  const [inputTimeZone, setInputTimeZone] = useState<number>(0);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Обновляем состояние значением из инпута clock-name-text
    setInputName(event.target.value);
  };

  const handleChangeTimeZone = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Обновляем состояние значением из инпута time-zone-number
    setInputTimeZone(Number(event.target.value));
  };

  return (
    <div className="clock-form">
      <div className="clock-name-container">
        <span className="clock-name">Название</span>
        <input
          type="text"
          className="clock-name-text"
          placeholder="Название города"
          onChange={handleChangeName}
        />
      </div>
      <div className="time-zone-container">
        <span className="time-zone">Временная зона</span>
        <input
          type="number"
          className="time-zone-number"
          placeholder="Временная зона"
          onChange={handleChangeTimeZone}
        />
      </div>
      <button
        type="button"
        className="clock-add-btn"
        onClick={() => onClick(inputName, inputTimeZone)}
      >
        Добавить
      </button>
    </div>
  );
}