import React from 'react';
import { Header } from 'semantic-ui-react';
import { DestinationConsumer } from '../../providers/DestProvider';
const Destination = ({ destination }) => {
  const toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }
  
  
  return(
    <>
      Name: {destination.name}<br />
      Notes: {destination.notes}<br />
      Requirements: {destination.reqs}<br />
    </>
  )
  }


const ConnectedDestination = (props) => {
  return(
  <DestinationConsumer>
     {
      
      value => (
        <Destination {...props} {...value} />
      )
    }
  </DestinationConsumer>
  )}

export default ConnectedDestination;