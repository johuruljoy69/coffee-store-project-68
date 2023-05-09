import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './componenets/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <div className='container mx-auto mt-10 mb-10'>
        <h1 className='text-5xl text-purple-700 font-bold' >The Hot Coffee House: {coffees.length} </h1>
        <div className='grid md:grid-cols-2 gap-5 mt-10'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
