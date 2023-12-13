/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import BeerCard from './BeerCard';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  const [beer, setBeer] = useState([]);
  
  // fetching beer data from api

  useEffect(()=>{
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => setBeer(data))
  },[])

  // searching beer
  const handleBeerSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputData = form.search.value.toLowerCase();
    const filteredBeer = beer.filter(item => {
      const beerName = item.name.toLowerCase();
      return beerName.includes(inputData);
    });
  
    setBeer(filteredBeer);
  };

  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar></Navbar>
      </div>
      <div className='max-w-[90%] mx-auto'>
      <div className='text-center mt-10'>
        <h1 className='font-bold text-4xl'>Search Your <span className='text-red-600'>Beer</span></h1>
      </div>
      {/* search input section */}
      <div>
        <form onSubmit={handleBeerSearch}>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-[75%] mx-auto mt-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input name='search' type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search with beer name" required/>
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

      </div>
      <div>

      </div>
      <div >
        {
          beer.length === 0 ?
          <div className='text-center'>
              <h1 className=' text-gray-500 mt-14 font-semibold'>No results found</h1>
          </div>
          :
          <div className='mt-10 grid grid-cols-4 gap-5'>
           {
             beer.map(beer => <BeerCard key={beer.id} beer={beer}></BeerCard>)
           }
          </div>
        }
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App
