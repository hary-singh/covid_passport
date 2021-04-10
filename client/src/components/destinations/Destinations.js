import React, { useState, useEffect } from 'react';
import DestinationForm from './DestinationForm';
const Destinations = () => {
  const [destinations, setDestinations] = useState({})
  return( 
  <> 
    
    <DestinationForm />
  </>
)}
export default Destinations;