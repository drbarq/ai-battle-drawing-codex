import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePlants } from '../context/PlantContext';

export default function Confirmation() {
  const router = useRouter();
  const { id } = router.query;
  const { plants } = usePlants();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (id) {
      const p = plants.find((pl) => pl.id === id);
      setPlant(p || null);
    }
  }, [id, plants]);

  if (!plant) return <p>Loading...</p>;

  return (
    <>
      <h1>Plant Added!</h1>
      <div className="card">
        <h3>{plant.name}</h3>
        <p>Water every {plant.interval} day(s)</p>
      </div>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}
