import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
//import ConnectedDestinationForm from './DestinationForm';
import DestinationForm from './DestinationForm';
import Destination from  './Destination';
import DestinationContext from '../../providers/DestProvider';
import DestinationConsumer from '../../providers/DestProvider';
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
      <><h1> TEst </h1>
     { destinations.map(d => <>
        <Destination destination={d} />
        <DestinationForm /> </>
      )}</>)
      
  
  }
  return( <>
  <br /><br /><br /><br /><h1>Test</h1>
  {renderDestination()}
  </>

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