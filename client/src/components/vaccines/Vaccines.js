import { useEffect } from 'react';

import VaccineForm from './VaccineForm';
const Vaccines = ({ destinationId, match}) => {
  
  

  useEffect( () => {
    getAllVaccines(destinationId)
  }, [])

  return(
    <>
      <h1>Vaccines page</h1>
      <VaccineForm />
    </>
  )
}
export default Vaccines;



