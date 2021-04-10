import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const VaccineContext = React.createContext();
export const VaccineConsumer = VaccineContext.Consumer;

const VaccineProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState([]);

  const getAllVaccines = (destinationId) => {
    axios.get(`/api/destinations/${destinationId}/vaccines`)
    .then( res => setVaccines(res.data))
    .catch( err => console.log(err))
  }

  const addVaccine = (destinationId, vaccine) => {
    axios.post(`/api/destinations/${destinationId}/vaccines`, { vaccine })
      .then( res => {
        setVaccines([...vaccines, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateVaccine = (destinationId, id, vaccine) => {
    axios.put(`/api/destinations/${destinationId}/vaccines/${id}`, { vaccine })
      .then(res => {
        const updatedVaccines = vaccines.map( v => {
          if (v.id === id) {
            return res.data
          }
          return v
        })
        setVaccines(updatedVaccines)
      })
  }

  const deleteVaccine = (destinationId, id) => {
    axios.delete(`/api/destination/${destinationId}/vaccines/${id}`)
      .then( res => {
        setVaccines(vaccines.filter(v => v.id !== id))
      })
  }

  return (
    <VaccineContext.Provider value={{
      vaccines,
      addVaccine: addVaccine,
      updateVaccine: updateVaccine,
      deleteVaccine: deleteVaccine,
      getAllVaccines: getAllVaccines
    }}>
      { children }
    </VaccineContext.Provider>
  )

}


export default VaccineProvider;