import { useState } from 'react'
import './App.css'
import { WorldClockForm } from './components/WorldClockForm.tsx'
import { WorldClockList } from './components/WorldClockList.tsx'

interface ClockItem {
  name: string;
  timeZone: number;
  id: number;
}

function App() {
  const [clocks, setClocks] = useState<ClockItem[]>([]);

  function setTimeOptions(name: string, timeZone: number) {
    setClocks((prev) => [...prev, { name, timeZone, id: Date.now() }]);
  }

  function removeClock(id: number) {
    setClocks((prev) => prev.filter(clock => clock.id !== id));
  }

  return (
    <>
      <WorldClockForm onClick={setTimeOptions} />
      <WorldClockList data={clocks} onDelete={removeClock} />
    </>
  );
}

export default App
