import { useEffect } from 'react';
import { VaccineConsumer } from '../../providers/VaccineProvider';
import { Container, Divider, Header, Icon} from 'semantic-ui-react';
// import { Headers } from './styledComponents';

import VaccineForm from './VaccineForm';
const Vaccines = ({ destinationId, getAllVaccines}) => {
  
  useEffect( () => {
    getAllVaccines(destinationId)
  }, [])

  return(
    <Container textAlign='center'>
    <Divider hidden />
    <Divider horizontal>
      <Header>
        <Icon name='syringe' />
          Add a new Vaccine
      </Header>
    </Divider>
    <VaccineForm />
    </Container>
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



