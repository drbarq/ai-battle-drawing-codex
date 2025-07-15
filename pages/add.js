import { useState } from 'react';
import { useRouter } from 'next/router';
import { usePlants } from '../context/PlantContext';

export default function AddPlant() {
  const { addPlant } = usePlants();
  const router = useRouter();
  const [name, setName] = useState('');
  const [interval, setInterval] = useState(7);

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = addPlant(name, interval);
    router.push({ pathname: '/new-confirmation', query: { id: newPlant.id } });
  }

  return (
    <>
      <h1>Add New Plant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Watering interval (days):
          <input
            type="number"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            min="1"
            required
          />
        </label>
        <button type="submit">Add Plant</button>
      </form>
    </>
  );
}
