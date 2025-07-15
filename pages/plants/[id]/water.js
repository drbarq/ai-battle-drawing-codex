import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePlants } from '../../../context/PlantContext';

export default function WaterPlant() {
  const router = useRouter();
  const { id } = router.query;
  const { plants, waterPlant } = usePlants();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (id && !done) {
      waterPlant(id);
      setDone(true);
    }
  }, [id, waterPlant, done]);

  const plant = plants.find((p) => p.id === id);
  const time = new Date().toLocaleString();

  if (!plant) return <p>Loading...</p>;

  return (
    <>
      <h1>{plant.name} Watered!</h1>
      <div className="card">
        <p>Watered at: {time}</p>
      </div>
      <Link href={`/plants/${plant.id}`}>
        <button>Back to Details</button>
      </Link>
    </>
  );
}
