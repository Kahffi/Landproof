import React, { useState } from 'react'

import LeafletMap from './components/Map'
import MapSearch from './components/MapSearch'

export default function App() {
  const [location, setLocation] = useState([-7.2521, 106.8269568])

  return (
    <div className='bg-black p-5 text-white'>
      <h1>Helloworld</h1>
      <LeafletMap location={location} />
      <MapSearch setLocation={setLocation} />
    </div>
  )
}
