import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const DestinationContext = React.createContext();
export const DestinationConsumer = DestinationContext.Consumer;
const DestProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([])
  
  const getAllDestinations = () => {
    axios.get('/api/destinations')
      .then( res => {setDestinations(res.data)
      
      console.log("destinations", res.data)
      })
      .catch( err => console.log(err))
  }
  
  // useEffect( () => {
  //   axios.get('/api/destinations')
  //     .then( res => {setDestinations(res.data)
      
  //     console.log("destinations", res.data)
  //     })
  //     .catch( err => console.log(err))
  // }, [])
  const addDestination = (destination) => {
    axios.post('/api/destinations', { destination })
      .then( res => {
        setDestinations([...destinations, res.data])
      })
      .catch( err => console.log(err))
  }
  const updateDestination = (id, destination) => {
    axios.put(`/api/destinations/${id}`, { destination })
      .then(res => {
        const updatedDestinations = destinations.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        setDestinations(updatedDestinations)
      })
  }
  const deleteDestination = (id) => {
    axios.delete(`/api/destinations/${id}`)
      .then( res => {
        setDestinations(destinations.filter(d => d.id !== id))
      })
  }
  return(
    <DestinationContext.Provider value={{
      destinations,
      addDestination: addDestination,
      updateDestination: updateDestination,
      deleteDestination: deleteDestination,
      getAllDestinations: getAllDestinations
    }}>
      { children }
    </DestinationContext.Provider>
  )
}
export default DestProvider;