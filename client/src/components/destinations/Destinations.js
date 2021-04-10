import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
//import ConnectedDestinationForm from './DestinationForm';
import DestinationForm from './DestinationForm';
import Destination from  './Destination';
import DestinationContext from '../../providers/DestProvider';
import DestinationConsumer from '../../providers/DestProvider';
import { Container, Divider, Header, Icon } from 'semantic-ui-react';
const Destinations = () => {

  const [destinations, setDestinations] = useState([])
  useEffect (( ) => {
    getAllDestinations()
  },[])
   const getAllDestinations = () => {
    axios.get('/api/destinations')
      .then( res => {setDestinations(res.data)
      
      console.log("destinations", res.data)
      })
      .catch( err => console.log(err))
  }
  const renderDestination = () =>{
   
    return(
      <>
      
     { destinations.map(d => <>
        <Destination destination={d} />
        <Divider hidden />
        
         </>
      )}</>)
      
  
  }
  return( <Container textAlign='center'>
    <Divider hidden />
    <Divider horizontal>
                <Header>
                  <Icon name='paper plane' />
                    View Existing Destinations
                </Header>
              </Divider>
  {renderDestination()}
  <Divider horizontal>
                <Header>
                  <Icon name='paper plane' />
                    Create a new Destination
                </Header>
              </Divider>
  <DestinationForm />
  </Container>
)}
export default Destinations;
// const ConnectedDestinations = (props) =>(
//   <DestinationConsumer>
//    { value =>
//       <Destin {...props} {...value} /> 
//    }
//   </DestinationConsumer>

// )

// const Destin = ({destinations, getAllDestinations}) => (
//   <>
//   <h1>Testing</h1>
//   {getAllDestinations()}
//   </>
// )
// export default ConnectedDestinations;