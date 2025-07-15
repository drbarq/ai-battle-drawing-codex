import Link from 'next/link';
import { usePlants } from '../context/PlantContext';
import PlantCard from '../components/PlantCard';

export default function Home() {
  const { plants } = usePlants();
  return (
    <>
      <h1>My Plants</h1>
      <Link href="/add">
        <button>Add New Plant</button>
      </Link>
      {plants.length === 0 ? (
        <p>No plants yet. Add one to get started!</p>
      ) : (
        plants.map((p) => <PlantCard key={p.id} plant={p} />)
      )}
    </>
  );
}
