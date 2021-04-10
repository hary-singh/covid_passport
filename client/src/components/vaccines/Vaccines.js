import { useEffect } from 'react';
import { VaccineConsumer } from '../../providers/VaccineProvider';

import VaccineForm from './VaccineForm';
const Vaccines = ({ destinationId, getAllVaccines}) => {
  
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

const ConnectedVaccines = (props ) => (
  
  <VaccineConsumer>
    { 
      value => (
        <Vaccines {...props} {...value} />
      )
    }
  </VaccineConsumer>
)
export default ConnectedVaccines;



