import Link from 'next/link';

export default function PlantCard({ plant }) {
  const last = plant.lastWatered
    ? new Date(plant.lastWatered).toLocaleString()
    : 'Never';
  return (
    <div className="card">
      <h3>{plant.name}</h3>
      <p>Water every {plant.interval} day(s)</p>
      <p>Last watered: {last}</p>
      <Link href={`/plants/${plant.id}`}>View details</Link>
    </div>
  );
}
