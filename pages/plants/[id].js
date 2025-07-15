import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePlants } from '../../context/PlantContext';

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { plants } = usePlants();

  const plant = plants.find((p) => p.id === id);
  if (!plant) return <p>Loading...</p>;

  const last = plant.lastWatered
    ? new Date(plant.lastWatered).toLocaleString()
    : 'Never';

  return (
    <>
      <h1>{plant.name}</h1>
      <p>Water every {plant.interval} day(s)</p>
      <p>Last watered: {last}</p>
      <Link href={`/plants/${plant.id}/water`}>
        <button>Water Now</button>
      </Link>
      <Link href="/" style={{ marginLeft: '1rem' }}>
        Back to Home
      </Link>
    </>
  );
}
