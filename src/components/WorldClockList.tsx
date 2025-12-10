import { WorldClock } from "./WorldClock.tsx"
import './WorldClockList.css'

export function WorldClockList({ data, onDelete }: { data: { name: string; timeZone: number; id: number }[]; onDelete: (id: number) => void }) {

  return (
    <div className="clock-list">
      {data.map((options) =>
        <WorldClock key={options.id} options={options} onDelete={() => onDelete(options.id)} />
      )}
    </div>
  )
}